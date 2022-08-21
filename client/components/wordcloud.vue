<template>
    <svg id="word_cloud" width="400" height="400" />
</template>

<script>
const cloud = require("d3-cloud");

export default {
    props: {
        keyWords: {
            type: Array,
            default: () => [
                {
                    text: "雅典娜",
                    size: "15",
                },
                {
                    text: "位置",
                    size: "40",
                },
                {
                    text: "团战",
                    size: "26",
                },
                { text: "中路", size: "30" },
                {
                    text: "伤害",
                    size: "20",
                },
                { text: "野区", size: "30" },
                {
                    text: "输出",
                    size: "20",
                },
                { text: "经济", size: "10" },
                {
                    text: "强势",
                    size: "30",
                },
                {
                    text: "赛前",
                    size: "16",
                },
            ],
        },
    },
    data() {
        return {
            data: this.keyWords,
        };
    },
    mounted() {
        this.processDataWeights();
        this.drawWordCloud();
    },
    methods: {
        processDataWeights() {
            this.data.sort((a, b) => (a.size - b.size));
            // console.log(this.data);

            // peocess weights with a function
            const one = parseInt(this.data[0].size);
            for(var i in this.data){
                this.data[i].size = calculateWeight(this.data[i].size);
            }

            function calculateWeight(weight) {
                // console.log(weight)
                var size = parseInt(4* Math.sqrt(weight / one));
                // console.log(size)
                return size < 10 ? size * 10 : size;
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
                .words(this.keyWords)
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