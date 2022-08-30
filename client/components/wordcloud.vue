<template>
    <div>
        <span id="inputting">
            <el-input
            v-model="cloud_words"
            placeholder="Please input"
            class="input-with-select"
            >
            </el-input>
        </span>
        <span id="enter">
            <button @click="this.add()">
                enter
            </button>
        </span>
        <svg id="word_cloud" width="600" height="460">
        </svg>
    </div>
</template>

<script>
const cloud = require("d3-cloud");

import wrap from "@/components/wrap.js";
import requesthelp from "common/utils/request.js";

export default {
    props: { keyWords: Array },
    data() {
        return {
            data:[],
            word_list_cloud:['KPL'],
            cloud_words: [],
        };
    },

    mounted() {
        this.get_data();
        // this.processDataWeights();
        console.log('this');
    },
    watch:{
        
    },
    methods: {
        async add(){
            // console.log(this.word_list_cloud);
            this.word_list_cloud[this.word_list_cloud.length] = this.cloud_words;
            // console.log(this.cloud_words);
            this.data= await requesthelp.axiosGet('/wordcloud_fr',{word_list:JSON.stringify(this.word_list_cloud)});
            // console.log(this.data);
            this.drawWordCloud();
        },
        async get_data(){
            this.data= await requesthelp.axiosGet('/wordcloud_fr',{word_list:JSON.stringify(this.word_list_cloud)});
            // console.log(this.data);
            this.drawWordCloud();
        },
        drawWordCloud() {
            // console.log("?????");
            // thanks to https://www.cnblogs.com/Kyaya/p/11322426.html
            d3.select("#word_cloud").selectAll("*").remove();
            // this.keyWords = await requesthelp.axiosGet('/wordcloud_fr');
            // let myWordCloud = this.createWordCloud('#cloud');
            // myWordCloud.update(this.keyWords);
            // var fill = d3.scaleOrdinal(d3.schemeCategory10);  //输出20种类别的颜色 ---颜色比例尺
            // console.log(this.data);

            var fill = d3.scaleOrdinal([
                "#ef9a9a", // pink
                "#b39ddb", // purple
                "#90caf9", // sky blue
                "#80cbc4", // qingse/ teal
                "#c5e1a5", // light green
                "#ffe082", // amber/ yellow
                "#bcaaa4", // brown
                "#b0bec5", //blue grey
                // '#eeeeee' // grey
            ]);
            const svg = d3.select("#word_cloud"),
                svgDom = document.getElementById("word_cloud"),
                width = svgDom.clientWidth,
                height = svgDom.clientHeight;
            var layout = cloud()
                .size([width, height-30]) //size([x,y]) 词云显示的大小
                .words(this.data)
                .padding(2) // between words
                .rotate(function () {
                    return ~~(Math.random() * 2) * 0;
                })
                .font("Impact")
                .fontSize(function (d) {
                    return d.size*3;
                })
                .on("end", draw);
            layout.start();

            function draw(words) {
                svg.append("g")
                    .attr(
                        "transform",
                        "translate(" +
                            layout.size()[0] / 2 +
                            "," +
                            layout.size()[1] / 2 +
                            ")"
                    )
                    .selectAll("text")
                    .data(words)
                    .enter()
                    .append("text")
                    .style("font-size", function (d) {
                        return d.size + "px";
                    })
                    .style("font-family", "Impact")
                    .style("fill", function (d, i) {
                        return fill(i);
                    }) // i mod colors.length
                    .attr("text-anchor", "middle")
                    .attr("transform", function (d) {
                        return (
                            "translate(" +
                            [d.x, d.y] +
                            ")rotate(" +
                            d.rotate +
                            ")"
                        );
                    })
                    .text(function (d) {
                        return d.text;
                    });
            }
        },
    },
};
</script>

<style>
#inputting{
    position: absolute;
    width: 45%;
    left:46%;
    top: 8%;
}
#enter{
    position: absolute;
    width: 10%;
    left:91%;
    top: 8%;
}
#word_cloud{
    position: absolute;
    top:27%;
    right:2%;
}
</style>