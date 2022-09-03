<template>
    <div>
        <div>
            <svg id="sankeyview">
            </svg>
        </div>
        <div id="seq_view_left">
            <svg
                id="seq_view_svg"
                width="1290px"
                height="600px"
                fill="none"
            ></svg>
        </div>
        <div id="glyph_view"></div>
        <span id="type">
            <input
                id="typeinput"
                v-model="customizedhero"
                type="text"
                placeholder="please select"
                list="typelist"
            />
            <datalist id="typelist">
                <option>上官婉儿</option>
                <option>不知火舞</option>
                <option>东皇太一</option>
                <option>云中君</option>
                <option>云缨</option>
                <option>亚瑟</option>
                <option>伽罗</option>
                <option>元歌</option>
                <option>公孙离</option>
                <option>兰陵王</option>
                <option>关羽</option>
                <option>典韦</option>
                <option>刘备</option>
                <option>刘禅</option>
                <option>刘邦</option>
                <option>司空震</option>
                <option>司马懿</option>
                <option>后羿</option>
                <option>吕布</option>
                <option>周瑜</option>
                <option>哪吒</option>
                <option>夏侯惇</option>
                <option>夏洛特</option>
                <option>大乔</option>
                <option>太乙真人</option>
                <option>女娲</option>
                <option>妲己</option>
                <option>姜子牙</option>
                <option>娜可露露</option>
                <option>嫦娥</option>
                <option>嬴政</option>
                <option>孙尚香</option>
                <option>孙悟空</option>
                <option>孙策</option>
                <option>孙膑</option>
                <option>安琪拉</option>
                <option>宫本武藏</option>
                <option>小乔</option>
                <option>干将莫邪</option>
                <option>庄周</option>
                <option>廉颇</option>
                <option>弈星</option>
                <option>张良</option>
                <option>张飞</option>
                <option>戈娅</option>
                <option>成吉思汗</option>
                <option>扁鹊</option>
                <option>明世隐</option>
                <option>暃</option>
                <option>曜</option>
                <option>曹操</option>
                <option>李信</option>
                <option>李元芳</option>
                <option>李白</option>
                <option>杨戬</option>
                <option>杨玉环</option>
                <option>桑启</option>
                <option>梦奇</option>
                <option>橘右京</option>
                <option>武则天</option>
                <option>沈梦溪</option>
                <option>澜</option>
                <option>牛魔</option>
                <option>狂铁</option>
                <option>狄仁杰</option>
                <option>猪八戒</option>
                <option>王昭君</option>
                <option>瑶</option>
                <option>甄姬</option>
                <option>白起</option>
                <option>百里守约</option>
                <option>百里玄策</option>
                <option>盘古</option>
                <option>盾山</option>
                <option>程咬金</option>
                <option>米莱狄</option>
                <option>老夫子</option>
                <option>艾琳</option>
                <option>芈月</option>
                <option>花木兰</option>
                <option>苏烈</option>
                <option>蒙恬</option>
                <option>蒙犽</option>
                <option>蔡文姬</option>
                <option>虞姬</option>
                <option>裴擒虎</option>
                <option>西施</option>
                <option>诸葛亮</option>
                <option>貂蝉</option>
                <option>赵云</option>
                <option>达摩</option>
                <option>金蝉</option>
                <option>钟无艳</option>
                <option>钟馗</option>
                <option>铠</option>
                <option>镜</option>
                <option>阿古朵</option>
                <option>阿轲</option>
                <option>雅典娜</option>
                <option>露娜</option>
                <option>韩信</option>
                <option>项羽</option>
                <option>马可波罗</option>
                <option>马超</option>
                <option>高渐离</option>
                <option>鬼谷子</option>
                <option>鲁班七号</option>
                <option>鲁班大师</option>
                <option>黄忠</option>
                <option>墨子</option>
            </datalist>
        </span>
        <div id="winrateview"></div>
    </div>
</template>


