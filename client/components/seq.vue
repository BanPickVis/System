<template>
    <div>
        <div id="seq_view_left">
            <svg
                id="seq_header"
                width="1400px"
                height="800px"
                viewBox="0 0 1451 73"
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
            var margin = { top: 10, right: 10, bottom: 10, left: 10 };
            // width = 900 - margin.left - margin.right,
            //     height = 900 - margin.top - margin.bottom;

            var width = 1000 - margin.left - margin.right;
            var height = 800 - margin.top - margin.bottom;
            // console.log(document.getElementById("seq_header"));
            // console.log(document.getElementById("seq_header").style.width);
            // console.log(width, height);

            // append the svg object to the body of the page
            var svg = d3
                .select("#seq_header")
                .call(
                    d3.zoom().on("zoom", function () {
                        svg.attr("transform", d3.event.transform);
                    })
                )
                .append("g")
                .attr("class", "hihihi");

            // load the data
            // Constructs a new Sankey generator with the default settings.
            var link_svg = svg.append("g").attr("id", "link_svg");
            var node_svg = svg.append("g").attr("id", "node_svg");

            // some vars for nodes
            var left_margin = 50;
            var top_margin = 50;
            var line_height = 150; //行宽
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
                                left_margin + (d.stage - 1) * 200
                            }, ${source_ele_transform[1]})`;
                        } else {
                            // 非root非trunk
                            // console.log(`${d.hero} not root not trunk`)
                            return `translate(${
                                left_margin + (d.stage - 1) * 200
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
        },
    },
};
</script>

<style>
#seq_view_left {
    position: absolute;
    width: 75%;
    height: 100%;
    left: 0%;
    top: 0%;
    border-right: 1px solid #9a9a9a;
}

.node-chart rect {
    cursor: pointer;
}
</style>

