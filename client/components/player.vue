<template>
    <div>
        <!-- Header -->
        <svg
            width="635"
            height="96"
            viewBox="0 0 640 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <!-- BG -->
            <path d="M0 0H640V96H0V0Z" fill="url(#bg_gradient)" />

            <!-- avatars -->
                <rect
                    id="player1hero"
                    x="19"
                    y="12"
                    width="75.315"
                    height="71.3206"
                    rx="35.6603"
                    fill="url(#pnone)"
                    shape-rendering="crispEdges"
                    filter="url(#trans-shadow)"
                />
                <rect
                    id="player2hero"
                    x="540"
                    y="9"
                    width="75.315"
                    height="71.3206"
                    rx="35.6603"
                    fill="url(#pnone)"
                    shape-rendering="crispEdges"
                    filter="url(#trans-shadow)"
                />

            <!-- name -->
            <text
                y="50"
                fill="#333333"
                style="
                    font-family: 'Apple Braille';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 26px;
                    line-height: 27px;
                "
            >
                <tspan x="100">{{ name1 }}</tspan>
                <tspan x="535" text-anchor="end">{{ name2 }}</tspan>
            </text>

            <defs>
                <linearGradient
                    id="bg_gradient"
                    x1="0"
                    y1="318.046"
                    x2="640"
                    y2="318.046"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#46A4E4" stop-opacity="0.5" />
                    <stop
                        offset="0.0001"
                        stop-color="#46A4E4"
                        stop-opacity="0.5"
                    />
                    <stop offset="0.5" stop-color="white" stop-opacity="0.37" />
                    <stop offset="1" stop-color="#F76060" stop-opacity="0.5" />
                </linearGradient>
            </defs>
        </svg>
        <span class="specific_only">
            <input id="checkbox" v-model="checked" type="checkbox">
            <label for="checkbox">Specific Hero Only</label>
        </span>

        <!-- hero selector -->
        <span class="hero_select">
            <el-select
                v-model="select_hero_1"
                placeholder="Select"
                style="width: 130px"
            >
                <el-option
                    v-for="item in heros1"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            vs

            <el-select
                v-model="select_hero_2"
                placeholder="Select"
                style="width: 130px"
            >
                <el-option
                    v-for="item in heros2"
                    :key="item"
                    :label="item"
                    :value="item"
                /></el-select>
            </span>
        <br />

        <!-- Box Plot -->
        <svg
            id="player_box_plot"
            width="640"
            height="390"
            viewBox="0 0 640 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        ></svg>
    </div>
</template>

<script>
import wrap from "../components/wrap.js";
import requesthelp from "common/utils/request.js";


