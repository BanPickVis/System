<template>
    <svg id="word_cloud" width="640" height="600">
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
                    : [{"text":"club transfer","size":30},{"text":"JiuZhe (C)","size":28},{"text":"league","size":27},{"text":"temporal","size":26},{"text":"coach","size":24},{"text":"home","size":19},{"text":"state (TE)","size":17},{"text":"sweep","size":17},{"text":"WorldCup","size":15},{"text":"AP (TE)","size":14},{"text":"semifinal","size":13},{"text":"stuck pos (TE)","size":12},{"text":"2nd team","size":12},{"text":"city","size":12},{"text":"Peek","size":10},{"text":"Jungle (TE)","size":10},{"text":"streak","size":10},{"text":"score","size":10},{"text":"eliminate","size":10},{"text":"popularity","size":9},{"text":"optimistic","size":9},{"text":"struggle through","size":9},{"text":"record (TE)","size":9},{"text":"schedule","size":8},{"text":"settle down","size":8},{"text":"Come Back","size":8},{"text":"before game","size":8},{"text":"lock at","size":8},{"text":"small round (TE)","size":8},{"text":"position (TE)","size":8},{"text":"possibility","size":8},{"text":"focus on","size":7},{"text":"officially announce","size":7},{"text":"qualifier","size":7},{"text":"JiuCheng (P)","size":7},{"text":"participate","size":7},{"text":"choice","size":7},{"text":"championship","size":7},{"text":"exert","size":7},{"text":"win crown","size":7},{"text":"information","size":7},{"text":"own","size":7},{"text":"develop","size":6},{"text":"forecast","size":6},{"text":"coach team","size":6},{"text":"back to","size":6},{"text":"switch","size":6},{"text":"operate (TE)","size":6},{"text":"version (TE)","size":6},{"text":"leave","size":6},{"text":"JiuKu (P)","size":6},{"text":"Team Owner","size":6},{"text":"lose","size":6},{"text":"big guy","size":6},{"text":"QingRong (P)","size":6},{"text":"pity","size":6},{"text":"Gemini (P)","size":6},{"text":"Scrim (TE)","size":6},{"text":"including","size":5},{"text":"encounter","size":5}],
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