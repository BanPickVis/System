<template>
    <div>
        <!-- Header -->
        <svg
            width="640"
            height="96"
            viewBox="0 0 640 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <!-- BG -->
            <path d="M0 0H640V96H0V0Z" fill="url(#bg_gradient)" />

            <!-- avatars -->
            <g filter="url(#filter0_d_0_1)">
                <rect
                    x="525"
                    y="9"
                    width="75.315"
                    height="71.3206"
                    rx="35.6603"
                    fill="url(#pattern_gongsunli)"
                    shape-rendering="crispEdges"
                />
            </g>
            <g filter="url(#filter1_d_0_1)">
                <rect
                    x="19"
                    y="12"
                    width="75.315"
                    height="71.3206"
                    rx="35.6603"
                    fill="url(#pattern_makeboluo)"
                    shape-rendering="crispEdges"
                />
            </g>

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
                <tspan x="120">{{ name1 }}</tspan>
                <tspan x="450">{{ name2 }}</tspan>
            </text>

            <defs>
                <filter
                    id="filter0_d_0_1"
                    x="521.074"
                    y="9"
                    width="83.167"
                    height="79.1727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.92603" />
                    <feGaussianBlur stdDeviation="1.96302" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                    />
                </filter>
                <pattern
                    id="pattern_gongsunli"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        href="#image_gongsunli"
                        transform="translate(0 -0.0280033) scale(0.0111111 0.0117334)"
                    />
                </pattern>
                <filter
                    id="filter1_d_0_1"
                    x="15.074"
                    y="12"
                    width="83.167"
                    height="79.1727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.92603" />
                    <feGaussianBlur stdDeviation="1.96302" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                    />
                </filter>
                <pattern
                    id="pattern_makeboluo"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        href="#image_makeboluo"
                        transform="translate(0 -0.0280033) scale(0.0111111 0.0117334)"
                    />
                </pattern>
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
                <image
                    id="image_zhangliang"
                    width="90"
                    height="90"
                    :href="require('../assets/image/zhangliang.png')"
                />
                <image
                    id="image_gongsunli"
                    width="90"
                    height="90"
                    :href="require('../assets/image/gongsunli.png')"
                />
                <image
                    id="image_makeboluo"
                    width="90"
                    height="90"
                    :href="require('../assets/image/makeboluo.png')"
                />
            </defs>
        </svg>

        <!-- hero selector -->
        <span class="hero_select">
            <el-select
                v-model="select_hero_1"
                placeholder="Select"
                style="width: 90px"
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
                style="width: 90px"
            >
                <el-option
                    v-for="item in heros2"
                    :key="item"
                    :label="item"
                    :value="item"
                /> </el-select
        ></span>

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
import playerJson from "../assets/json/player_view_output_2021_2022.json";

export default {
    setup() {
        var heros1 = Object.keys(playerJson["XYG.酷偕"]),
            heros2 = Object.keys(playerJson["重庆狼队.Fly"]);

        return {heros1,heros2};
    },
    data() {
        return {
            select_hero_1:"猪八戒",
            select_hero_2:"廉颇",

            hero_name1: "猪八戒",
            hero_name2: "廉颇",
        };
    },
    props: {
        name1: { type: String, default: "Player 1" },
        name2: { type: String, default: "Player 2" },

        member_name1: { type: String, default: "XYG.酷偕" },
        member_name2: { type: String, default: "重庆狼队.Fly" },
    },
    mounted() {
        const titles = [
            "Average KDA",
            "Average Damage",
            "Average Hurt",
            "Average Cash",
            "Participation",
        ];
        this.plotTitle(titles);

        // create dummy data
        var player_data_b = playerJson[this.member_name1][this.hero_name1],
            player_data_r = playerJson[this.member_name2][this.hero_name2];
        // console.log(player_data_b);

        // process data & plot
        this.heros1 = Object.keys(playerJson[this.member_name1]);
        d3.select("#player_box_plot").selectAll("g").remove();

        for (var i in d3.range(5)) {
            // plot i-th box
            this.plotBox([player_data_b[i], player_data_r[i]], i);
        }
    },
    methods: {
        plotTitle(titles) {
            const box_plot = d3.select("#player_box_plot"),
                height = box_plot.attr("width");
            for (var i in d3.range(5)) {
                box_plot
                    .append("text")
                    .text(titles[i])
                    .attr("x", 10)
                    .attr("y", 50 + (height / 8) * i)
                    .attr("fill", "black");
            }
        },
        plotBox(double_data, box_id) {
            const box_plot = d3.select("#player_box_plot");
            const margin = { top: 15, right: 30, bottom: 15, left: 150 },
                width = box_plot.attr("width") - margin.left - margin.right,
                height =
                    box_plot.attr("height") / 5 - margin.top - margin.bottom,
                h = height / 3; // height of the box
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
                    .attr("fill", color[i]);

                // Show the main vertical line
                svg.append("line")
                    .attr("y1", center)
                    .attr("y2", center)
                    .attr("x1", x(boxs[i].min))
                    .attr("x2", x(boxs[i].max))
                    .attr("stroke", color[i]);

                // Show the box
                svg.append("rect")
                    .attr("x", x(boxs[i].q1))
                    .attr("y", center - h / 2)
                    .attr("width", x(boxs[i].q3) - x(boxs[i].q1))
                    .attr("height", h)
                    .attr("opacity", 0.5)
                    .style("fill", color[i]);

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
                    .attr("stroke", color[i]);

                // median lines
                svg.append("line")
                    .attr("y1", center - h / 2)
                    .attr("y2", center + h / 2)
                    .attr("x1", x(boxs[i].q2))
                    .attr("x2", x(boxs[i].q2))
                    .attr("stroke", "#fff");
            }
        },
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

.hero_select{
    position: absolute;
    top: 18%;
    left: 28%;
    opacity: 60%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
div.el-select {
    padding: 0 10px 0 10px;
}
</style>