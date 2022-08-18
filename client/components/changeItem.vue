<template>
    <svg
        :id="id"
        width="709"
        height="74"
        viewBox="0 0 709 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <!-- avatar -->
        <rect
            x="8"
            width="70"
            height="70"
            rx="36.9124"
            fill="url(#pattern_zhangliang)"
        />

        <!-- arrow -->
        <path
            id="arrow_up"
            d="M89.3892 21.3535L82.2854 33.6576L96.493 33.6576L89.3892 21.3535ZM88.1587 65.6484C88.1587 66.3279 88.7096 66.8788 89.3892 66.8788C90.0687 66.8788 90.6196 66.3279 90.6196 65.6484L88.1587 65.6484ZM88.1587 32.4272L88.1587 65.6484L90.6196 65.6484L90.6196 32.4272L88.1587 32.4272Z"
            fill="#46A4E4"
        />
        <path
            id="arrow_down"
            d="M89.8203 21.3272C89.8203 20.6477 89.2694 20.0968 88.5898 20.0968C87.9103 20.0968 87.3594 20.6477 87.3594 21.3272L89.8203 21.3272ZM88.5898 65.6221L95.6936 53.3179L81.4861 53.3179L88.5898 65.6221ZM87.3594 21.3272L87.3594 54.5484L89.8203 54.5484L89.8203 21.3272L87.3594 21.3272Z"
            fill="#F76060"
        />

        <!-- avatar -->
        <defs>
            <pattern
                    id="pattern_zhangliang"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        href="#image_zhangliang"
                        transform="translate(0 -0.0280033) scale(0.0111111 0.0117334)"
                    />
                </pattern>
        </defs>
    </svg>
</template>

<script>
import wrap from "../components/wrap.js";
export default {
    setup() {},
    props: {
        id: { type: String, default: "zhangliang" }, // class of svg
        img: { type: String, default: "avatar" },
        arrow: { type: String, default: "up" },
        change_txt: { type: String, default: "default change" },
    },
    data() {
        return {
            // change: "default change",
        };
    },
    mounted() {
        // text
            d3.select("#" + this.id).append('text')
            .attr('x',116)
            .attr('y',40)
            .attr("dy", '0.4em')
            .attr('fill',"#333333")
            .attr('font-family','Apple Braille')
            .attr('font-style','normal')
            .attr('font-weight','400')
            .attr('font-size','16.4055px')
            .attr('line-height','18px')
            .text(this.change_txt)
            .call(wrap, 600);

        // avatar
        const pattern = '#pattern_'+this.id;
        d3.select("#" + this.id).select('rect').attr('fill', "url("+pattern+")");

        // arrow
        if (this.arrow == "up") {
            d3.select("#" + this.id)
                .select("#arrow_up")
                .style("display", "inline");
            d3.select("#" + this.id)
                .select("#arrow_down")
                .style("display", "none");
        } else {
            d3.select("#" + this.id)
                .select("#arrow_down")
                .style("display", "inline");
            d3.select("#" + this.id)
                .select("#arrow_up")
                .style("display", "none");
        }
    },
};
</script>