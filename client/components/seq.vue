<template>
    <div>
         <span id="warning">
            ⚠️Please select your team side!!
        </span>
        <div>
            <svg id="sankeyview"></svg>
        </div>
        <div id="seq_view">
            <svg id="main_body_svg"></svg>
            <svg id="title_svg"></svg>
            <button id="generate_button" class="depth" type="button" @click="loaddata">
                ↻
            </button>
            <button id="new_button" class="depth" type="button" @click="newnode">
                +
            </button>
        </div>
        <div id="winrateview"></div>
        
        <span id="type">
            <input id="typeinput" v-model="customizedhero" type="text" placeholder="please select" list="typelist" />
            <datalist id="typelist">
                <option>阿古朵</option>
                <option>阿轲</option>
                <option>艾琳</option>
                <option>白起</option>
                <option>安琪拉</option>
                <option>百里守约</option>
                <option>百里玄策</option>
                <option>扁鹊</option>
                <option>不知火舞</option>
                <option>蔡文姬</option>
                <option>曹操</option>
                <option>嫦娥</option>
                <option>成吉思汗</option>
                <option>程咬金</option>
                <option>达摩</option>
                <option>妲己</option>
                <option>大乔</option>
                <option>狄仁杰</option>
                <option>典韦</option>
                <option>貂蝉</option>
                <option>东皇太一</option>
                <option>盾山</option>
                <option>暃</option>
                <option>伽罗</option>
                <option>干将莫邪</option>
                <option>高渐离</option>
                <option>戈娅</option>
                <option>公孙离</option>
                <option>宫本武藏</option>
                <option>关羽</option>
                <option>鬼谷子</option>
                <option>韩信</option>
                <option>后羿</option>
                <option>花木兰</option>
                <option>黄忠</option>
                <option>姜子牙</option>
                <option>金蝉</option>
                <option>镜</option>
                <option>橘右京</option>
                <option>铠</option>
                <option>狂铁</option>
                <option>兰陵王</option>
                <option>澜</option>
                <option>老夫子</option>
                <option>李白</option>
                <option>李信</option>
                <option>李元芳</option>
                <option>廉颇</option>
                <option>刘邦</option>
                <option>刘备</option>
                <option>刘禅</option>
                <option>露娜</option>
                <option>鲁班大师</option>
                <option>鲁班七号</option>
                <option>吕布</option>
                <option>马超</option>
                <option>马可波罗</option>
                <option>蒙恬</option>
                <option>蒙犽</option>
                <option>梦奇</option>
                <option>米莱狄</option>
                <option>芈月</option>
                <option>明世隐</option>
                <option>墨子</option>
                <option>哪吒</option>
                <option>娜可露露</option>
                <option>牛魔</option>
                <option>女娲</option>
                <option>盘古</option>
                <option>裴擒虎</option>
                <option>桑启</option>
                <option>上官婉儿</option>
                <option>沈梦溪</option>
                <option>司空震</option>
                <option>司马懿</option>
                <option>苏烈</option>
                <option>孙膑</option>
                <option>孙策</option>
                <option>孙尚香</option>
                <option>孙悟空</option>
                <option>太乙真人</option>
                <option>王昭君</option>
                <option>武则天</option>
                <option>西施</option>
                <option>夏侯惇</option>
                <option>夏洛特</option>
                <option>项羽</option>
                <option>小乔</option>
                <option>雅典娜</option>
                <option>亚瑟</option>
                <option>杨戬</option>
                <option>杨玉环</option>
                <option>瑶</option>
                <option>曜</option>
                <option>弈星</option>
                <option>虞姬</option>
                <option>嬴政</option>
                <option>元歌</option>
                <option>云缨</option>
                <option>云中君</option>
                <option>张飞</option>
                <option>张良</option>
                <option>赵云</option>
                <option>甄姬</option>
                <option>钟馗</option>
                <option>钟无艳</option>
                <option>周瑜</option>
                <option>诸葛亮</option>
                <option>猪八戒</option>
                <option>庄周</option>
            </datalist>
        </span>
    </div>
</template>