<script>
import all_glyph_data from "../assets/json/glyph_view_output_2022.json";
import requesthelp from "common/utils/request.js";
import $ from "jquery";
export default {
    props: {
        change: { type: Boolean, default: true },
        branch: { type: String, default: "1" },
        preview: { type: String, default: "4" },
        side: { type: String, default: "Blue" },
        bon: { type: String, default: "3" },
        team1:{ type: String, default: "" },
        team2:{ type: String, default: "" },
    },
    setup() {},
    data() {
        return {
            sequence_view_data: {},
            customizedhero: "",
            selectednode: 0,
            transx: -10,
            transy: 0,
            scale: 1,
            blue_team_player: [],
            red_team_player: [],
        };
    },
    watch: {
        customizedhero(val) {
            console.log(val);
            this.branchupdate(val, this.selectednode);
        },
        bon(val) {
            // this.sequence_view_data = await requesthelp.axiosGet('/getSequenceData');
            this.loaddata();
        },
        side(val) {
            this.loaddata();
        },
        preview(val) {
            this.loaddata();
        },
        branch(val) {
            this.loaddata();
        },
        change(val) {
            this.loaddata();
        },
        async team1(val){
            this.blue_team_player:[]
        },

    },
    mounted() {
        // render seq_view
        this.loaddata();
        // this.render_seq_left_veiw();
        this.render_sankey();

    },
    methods: {
        async render_sankey(node){
            var data=[
                        {"source":"坦然","target":"蒙恬","value":17,"type":"win","sourcealready":0,"targetalready":0},
                        {"source":"坦然","target":"蒙恬","value":10,"type":"lose","sourcealready":17,"targetalready":17},
                        {"source":"花海","target":"宫本武藏","value":14,"type":"win","sourcealready":0,"targetalready":0},
                        {"source":"花海","target":"宫本武藏","value":6,"type":"lose","sourcealready":14,"targetalready":14},
                        {"source":"花海","target":"澜","value":10,"type":"win","sourcealready":20,"targetalready":0},
                        {"source":"花海","target":"澜","value":2,"type":"lose","sourcealready":30,"targetalready":10},
                        {"source":"清融","target":"西施","value":24,"type":"win","sourcealready":0,"targetalready":0},
                        {"source":"清融","target":"西施","value":6,"type":"lose","sourcealready":24,"targetalready":24},
                        {"source":"星痕","target":"蒙恬","value":7,"type":"win","sourcealready":0,"targetalready":27},
                        {"source":"星痕","target":"蒙恬","value":4,"type":"lose","sourcealready":7,"targetalready":34},
                        {"source":"无畏","target":"宫本武藏","value":9,"type":"win","sourcealready":0,"targetalready":20},
                        {"source":"无畏","target":"宫本武藏","value":3,"type":"lose","sourcealready":9,"targetalready":29},
                        {"source":"无畏","target":"澜","value":13,"type":"win","sourcealready":12,"targetalready":12},
                        {"source":"无畏","target":"澜","value":4,"type":"lose","sourcealready":25,"targetalready":25},
                        {"source":"紫幻","target":"西施","value":12,"type":"win","sourcealready":0,"targetalready":30},
                        {"source":"紫幻","target":"西施","value":6,"type":"lose","sourcealready":12,"targetalready":42},
                    ];

            var margin = {top: 100, right: 50, bottom: 30, left: 40},
                width = 1430 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var name_width = 130,
                name_height = 50;
                
            var svg = d3.select("#sankeyview");

            var playernode = ['坦然', '花海', '清融', '易峥', '子阳', '星痕', '无畏', '紫幻', '久酷', '明锅'];
            var heronode = ['蒙恬','澜','宫本武藏','西施'];

            //defaults
            var heronode_pad = 60;
            var heronode_y = 250;
            var hero_image = 60;

            //scale
            var rect_x = d3.scaleBand()
                            .range([0,width])
                            .domain(playernode);  
            var pathcolor = d3.scaleOrdinal()
                            .range(["#E6F2CD","#FFBFBF"])
                            .domain(["win","lose"]);
            var rectcolor = d3.scaleOrdinal()
                            .range(["#BFE5FF","#FCC6C6"])
                            .domain(["blue","red"]);
            var pathwidth = d3.scaleLinear()
                            .range([0, hero_image-10])
                            .domain([0, d3.max(data, function(d) { return d.targetalready;})]);
            var hero_x = d3.scaleBand()
                            .range([heronode_pad,heronode.length*(heronode_pad+hero_image)+heronode_pad/2])
                            .domain(heronode);

            
            //main route rect
            svg.append('g')
                .append('rect')
                .attr("width", heronode.length*(heronode_pad+hero_image)-heronode_pad/2)
                .attr("height",hero_image*1.4)
                .attr("x", heronode_pad/2)
                .attr("y", heronode_y-hero_image/2-12)
                .attr("rx",20)
                .attr("fill","#B0A1C8")
                .attr("opacity",0.35);

            //player
            svg.append('g')
                .selectAll('playerrect')
                .data(playernode)
                .enter()
                .append('rect')
                .attr("width",name_width)
                .attr("height",name_height)
                .attr("x", function(d){return rect_x(d);})
                .attr("fill",function(d,i){
                    if (i<=4){
                        return rectcolor("blue");
                    }else{
                        return rectcolor("red");
                    }
                })
                .attr("opacity",0.5)
                .on("mouseover",function(d){
                    d3.selectAll("."+d+"path").attr("stroke-opacity",1);
                    d3.selectAll("."+d+"text").attr("opacity",1);
                })
                .on("mouseout",function(d){
                    d3.selectAll("."+d+"path").attr("stroke-opacity",0.6);
                    d3.selectAll("."+d+"text").attr("opacity",0);
                });
            //player text
            svg.append('g')
                .selectAll('text')
                .data(playernode)
                .enter()
                .append('text')
                .attr("x", function(d){return rect_x(d)+name_width/2-20;})
                .attr("y",name_height/2+5)
                .text(function(d){return d;})
                .attr("font-size","20px");
            
            // hero images
            svg.append('g')
                .selectAll('herorect')
                .data(heronode)
                .enter()
                .append('rect')
                .attr("width",hero_image)
                .attr("height",hero_image)
                .attr("x", function(d){return hero_x(d);})
                .attr("y", heronode_y-hero_image/2)
                .attr("fill",function(d){
                    return 'url(#p'+d+')';
                })
                .on("mouseover",function(d){
                    d3.selectAll("."+d+"path").attr("stroke-opacity",1);
                    d3.selectAll("."+d+"text").attr("opacity",1);
                })
                .on("mouseout",function(d){
                    d3.selectAll("."+d+"path").attr("stroke-opacity",0.6);
                    d3.selectAll("."+d+"text").attr("opacity",0);
                });
                
            //path
            svg.append('g')
                .selectAll('path')
                .data(data)
                .enter()
                .append('path')
                .attr("stroke-width",function(d){return pathwidth(d.value);})
                .attr("stroke",function(d){return pathcolor(d.type);})
                .attr("fill",'none')
                .attr("stroke-opacity",0.6)
                .attr("transform",function(d){return "translate("+pathwidth(d.value)/2+",0)";})
                .attr("class",function(d){return d.source+"path" + " " + d.target + "path";})
                .attr("d", function (d,i) {
                    return (
                        "M" +
                        (rect_x(d.source) + pathwidth(d.sourcealready)+rect_x.bandwidth()/2) +
                        "," +
                        name_height +
                        "C" +
                        (rect_x(d.source)+ pathwidth(d.sourcealready)+rect_x.bandwidth()/2)+
                        "," +
                        150+
                        " " +
                        (hero_x(d.target)+ pathwidth(d.targetalready)) +
                        "," +
                        150 +
                        " " +
                        (hero_x(d.target)+ pathwidth(d.targetalready)) +
                        "," +
                        (heronode_y-hero_image/2)
                    );
                });

            //path.text
            svg.append('g')
                .selectAll('path')
                .data(data)
                .enter()
                .append('text')
                .attr("x", function(d){return ((rect_x(d.source) + pathwidth(d.sourcealready)+rect_x.bandwidth()/2));})
                .attr("y",function(d){return name_height +15;})
                .text(function(d){return d.value;})
                .attr("font-size","14px")
                .attr("opacity",0)
                .attr("class",function(d){return d.source+"text" + " " + d.target + "text";});
            
            svg.append('g')
                .selectAll('path')
                .data(data)
                .enter()
                .append('text')
                .attr("x", function(d){return (hero_x(d.target)+ pathwidth(d.targetalready));})
                .attr("y",function(d){return heronode_y-hero_image/2;})
                .text(function(d){return d.value;})
                .attr("font-size","14px")
                .attr("opacity",0)
                .attr("class",function(d){return d.source+"text" + " " + d.target + "text";});


           },

        async drawwinrate(node) {
            // console.log(node);
            var lineupdata = await requesthelp.axiosGet("/getLineup", {
                node: node,
            });
            console.log(lineupdata);
            // var lineupdata = {
            //     "lineup_blue": [
            //         "镜",
            //         "铠",
            //     ],
            //     "lineup_red": [
            //         "橘右京",
            //         "猪八戒",
            //     ],
            //     "winrate": [
            //         0.45,
            //         0.72,
            //         0.69
            //     ]
            // };
            var blue_hero = lineupdata["lineup_blue"];
            var red_hero = lineupdata["lineup_red"];
            var winrate = lineupdata["winrate"];

            var l1 = blue_hero.length;
            var l2 = red_hero.length;

            for (var i = l1; i < 5; i++) {
                blue_hero[i] = "none";
            }
            for (var j = l2; j < 5; j++) {
                red_hero[j] = "none";
            }

            var svg = d3.select("#winrateview").append("svg");
            var margin = { top: 50, right: 10, bottom: 10, left: 10 },
                width = 420 - margin.left - margin.right,
                height = 180 - margin.top - margin.bottom;
            svg.attr("width", width).attr("height", height);

            svg.append("rect")
                .attr("fill", "#46A4E4")
                .attr("opacity", 0.2)
                .attr("height", 50)
                .attr("width", 240)
                .attr("rx", 10)
                .attr("transform", "translate(10,10)");

            svg.append("rect")
                .attr("fill", "#F76060")
                .attr("opacity", 0.2)
                .attr("height", 50)
                .attr("width", 240)
                .attr("rx", 10)
                .attr("transform", "translate(10,65)");

            svg.selectAll("myrect")
                .data(red_hero)
                .enter()
                .append("rect")
                .attr("fill", function (d, i) {
                    if (red_hero[i] != "none") {
                        return "url(#p" + red_hero[i] + ")";
                    } else {
                        return "#999999";
                    }
                })
                .attr("width", 40)
                .attr("height", 40)
                .attr("transform", "translate(20,70)")
                .attr("x", function (d, i) {
                    // console.log(d);
                    return i * 45;
                });

            svg.selectAll("myrect")
                .data(blue_hero)
                .enter()
                .append("rect")
                .attr("fill", function (d, i) {
                    if (blue_hero[i] != "none") {
                        return "url(#p" + blue_hero[i] + ")";
                    } else {
                        return "#999999";
                    }
                })
                .attr("width", 40)
                .attr("height", 40)
                .attr("transform", "translate(20,15)")
                .attr("x", function (d, i) {
                    // console.log(d);
                    return i * 45;
                });

            var round_array = [];
            for (i = 0; i < winrate.length; i++) {
                round_array[i] = i;
            }
            var temp_width = 100;
            var x = d3.scaleBand().range([0, temp_width]).domain(round_array);
            var temp_height = 110;
            var y = d3.scaleLinear().range([0, temp_height]).domain([0, 1]);

            svg.selectAll("winrect")
                .data(winrate)
                .enter()
                .append("rect")
                .attr("fill", function (d, i) {
                    if (winrate[i] < 0.5) {
                        return "#E15759";
                    } else {
                        return "#59A14F";
                    }
                })
                .attr("width", x.bandwidth() * 0.8)
                .attr("height", function (d, i) {
                    return y(winrate[i]);
                })
                .attr("transform", "translate(285,0)")
                .attr("x", function (d, i) {
                    // console.log(d);
                    return x(i);
                })
                .attr("y", function (d, i) {
                    return temp_height - y(winrate[i]);
                });

            svg.append("line")
                .attr("transform", "translate(285,0)")
                .attr("x1", -5)
                .attr("y1", 110)
                .attr("x2", 100)
                .attr("y2", 110)
                .attr("stroke", "black")
                .attr("stroke-width", "3px");

            svg.append("line")
                .attr("transform", "translate(285,0)")
                .attr("x1", -5)
                .attr("y1", 55)
                .attr("x2", 100)
                .attr("y2", 55)
                .attr("stroke", "#B35806")
                .attr("stroke-width", "3px")
                .style("stroke-dasharray", "10, 10");
        },
        customize() {
            // this.customizedhero = "";
            var block = document.getElementById("type");
            block.style.display = "block";
            block.style.marginLeft = event.pageX - 680 + "px";
            block.style.marginTop = event.pageY - 30 + "px";
        },
        async branchupdate(hero, node) {
            if (hero != "Customized") {
                this.sequence_view_data = await requesthelp.axiosGet(
                    "/getBranch",
                    {
                        bo_n: this.bon,
                        pre_n: this.preview,
                        br_n: this.branch,
                        t1_side: this.side,
                        node: node,
                        hero: hero,
                    }
                );
                console.log(this.sequence_view_data);
                this.render_seq_left_veiw();
                var block = document.getElementById("type");
                block.style.display = "none";
            } else {
                this.customize();
                this.selectednode = node;
            }
        },
        async loaddata() {
            this.sequence_view_data = await requesthelp.axiosGet(
                "/getSequenceData",
                {
                    bo_n: this.bon,
                    pre_n: this.preview,
                    br_n: this.branch,
                    t1_side: this.side,
                }
            );
            console.log(this.sequence_view_data);
            this.render_seq_left_veiw();
        },
        render_seq_left_veiw() {
            //////////////////////////
            /////////function/////////
            //////////////////////////
            function render_barChart(cur_node_svg, barChartData) {
                // console.log(barChartData);
                var fourth_item = {
                    hero: "Customized",
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
                        .attr("class", "branch_bar")
                        .on("click", function (data) {
                            var block = $("#main_body").css("transform");
                            // console.log(block);

                            // console.log(source_ele_transform);

                            block = str2number(
                                block.split("(")[1].split(")")[0].split(",")
                            );

                            self.scale = block[0];
                            // console.log(source_ele_transform);
                            block = block.splice(4, 2);
                            self.transx = block[0];
                            self.transy = block[1];
                            // console.log(self.transx, self.transy);
                            self.branchupdate(datum.hero, data.node);
                            // console.log(datum);
                        })
                        .attr("height", yScale.bandwidth())
                        .attr("y", yScale(datum.hero))
                        .attr("fill", function () {
                            return purple_color[index];
                        })
                        // .attr('opacity', '0.8')
                        .on("mouseover", function () {
                            mouseover(datum.hero);
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
                percentChartData[0]["top4 Customized"] = 15;
                subgroups.unshift("top4 Customized");

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
                    .attr("class", "branch_bar")
                    .on("click", function (data) {
                        var block = $("#main_body").css("transform");
                        // console.log(block);
                        // console.log(source_ele_transform);

                        block = str2number(
                            block.split("(")[1].split(")")[0].split(",")
                        );

                        self.scale = block[0];

                        // console.log(source_ele_transform);
                        block = block.splice(4, 2);
                        self.transx = block[0];
                        self.transy = block[1];

                        // hero,node
                        var subgroupName = d3
                            .select(this.parentNode)
                            .datum().key;
                        // console.log(subgroupName);
                        subgroupName = subgroupName.substr(5);
                        var node = data.data.group.substr(4);
                        // console.log(data.data.group);
                        // console.log(subgroupName);
                        // console.log(node);
                        self.branchupdate(subgroupName, node);
                        self.render_sankey(node);

                        // console.log(datum);
                    })
                    .attr("x", (d) => xscale(d.data.group))
                    .attr("y", (d) => yscale(d[1]))
                    .attr("height", (d) => yscale(d[0]) - yscale(d[1]))
                    .attr("width", xscale.bandwidth())
                    .on("mouseover", function () {
                        var subgroupName = d3
                            .select(this.parentNode)
                            .datum().key;
                        mouseover(subgroupName);
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

            function mouseover(anytext) {
                tooltip.style("opacity", 1);
                tooltip
                    .html(`${anytext}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            }

            function mouseout() {
                tooltip.style("opacity", 0);
            }

            function main_body_zoomed_func() {
                main_body.attr("transform", d3.event.transform);
            }

            function title_zoomed_func() {
                title_view.attr("transform", d3.event.transform);
            }

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            d3.select("#seq_view_svg_left").remove();
            d3.select(".tooltip").remove();
            var self = this;
            var seq_view_data = this.sequence_view_data;
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
            var passed_stage = seq_view_data.nodes[0].stage - 1;
            var stage_width = 145;

            var main_body_zoomed = d3
                .zoom()
                .scaleExtent([0.561, 10])
                .translateExtent([
                    [10, 0],
                    [2556 + 55 - passed_stage * stage_width, 100000],
                ])
                .on("zoom", main_body_zoomed_func);

            var title_zoomed = d3
                .zoom()
                .scaleExtent([0.561, 10])
                .translateExtent([
                    [10, 0],
                    [2556 + 55 - passed_stage * stage_width, 100000],
                ])
                .on("zoom", title_zoomed_func);

            var seq_view_svg_left = d3
                .select("#seq_view_svg")
                .append("g")
                .attr("id", "seq_view_svg_left")
                .call(title_zoomed)
                .call(main_body_zoomed);
            // .attr(
            //     "transform",
            //     `translate(${self.transx},${self.transy}) scale(${self.scale})`
            // );

            var main_body = seq_view_svg_left
                .append("g")
                .attr("id", "main_body")
                .attr(
                    "transform",
                    `translate(${self.transx},${self.transy}) scale(${self.scale})`
                );
            var title_view = seq_view_svg_left
                .append("g")
                .attr("id", "title_view")
                .attr(
                    "transform",
                    `translate(-${passed_stage * stage_width},0)`
                );
            var link_svg = main_body.append("g").attr("id", "link_svg");
            var node_svg = main_body.append("g").attr("id", "node_svg");

            //////////////////////////
            /////////node/////////////
            //////////////////////////
            // some vars for nodes
            var left_margin = 68;
            var top_margin = 220;
            var line_height = 150; //行宽
            var node_spacing = 145; //节点间距
            var eachPos = seq_view_data.eachPos;
            var node_g = node_svg
                .selectAll(".node")
                .data(seq_view_data.nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("id", (d) => `node${d.node}`)
                .attr("transform", function (d) {
                    // console.log(d);
                    var cur_node_pos = eachPos[d.node];
                    // console.log(cur_node_pos);
                    return `translate(${
                        left_margin + node_spacing * cur_node_pos[1]
                    },${top_margin + line_height * cur_node_pos[0]})`;
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
                .on("mouseover", function (d) {
                    mouseover(d.hero);
                })
                .on("mouseout", mouseout)
                .on("click", function (d) {
                    d3.select("#glyph_view_svg").remove();
                    self.render_glyph_view(d.hero);

                    var block = $("#main_body").css("transform");
                    block = str2number(
                        block.split("(")[1].split(")")[0].split(",")
                    );
                    self.scale = block[0];
                    block = block.splice(4, 2);
                    self.transx = block[0];
                    self.transy = block[1];
                    console.log(d);
                    self.drawwinrate(d.node);
                    self.render_sankey(d.node);
                });

            //////////////////////////
            /////////link/////////////
            //////////////////////////
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
                    var path_source_ele = document.getElementById(
                        `node${each_link.source}`
                    );

                    var path_source_transform =
                        $(path_source_ele).css("transform");
                    // console.log(path_source_ele);

                    path_source_transform = str2number(
                        path_source_transform
                            .split("(")[1]
                            .split(")")[0]
                            .split(",")
                    );
                    path_source_transform = path_source_transform.splice(4, 2);

                    var target_source_ele = document.getElementById(
                        `node${each_link.target}`
                    );
                    var path_target_transform =
                        $(target_source_ele).css("transform");

                    path_target_transform = str2number(
                        path_target_transform
                            .split("(")[1]
                            .split(")")[0]
                            .split(",")
                    );
                    path_target_transform = path_target_transform.splice(4, 2);

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
                .on("mouseover", function () {
                    var score = Number(
                        d3.select(this).attr("id").split("with")[1]
                    ).toFixed(2);
                    // console.log(score, typeof score)
                    var type =
                        d3.select(this).attr("type") == 1
                            ? "recommend"
                            : "predict";
                    mouseover(`${type} score: ${score}`);
                })
                .on("mouseout", mouseout);

            //////////////////////////
            /////////node_chart///////
            //////////////////////////
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
                var title_margin_top = 720;
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
                var phase_color = ["#D9D9D9", "#E8E8E8"];
                var stage_color = ["#C8E4F7", "#FCC6C6"];

                var part_stages = [];
                stages.forEach((ele) => {
                    part_stages = part_stages.concat(ele);
                });

                // some vars
                var phase_height = 40;
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
                            if (index < i) {
                                x += ele;
                            }
                        });
                        return x + title_margin_left;
                    })
                    .attr("y", title_margin_top + stage_height)
                    .style("fill", function (_, i) {
                        return phase_color[i % 2];
                    });

                phase_g_each_g
                    .append("text")
                    .attr("x", (d, i) => d3.select(`#phase${i}`).attr("x"))
                    .attr("y", title_margin_top + stage_height)
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
                    .attr("y", title_margin_top)
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
                    .attr("y", title_margin_top)
                    .style("font-size", "20px")
                    .attr("text-anchor", "middle")
                    .attr("fill", "black")
                    .attr("dx", stage_width / 2)
                    .attr("dy", stage_height / 2 + 7)
                    .html((d) => d.split("_")[1]);
            }

            render_title();
        },
        async render_glyph_view(chosen_hero) {
            //////////////////////////
            /////////input////////////
            //////////////////////////
            var chosen_hero_data = all_glyph_data[chosen_hero];
            console.log(chosen_hero_data);

            var offset_left = 250;
            var offset_top = 135;
            var glyph_view_svg = d3
                .select("#glyph_view")
                .append("svg")
                .attr("id", "glyph_view_svg")
                .attr("width", 400)
                .attr("height", 270);

            //////////////////////////
            /////backgound arc////////
            //////////////////////////
            var background_arc_data = [
                { startAngle: 0, endAngle: 0.5 * Math.PI },
                { startAngle: 0.5 * Math.PI, endAngle: Math.PI },
                { startAngle: 1.5 * Math.PI, endAngle: 2 * Math.PI },
            ];
            var background_arc_color = ["#E6F2CD", "#BFE5FF", "#FFBFBF"];
            var background_arc_outer_r = 106;
            var background_arc_func = d3
                .arc()
                .innerRadius(0)
                .outerRadius(background_arc_outer_r);

            var background_arc_g = glyph_view_svg
                .append("g")
                .attr("id", "background_arc_g");
            background_arc_g
                .selectAll(".background_arc")
                .data(background_arc_data)
                .enter()
                .append("path")
                .attr("class", "background_arc")
                .attr("d", (d) => background_arc_func(d))
                .style("fill", (d, i) => background_arc_color[i])
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .attr("opacity", 0.5);

            //////////////////////////
            ///////////lines//////////
            //////////////////////////
            var line_func = d3
                .line()
                .x((d) => d.x)
                .y((d) => d.y);
            var lines_g = glyph_view_svg.append("g").attr("id", "lines_g");
            var line_color = ["#FFBFBF", "#BFE5FF"];
            var line_length = 124;
            lines_g
                .selectAll(".lines")
                .data([0, 90, 180, 270])
                .enter()
                .append("path")
                .attr(
                    "d",
                    line_func([
                        { x: 0, y: 0 },
                        { x: line_length, y: 0 },
                    ])
                )
                .style("stroke", (d, i) => {
                    if (i == 0 || i == 1) {
                        return line_color[0];
                    } else {
                        return line_color[1];
                    }
                })
                .style("stroke-width", 2)
                .style("fill", "none")
                .attr(
                    "transform",
                    (d) =>
                        `translate(${offset_left},${offset_top}) rotate(${d})`
                );
            // .attr('opacity', .5)

            //////////////////////////
            ////////cur_hero//////////
            //////////////////////////
            var cur_hero_r = 53;
            glyph_view_svg
                .append("circle")
                .attr("id", "cur_hero")
                .style("fill", `url(#p${chosen_hero})`)
                .attr("r", cur_hero_r)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", `translate(${offset_left},${offset_top})`);

            //////////////////////////
            ////////counter_top3//////
            //////////////////////////
            var circle_r = 80;
            var circle_size_amplify = 30;
            glyph_view_svg
                .append("g")
                .attr("id", "counter_top3_g")
                .selectAll(".counter")
                .data(chosen_hero_data["counter_top3"])
                .enter()
                .append("circle")
                .attr("class", "counter")
                .attr("id", (d, i) => `counterTop${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 15 45 75
                    var deg = 30 * i + 15;
                    var x =
                        Math.sin((deg / 180) * Math.PI) * circle_r +
                        offset_left;
                    var y =
                        offset_top - Math.cos((deg / 180) * Math.PI) * circle_r;
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return d[1] * circle_size_amplify;
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                });

            //////////////////////////
            //////countered_top3//////
            //////////////////////////
            glyph_view_svg
                .append("g")
                .attr("id", "countered_top3_g")
                .selectAll(".countered")
                .data(chosen_hero_data["countered_top3"])
                .enter()
                .append("circle")
                .attr("class", "countered")
                .attr("id", (d, i) => `counteredTop${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 75 45 15
                    var deg = -30 * i + 75;
                    var x =
                        offset_left -
                        Math.sin((deg / 180) * Math.PI) * circle_r;
                    var y =
                        offset_top - Math.cos((deg / 180) * Math.PI) * circle_r;
                    // console.log(x, y)
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return Math.abs(d[1] * circle_size_amplify);
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                });

            //////////////////////////
            ////////team_mate/////////
            //////////////////////////
            glyph_view_svg
                .append("g")
                .attr("id", "team_mate_g")
                .selectAll(".team_mate")
                .data(chosen_hero_data["team_mate"])
                .enter()
                .append("circle")
                .attr("class", "team_mate")
                .attr("id", (d, i) => `team_mate${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 15 45 75
                    var deg = 30 * i + 15;
                    var x =
                        offset_left +
                        Math.cos((deg / 180) * Math.PI) * circle_r;
                    var y =
                        offset_top + Math.sin((deg / 180) * Math.PI) * circle_r;
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return Math.abs(d[1] * circle_size_amplify);
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                });

            //////////////////////////
            ////////kda_arc///////////
            //////////////////////////
            var kda_percent_list = chosen_hero_data["kda_percent"].reverse();
            var kda_arc = glyph_view_svg.append("g").attr("id", "kda_arc");
            var arcs_color = ["#D0E6A5", "#F76060", "#FFFFBF"];
            var kda_arc_outer_r = 66;
            var arcs_g_func = d3
                .arc()
                .innerRadius(cur_hero_r)
                .outerRadius(kda_arc_outer_r);
            var start_angle = Math.PI;
            kda_arc
                .selectAll(".kda_arc")
                .data(kda_percent_list)
                .enter()
                .append("path")
                .attr("class", "kda_arc")
                .attr("d", (d) => {
                    var end_angle = start_angle + (Math.PI / 2) * d;
                    // console.log(end_angle)
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    start_angle = end_angle;
                    return arcs_g_func(cur_arc_data);
                })
                .style("fill", (d, i) => arcs_color[i])
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .attr("opacity", 0.5);

            //////////////////////////
            ////////win_ban_pick//////
            //////////////////////////
            var win_ban_pick_data = [
                chosen_hero_data["win_rate"],
                chosen_hero_data["ban_rate"],
                chosen_hero_data["pick_rate"],
            ];
            var win_ban_pick_g = glyph_view_svg
                .append("g")
                .attr("id", "win_ban_pick_g");
            var win_ban_pick_color = ["#BACDFF", "#FFE980", "#FFD8A3"];

            win_ban_pick_g
                .selectAll(".win_ban_pick_arc")
                .data(win_ban_pick_data)
                .enter()
                .append("path")
                .attr("class", "win_ban_pick_arc")
                .attr("d", (d, i) => {
                    var outer_r = 115 - i * 15;
                    var arc_width = 10;
                    var end_angle = Math.PI * 1.5;
                    var start_angle = end_angle - Math.PI * 0.5 * d;
                    console.log((Math.PI / 2) * d);
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    var win_ban_pick_arc_func = d3
                        .arc()
                        .innerRadius(outer_r - arc_width)
                        .outerRadius(outer_r);
                    // console.log(win_ban_pick_arc_func(cur_arc_data))
                    return win_ban_pick_arc_func(cur_arc_data);
                })
                .style("fill", (d, i) => win_ban_pick_color[i])
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .attr("opacity", 0.5);

            win_ban_pick_g
                .selectAll(".win_ban_pick_background_arc")
                .data(win_ban_pick_data)
                .enter()
                .append("path")
                .attr("class", "win_ban_pick_background_arc")
                .attr("d", (d, i) => {
                    var outer_r = 111 - i * 15;
                    var arc_width = 2.5;
                    var end_angle = Math.PI * 1.5;
                    var start_angle = Math.PI;
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    var win_ban_pick_arc_func = d3
                        .arc()
                        .innerRadius(outer_r - arc_width)
                        .outerRadius(outer_r);
                    return win_ban_pick_arc_func(cur_arc_data);
                })
                .style("fill", "#D9D9D9")
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .attr("opacity", 0.5);

            ////////////////////////////////////////////////////
            ///////////////////////legend///////////////////////
            ////////////////////////////////////////////////////
            var glyph_legend_svg = glyph_view_svg
                .append("svg")
                .attr("id", "glyph_legend_svg")
                .attr("width", 200)
                .attr("height", 80);

            var glyph_legend_key = [
                "Counter Top3",
                "Countered Top3",
                "Best Team Mate",
            ];
            var glyph_legend_color = d3
                .scaleOrdinal()
                .domain(glyph_legend_key)
                .range(["#E6F2CD", "#FFBFBF", "#BFE5FF"]);

            var glyph_legend_offset_left = 12;
            var glyph_legend_offset_top = 21;
            glyph_legend_svg
                .selectAll(".legend_dots")
                .data(glyph_legend_key)
                .enter()
                .append("circle")
                .attr("class", "legend_dots")
                .attr("cx", glyph_legend_offset_left)
                .attr("cy", function (d, i) {
                    return glyph_legend_offset_top + i * 25;
                }) // 100 is where the first dot appears. 25 is the distance between dots
                .attr("r", 7)
                .style("fill", (d) => glyph_legend_color(d));

            // Add one dot in the legend for each name.
            glyph_legend_svg
                .selectAll(".legend_text")
                .data(glyph_legend_key)
                .enter()
                .append("text")
                .attr("class", "legend_text")
                .attr("x", glyph_legend_offset_top)
                .attr("y", function (d, i) {
                    return glyph_legend_offset_top + i * 25;
                }) // 100 is where the first dot appears. 25 is the distance between dots
                .style("fill", (d) => glyph_legend_color(d))
                .text((d) => d)
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle")
                .style("font-weight", "bold");
        },
    },
};
</script>

<style>
#seq_view_left {
    position: absolute;
    width: 76%;
    height: 60%;
    left: 0%;
    top:40%;
    border-right: 1px solid #9a9a9a;
}

#seq_view_svg {
    position: absolute;
    top: 5%;
}

#seq_view_svg_left {
    cursor: move;
}

#sankeyview{
    position: absolute;
    width: 76%;
    height: 40%;
    left: 0%;
    top: 5%;
    border-right: 1px solid #9a9a9a;
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

#glyph_view {
    position: absolute;
    width: 23.9%;
    height: 32%;
    border-left: 1px solid #9a9a9a;
    border-top: 1px solid #9a9a9a;
    overflow-x: auto;
    background: white;
    right: 0%;
    top: 26.1%;
    display: block;
}

#type {
    position: absolute;
    display: none;
    margin-left: 200px;
    margin-top: 200px;
    height: 20%;
}

#typeinput {
    height: 30px;
}

#winrateview {
    position: absolute;
    width: 23.9%;
    height: 38.9%;
    border-left: 1px solid #9a9a9a;
    border-top: 1px solid #9a9a9a;
    overflow-x: auto;
    background: white;
    right: 0%;
    top: 58%;
    display: block;
}
</style>
