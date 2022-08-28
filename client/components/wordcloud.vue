<template>
    <svg id="word_cloud" width="650" height="580">
    </svg>
</template>

<script>
const cloud = require("d3-cloud");

export default {
    props: { keyWords: Array },
    data() {
        return {
            data:
                this.keyWords.length > 0
                    ? this.keyWords
                    : [{"text":"club transfer","size":20},{"text":"JiuZhe (C)","size":18},{"text":"league","size":18},{"text":"temporal","size":17},{"text":"coach","size":16},{"text":"home","size":12},{"text":"state (TE)","size":11},{"text":"sweep","size":11},{"text":"WorldCup","size":10},{"text":"AP (TE)","size":9},{"text":"semifinal","size":8},{"text":"stuck pos (TE)","size":8},{"text":"2nd team","size":8},{"text":"city","size":8},{"text":"Peek","size":7},{"text":"Jungle (TE)","size":6},{"text":"streak","size":6},{"text":"score","size":6},{"text":"eliminate","size":6},{"text":"popularity","size":6},{"text":"optimistic","size":6},{"text":"struggle through","size":6},{"text":"record (TE)","size":6},{"text":"schedule","size":5},{"text":"settle down","size":5},{"text":"Come Back","size":5},{"text":"before game","size":5},{"text":"lock at","size":5},{"text":"small round (TE)","size":5},{"text":"position (TE)","size":5},{"text":"possibility","size":5},{"text":"focus on","size":5},{"text":"officially announce","size":5},{"text":"qualifier","size":5},{"text":"JiuCheng (P)","size":5},{"text":"participate","size":5},{"text":"choice","size":5},{"text":"championship","size":5},{"text":"exert","size":5},{"text":"win crown","size":5},{"text":"information","size":5},{"text":"own","size":5},{"text":"develop","size":5},{"text":"forecast","size":5},{"text":"coach team","size":5},{"text":"back to","size":5},{"text":"switch","size":5},{"text":"operate (TE)","size":5},{"text":"version (TE)","size":5},{"text":"QingRong (P)","size":5},{"text":"leave","size":5},{"text":"JiuKu (P)","size":5},{"text":"Team Owner","size":5},{"text":"lose","size":5},{"text":"big guy","size":5},{"text":"pity","size":5},{"text":"Gemini (P)","size":5},{"text":"Scrim (TE)","size":5},{"text":"including","size":5},{"text":"encounter","size":5}],
        };
    },
    mounted() {
        this.processDataWeights();
        this.drawWordCloud();
    },
    methods: {
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

        drawWordCloud() {
            // thanks to https://www.cnblogs.com/Kyaya/p/11322426.html
            d3.select("#word_cloud").selectAll("*").remove();
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