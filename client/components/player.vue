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

        <br />
        <br />

        <!-- Box Plot -->
        <svg
            id="player_box_plot"
            width="640"
            height="390"
            viewBox="0 0 640 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <text fill="black">
                <!-- titles -->
                <!-- <tspan x="10" y="50">Average KDA</tspan>
                <tspan x="10" y="120">Average Damage</tspan>
                <tspan x="10" y="190">Average Hurt</tspan>
                <tspan x="10" y="260">Average Cash</tspan>
                <tspan x="10" y="330">Average Participation</tspan> -->
            </text>
        </svg>
    </div>
</template>

<script>
import { random } from "lodash";
export default {
    setup() {},
    props: {
        name1: { type: String, default: "Player 1" },
        name2: { type: String, default: "Player 2" },
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
        var double_data = [
            [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 20, 12, 11, 9],
            [12, 9, 1, 15, 12, 22, 30, 14, 15, 16, 8, 9, 10, 12, 16, 9],
        ];
        for (var i in d3.range(5)) {
            this.plotBox(double_data, i);
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
            const margin = { top: 8, right: 30, bottom: 8, left: 150 },
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
                        ((height + margin.top + margin.bottom) * box_id +
                            margin.top) +
                        ")"
                );

            const color = ["#46A4E4", "#F76060"];

            // Show the X scale
            var x = d3
                .scaleLinear()
                .domain([
                    0,
                    d3.max([d3.max(double_data[0]), d3.max(double_data[1])]),
                ])
                .range([0, width]);
            svg.append("g")
                .attr(
                    "transform",
                    "translate(" + 0 + "," + (height + margin.bottom) + ")"
                )
                .call(d3.axisTop(x));

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

                // a few features for the box
                var center = margin.top + (height / 2.5) * i;

                // Show the main vertical line
                svg.append("line")
                    .attr("y1", center)
                    .attr("y2", center)
                    .attr("x1", x(min))
                    .attr("x2", x(max))
                    .attr("stroke", color[i]);

                // Show the box
                svg.append("rect")
                    .attr("x", x(q1))
                    .attr("y", center - h / 2)
                    .attr("width", x(q3) - x(q1))
                    .attr("height", h)
                    .attr("opacity", 0.5)
                    .style("fill", color[i]);

                // show median, min and max horizontal lines
                svg.selectAll("toto")
                    .data([min, q1, q3, max])
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

                svg.append("line")
                    .attr("y1", center - h / 2)
                    .attr("y2", center + h / 2)
                    .attr("x1", x(median))
                    .attr("x2", x(median))
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
</style>