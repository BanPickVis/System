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
        <div id="tags">
            <button
                v-for="word in word_list_cloud"
                :key="word"
                :class="['wordtag']"
                @click="this.delete(word)"
            >
                {{ word }} &nbsp;   ✕
        </button>
        </div>
        <span id="enter">
            <button @click="add()">
                enter
            </button>
        </span>
        <svg id="word_cloud">
        </svg>
    </div>
</template>

<script>
const cloud = require("d3-cloud");
import requesthelp from "common/utils/request.js";

export default {
    props: {},
    data() {
        return {
            data:[],
            word_list_cloud:[],
            cloud_words: "",
        };
    },

    mounted() {
        this.get_data();
        // this.processDataWeights();
        // console.log('this');
    },
    methods: {
        async delete(word){
            for (var i=0;i<this.word_list_cloud.length;i++){
                if (this.word_list_cloud[i]==word){
                    this.word_list_cloud.splice(i,1);
                }
            }
            console.log(this.word_list_cloud);
            this.data= await requesthelp.axiosGet('/wordcloud_fr',{word_list:JSON.stringify(this.word_list_cloud)});
            // console.log(this.data);
            this.drawWordCloud();
        },
        async add(){
            // console.log(this.word_list_cloud);
            this.word_list_cloud[this.word_list_cloud.length] = this.cloud_words;
            // console.log(this.cloud_words);
            this.data= await requesthelp.axiosGet('/wordcloud_fr',{word_list:JSON.stringify(this.word_list_cloud)});
            // console.log(this.data);
            this.cloud_words = "";
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
    width: 35.5%;
    height: 14%;
    left:50%;
    top: 7%;
    font-size: 125%;
}
#enter{
    position: absolute;
    width: 20%;
    left:85%;
    top: 7%;
    font-size: 125%;
}
#word_cloud{
    position: absolute;
    top:23%;
    right:1%;
    height: 80%;
    width: 53%;
}
#tags{
    position: absolute;
    top:15%;
    left:50%;
    width: 50%;
    height: 12.5%;
    cursor: pointer;
}
.wordtag{
    float: left;
    /* padding: 6px 10px; */
    margin-right: 25px;
    margin-bottom: 15px;
    /* width:80px; */
    font-size: 120%;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    width:fit-content;
    background: #fcfcfc;
}
.wordtag:hover {
background: #f0f0f0;
}
.wordtag.active {
background: #f0f0f0;
}
</style>