export default {
    props: {
        playername1:{ type: String, default: "not selected"},
        playername2:{ type: String, default: "not selected"},
    },
    setup() {
    },
    data() {
        return {
            select_hero_1: "",
            select_hero_2: "",
            name1:this.playername1,
            name2:this.playername2,
            memberName1:this.playername1,
            memberName2:this.playername2,
            player1Json: {},
            player2Json: {},
            heros1: new Array(),
            heros2: new Array(),
            checked: false
        };
    },
    watch: {
        // select hero
        select_hero_1(val, _) {
            this.checked = false;
            var chineseTrans = d3.scaleOrdinal()
                .domain(["Aguto","AKe","Erin","Angela","Bai Qi","Baili Shouyue","Baili Xuance","Bian Que","Mai Shiranui","Cai Wenji","Cao Cao","Chang'e","Genghis Khan","Cheng Yaojin","Dharma","Daji","Da Qiao","Di Renjie","Dian Wei","Diao Chan","Dongfang Yao","Tai Yi","Dun Shan","Fei","Garo","Ganjiang Moye","Gao Jianli","Ge Ya","Gongsun Li","Miyamoto Musashi","Guan Yu","Gui Guzi","Han Xin","Hou Yi","Mulan","Huang Zhong","Jiang Ziya","Jin Chan","Jing","Ukyo Tachibana","Kai","Magnus","Lan Ling Wan","Lam","Fuzi","Li Bai","Li Xin","Lian Po","Liu Bang","Liu Bei","Liu Shan","Luban Master","Luban No. 7","Luna","Lu Bu","Ma Chao","Marco Polo","Meng Tian","Meng Ya","Menki","Milady","Mi Yue","Ming Shiyin","Mozi","Nezha","Nakoruru","Niumo","Nuwa","Pangu","Tigerous","Sang Qi","Shangguan Wan'er","Shen Mengxi","Sikong Zhen","Sima Yi","Su Lie","Sun Bin","Sun Ce","Sun Shangxiang","Sun Wukong","Taiyi Zhenren","Wang Zhaojun","Wu Ze Tian","Xishi","Xiahou Dun","Charlotte","Xiang Yu","Xiao Qiao","Athena","Arthur","Yang Jian","Yang Yuhuan","Yaria","Yi Xing","Ying Zheng","Consort Yu","Yuanfang","Yuan Ge","Yun Zhong Jun","Zhang Fei","Zhang Liang","Zhao Yun","Zhen Ji","Zhong Kui","Wu Yen","Zhou Yu","Kong Ming","Zhu Bajie","Zhuang Zhou","Yun Ying","Li Yuanfang"])
                .range(["阿古朵","阿轲","艾琳","安琪拉","白起","百里守约","百里玄策","扁鹊","不知火舞","蔡文姬","曹操","嫦娥","成吉思汗","程咬金","达摩","妲己","大乔","狄仁杰","典韦","貂蝉","东方曜","东皇太一","盾山","暃","伽罗","干将莫邪","高渐离","戈娅","公孙离","宫本武藏","关羽","鬼谷子","韩信","后羿","花木兰","黄忠","姜子牙","金蝉","镜","橘右京","铠","狂铁","兰陵王","澜","老夫子","李白","李信","廉颇","刘邦","刘备","刘禅","鲁班大师","鲁班七号","露娜","吕布","马超","马可波罗","蒙恬","蒙犽","梦奇","米莱狄","芈月","明世隐","墨子","哪吒","娜可露露","牛魔","女娲","盘古","裴擒虎","桑启","上官婉儿","沈梦溪","司空震","司马懿","苏烈","孙膑","孙策","孙尚香","孙悟空","太乙真人","王昭君","武则天","西施","夏侯惇","夏洛特","项羽","小乔","雅典娜","亚瑟","杨戬","杨玉环","瑶","弈星","嬴政","虞姬","元芳","元歌","云中君","张飞","张良","赵云","甄姬","钟馗","钟无艳","周瑜","诸葛亮","猪八戒","庄周","云缨","李元芳"]);
            if (this.playername2!="not selected"){
                this.plotBoxes();
            }
            let block = document.getElementById("player1hero");
            // console.log(block);
            block.style.fill = "url(#p"+chineseTrans(val)+")";
        },
        select_hero_2(val, _) {
            
            this.checked = false;
            var chineseTrans = d3.scaleOrdinal()
                .domain(["Aguto","AKe","Erin","Angela","Bai Qi","Baili Shouyue","Baili Xuance","Bian Que","Mai Shiranui","Cai Wenji","Cao Cao","Chang'e","Genghis Khan","Cheng Yaojin","Dharma","Daji","Da Qiao","Di Renjie","Dian Wei","Diao Chan","Dongfang Yao","Tai Yi","Dun Shan","Fei","Garo","Ganjiang Moye","Gao Jianli","Ge Ya","Gongsun Li","Miyamoto Musashi","Guan Yu","Gui Guzi","Han Xin","Hou Yi","Mulan","Huang Zhong","Jiang Ziya","Jin Chan","Jing","Ukyo Tachibana","Kai","Magnus","Lan Ling Wan","Lam","Fuzi","Li Bai","Li Xin","Lian Po","Liu Bang","Liu Bei","Liu Shan","Luban Master","Luban No. 7","Luna","Lu Bu","Ma Chao","Marco Polo","Meng Tian","Meng Ya","Menki","Milady","Mi Yue","Ming Shiyin","Mozi","Nezha","Nakoruru","Niumo","Nuwa","Pangu","Tigerous","Sang Qi","Shangguan Wan'er","Shen Mengxi","Sikong Zhen","Sima Yi","Su Lie","Sun Bin","Sun Ce","Sun Shangxiang","Sun Wukong","Taiyi Zhenren","Wang Zhaojun","Wu Ze Tian","Xishi","Xiahou Dun","Charlotte","Xiang Yu","Xiao Qiao","Athena","Arthur","Yang Jian","Yang Yuhuan","Yaria","Yi Xing","Ying Zheng","Consort Yu","Yuanfang","Yuan Ge","Yun Zhong Jun","Zhang Fei","Zhang Liang","Zhao Yun","Zhen Ji","Zhong Kui","Wu Yen","Zhou Yu","Kong Ming","Zhu Bajie","Zhuang Zhou","Yun Ying","Li Yuanfang"])
                .range(["阿古朵","阿轲","艾琳","安琪拉","白起","百里守约","百里玄策","扁鹊","不知火舞","蔡文姬","曹操","嫦娥","成吉思汗","程咬金","达摩","妲己","大乔","狄仁杰","典韦","貂蝉","东方曜","东皇太一","盾山","暃","伽罗","干将莫邪","高渐离","戈娅","公孙离","宫本武藏","关羽","鬼谷子","韩信","后羿","花木兰","黄忠","姜子牙","金蝉","镜","橘右京","铠","狂铁","兰陵王","澜","老夫子","李白","李信","廉颇","刘邦","刘备","刘禅","鲁班大师","鲁班七号","露娜","吕布","马超","马可波罗","蒙恬","蒙犽","梦奇","米莱狄","芈月","明世隐","墨子","哪吒","娜可露露","牛魔","女娲","盘古","裴擒虎","桑启","上官婉儿","沈梦溪","司空震","司马懿","苏烈","孙膑","孙策","孙尚香","孙悟空","太乙真人","王昭君","武则天","西施","夏侯惇","夏洛特","项羽","小乔","雅典娜","亚瑟","杨戬","杨玉环","瑶","奕星","嬴政","虞姬","元芳","元歌","云中君","张飞","张良","赵云","甄姬","钟馗","钟无艳","周瑜","诸葛亮","猪八戒","庄周","云缨","李元芳"]);
            if (this.playername1!="not selected"){
                this.plotBoxes();
            }
            let block = document.getElementById("player2hero");
            // console.log(block);
            block.style.fill = "url(#p"+chineseTrans(val)+")";
        },
        playername1(val,_){
            
            this.checked = false;
            // console.log("yes");
            this.name1=this.playername1;
            this.default_set1();
        },
        playername2(val,_){
            
            this.checked = false;
            this.name2=this.playername2;
            this.default_set2();
        },

        // select player
        memberName1(val, _) {
            
            this.checked = false;
            this.heros1 = Object.keys(this.player1Json);
            this.select_hero_1 = this.heros1[0];
        },
        memberName2(val, _) {
            
            this.checked = false;
            this.heros2 = Object.keys(this.player2Json);
            this.select_hero_2 = this.heros2[0];
        },
        checked(val,_){
            if (val==true){
                d3.selectAll(".allinfo").transition(750)
                    .attr('opacity',0.2);
                d3.selectAll(".allinfobox").transition(750)
                    .attr('opacity',0.2);
                d3.selectAll(".dots").transition(750)
                    .attr('opacity',1)
                    .attr('r',5);
            }
            if (val==false){
                d3.selectAll(".allinfo").transition(750)
                    .attr('opacity',1);
                d3.selectAll(".allinfobox").transition(750)
                    .attr('opacity',0.5);
                d3.selectAll(".dots").transition(750)
                    .attr('opacity',0.6)
                    .attr('r',3);
            }
        }
    },
    mounted() {
        const titles = [
            "KDA Ratio",
            "Average Damage (/min)",
            "Average Damage taken (/min)",
            "Average Cash Gained (/min)",
            "Participation",
        ];
        this.plotTitle(titles);
    },
    methods: {
        async default_set1(){
            if (this.playername1!="not selected"){
                this.player1Json = await requesthelp.axiosGet('/getPlayer',{ name: this.name1 });
                // console.log(this.player1Json);
                this.heros1 = Object.keys(this.player1Json);
                // this.heros1.shift();
                this.select_hero_1 = this.heros1[0];
            }
        },
        async default_set2(){
            if (this.playername2!="not selected"){
                this.player2Json = await requesthelp.axiosGet('/getPlayer',{ name: this.name2 });
                this.heros2 = Object.keys(this.player2Json);
                // this.heros2.shift();
                this.select_hero_2 = this.heros2[0];
            }
        },
        plotBoxes() {
            d3.select("#player_box_plot").selectAll("g").remove();

            // process data by member_name & hero_name
            var player_data_b = this.player1Json.all,
                player_data_r = this.player2Json.all;
            var player_data_b_s = this.player1Json[this.select_hero_1],
                player_data_r_s = this.player2Json[this.select_hero_2];
            // console.log(player_data_b);

            for (var i in d3.range(5)) {
                // plot i-th box
                this.plotBox([player_data_b[i], player_data_r[i]], i);
                this.plotDot([player_data_b_s[i], player_data_r_s[i]], i);
            }
        },
        plotTitle(titles) {
            const box_plot = d3.select("#player_box_plot"),
                height = box_plot.attr("width");
            for (var i in d3.range(5)) {
                box_plot
                    .append("text")
                    .text(titles[i])
                    .attr("x", 145)
                    .attr("y", 50 + (height / 8.5) * i)
                    .attr("dy", "0.35em")
                    .attr("text-anchor", "end")
                    .attr("fill", "black")
                    .call(wrap, 150);
            }
        },
        plotBox(double_data, box_id) {
            const box_plot = d3.select("#player_box_plot");
            const margin = { top: 18, right: 20, bottom: 8, left: 160 },
                width = box_plot.attr("width") - margin.left - margin.right,
                height =
                    box_plot.attr("height") / 5 - margin.top - margin.bottom,
                h = height / 2.5; // height of the box
            const svg = box_plot
                .append("g")
                .attr(
                    "transform",
                    "translate(" +
                        margin.left +
                        "," +
                        (margin.top +
                            (height + margin.top + margin.bottom) * box_id) +
                        ")"
                );

            const color = ["#46A4E4", "#F76060"];

            // init scale
            var data_min = d3.min([
                    d3.min(double_data[0]),
                    d3.min(double_data[1]),
                ]),
                data_max = d3.max([
                    d3.max(double_data[0]),
                    d3.max(double_data[1]),
                ]);

            // calculate & update scale
            let boxs = [];
            for (var i in d3.range(2)) {
                var data = double_data[i];
                // console.log(data);

                // Compute summary statistics used for the box:
                var data_sorted = data.sort(d3.ascending);
                var q1 = d3.quantile(data_sorted, 0.25);
                var median = d3.quantile(data_sorted, 0.5);
                var q3 = d3.quantile(data_sorted, 0.75);
                var interQuantileRange = q3 - q1;
                var min = q1 - 1.5 * interQuantileRange;
                var max = q1 + 1.5 * interQuantileRange;
                boxs.push({
                    min: min,
                    q1: q1,
                    q2: median,
                    q3: q3,
                    max: max,
                });

                if (min < data_min) data_min = min;
                if (max > data_max) data_max = max;

                // console.log(data_sorted);
                // console.log(d3.min(data), min, max, d3.max(data));
            }

            // Show the X scale
            var x = d3
                .scaleLinear()
                .domain([data_min, data_max])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(" + 0 + "," + height + ")")
                .call(d3.axisBottom(x).ticks(2));

            for (i in d3.range(2)) {
                // a few features for the box
                var center = margin.top + (height / 2.5) * i;

                // plot the points
                // svg.append("g")
                //     .selectAll("circle")
                //     .data(double_data[i])
                //     .enter()
                //     .append("circle")
                //     .attr("cx", function (d) {
                //         return x(d);
                //     })
                //     .attr("cy", center)
                //     .attr("r", 3)
                //     .attr("opacity", 0.6)
                //     .attr("fill", color[i]);

                // Show the main vertical line
                svg.append("line")
                    .attr("y1", center)
                    .attr("y2", center)
                    .attr("x1", x(boxs[i].min))
                    .attr("x2", x(boxs[i].max))
                    .attr("stroke", color[i])
                    .attr("opacity", 1)
                    .attr("class","allinfo");

                // Show the box
                svg.append("rect")
                    .attr("x", x(boxs[i].q1))
                    .attr("y", center - h / 2)
                    .attr("width", x(boxs[i].q3) - x(boxs[i].q1))
                    .attr("height", h)
                    .attr("opacity", 0.5)
                    .style("fill", color[i])
                    .attr("class","allinfobox");

                // show min and max lines
                svg.selectAll("toto")
                    .data([boxs[i].min, boxs[i].q1, boxs[i].q3, boxs[i].max])
                    .enter()
                    .append("line")
                    .attr("y1", center - h / 2)
                    .attr("y2", center + h / 2)
                    .attr("x1", function (d) {
                        return x(d);
                    })
                    .attr("x2", function (d) {
                        return x(d);
                    })
                    .attr("stroke", color[i])
                    .attr("opacity", 1)
                    .attr("class","allinfo");

                // median lines
                svg.append("line")
                    .attr("y1", center - h / 2)
                    .attr("y2", center + h / 2)
                    .attr("x1", x(boxs[i].q2))
                    .attr("x2", x(boxs[i].q2))
                    .attr("stroke", "#fff")
                    .attr("opacity", 1)
                    .attr("class","allinfo");
            }
        },
        plotDot(double_data, box_id) {
            const box_plot = d3.select("#player_box_plot");
            const margin = { top: 18, right: 20, bottom: 8, left: 160 },
                width = box_plot.attr("width") - margin.left - margin.right,
                height =
                    box_plot.attr("height") / 5 - margin.top - margin.bottom,
                h = height / 2.5; // height of the box
            const svg = box_plot
                .append("g")
                .attr(
                    "transform",
                    "translate(" +
                        margin.left +
                        "," +
                        (margin.top +
                            (height + margin.top + margin.bottom) * box_id) +
                        ")"
                );

            const color = ["#46A4E4", "#F76060"];

            // init scale
            var data_min = d3.min([
                    d3.min(double_data[0]),
                    d3.min(double_data[1]),
                ]),
                data_max = d3.max([
                    d3.max(double_data[0]),
                    d3.max(double_data[1]),
                ]);

            // calculate & update scale
            let boxs = [];
            for (var i in d3.range(2)) {
                var data = double_data[i];
                // console.log(data);

                // Compute summary statistics used for the box:
                var data_sorted = data.sort(d3.ascending);
                var q1 = d3.quantile(data_sorted, 0.25);
                var median = d3.quantile(data_sorted, 0.5);
                var q3 = d3.quantile(data_sorted, 0.75);
                var interQuantileRange = q3 - q1;
                var min = q1 - 1.5 * interQuantileRange;
                var max = q1 + 1.5 * interQuantileRange;
                boxs.push({
                    min: min,
                    q1: q1,
                    q2: median,
                    q3: q3,
                    max: max,
                });

                if (min < data_min) data_min = min;
                if (max > data_max) data_max = max;

            }

            // Show the X scale
            var x = d3
                .scaleLinear()
                .domain([data_min, data_max])
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(" + 0 + "," + height + ")")
                .call(d3.axisBottom(x).ticks(2));

            for (i in d3.range(2)) {
                // a few features for the box
                var center = margin.top + (height / 2.5) * i;

                // plot the points
                svg.append("g")
                    .selectAll("circle")
                    .data(double_data[i])
                    .enter()
                    .append("circle")
                    .attr("cx", function (d) {
                        return x(d);
                    })
                    .attr("cy", center)
                    .attr("r", 3)
                    .attr("opacity", 0.6)
                    .attr("fill", color[i])
                    .attr("class","dots");
            }
        }
    },
};
</script>

<style scoped>
#player_box_plot {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
}

.hero_select {
    position: absolute;
    top: 17%;
    left: 23%;
    opacity: 100%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
div.el-select {
    padding: 0 10px 0 10px;
}
.specific_only{
    position: absolute;
    top: 12%;
    left: 36%;
    opacity: 60%;
    display: block;
    font-size: 16px;
    margin-bottom: 20px;
}
</style>