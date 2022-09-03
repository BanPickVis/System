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
                    x2="640"
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
        
        <span id="roundselect">
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab"
            >
                {{ tab }}
            </button>
        </span>
        <svg
            id="player_hero_plot"
            width="640"
            height="675"
            >
            <component :is="currentTabComponent" class="tab" @sequenceChange="changedSequence"></component>
            <!-- <round id="round1" class="roundview" style="display: block;" />
            <round id="round2" class="roundview" style="display: block;" />
            <round id="round3" class="roundview" style="display: none;" />
            <round id="round4" class="roundview" style="display: none;" />
            <round id="round5" class="roundview" style="display: none;" /> -->
        </svg>
    </div>
</template>

<script>
// import teamJson from "../assets/json/team_player.json";
// import request from "common/utils/request.js";
import requesthelp from "common/utils/request.js";
import round1 from "@/components/round/round1.vue";
import round2 from "@/components/round/round2.vue";
import round3 from "@/components/round/round3.vue";
import round4 from "@/components/round/round4.vue";
import round5 from "@/components/round/round5.vue";
import round6 from "@/components/round/round6.vue";

export default {
    components:{
        round1,
        round2,
        round3,
        round4,
        round5,
        round6
    },
    props: {
        roundnow:{ type: String, default: "" },
        bon:{ type: String, default: "3" }
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
            player1: "Player 1",
            player2: "Player 2",

            seqchange:"true",

            nround:5,
            currentTab: "round1",
            tabs: ["round1","round2","round3"],
        };
    },
    computed: {
          team1: function() {
            return this.team1abbr;
          },
          team2: function() {
            return this.team2abbr;
          },
          currentTabComponent: function() {
            return this.currentTab;
          },
        },
    watch: {
        // seqchange(val){
            // this.changeSequencetoIndex(val);
            // console.log(val);
        // },
        bon(val,_){
            if (this.bon == "3"){
                this.tabs=["round1","round2","round3"];
            }
            if (this.bon == "5"){
                this.tabs=["round1","round2","round3","round4","round5"];
            }
            if (this.bon == "7"){
                this.tabs=["round1","round2","round3","round4","round5","round6","round7"];
            }
          },
        roundnow(val){
            // console.log(val);
            this.currentTab= val;
            // this.currentTab= "round1";
            // location.reload();
        },
        select_round(val){
            var block;
            for (var i=1;i<=this.nround;i++){
                block=document.getElementById("round"+i);
                if (block.style.display=="block"){
                    // console.log(block);
                    block.style.display="none";
                }
            }
            block=document.getElementById("round"+val);
            block.style.display="block";
            // console.log(block);
        },
        async select_team_1(val,_) {
            // console.log(val);
            var teamJson = await requesthelp.axiosGet('/loadData',{ name: val });
            // console.log(teamJson);
            this.teammember1 = teamJson["player"];
            this.team1abbr = teamJson["abbr"];
            this.player1=this.teammember1[0]['id'];
            this.player2=this.teammember2[0]['id'];
            this.plotPlayerName();
            this.changeTeam1(val);
        },
        async select_team_2(val,_) {
            // console.log(val);
            var teamJson = await requesthelp.axiosGet('/loadData',{ name: val });
            // console.log(teamJson);
            this.teammember2 = teamJson["player"];
            this.team2abbr = teamJson["abbr"];
            this.player1=this.teammember1[0]['id'];
            this.player2=this.teammember2[0]['id'];
            this.plotPlayerName();
            this.changeTeam2(val);
        },
        player1(val,_){
            // console.log(val);
            this.changePlayer1(val);
        },
        player2(val,_){
            // console.log(val);
            this.changePlayer2(val);
        }

    },
    mounted() {
        // this.plotPlayerName();
        // console.log(this.roundnow);
    },
    methods: {
        changedSequence(sequence_change){
            this.seqchange = sequence_change;
        },
        changeSequencetoIndex(sequence_change){
            // console.log(sequence_change);s
            this.$emit('sequenceChange', sequence_change); 
        },
        changePlayer1(name){
            this.$emit('handleChange1', name); 
        },
        changePlayer2(name){
            this.$emit('handleChange2', name); 
        },
        changeTeam1(name){
            this.$emit('teamChange1', name); 
        },
        changeTeam2(name){
            this.$emit('teamChange2', name); 
        },
        async plotPlayerName(){
            // console.log(data);
            // d3.select("#player_hero_plot").selectAll("text").remove();
            
            d3.select("#player_hero_plot").selectAll("text").remove();
            d3.select("#player_hero_plot").selectAll(".mybar").remove();
            const player_name_plot = d3.select("#player_hero_plot"),
                height = 100,
                width = 635;
            var temp=this;
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
                        .attr("font-size", "25")
                        .attr("id",this.teammember1[i]['id'])
                        .on("click",function(){
                            // console.log(temp.player1);
                            temp.player1=this.id;
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]['id'])
                        .attr("x", 510)
                        .attr("y",  height * i -5)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id",this.teammember2[i]['id'])
                        .on("click",function(){
                            // console.log(temp.player2);
                            temp.player2=this.id;
                        });
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
                        .attr("font-size", "25")
                        .attr("id",this.teammember1[i]['id'])
                        .on("click",function(){
                            // console.log(temp.player1);
                            temp.player1=this.id;
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]['id'])
                        .attr("x", 510)
                        .attr("y",  height * i -5 + 80)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id",this.teammember2[i]['id'])
                        .on("click",function(){
                            // console.log(temp.player2);
                            temp.player2=this.id;
                        });
                }
            }
            var team1_mem = [];
            var team2_mem = [];
            for (var j=0;j<5;j++){
                team1_mem[team1_mem.length]=this.teammember1[j]['id'];
                team2_mem[team2_mem.length]=this.teammember2[j]['id'];
            }
            // var timesvg = d3.select('#times');
            // console.log(team1_mem,team2_mem);
            var timedata = await requesthelp.axiosGet('/getTime',{ team1: JSON.stringify(team1_mem), team2: JSON.stringify(team2_mem) });
            console.log(timedata);

            if (timedata.length == 10){
                var temp_width = 100;
            var x = d3.scaleLinear()
            .range([0, temp_width])
            .domain([0, d3.max(timedata, function(d) { return d.total; })]);

            for (i=0;i<5;i++) {
                if (i<=2){
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +120)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#FCC6C6")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[i]["lose"]))
                    .attr("x", 330-x(timedata[i]["lose"]));
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +120)
                    .attr("height",40)
                    .attr("fill","#E6F2CD")
                    .attr("opacity",0.8)
                    .attr("width",0)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[i]["win"]))
                    .attr("x", 330-x(timedata[i]["lose"])-x(timedata[i]["win"]));
                player_name_plot
                    .append("line")
                    .attr("class","mybar")
                    .attr("x1", 330)
                    .attr("x2", 330)
                    .attr("y1",  height * i +110)
                    .attr("y2",  height * i +110)
                    .attr("stroke", "grey")
                    .attr("stroke-width", "3px")
                    .transition()
                    .duration(800)
                    .attr("y2",  height * i +170);
                }
                else{
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +200)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#FCC6C6")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("x", 330-x(timedata[i]["lose"]))
                    .attr("width",x(timedata[i]["lose"]));
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +200)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#E6F2CD")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[i]["win"]))
                    .attr("x", 330-x(timedata[i]["lose"])-x(timedata[i]["win"]));
                    player_name_plot
                    .append("line")
                    .attr("class","mybar")
                    .attr("x1", 330)
                    .attr("x2", 330)
                    .attr("y1",  height * i +190)
                    .attr("y2",  height * i +190)
                    .attr("stroke", "grey")
                    .attr("stroke-width", "3px")
                    .transition()
                    .duration(800)
                    .attr("y2",  height * i +250);
                }
            }
            for (j=5;j<10;j++) {
                i = j-5;
                if (i<=2){
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +120)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#FCC6C6")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[j]["lose"]));
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +120)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#E6F2CD")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("x", 330+x(timedata[j]["lose"]))
                    .attr("width",x(timedata[j]["win"]));
                player_name_plot
                    .append("line")
                    .attr("class","mybar")
                    .attr("x1", 330)
                    .attr("x2", 330)
                    .attr("y1",  height * i +110)
                    .attr("y2",  height * i +110)
                    .attr("stroke", "grey")
                    .attr("stroke-width", "3px")
                    .transition()
                    .duration(800)
                    .attr("y2",  height * i +170);
                }
                else{
                    player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +200)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#FCC6C6")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[j]["lose"]));
                player_name_plot
                    .append("rect")
                    .attr("class","mybar")
                    .attr("x", 330)
                    .attr("y", height * i +200)
                    .attr("width",0)
                    .attr("height",40)
                    .attr("fill","#E6F2CD")
                    .attr("opacity",0.8)
                    .transition()
                    .duration(800)
                    .attr("width",x(timedata[j]["win"]))
                    .attr("x", 330+x(timedata[j]["lose"]));
                player_name_plot
                    .append("line")
                    .attr("class","mybar")
                    .attr("x1", 330)
                    .attr("x2", 330)
                    .attr("y1",  height * i +190)
                    .attr("y2",  height * i +190)
                    .attr("stroke", "grey")
                    .attr("stroke-width", "3px")
                    .transition()
                    .duration(800)
                    .attr("y2",  height * i +250);
                }
            }

            }
        
            
            // this.changeParentName();
        },
        
    },
};
</script>
<style>
#times{
    position: absolute;
    width:45%;
    height: 67%;
    top:30%;
    left: 27.5%;
    background: beige;
}

.team_select {
    position: absolute;
    top: 9%;
    left: 28%;
    opacity: 100%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
div.el-select {
    padding: 0 10px 0 10px;
}

.membername {
    cursor: pointer;
}

#roundselect{
    position: absolute;
    right: 0.5%;
    top:0.25%;
}
</style>