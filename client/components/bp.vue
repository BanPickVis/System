<template>
    <div>
        <svg
            width="635"
            height="122"
            viewBox="0 0 635 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <!-- Gradient -->
            <path d="M0 0H635V122H0V0Z" fill="url(#paint0_linear_0_1)" />
            <rect
                x="21.7041"
                width="118.108"
                height="111.844"
                fill="url(#pattern_RNG_M)"
            />
            
            <rect
                x="490.593"
                width="117.994"
                height="111.736"
                fill="url(#pattern_estarpro)"
            />
            
            <defs>
                <pattern
                    id="pattern_RNG_M"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image_RNG_M"
                        transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)"
                    />
                </pattern>
                <pattern
                    id="pattern_estarpro"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image_estarpro"
                        transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)"
                    />
                </pattern>
                <linearGradient
                    id="paint0_linear_0_1"
                    x1="0"
                    y1="404.183"
                    x2="635"
                    y2="404.183"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#46A4E4" stop-opacity="0.5" />
                    <stop offset="0.0001" stop-color="#46A4E4" stop-opacity="0.5" />
                    <stop offset="0.5" stop-color="white" stop-opacity="0.37" />
                    <stop offset="1" stop-color="#F76060" stop-opacity="0.5" />
                </linearGradient>
                <image
                    id="image_RNG_M"
                    width="150"
                    height="160"
                    :href="require('../assets/image/team_icon/RNG.png')"
                />
                <image
                    id="image_estarpro"
                    width="150"
                    height="160"
                    :href="require('../assets/image/team_icon/eStarPro.png')"
                />
            </defs>

        </svg>

        <!--Team selector-->
        <span class="team_select">
            <el-select
                v-model="select_team_1"
                placeholder="Select"
                style="width: 120px"
            >
                <el-option
                    v-for="item in teams1"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            vs

            <el-select
                v-model="select_team_2"
                placeholder="Select"
                style="width: 120px"
            >
            <el-option
                v-for="item in teams2"
                :key="item"
                :label="item"
                :value="item"
            /></el-select>
        </span>
        <svg
            id="player_hero_plot"
            width="640"
            height="675"
            >
            <rect
                filter="url(#trans-shadow)"
                x="15"
                y="5"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="90"
                y="5"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />
            
            <image
                id="image_ban"
                x="50"
                y="40"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <image
                id="image_ban"
                x="125"
                y="40"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <rect
                filter="url(#trans-shadow)"
                x="475"
                y="5"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="550"
                y="5"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />
            
            <image
                id="image_ban"
                x="510"
                y="40"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <image
                id="image_ban"
                x="585"
                y="40"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <filter id="trans-shadow" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="3" dy="3"></feOffset>
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"></feGaussianBlur>
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
            </filter>

            <rect
                filter="url(#trans-shadow)"
                x="10"
                y="95"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="540"
                y="95"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="10"
                y="195"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="540"
                y="195"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="10"
                y="295"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="540"
                y="295"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

             <rect
                filter="url(#trans-shadow)"
                x="15"
                y="390"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="90"
                y="390"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />
            
            <image
                id="image_ban"
                x="50"
                y="425"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <image
                id="image_ban"
                x="125"
                y="425"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <rect
                filter="url(#trans-shadow)"
                x="475"
                y="390"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="550"
                y="390"
                rx="35"
                width="70"
                height="70"
                fill="#D9D9D9"
            />
            
            <image
                id="image_ban"
                x="510"
                y="425"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <image
                id="image_ban"
                x="585"
                y="425"
                width="40"
                height="40"
                :href="require('../assets/image/ban.png')"
            />

            <rect
                filter="url(#trans-shadow)"
                x="10"
                y="475"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="540"
                y="475"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="10"
                y="575"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />

            <rect
                filter="url(#trans-shadow)"
                x="540"
                y="575"
                rx="5"
                width="80"
                height="80"
                fill="#D9D9D9"
            />
        </svg>
    </div>
</template>

<script>

import teamJson from "../assets/json/team_player.json";
// import request from "common/utils/request.js";
import requesthelp from "common/utils/request.js";


export default {
    props: {
    },
    setup() {
        var teams1 = new Array(),
            teams2 = new Array();

        for (var i=0;i<18;i++){
            teams1[i] = teamJson[i]["team"];
            teams2[i] = teamJson[i]["team"];
        }

        return { teams1, teams2 };

    },
    data() {
        return {
            select_team_1: "上海RNG.M",
            select_team_2: "武汉eStarPro",
            teammember1 : teamJson[1]["player"],
            teammember2 : teamJson[0]["player"],
        };
    },
    watch: {
        select_team_1(val,_) {
            for (var i=0;i<18;i++){
                if (val == teamJson[i]["team"]){
                    this.teammember1 = teamJson[i]["player"];
                    this.plotPlayerName();
                    break;
                }
            }
        },
        select_team_2(val,_) {
            for (var i=0;i<18;i++){
                if (val == teamJson[i]["team"]){
                    this.teammember2 = teamJson[i]["player"];
                    this.plotPlayerName();
                    break;
                }
            }
        }
    },
    mounted() {
        this.plotPlayerName();

    },
    methods: {
        async plotPlayerName(){
            // var data = await HttpHelper.axiosPost("/api/loadData");
            var data = await requesthelp.axiosGet('/loadData',{ name: JSON.stringify(this.teammember1) });
            console.log(data);
            d3.select("#player_hero_plot").selectAll("text").remove();
            const player_name_plot = d3.select("#player_hero_plot"),
                height = 100,
                width = 635;
                        
            for (var i in d3.range(5)) {
                if (i<=2){
                    player_name_plot
                        .append("rect")
                        .attr("width",width)
                        .attr("height",height)
                        .attr("x",0)
                        .attr("y",height * i+85)
                        .attr("fill","transparent")
                        .attr("opacity", 0.5)
                        .on("mousemove",function(){
                            d3.select(this)
                            .attr("fill","url(#paint0_linear_0_1)");
                        })
                        .on("mouseleave",function(){
                            d3.select(this)
                            .attr("fill","transparent");
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember1[i]['id'])
                        .attr("x", 120)
                        .attr("y",  height * i -5)
                        .attr("dy", "150px")
                        .attr("text-anchor", "start")
                        .attr("fill", "black")
                        .attr("font-size", "25");
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]['id'])
                        .attr("x", 510)
                        .attr("y",  height * i -5)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25");
                }
                else{
                    player_name_plot
                        .append("rect")
                        .attr("width",width)
                        .attr("height",height)
                        .attr("x",0)
                        .attr("y",height * i + 165)
                        .attr("fill","transparent")
                        .attr("opacity", 0.5)
                        .on("mousemove",function(){
                            d3.select(this)
                            .attr("fill","url(#paint0_linear_0_1)");
                        })
                        .on("mouseleave",function(){
                            d3.select(this)
                            .attr("fill","transparent");
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember1[i]['id'])
                        .attr("x", 120)
                        .attr("y",  height * i - 5 +80)
                        .attr("dy", "150px")
                        .attr("text-anchor", "start")
                        .attr("fill", "black")
                        .attr("font-size", "25");
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]['id'])
                        .attr("x", 510)
                        .attr("y",  height * i -5 + 80)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25");
                }
            }
        }

    },
};
</script>


<style scoped>
.team_select {
    position: absolute;
    top: 10%;
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