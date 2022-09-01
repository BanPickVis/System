<template>
    <div>
        <div id="seq_view_left">
            <svg
                id="seq_view_svg"
                width="1460px"
                height="800px"
                fill="none"
            ></svg>
        </div>
    </div>
</template>


<script>
import seq_view_data from "../assets/json/seq_view_output.json";

export default {
    props: {},
    setup() {},
    watch: {
        // select hero
    },
    mounted() {
        // render seq_view
        this.render_seq_veiw();
    },
    methods: {
        render_seq_veiw() {
            // // Color scale used
            var purple_color = ["#542788", "#8073ac", "#b2abd2", "#d8daeb"];
            var orange_color = ["#fdb863", "#e08214", "#b35806", "#d8daeb"];
            // create a tooltip
            var tooltip = d3
                .select("body")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("border-radius", "5px")
                .style("padding", "5px")
                .style("position", "absolute");
            function render_barChart(cur_node_svg, barChartData) {
                // console.log(barChartData)
                var fourth_item = {
                    hero: "请选择",
                    score: 0.3,
                };
                barChartData.push(fourth_item);
                // console.log(barChartData)

                const barChartWidth = 40;
                const barChartHeight = 63;
                var min_score = barChartData[2].score;

                const xScale = d3
                    .scaleLinear()
                    .domain([
                        0,
                        d3.max(barChartData, (datum) => {
                            return (datum.score - min_score * 0.9) * 23;
                        }),
                    ])
                    .range([0, barChartWidth]);

                const yScale = d3
                    .scaleBand()
                    .domain(barChartData.map((datum) => datum.hero))
                    .range([0, barChartHeight])
                    .padding(0);

                barChartData.forEach((datum, index) => {
                    // console.log(datum)
                    // console.log(index)
                    cur_node_svg
                        .append("rect")
                        .attr("width", function () {
                            if (index != 3) {
                                return xScale(
                                    (datum.score - min_score * 0.9) * 10
                                );
                            }
                            return 10;
                        })
                        .attr("height", yScale.bandwidth())
                        .attr("y", yScale(datum.hero))
                        .attr("fill", function () {
                            return purple_color[index];
                        })
                        // .attr('opacity', '0.8')
                        .on("mousemove", function () {
                            mousemove(datum.hero);
                        })
                        .on("mouseout", mouseout);
                });
            }

            function render_percentChart(cur_node_svg, percentChartData) {
                const percent_width = 25,
                    percent_height = 62;
                // console.log(percentChartData[0])

                // List of subgroups = header of the csv files = soil condition here
                var subgroups = Object.keys(percentChartData[0]).slice(1);

                // List of groups = species here = value of the first column called group -> I show them on the X axis
                var groups = d3
                    .map(percentChartData, function (d) {
                        return d.group;
                    })
                    .keys();
                // console.log(groups)

                // Add X axis
                var xscale = d3
                    .scaleBand()
                    .domain(groups)
                    .range([0, percent_width])
                    .padding([0.2]);

                // Add Y axis
                var yscale = d3
                    .scaleLinear()
                    .domain([0, 100])
                    .range([percent_height, 0]);

                // color palette = one color per subgroup
                var percentColor = d3
                    .scaleOrdinal()
                    .domain(subgroups)
                    .range(orange_color);

                // Normalize the data -> sum of each group must be 100!
                percentChartData.forEach(function (d) {
                    // Compute the total
                    var tot = 0;
                    var uname;
                    for (var i in subgroups) {
                        uname = subgroups[i];
                        tot += +d[uname];
                    }
                    // Now normalize
                    for (i in subgroups) {
                        uname = subgroups[i];
                        d[uname] = (d[uname] / tot) * 85;
                    }
                });
                percentChartData[0]["top4 请选择"] = 15;
                subgroups.unshift("top4 请选择");

                //stack the data? --> stack per subgroup
                var stackedData = d3.stack().keys(subgroups)(percentChartData);

                // Show the bars
                cur_node_svg
                    .selectAll("g")
                    // Enter in the stack data = loop key per key = group per group
                    .data(stackedData)
                    .enter()
                    .append("g")
                    .attr("fill", (d) => percentColor(d.key))
                    .selectAll("rect")
                    // enter a second time = loop subgroup per subgroup to add all rectangles
                    .data((d) => d)
                    .enter()
                    .append("rect")
                    .attr("x", (d) => xscale(d.data.group))
                    .attr("y", (d) => yscale(d[1]))
                    .attr("height", (d) => yscale(d[0]) - yscale(d[1]))
                    .attr("width", xscale.bandwidth())
                    .on("mousemove", function () {
                        var subgroupName = d3
                            .select(this.parentNode)
                            .datum().key;
                        mousemove(subgroupName);
                    })
                    .on("mouseout", mouseout);
            }

            function checkTrunk(cur_node, source_node) {
                if (cur_node.hero == source_node.top_heroes[0].hero) {
                    return true;
                }
                return false;
            }

            function str2number(arr) {
                arr.forEach((_, index) => {
                    arr[index] = +arr[index];
                });
                return arr;
            }

            function percentChartDataProcess(cur_node, rawPercentData) {
                rawPercentData.reverse();
                var res = [
                    {
                        group: `node${cur_node}`,
                    },
                ];
                rawPercentData.forEach((each_top, index) => {
                    // console.log(each_top)
                    res[0][`top${3 - index} ${each_top.hero}`] = each_top.score;
                });
                return res;
            }

            function mousemove(anytext) {
                tooltip.style("opacity", 1);
                tooltip
                    .html(`${anytext}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            }

            function mouseout() {
                tooltip.style("opacity", 0);
            }

            // set the dimensions and margins of the seq_view_data
            // var margin = { top: 10, right: 10, bottom: 10, left: 10 };
            // width = 900 - margin.left - margin.right,
            //     height = 900 - margin.top - margin.bottom;

            // var width = 1000 - margin.left - margin.right;
            // var height = 800 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            function seq_zoomed_func() {
                svg.attr("transform", d3.event.transform);
            }

            var seq_zoomed = d3
                .zoom()
                .scaleExtent([0.55, 10])
                .translateExtent([
                    [10, 0],
                    [2556 + 55, 100000],
                ])
                .on("zoom", seq_zoomed_func);

            var svg = d3
                .select("#seq_view_svg")
                .call(seq_zoomed)
                .append("g")
                .attr("id", "seq_view_svg_left");

            var main_body = svg.append("g").attr("id", "main_body");

            // load the data
            // Constructs a new Sankey generator with the default settings.
            var link_svg = main_body.append("g").attr("id", "link_svg");
            var node_svg = main_body.append("g").attr("id", "node_svg");

            // some vars for nodes
            var left_margin = 68;
            var top_margin = 50;
            var line_height = 150; //行宽
            var node_spacing = 145; //节点间距
            var trunk_num_remember = {};

            // draw node
            var node_g = node_svg
                .selectAll(".node")
                .data(seq_view_data.nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("id", (d) => `node${d.node}`)
                .attr("transform", function (d) {
                    // console.log(d)
                    if (d.source == 0) {
                        // root节点
                        var d_base_height = 1;
                        seq_view_data.eachWidth.forEach((eachSource) => {
                            if (
                                eachSource.source != 0 &&
                                eachSource.source < d.node
                            ) {
                                d_base_height += eachSource.width;
                            }
                        });
                        return `translate(${left_margin}, ${
                            line_height * d_base_height + top_margin
                        })`;
                    } else {
                        //非root节点
                        var source_node = seq_view_data.nodes.filter(
                            (x) => x.node == d.source
                        )[0];
                        // console.log(source_node)
                        var source_ele = document.getElementById(
                            `node${d.source}`
                        );
                        // console.log(source_ele);
                        var source_ele_transform = source_ele.transform;
                        // console.log(source_ele_transform);
                        var source_ele_transform_a =
                            source_ele_transform.animVal["0"].matrix;
                        // console.log(source_ele_transform_a);

                        source_ele_transform = [
                            source_ele_transform_a["e"],
                            source_ele_transform_a["f"],
                        ];

                        // source_ele_transform = str2number(
                        //     source_ele_transform
                        //         .split("(")[1]
                        //         .split(")")[0]
                        //         .split(",")
                        // );
                        // console.log(source_ele_transform);

                        if (checkTrunk(d, source_node)) {
                            // 非root但trunk
                            // console.log(`${d.hero} not root is trunk`)
                            trunk_num_remember[d.source] =
                                source_ele_transform[1];
                            return `translate(${
                                left_margin + (d.stage - 1) * node_spacing
                            }, ${source_ele_transform[1]})`;
                        } else {
                            // 非root非trunk
                            // console.log(`${d.hero} not root not trunk`)
                            return `translate(${
                                left_margin + (d.stage - 1) * node_spacing
                            }, ${trunk_num_remember[d.source] + line_height})`;
                        }
                    }
                });

            // add image for the nodes
            node_g
                .append("rect")
                .attr("class", "nodeImage")
                .attr("id", function (d) {
                    return "node" + d.hero;
                })
                .attr("fill", function (d) {
                    return `url(#p${d.hero})`;
                })
                .attr("width", 60)
                .attr("height", 60)
                .attr("x", -30)
                .attr("y", -30);

            // var allheronode = seq_view_data.nodes;
            // console.log(allheronode);
            // var block;
            // for (var node=0;node<allheronode.length;node++){
            //     console.log(allheronode[node]);
            //     block = document.getElementById("node"+allheronode[node].hero);
            //     block.style.fill="url(#p"+allheronode[node].hero+")";
            // }
            // add image-border
            node_g
                .append("rect")
                .attr("class", "imageBorder")
                .attr("x", -30)
                .attr("y", -30)
                .attr("width", 60)
                .attr("height", 60)
                .attr("fill", "transparent")
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .on("mousemove", function (d) {
                    mousemove(d.hero);
                })
                .on("mouseout", mouseout);

            // add links
            var score_amplify = 25;
            link_svg
                .selectAll(".link")
                .data(seq_view_data.links)
                .enter()
                .append("path")
                .attr("class", "link")
                .attr("type", function (d) {
                    var source_node = seq_view_data.nodes.filter(
                        (x) => x.node == d.source
                    )[0];
                    // console.log(source_node)
                    return source_node.next_stage;
                })
                .attr("id", (d) => {
                    return `${d.source}to${d.target}with${d.value}`;
                })
                .attr("d", function (each_link) {
                    // console.log(each_link)
                    // console.log(each_link.source)
                    var path_source_ele = document.getElementById(
                        `node${each_link.source}`
                    );

                    var path_source_transform = path_source_ele.transform;
                    var path_source_transform_a =
                        path_source_transform.animVal["0"].matrix;

                    path_source_transform = [
                        path_source_transform_a["e"],
                        path_source_transform_a["f"],
                    ];

                    // path_source_transform = str2number(
                    //     path_source_transform
                    //         .split("(")[1]
                    //         .split(")")[0]
                    //         .split(",")
                    // );

                    var path_target_ele = document.getElementById(
                        `node${each_link.target}`
                    );

                    var path_target_transform = path_target_ele.transform;
                    var path_target_transform_a =
                        path_target_transform.animVal["0"].matrix;

                    path_target_transform = [
                        path_target_transform_a["e"],
                        path_target_transform_a["f"],
                    ];
                    // var path_target_transform =
                    //     path_target_ele.attr("transform");
                    // path_target_transform = str2number(
                    //     path_target_transform
                    //         .split("(")[1]
                    //         .split(")")[0]
                    //         .split(",")
                    // );

                    return (
                        "M" +
                        path_target_transform[0] +
                        "," +
                        path_target_transform[1] +
                        "C" +
                        (path_source_transform[0] + 50) +
                        "," +
                        path_target_transform[1] +
                        " " +
                        (path_source_transform[0] + 150) +
                        "," +
                        path_source_transform[1] +
                        " " +
                        path_source_transform[0] +
                        "," +
                        path_source_transform[1]
                    );
                })
                .style("stroke-width", (each_link) => each_link.value)
                .style("fill", "none")
                .style("stroke", "#D9D9D9")
                .on("mousemove", function () {
                    var score = Number(
                        d3.select(this).attr("id").split("with")[1]
                    ).toFixed(2);
                    // console.log(score, typeof score)
                    var type =
                        d3.select(this).attr("type") == 1
                            ? "recommend"
                            : "predict";
                    mousemove(`${type} score: ${score}`);
                })
                .on("mouseout", mouseout);

            // node chart
            var nodeChart_svg = node_g
                .append("svg")
                .attr("class", "node-chart")
                .attr("x", 31)
                .attr("y", -31.5);
            seq_view_data.nodes.forEach((each_node) => {
                var cur_node_svg = nodeChart_svg.filter(
                    (datum) => datum.node == each_node.node
                );

                if (each_node.next_stage == 1) {
                    // 当前节点next stage = 1 推荐 紫条
                    render_barChart(cur_node_svg, each_node.top_heroes);
                } else if (each_node.next_stage == 2) {
                    // next stage = 2 预测 橙条
                    // console.log(each_node.top_heroes)
                    cur_node_svg.attr("x", 27).attr("y", -31);
                    render_percentChart(
                        cur_node_svg,
                        percentChartDataProcess(
                            each_node.node,
                            each_node.top_heroes
                        )
                    );
                }
            });

            function render_title() {
                var title_margin_left = 0;
                var title_margin_top = 0;
                var phases = [
                    "BAN PHASE 1",
                    "PICK PHASE 1",
                    "BAN PHASE 2",
                    "PICK PHASE 2",
                ];
                var stages = [
                    ["blue_ban1", "red_ban1", "blue_ban2", "red_ban2"],
                    [
                        "blue_pick1",
                        "red_pick1",
                        "red_pick2",
                        "blue_pick2",
                        "blue_pick3",
                        "red_pick3",
                    ],
                    ["red_ban3", "blue_ban3", "red_ban4", "blue_ban4"],
                    ["red_pick4", "blue_pick4", "blue_pick5", "red_pick5"],
                ];

                var part_stages = [];
                stages.forEach((ele) => {
                    part_stages = part_stages.concat(ele);
                });

                var phase_color = ["#D9D9D9", "#E8E8E8"];
                var stage_color = ["#C8E4F7", "#FCC6C6"];

                var title_view = d3
                    .select("#seq_view_svg_left")
                    .append("g")
                    .attr("id", "title_view");

                // some vars
                var phase_height = 40;
                var stage_width = 145;
                var phase_width = [
                    stage_width * 4,
                    stage_width * 6,
                    stage_width * 4,
                    stage_width * 4,
                ];
                var stage_height = 35;

                // draw phase
                var phase_g = title_view.append("g").attr("id", "phase_g");

                var phase_g_each_g = phase_g
                    .selectAll(".phase_rect")
                    .data(phases)
                    .enter()
                    .append("g");

                phase_g_each_g
                    .append("rect")
                    .attr("class", "phase_rect")
                    .attr("id", (d, i) => `phase${i}`)
                    .attr("width", function (d, i) {
                        return phase_width[i];
                    })
                    .attr("height", phase_height)
                    .attr("x", function (_, i) {
                        var x = 0;
                        phase_width.forEach((ele, index) => {
                            // console.log(ele, index)
                            if (index < i) {
                                x += ele;
                            }
                        });
                        return x + title_margin_left;
                    })
                    .attr("y", title_margin_top)
                    .style("fill", function (_, i) {
                        return phase_color[i % 2];
                    });

                phase_g_each_g
                    .append("text")
                    .attr("x", (d, i) => d3.select(`#phase${i}`).attr("x"))
                    .attr("y", title_margin_top)
                    .style("font-size", "20px")
                    .attr("fill", "black")
                    .attr("text-anchor", "middle")
                    .attr("dx", (d, i) => phase_width[i] / 2)
                    .attr("dy", phase_height / 2 + 7)
                    .html((d) => d);

                // draw stage
                var stage_g = title_view.append("g").attr("id", "stage_g");

                var stage_g_each_g = stage_g
                    .selectAll(".stage_rect")
                    .data(part_stages)
                    .enter()
                    .append("g");

                stage_g_each_g
                    .append("rect")
                    .attr("class", "stage_rect")
                    .attr("width", stage_width)
                    .attr("height", stage_height)
                    .attr("x", function (_, i) {
                        return i * stage_width + title_margin_left;
                    })
                    .attr("y", title_margin_top + phase_height)
                    .style("fill", function (d, i) {
                        // console.log(d)
                        if (d.split("_")[0] == "blue") {
                            return stage_color[0];
                        } else {
                            return stage_color[1];
                        }
                    });

                stage_g_each_g
                    .append("text")
                    .attr("x", (d, i) => i * stage_width + title_margin_left)
                    .attr("y", title_margin_top + phase_height)
                    .style("font-size", "20px")
                    .attr("text-anchor", "middle")
                    .attr("fill", "black")
                    .attr("dx", stage_width / 2)
                    .attr("dy", stage_height / 2 + 7)
                    .html(function (d) {
                        console.log(d.split("_")[1]);
                        return d.split("_")[1];
                    });
            }

            render_title();
        },
    },
};
</script>

<style>
#seq_view_left {
    position: absolute;
    width: 78%;
    height: 100%;
    left: 0%;
    top: 0%;
    border-right: 1px solid #9a9a9a;
}

#seq_view_svg {
    position: absolute;
    top: 5%;
    cursor: move;
}

#seq_view_svg_left {
    position: absolute;
    width: 50%;
    cursor: move;
}

.nodeImage {
    cursor: pointer;
}

.node-chart rect {
    cursor: pointer;
}

.imageBorder {
    cursor: pointer;
}

.link {
    cursor: default;
}
</style>