<script>
// import all_glyph_data from "../assets/json/glyph_view_output_2022.json";
import requesthelp from "common/utils/request.js";
import $ from "jquery";
// import Vue from "vue";
// import VueSimpleAlert from "vue-simple-alert";
// Vue.use(VueSimpleAlert);
// import VueBasicAlert from 'vue-basic-alert';
export default {
    // components:{VueBasicAlert},
    props: {
        allroundside: { type: Object, default: () => { } },
        change: { type: Boolean, default: true },
        branch: { type: String, default: "1" },
        preview: { type: String, default: "4" },
        side: { type: String, default: "Blue" },
        bon: { type: String, default: "3" },
        team1: { type: String, default: "武汉eStarPro" },
        team2: { type: String, default: "重庆狼队" },
        round1seq: { type: Object, default: () => { } },
        round2seq: { type: Object, default: () => { } },
        round3seq: { type: Object, default: () => { } },
        round4seq: { type: Object, default: () => { } },
        round5seq: { type: Object, default: () => { } },
        round6seq: { type: Object, default: () => { } },
        curround: {type: Number, default: 1},
    },
    setup() { },
    data() {
        return {
            sequence_view_data: {},
            customizedhero: "",
            selectednode: 0,
            transx: -10,
            transy: 0,
            scale: 1,
            passed_stage: 0,
            stage_width: 145,
            rawdata: {},
        };
    },
    watch: {
        transx() {
            d3.select("#title_view").attr(
                "transform",
                `translate(${this.transx - this.passed_stage * this.stage_width
                },-440)`
            );
        },
        customizedhero(val) {
            // console.log(val);
            var all = ["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "弈星", "嬴政", "虞姬", "李元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳", "customized"];
            for (var i=0;i<all.length;i++){
                if (val==all[i]){
                    var block = document.getElementById("loader");
                    block.style.display = "block";

                    block = document.getElementById("loaderer");
                    block.style.display = "block";
                    this.branchupdate(val, this.selectednode);
                }
            }
        },
    },
    mounted() { },
    methods: {
        newnode() {
            this.selectednode = 0;
            this.customize();
        },
        async render_sankey(node) {
            var margin = { top: 100, right: 50, bottom: 30, left: 40 },
                width = 1430 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var name_width = 130,
                name_height = 50;

            d3.select("#sankeyview").selectAll("*").remove();

            var svg = d3.select("#sankeyview");

            var teamJson = await requesthelp.axiosGet("/loadData2", {
                name: this.team1,
            });
            // console.log(teamJson);
            var teammember1 = teamJson["player"];
            teamJson = await requesthelp.axiosGet("/loadData2", {
                name: this.team2,
            });
            // console.log(teamJson);
            var teammember2 = teamJson["player"];

            var playernode = [];
            for (var i = 0; i < 5; i++) {
                playernode[i] = teammember1[i]["id"];
            }
            for (i = 5; i < 10; i++) {
                playernode[i] = teammember2[i - 5]["id"];
            }

            // var playernode = ['坦然', '花海', '清融', '易峥', '子阳', '星痕', '无畏', '紫幻', '久酷', '明锅'];
            var heross = await requesthelp.axiosGet("/getSequence", {
                node: node,
                r1: JSON.stringify(this.round1seq),
                r2: JSON.stringify(this.round2seq),
                r3: JSON.stringify(this.round3seq),
                r4: JSON.stringify(this.round4seq),
                r5: JSON.stringify(this.round5seq),
                r6: JSON.stringify(this.round6seq),
                rawdata: JSON.stringify(this.rawdata),
            });
            var heronode = heross["sequence"];
            // ['蒙恬','澜','宫本武藏','西施','鲁班大师'];

            var data = await requesthelp.axiosGet("/getSankeyData", {
                players: JSON.stringify(playernode),
                sequence: JSON.stringify(heross),
            });
            // console.log(data);

            //defaults
            var heronode_pad = 80;
            var heronode_y = 250;
            var hero_image = 60;

            //scale
            var rect_x = d3.scaleBand().range([0, width]).domain(playernode);
            var pathcolor = d3
                .scaleOrdinal()
                .range(["#C6E4A5", "#FFBFBF"])
                .domain(["win", "lose"]);
            var rectcolor = d3
                .scaleOrdinal()
                .range(["#9EC6E9", "#FCC6C6"])
                .domain(["blue", "red"]);
            var pathwidth = d3
                .scaleLinear()
                .range([5, hero_image])
                .domain([
                    0,
                    d3.max(data, function (d) {
                        return d.targetalready*2;
                    }),
                ]);
            var hero_x = d3
                .scaleBand()
                .range([
                    heronode_pad,
                    heronode.length * (heronode_pad + hero_image) +
                    heronode_pad / 2,
                ])
                .domain(heronode);

            //main route rect
            svg.append("g")
                .append("rect")
                .attr(
                    "width",
                    heronode.length * (heronode_pad + hero_image) - 60
                )
                .attr("height", hero_image * 1.4)
                .attr("x", heronode_pad / 2 - hero_image / 2 - 5)
                .attr("y", heronode_y - hero_image / 2 - 12)
                .attr("rx", 20)
                .attr("fill", "#B0A1C8")
                .attr("opacity", 0.5);

            //player
            svg.append("g")
                .selectAll("playerrect")
                .data(playernode)
                .enter()
                .append("rect")
                .attr("width", name_width)
                .attr("height", name_height)
                .attr("x", function (d) {
                    return rect_x(d);
                })
                .attr("fill", function (d, i) {
                    if (i <= 4) {
                        return rectcolor("blue");
                    } else {
                        return rectcolor("red");
                    }
                })
                .attr("opacity", 0.5)
                .on("mouseover", function (d) {
                    d3.selectAll("." + d + "path").attr("stroke-opacity", 1);
                    d3.selectAll("." + d + "text").attr("opacity", 1);
                })
                .on("mouseout", function (d) {
                    d3.selectAll("." + d + "path").attr("stroke-opacity", 0.3);
                    d3.selectAll("." + d + "text").attr("opacity", 0);
                });
            //player text
            svg.append("g")
                .selectAll("text")
                .data(playernode)
                .enter()
                .append("text")
                .attr("x", function (d) {
                    return rect_x(d) + name_width / 2 - 30;
                })
                .attr("y", name_height / 2 + 5)
                .text(function (d) {
                    return d;
                })
                .attr("font-size", "20px");

            // hero images
            svg.append("g")
                .selectAll("herorect")
                .data(heronode)
                .enter()
                .append("rect")
                .attr("width", hero_image)
                .attr("height", hero_image)
                .attr("x", function (d) {
                    return hero_x(d) - hero_image;
                })
                .attr("y", heronode_y - hero_image / 2)
                .attr("fill", function (d) {
                    return "url(#p" + d + ")";
                })
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .on("mouseover", function (d) {
                    d3.selectAll("." + d + "path").attr("stroke-opacity", 1);
                    d3.selectAll("." + d + "text").attr("opacity", 1);
                })
                .on("mouseout", function (d) {
                    d3.selectAll("." + d + "path").attr("stroke-opacity", 0.3);
                    d3.selectAll("." + d + "text").attr("opacity", 0);
                });

            //path
            svg.append("g")
                .selectAll("path")
                .data(data)
                .enter()
                .append("path")
                .attr("stroke-width", function (d) {
                    return pathwidth(d.value);
                })
                .attr("stroke", function (d) {
                    return pathcolor(d.type);
                })
                .attr("fill", "none")
                .attr("stroke-opacity", 0.3)
                .attr("transform", function (d) {
                    return "translate(" + (pathwidth(d.value)+ pathwidth(d.sourcealready)) + ",0)";
                })
                .attr("class", function (d) {
                    return d.source + "path" + " " + d.target + "path";
                })
                .attr("d", function (d, i) {
                    return (
                        "M" +
                        (rect_x(d.source) +
                            pathwidth(d.sourcealready) +
                            rect_x.bandwidth() / 2 -
                            name_width / 3) +
                        "," +
                        name_height +
                        "C" +
                        (rect_x(d.source) +
                            pathwidth(d.sourcealready)+
                            rect_x.bandwidth() / 2 -
                            name_width / 3) +
                        "," +
                        150 +
                        " " +
                        (hero_x(d.target) +
                            pathwidth(d.targetalready) -
                            hero_image) +
                        "," +
                        150 +
                        " " +
                        (hero_x(d.target) +
                            pathwidth(d.targetalready)-
                            hero_image) +
                        "," +
                        (heronode_y - hero_image / 2)
                    );
                });

            //path.text
            svg.append("g")
                .selectAll("path")
                .data(data)
                .enter()
                .append("text")
                .attr("transform", function (d) {
                    return "translate(" + (pathwidth(d.value)+ pathwidth(d.sourcealready)) + ",0)";
                })
                .attr("x", function (d) {
                    return (
                        rect_x(d.source) +
                        pathwidth(d.sourcealready) +
                        rect_x.bandwidth() / 2 -
                        name_width / 3 -5
                    );
                })
                .attr("y", function (d) {
                    return name_height + 15;
                })
                .text(function (d) {
                    return d.value;
                })
                .attr("font-size", "10px")
                .attr("opacity", 0)
                .attr("class", function (d) {
                    return d.source + "text" + " " + d.target + "text";
                });

            // svg.append("g")
            //     .selectAll("path")
            //     .data(data)
            //     .enter()
            //     .append("text")
            //     .attr("x", function (d) {
            //         return (
            //             hero_x(d.target) +
            //             pathwidth(d.targetalready) -
            //             hero_image
            //         );
            //     })
            //     .attr("y", function (d) {
            //         return heronode_y - hero_image / 2;
            //     })
            //     .text(function (d) {
            //         return d.value;
            //     })
            //     .attr("font-size", "10px")
            //     .attr("opacity", 0)
            //     .attr("class", function (d) {
            //         return d.source + "text" + " " + d.target + "text";
            //     });
        },

        async drawwinrate(node) {
            var chineseTrans = d3.scaleOrdinal()
                .domain(["Aguto", "AKe", "Erin", "Angela", "Bai Qi", "Baili Shouyue", "Baili Xuance", "Bian Que", "Mai Shiranui", "Cai Wenji", "Cao Cao", "Chang'e", "Genghis Khan", "Cheng Yaojin", "Dharma", "Daji", "Da Qiao", "Di Renjie", "Dian Wei", "Diao Chan", "Dongfang Yao", "Tai Yi", "Dun Shan", "Fei", "Garo", "Ganjiang Moye", "Gao Jianli", "Ge Ya", "Gongsun Li", "Miyamoto Musashi", "Guan Yu", "Gui Guzi", "Han Xin", "Hou Yi", "Mulan", "Huang Zhong", "Jiang Ziya", "Jin Chan", "Jing", "Ukyo Tachibana", "Kai", "Magnus", "Lan Ling Wan", "Lam", "Fuzi", "Li Bai", "Li Xin", "Lian Po", "Liu Bang", "Liu Bei", "Liu Shan", "Luban Master", "Luban No. 7", "Luna", "Lu Bu", "Ma Chao", "Marco Polo", "Meng Tian", "Meng Ya", "Menki", "Milady", "Mi Yue", "Ming Shiyin", "Mozi", "Nezha", "Nakoruru", "Niumo", "Nuwa", "Pangu", "Tigerous", "Sang Qi", "Shangguan Wan'er", "Shen Mengxi", "Sikong Zhen", "Sima Yi", "Su Lie", "Sun Bin", "Sun Ce", "Sun Shangxiang", "Sun Wukong", "Taiyi Zhenren", "Wang Zhaojun", "Wu Ze Tian", "Xishi", "Xiahou Dun", "Charlotte", "Xiang Yu", "Xiao Qiao", "Athena", "Arthur", "Yang Jian", "Yang Yuhuan", "Yaria", "Yi Xing", "Ying Zheng", "Consort Yu", "Yuanfang", "Yuan Ge", "Yun Zhong Jun", "Zhang Fei", "Zhang Liang", "Zhao Yun", "Zhen Ji", "Zhong Kui", "Wu Yen", "Zhou Yu", "Kong Ming", "Zhu Bajie", "Zhuang Zhou", "Yun Ying", "Li Yuanfang"])
                .range(["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "弈星", "嬴政", "虞姬", "元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳"]);
            // console.log(node);
            var lineupdata = await requesthelp.axiosGet("/getSequenceAll", {
                node: node,
                r1: JSON.stringify(this.round1seq),
                r2: JSON.stringify(this.round2seq),
                r3: JSON.stringify(this.round3seq),
                r4: JSON.stringify(this.round4seq),
                r5: JSON.stringify(this.round5seq),
                r6: JSON.stringify(this.round6seq),
                rawdata: JSON.stringify(this.rawdata),
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
            //         0.55,
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
            var tooltip = d3.select("body")
                .append("div")
                .style("opacity", 0)
                .attr("id", "win_tooltip")
                .style("background-color", "black")
                .style("border-radius", "5px")
                .style("padding", "10px")
                .style("color", "white");

            var showTooltip = function (d, i) {
                tooltip
                    .transition()
                    .duration(200);
                tooltip
                    .style("opacity", 1)
                    .html("Winrate: " + winrate[i])
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            };
            var moveTooltip = function (d, i) {
                tooltip
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            };
            var hideTooltip = function (d, i) {
                tooltip
                    .transition()
                    .duration(200)
                    .style("opacity", 0);
            };

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
                })

                .on("mouseover", showTooltip)
                .on("mousemove", moveTooltip)
                .on("mouseleave", hideTooltip);

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
            if (hero != "customized") {
                var alldata = await requesthelp.axiosGet(
                    "/getBranch",
                    {
                        bo_n: this.bon,
                        pre_n: this.preview,
                        br_n: this.branch,
                        t1_side: this.side,
                        node: node,
                        hero: hero,
                        rawdata: JSON.stringify(this.rawdata),
                        r1: JSON.stringify(this.round1seq),
                        r2: JSON.stringify(this.round2seq),
                        r3: JSON.stringify(this.round3seq),
                        r4: JSON.stringify(this.round4seq),
                        r5: JSON.stringify(this.round5seq),
                        r6: JSON.stringify(this.round6seq), sides: JSON.stringify(this.allroundside)
                    }
                );
                // console.log(alldata);
                this.sequence_view_data = JSON.parse(alldata.output);
                // console.log(typeof(this.sequence_view_data));
                this.rawdata = JSON.parse(alldata.raw_data);
                // console.log(this.sequence_view_data);
                this.render_seq_left_veiw();
                var block = document.getElementById("type");
                block.style.display = "none";
            } else {
                this.customize();
                this.selectednode = node;
            }
            block = document.getElementById("loader");
            block.style.display = "none";

            block = document.getElementById("loaderer");
            block.style.display = "none";
            this.customizedhero = "";
        },
        async loaddata() {
            var block = document.getElementById("warning");
                block.style.display = "none";
                
            console.log(this.allroundside);
            console.log(this.curround);
            if (this.allroundside[this.curround-1]==0){
                // this.$alert("Please select your side!");
                block = document.getElementById("warning");
                block.style.display = "block";
                return;
            }

            block = document.getElementById("loader");
            block.style.display = "block";
            block = document.getElementById("loaderer");
            block.style.display = "block";
            var alldata = await requesthelp.axiosGet("/getSequenceData", {
                bo_n: this.bon,
                pre_n: this.preview,
                br_n: this.branch,
                t1_side: this.side,
                r1: JSON.stringify(this.round1seq),
                r2: JSON.stringify(this.round2seq),
                r3: JSON.stringify(this.round3seq),
                r4: JSON.stringify(this.round4seq),
                r5: JSON.stringify(this.round5seq),
                r6: JSON.stringify(this.round6seq),
                sides: JSON.stringify(this.allroundside)
            });
            this.sequence_view_data = JSON.parse(alldata.output);
            // console.log(typeof(this.sequence_view_data));
            this.rawdata = JSON.parse(alldata.raw_data);
            this.render_seq_left_veiw();
            block = document.getElementById("loader");

            block.style.display = "none";
            block = document.getElementById("loaderer");

            block.style.display = "none";
        },

        render_seq_left_veiw() {
            var englishTrans = d3.scaleOrdinal()
                .range(["Aguto", "AKe", "Erin", "Angela", "Bai Qi", "Baili Shouyue", "Baili Xuance", "Bian Que", "Mai Shiranui", "Cai Wenji", "Cao Cao", "Chang'e", "Genghis Khan", "Cheng Yaojin", "Dharma", "Daji", "Da Qiao", "Di Renjie", "Dian Wei", "Diao Chan", "Dongfang Yao", "Tai Yi", "Dun Shan", "Fei", "Garo", "Ganjiang Moye", "Gao Jianli", "Ge Ya", "Gongsun Li", "Miyamoto Musashi", "Guan Yu", "Gui Guzi", "Han Xin", "Hou Yi", "Mulan", "Huang Zhong", "Jiang Ziya", "Jin Chan", "Jing", "Ukyo Tachibana", "Kai", "Magnus", "Lan Ling Wan", "Lam", "Fuzi", "Li Bai", "Li Xin", "Lian Po", "Liu Bang", "Liu Bei", "Liu Shan", "Luban Master", "Luban No. 7", "Luna", "Lu Bu", "Ma Chao", "Marco Polo", "Meng Tian", "Meng Ya", "Menki", "Milady", "Mi Yue", "Ming Shiyin", "Mozi", "Nezha", "Nakoruru", "Niumo", "Nuwa", "Pangu", "Tigerous", "Sang Qi", "Shangguan Wan'er", "Shen Mengxi", "Sikong Zhen", "Sima Yi", "Su Lie", "Sun Bin", "Sun Ce", "Sun Shangxiang", "Sun Wukong", "Taiyi Zhenren", "Wang Zhaojun", "Wu Ze Tian", "Xishi", "Xiahou Dun", "Charlotte", "Xiang Yu", "Xiao Qiao", "Athena", "Arthur", "Yang Jian", "Yang Yuhuan", "Yaria", "Yi Xing", "Ying Zheng", "Consort Yu", "Yuanfang", "Yuan Ge", "Yun Zhong Jun", "Zhang Fei", "Zhang Liang", "Zhao Yun", "Zhen Ji", "Zhong Kui", "Wu Yen", "Zhou Yu", "Kong Ming", "Zhu Bajie", "Zhuang Zhou", "Yun Ying", "Li Yuanfang", "customized"])
                .domain(["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "弈星", "嬴政", "虞姬", "元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳", "customized"]);
            //////////////////////////
            /////////function/////////
            //////////////////////////
            function mouseover(anytext) {
                d3.select("body")
                    .append("div")
                    .attr("id", "seq_tooltip")
                    .style("opacity", 1)
                    .html(`${anytext}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            }
            var moveTooltip = function (d, i) {
                d3.select("#seq_tooltip")
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            };
            function mouseout() {
                d3.select("#seq_tooltip").remove();
            }
            function render_barChart(cur_node_svg, barChartData) {
                // console.log(barChartData);
                var fourth_item = {
                    hero: "customized",
                    score: 0.3,
                };
                barChartData.push(fourth_item);
                console.log("barChartData is: ", barChartData);

                const barChartWidth = 40;
                const barChartHeight = 63;
                var min_score = d3.min(barChartData, (datum) => datum.score);

                const xScale = d3
                    .scaleLinear()
                    .domain([
                        0,
                        d3.max(
                            barChartData,
                            (datum) => (datum.score - min_score * 0.9) * 23
                        ),
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
                                console.log(
                                    xScale((datum.score - min_score * 0.9) * 10)
                                );
                                return xScale(
                                    (datum.score - min_score * 0.9) * 10
                                );
                            }
                            return 10;
                        })
                        .attr("class", "branch_bar")
                        .on("click", function (data) {
                            var block = $("#main_body").css("transform");
                            block = str2number(
                                block.split("(")[1].split(")")[0].split(",")
                            );

                            self.scale = block[0];
                            block = block.splice(4, 2);
                            self.transx = block[0];
                            self.transy = block[1];

                            block = document.getElementById("loader");
                            block.style.display = "block";
                            block = document.getElementById("loaderer");
                            block.style.display = "block";
                            self.branchupdate(datum.hero, data.node);
                            // block.style.display="none";
                        })
                        .attr("height", yScale.bandwidth())
                        .attr("y", yScale(datum.hero))
                        .attr("fill", function () {
                            return purple_color[index];
                        })
                        .on("mouseover", function () {
                            console.log(datum);
                            mouseover(`top${index + 1} ${englishTrans(datum.hero)}`);
                        })
                        .on("mouseout", mouseout)
                        .on("mousemove", moveTooltip);
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
                percentChartData[0]["top4 customized"] = 15;
                subgroups.unshift("top4 customized");

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
                        block = document.getElementById("loader");
                        block.style.display = "block";
                        block = document.getElementById("loaderer");
                        block.style.display = "block";
                        self.branchupdate(subgroupName, node);
                        // block.style.display="none";

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
                        var subgroupName_list = subgroupName.split(' ');
                        mouseover(`${subgroupName_list[0]} ${englishTrans(subgroupName_list[1])}`);
                    })
                    .on("mouseout", mouseout)
                    .on("mousemove", moveTooltip);
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

            function main_body_zoomed_func() {
                main_body.attr("transform", d3.event.transform);
                var block = $("#main_body").css("transform");
                block = str2number(
                    block.split("(")[1].split(")")[0].split(",")
                );
                self.scale = block[0];
                block = block.splice(4, 2);
                self.transx = block[0];
                self.transy = block[1];
                // console.log(self.transx);
            }

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////
            d3.select("#main_body").remove();
            d3.select("#title_view").remove();
            d3.select(".tooltip").remove();

            // vars
            var self = this;
            var seq_view_data = this.sequence_view_data;
            console.log(seq_view_data);

            // // Color scale used
            var purple_color = ["#542788", "#8073ac", "#b2abd2", "#d8daeb"];
            var orange_color = ["#fdb863", "#e08214", "#b35806", "#d8daeb"];

            self.passed_stage = seq_view_data.nodes[0].stage - 1;
            // console.log(self.passed_stage);
            var stage_width = this.stage_width;

            // zoom func
            var main_body_zoomed = d3
                .zoom()
                .scaleExtent([1, 1])
                .translateExtent([
                    [10, 0],
                    [2556 + 55 - self.passed_stage * stage_width, 100000],
                ])
                .on("zoom", main_body_zoomed_func);

            // prepare
            var main_body_svg = d3
                .select("#main_body_svg")
                .call(main_body_zoomed);

            var title_svg = d3.select("#title_svg");

            var main_body = main_body_svg
                .append("g")
                .attr("id", "main_body")
                .attr(
                    "transform",
                    `translate(${self.transx},${self.transy}) scale(${self.scale})`
                );

            var title_view = title_svg
                .append("g")
                .attr("id", "title_view")
                .attr(
                    "transform",
                    `translate(${self.transx - self.passed_stage * stage_width
                    }, -440) scale(${self.scale})`
                );
            var link_svg = main_body.append("g").attr("id", "link_svg");
            var node_svg = main_body.append("g").attr("id", "node_svg");

            //////////////////////////
            /////////node/////////////
            //////////////////////////
            // some vars for nodes
            var left_margin = 68;
            var top_margin = 43;
            var line_height = 120; //行宽
            var node_spacing = 145; //节点间距
            var eachPos = seq_view_data.eachPos;

            // node layout
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
                    return `translate(${left_margin + node_spacing * cur_node_pos[1]
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
                    mouseover(englishTrans(d.hero));
                })
                .on("mouseout", mouseout)
                .on("mousemove", moveTooltip)
                .on("click", function (d) {
                    var block = $("#main_body").css("transform");
                    // d3.select("#glyph_view_svg").remove();
                    // self.render_glyph_view(d.hero);

                    block = str2number(
                        block.split("(")[1].split(")")[0].split(",")
                    );
                    self.scale = block[0];
                    block = block.splice(4, 2);
                    self.transx = block[0];
                    self.transy = block[1];
                    // console.log(d);
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
                .on("mouseout", mouseout)
                .on("mousemove", moveTooltip);

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
                var title_margin_top = 438;
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
                //为了圆角
                stage_g_each_g
                    .append("rect")
                    .attr("class", "stage_rect")
                    .attr("width", stage_width)
                    .attr("height", 5)
                    .attr("x", function (_, i) {
                        return i * stage_width + title_margin_left;
                    })
                    .attr(
                        "y",
                        title_margin_top + stage_height + stage_height + 5
                    )
                    .attr("rx", 5)
                    .style("fill", "white");

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
        async render_glyph_view(chosen_hero) {},
    },
};
</script>



<style>
#seq_tooltip {
    position: absolute;
    opacity: 0;
    background-color: black;
    border: solid;
    border-width: 2px;
    border-radius: 5px;
    padding: 10px;
    color: white;
}

#win_tooltip {
    position: absolute;
}

#seq_view {
    position: absolute;
    width: 75%;
    height: 58%;
    left: 0.5%;
    right: 0.5%;
    top: 41%;
    background: rgba(243, 243, 243, 0.5);
}

#main_body_svg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    cursor: move;
}

#sankeyview {
    position: absolute;
    width: 76%;
    height: 40%;
    left: 0%;
    top: 5%;
    /* border-right: 1px solid #9a9a9a; */
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

/* 3D Button */
#new_button {
    right: 3%;
}

#generate_button {
    right: 7%;
}

button.depth {
    margin: -40px;
    position: absolute;
    top: 10%;
    background: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    box-shadow: inset 0 0 2px 0px hsla(0, 0%, 0%, 0.2),
        inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        inset 0 0 1px 2px hsla(0, 0%, 0%, 0.5),
        inset 0 0px 2px 0px hsla(0, 0%, 0%, 0.5),
        inset 0 1px 1px 2px hsla(0, 0%, 100%, 0.25),
        inset 0 -2px 2px hsla(0, 0%, 0%, 0.2), 0 1px 1px hsla(0, 0%, 0%, 0.25),
        0 0 2px 2px hsla(0, 0%, 0%, 0.2), 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        0 0 2px 2px hsla(0, 0%, 18%, 0.2), 0 0 2px 2px hsla(0, 0%, 0%, 0.5),
        0 1px 2px 2px hsla(0, 0%, 100%, 0.25);
    color: #999999;
    cursor: pointer;
    font: bold 30px/40px sans-serif;
    height: 40px;
    padding: 0;
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.25),
        0 -1px 1px hsla(0, 0%, 0%, 0.75);
    width: 40px;
}

button.depth:hover,
button.depth:focus {
    text-shadow: 0 0 20px hsla(240, 75%, 75%, 0.5),
        0 1px 1px hsla(0, 0%, 100%, 0.25), 0 -1px 1px rgba(142, 142, 142, 0.75);
}

button.depth:active {
    box-shadow: inset 0 0 2px 0px hsla(0, 0%, 0%, 0.2),
        inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        inset 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        inset 0 0 1px 2px hsla(0, 0%, 0%, 0.5),
        inset 0 0px 2px 0px hsla(0, 0%, 55%, 0.5),
        inset 0 1px 1px 2px hsla(0, 0%, 100%, 0.25),
        inset 0 -2px 2px hsla(0, 0%, 0%, 0.2), 0 1px 1px hsla(0, 0%, 0%, 0.25),
        0 0 2px 2px hsla(0, 0%, 0%, 0.2), 0 0 2px 2px hsla(0, 0%, 0%, 0.2),
        0 0 2px 2px hsla(0, 0%, 0%, 0.2), 0 0 2px 2px hsla(0, 0%, 0%, 0.5),
        0 1px 2px 2px hsla(0, 0%, 100%, 0.25);
}

#title_svg {
    position: absolute;
    width: 100%;
    height: 15%;
    bottom: 0%;
}


#type {
    position: absolute;
    display: none;
    margin-left: 200px;
    margin-top: 200px;
    border-radius: 3px;
    height: 20%;
}

#typeinput {
    height: 30px;
    border-radius: 3px;
}

#winrateview {
    position: absolute;
    width: 23.9%;
    height: 78%;
    /* border-left: 1px solid #9a9a9a; */
    /* border-top: 1px solid #9a9a9a; */
    overflow-x: auto;
    background: rgba(243, 243, 243, 0.5);
    right: 0.25%;
    bottom: 0%;
    display: block;
}
#warning{
    position: absolute;
    top: 35%;
    font-size: 30px;
    background: coral;
    left: 47%;
    display: none;
}

</style>