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
                rx="60"
                fill="url(#pattern_team1)"
            />
            
            <rect
                x="490.593"
                width="117.994"
                height="111.736"
                rx="60"
                fill="url(#pattern_team2)"
            />
            
            <defs>
                <pattern
                    id="pattern_team1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image_team1"
                        transform="translate(0 -0.0280033) scale(0.00666667 0.00666667)"
                    />
                </pattern>
                <pattern
                    id="pattern_team2"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image_team2"
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
                    id="image_team1"
                    width="150"
                    height="160"
                    :href="require('../assets/image/team_icon/'+team1+'.png')"
                />
                <image
                    id="image_team2"
                    width="150"
                    height="160"
                    :href="require('../assets/image/team_icon/'+team2+'.png')"
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
            <round />
        </svg>

    </div>
</template>

<script>

// import teamJson from "../assets/json/team_player.json";
// import request from "common/utils/request.js";
import requesthelp from "common/utils/request.js";
import round from "@/components/round.vue";

export default {
    components:{
        round,
    },
    props: {
    },
    computed: {
          team1: function() {
            return this.team1abbr;
          },
          team2: function() {
            return this.team2abbr;
          },
          hero1: function() {
            return "貂蝉";
          }
        },
    setup() {
        var teams1 = ['武汉eStarPro', '南京Hero久竞', '北京WB', 'XYG', '苏州KSG', '上海EDG.M', '重庆狼队', '佛山DRG.GK', '成都AG超玩会', '广州TTG', '济南RW侠', '厦门VG', '杭州LGD大鹅', '深圳DYG', '长沙TES.A', '西安WE', '上海RNG.M', '火豹'],
        teams2 = ['武汉eStarPro', '南京Hero久竞', '北京WB', 'XYG', '苏州KSG', '上海EDG.M', '重庆狼队', '佛山DRG.GK', '成都AG超玩会', '广州TTG', '济南RW侠', '厦门VG', '杭州LGD大鹅', '深圳DYG', '长沙TES.A', '西安WE', '上海RNG.M', '火豹'];

        return { teams1, teams2 };

    },
    data() {
        return {
            select_team_1: "",
            select_team_2: "",
            team1abbr: "KPL",
            team2abbr: "KPL",
            teammember1 : ["清清", "不然", "九尾", "钎城", "冰尘"],
            teammember2 : ["坦然", "花海", "清融", "易峥", "子阳"],
        };
    },
    watch: {
        async select_team_1(val,_) {
            // console.log(val);
            var teamJson = await requesthelp.axiosGet('/loadData',{ name: val });
            // console.log(teamJson);
            this.teammember1 = teamJson["player"];
            this.team1abbr = teamJson["abbr"];
            this.plotPlayerName();
        },
        async select_team_2(val,_) {
            // console.log(val);
            var teamJson = await requesthelp.axiosGet('/loadData',{ name: val });
            // console.log(teamJson);
            this.teammember2 = teamJson["player"];
            this.team2abbr = teamJson["abbr"];
            this.plotPlayerName();
        }
    },
    mounted() {
        this.plotPlayerName();

    },
    methods: {
        plotPlayerName(){
            // console.log(data);
            d3.select("#player_hero_plot").selectAll("text").remove();
            const player_name_plot = d3.select("#player_hero_plot"),
                height = 100,
                width = 635;
                        
            for (var i in d3.range(5)) {
                if (i<=2){
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
        },
    },
};
</script>
<style>
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