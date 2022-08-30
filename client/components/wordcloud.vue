<template>
    <svg id="word_cloud" width="560" height="480">
    </svg>
</template>

<script>
const cloud = require("d3-cloud");

import wrap from "@/components/wrap.js";
import requesthelp from "common/utils/request.js";

export default {
    props: { keyWords: Array },
    data() {
        return {
            data:
                this.keyWords.length > 0 ?
                    this.keyWords
                    : [{"text":"club transfer","size":68},{"text":"JiuZhe (C)","size":63},{"text":"league","size":61},{"text":"temporal","size":58},{"text":"coach","size":54},{"text":"home","size":43},{"text":"state (TE)","size":40},{"text":"sweep","size":38},{"text":"WorldCup","size":36},{"text":"AP (TE)","size":31},{"text":"stuck pos (TE)","size":29},{"text":"semifinal","size":29},{"text":"2nd team","size":28},{"text":"city","size":28},{"text":"Jungle (TE)","size":24},{"text":"Peek","size":24},{"text":"streak","size":23},{"text":"score","size":23},{"text":"eliminate","size":22},{"text":"popularity","size":22},{"text":"optimistic","size":21},{"text":"struggle through","size":20},{"text":"record (TE)","size":20},{"text":"schedule","size":20},{"text":"settle down","size":20},{"text":"Come Back","size":19},{"text":"before game","size":19},{"text":"lock at","size":19},{"text":"small round (TE)","size":19},{"text":"position (TE)","size":18},{"text":"possibility","size":18},{"text":"focus on","size":18},{"text":"officially announce","size":18},{"text":"qualifier","size":18},{"text":"JiuCheng (P)","size":17},{"text":"participate","size":17},{"text":"choice","size":17},{"text":"championship","size":16},{"text":"exert","size":16},{"text":"win crown","size":16},{"text":"information","size":16},{"text":"own","size":15},{"text":"develop","size":15},{"text":"forecast","size":15},{"text":"coach team","size":15},{"text":"back to","size":15},{"text":"switch","size":15},{"text":"operate (TE)","size":15},{"text":"version (TE)","size":15},{"text":"QingRong (P)","size":15},{"text":"leave","size":15},{"text":"JiuKu (P)","size":15},{"text":"Team Owner","size":15},{"text":"lose","size":15},{"text":"big guy","size":15},{"text":"pity","size":15},{"text":"Gemini (P)","size":15},{"text":"Scrim (TE)","size":15},{"text":"including","size":15},{"text":"encounter","size":15}],
                    // default: search result of "KPL"
                };
    },

    mounted() {
        this.get_data();
        // this.processDataWeights();
        this.drawWordCloud();
    },
    methods: {
        /*
        processDataWeights() {
            this.data.sort((a, b) => a.size - b.size);
            // console.log(this.data);

            // peocess weights with a function
            const one = parseInt(this.data[0].size);
            for (var i in this.data) {
                this.data[i].size = calculateWeight(this.data[i].size);
            }

            function calculateWeight(weight) {
                // console.log(weight)
                var size = parseInt(4 * Math.sqrt(weight / one));
                // console.log(size)
                // Notice: adjust the number to refit
                return size < 7 ? size * 7 : size;
            }
        },
        */
        async get_data(){
            var key_fr= await requesthelp.axiosGet('/wordcloud_fr');
            console.log(key_fr);
        },
        drawWordCloud() {
            // thanks to https://www.cnblogs.com/Kyaya/p/11322426.html
            d3.select("#word_cloud").selectAll("*").remove();
            // this.keyWords = await requesthelp.axiosGet('/wordcloud_fr');
            // let myWordCloud = this.createWordCloud('#cloud');
            // myWordCloud.update(this.keyWords);
            // var fill = d3.scaleOrdinal(d3.schemeCategory10);  //输出20种类别的颜色 ---颜色比例尺
            // console.log(this.keyWords);

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
                .size([width, height]) //size([x,y]) 词云显示的大小
                .words(this.data)
                .padding(2) // between words
                .rotate(function () {
                    return ~~(Math.random() * 2) * 0;
                })
                .font("Impact")
                .fontSize(function (d) {
                    return d.size;
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