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
                    <stop
                        offset="0.0001"
                        stop-color="#46A4E4"
                        stop-opacity="0.5"
                    />
                    <stop offset="0.5" stop-color="white" stop-opacity="0.37" />
                    <stop offset="1" stop-color="#F76060" stop-opacity="0.5" />
                </linearGradient>
                <image
                    id="image_team1"
                    width="150"
                    height="160"
                    :href="
                        require('../assets/image/team_icon/' + team1 + '.png')
                    "
                />
                <image
                    id="image_team2"
                    width="150"
                    height="160"
                    :href="
                        require('../assets/image/team_icon/' + team2 + '.png')
                    "
                />
            </defs>
        </svg>
        <span class="team_blue">
            <input id="checkbox_blue" v-model="checked_blue" type="checkbox">
            <label for="checkbox_blue">Blue</label>
        </span>
        <span class="team_red">
            <input id="checkbox_red" v-model="checked_red" type="checkbox">
            <label for="checkbox_red">Red</label>
        </span>
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
        <svg id="player_hero_plot" width="640" height="675">
            <component
                :is="currentTabComponent"
                :seqr1="round1seq"
                :seqr2="round2seq"
                :seqr3="round3seq"
                :seqr4="round4seq"
                :seqr5="round5seq"
                :seqr6="round6seq"
                class="tab"
                @sequenceSelection="selectedSequence"
                @theround="roundthis"
            ></component>
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
    components: {
        round1,
        round2,
        round3,
        round4,
        round5,
        round6,
    },
    props: {
        roundnow: { type: String, default: "" },
        bon: { type: String, default: "3" },
        round1seq: { type: Object, default: () => {} },
        round2seq: { type: Object, default: () => {} },
        round3seq: { type: Object, default: () => {} },
        round4seq: { type: Object, default: () => {} },
        round5seq: { type: Object, default: () => {} },
        round6seq: { type: Object, default: () => {} },
        // [round1seq,round2seq]
    },
    setup() {
        // var teams1 = ['武汉eStarPro', '南京Hero久竞', '北京WB', 'XYG', '苏州KSG', '上海EDG.M', '重庆狼队', '佛山DRG.GK', '成都AG超玩会', '广州TTG', '济南RW侠', '厦门VG', '杭州LGD大鹅', '深圳DYG', '长沙TES.A', '西安WE', '上海RNG.M', '火豹'],
        // teams2 = ['武汉eStarPro', '南京Hero久竞', '北京WB', 'XYG', '苏州KSG', '上海EDG.M', '重庆狼队', '佛山DRG.GK', '成都AG超玩会', '广州TTG', '济南RW侠', '厦门VG', '杭州LGD大鹅', '深圳DYG', '长沙TES.A', '西安WE', '上海RNG.M', '火豹'];

        var teams1 = [
            "eStarPro",
            "Hero",
            "WB",
            "XYG",
            "KSG",
            "EDG",
            "Wolves",
            "DRG",
            "AG",
            "TTG",
            "RW",
            "VG",
            "LGD",
            "DYG",
            "TES",
            "WE",
            "RNG",
            "Fire",
        ];
        var teams2 = [
            "eStarPro",
            "Hero",
            "WB",
            "XYG",
            "KSG",
            "EDG",
            "Wolves",
            "DRG",
            "AG",
            "TTG",
            "RW",
            "VG",
            "LGD",
            "DYG",
            "TES",
            "WE",
            "RNG",
            "Fire",
        ];

        return { teams1, teams2 };
    },
    data() {
        return {
            select_team_1: "",
            select_team_2: "",
            team1abbr: "KPL",
            team2abbr: "KPL",
            teammember1: ["清清", "不然", "九尾", "钎城", "冰尘"],
            teammember2: ["坦然", "花海", "清融", "易峥", "子阳"],
            player1: "Player 1",
            player2: "Player 2",
            seqSelect: 0,
            nround: 5,
            currentTab: "round1",
            tabs: ["round1", "round2", "round3"],
            checked_red: false,
            checked_blue: false,
            teamside_selection:[0,0,0,0,0,0]
        };
    },
    computed: {
        team1: function () {
            return this.team1abbr;
        },
        team2: function () {
            return this.team2abbr;
        },
        currentTabComponent: function () {
            return this.currentTab;
        },
    },
    watch: {
        currentTab(val){
            this.checked_red=false;
            this.checked_blue=false;
            if (this.teamside_selection[parseInt(this.currentTab[5])-1]==1){
                this.checked_blue=true;
            }
            if (this.teamside_selection[parseInt(this.currentTab[5])-1]==2){
                this.checked_red=true;
            }
        },
        checked_blue(val){
            if (val==true){
                this.checked_red=false;
                this.teamside_selection[parseInt(this.currentTab[5])-1]=1;
                // console.log(this.teamside_selection);
                this.sideselection(this.teamside_selection);
            }
        },
        checked_red(val){
            if (val==true){
                this.checked_blue=false;
                this.teamside_selection[parseInt(this.currentTab[5])-1]=2;
                // console.log(this.teamside_selection);
                this.sideselection(this.teamside_selection);
            }
        },
        seqSelect(val) {},
        bon(val, _) {
            if (this.bon == "3") {
                this.tabs = ["round1", "round2", "round3"];
            }
            if (this.bon == "5") {
                this.tabs = ["round1", "round2", "round3", "round4", "round5"];
            }
            if (this.bon == "7") {
                this.tabs = [
                    "round1",
                    "round2",
                    "round3",
                    "round4",
                    "round5",
                    "round6",
                ];
            }
        },
        roundnow(val) {
            // console.log(val);
            this.currentTab = val;
            // this.currentTab= "round1";
            // location.reload();
        },
        select_round(val) {
            var block;
            for (var i = 1; i <= this.nround; i++) {
                block = document.getElementById("round" + i);
                if (block.style.display == "block") {
                    // console.log(block);
                    block.style.display = "none";
                }
            }
            block = document.getElementById("round" + val);
            block.style.display = "block";
            // console.log(block);
        },
        async select_team_1(val, _) {
            // console.log(val);/
            var teamJson = await requesthelp.axiosGet("/loadData", {
                name: val,
            });
            console.log("teamJson: ", teamJson);
            this.teammember1 = teamJson["player"];
            this.team1abbr = teamJson["abbr"];
            this.player1 = this.teammember1[0]["id"];
            this.player2 = this.teammember2[0]["id"];
            this.plotPlayerName();
            this.changeTeam1(teamJson["team"]);
            this.changeTeam1abbr(teamJson["abbr"]);
        },
        async select_team_2(val, _) {
            // console.log(val);
            var teamJson = await requesthelp.axiosGet("/loadData", {
                name: val,
            });
            // console.log(teamJson);
            this.teammember2 = teamJson["player"];
            this.team2abbr = teamJson["abbr"];
            this.player1 = this.teammember1[0]["id"];
            this.player2 = this.teammember2[0]["id"];
            this.plotPlayerName();
            this.changeTeam2(teamJson["team"]);
            this.changeTeam2abbr(teamJson["abbr"]);
        },
        player1(val, _) {
            // console.log(val);
            d3.selectAll('.name_text').attr("stroke-width",0);
            
            d3.select("#"+val).attr("stroke-width",2).attr("stroke","black");
            
            d3.select("#"+this.player2).attr("stroke-width",2).attr("stroke","black");
            this.changePlayer1(val);
        },
        player2(val, _) {
            d3.selectAll('.name_text').attr("stroke-width",0);
            
            d3.select("#"+val).attr("stroke-width",2).attr("stroke","black");
            
            d3.select("#"+this.player1).attr("stroke-width",2).attr("stroke","black");
            // console.log(val);
            this.changePlayer2(val);
        },
    },
    mounted() {
        // console.log(this.round1seq);
        // this.plotPlayerName();
        // console.log(this.roundnow);
    },
    methods: {
        roundthis(val) {
            // console.log("round",val);
            this.$emit("thisround", val);
        },
        sideselection(val) {
            // console.log("round",val);
            this.$emit("yourteamside", val);
        },
        selectedSequence(val) {
            // this.$emit('seqSelection', val);
            this.seqSelect = val;
            // console.log(val);
            this.$emit("seqSelection", val);
        },
        changePlayer1(name) {
            this.$emit("handleChange1", name);
        },
        changePlayer2(name) {
            this.$emit("handleChange2", name);
        },
        changeTeam1(name) {
            this.$emit("teamChange1", name);
        },
        changeTeam2(name) {
            this.$emit("teamChange2", name);
        },
        changeTeam1abbr(name) {
            this.$emit("teamChange1abbr", name);
        },
        changeTeam2abbr(name) {
            this.$emit("teamChange2abbr", name);
        },
        async plotPlayerName() {
            // console.log(data);
            // d3.select("#player_hero_plot").selectAll("text").remove();
            var tooltip = d3.select("body")
                .append("div")
                .style("opacity", 0)
                .attr("id", "bar_tooltip")
                .style("background-color", "black")
                .style("border-radius", "5px")
                .style("padding", "10px")
                .style("color", "white");

                function showTooltip(val) {
                    tooltip
                    .transition()
                    .duration(200);
                    tooltip
                    .style("opacity", 1)
                    .html(val)
                    .style("left",  event.pageX + 10 + "px")
                    .style("top",  event.pageY + 10 + "px");
                }
                var moveTooltip = function() {
                    tooltip
                    .style("left",  event.pageX + 10 + "px")
                    .style("top",  event.pageY + 10 + "px");};
                var hideTooltip = function() {
                    tooltip
                    .transition()
                    .duration(200)
                    .style("opacity", 0);
                };


            d3.select("#player_hero_plot").selectAll("text").remove();
            d3.select("#player_hero_plot").selectAll(".mybar").remove();
            const player_name_plot = d3.select("#player_hero_plot"),
                height = 100,
                width = 635;
            var temp = this;
            for (var i in d3.range(5)) {
                if (i <= 2) {
                    player_name_plot
                        .append("text")
                        .text(this.teammember1[i]["id"])
                        .attr("class","name_text")
                        .attr("x", 100)
                        .attr("y", height * i - 5)
                        .attr("dy", "150px")
                        .attr("text-anchor", "start")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id", this.teammember1[i]["id"])
                        .on("click", function () {
                            // console.log(temp.player1);
                            temp.player1 = this.id;
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]["id"])
                        .attr("class","name_text")
                        .attr("x", 530)
                        .attr("y", height * i - 5)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id", this.teammember2[i]["id"])
                        .on("click", function () {
                            // console.log(temp.player2);
                            temp.player2 = this.id;
                        });
                } else {
                    player_name_plot
                        .append("text")
                        .text(this.teammember1[i]["id"])
                        .attr("class","name_text")
                        .attr("x", 100)
                        .attr("y", height * i - 5 + 80)
                        .attr("dy", "150px")
                        .attr("text-anchor", "start")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id", this.teammember1[i]["id"])
                        .on("click", function () {
                            // console.log(temp.player1);
                            temp.player1 = this.id;
                        });
                    player_name_plot
                        .append("text")
                        .text(this.teammember2[i]["id"])
                        .attr("class","name_text")
                        .attr("x", 530)
                        .attr("y", height * i - 5 + 80)
                        .attr("dy", "150px")
                        .attr("text-anchor", "end")
                        .attr("fill", "black")
                        .attr("font-size", "25")
                        .attr("id", this.teammember2[i]["id"])
                        .on("click", function () {
                            // console.log(temp.player2);
                            temp.player2 = this.id;
                        });
                }
            }
            var team1_mem = [];
            var team2_mem = [];
            for (var j = 0; j < 5; j++) {
                team1_mem[team1_mem.length] = this.teammember1[j]["id"];
                team2_mem[team2_mem.length] = this.teammember2[j]["id"];
            }
            // var timesvg = d3.select('#times');
            // console.log(team1_mem,team2_mem);
            var timedata = await requesthelp.axiosGet("/getTime", {
                team1: JSON.stringify(team1_mem),
                team2: JSON.stringify(team2_mem),
            });
            console.log(timedata);

            if (timedata.length == 10) {
                var temp_width = 100;
                var x = d3
                    .scaleLinear()
                    .range([0, temp_width])
                    .domain([
                        0,
                        d3.max(timedata, function (d) {
                            return d.total;
                        }),
                    ]);

                for (i = 0; i < 5; i++) {
                    if (i <= 2) {
                        player_name_plot
                            .append("rect")
                            .datum(timedata[i]["lose"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 120)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#FCC6C6")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[i]["lose"]))
                            .attr("x", 330 - x(timedata[i]["lose"]));
                        player_name_plot
                            .append("rect")
                            .datum(timedata[i]["win"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 120)
                            .attr("height", 40)
                            .attr("fill", "#E6F2CD")
                            .attr("opacity", 0.8)
                            .attr("width", 0)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip )
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[i]["win"]))
                            .attr(
                                "x",
                                330 -
                                    x(timedata[i]["lose"]) -
                                    x(timedata[i]["win"])
                            );
                        player_name_plot
                            .append("line")
                            .attr("class", "mybar")
                            .attr("x1", 330)
                            .attr("x2", 330)
                            .attr("y1", height * i + 110)
                            .attr("y2", height * i + 110)
                            .attr("stroke", "grey")
                            .attr("stroke-width", "3px")
                            .transition()
                            .duration(800)
                            .attr("y2", height * i + 170);
                    } else {
                        player_name_plot
                            .append("rect")
                            .datum(timedata[i]["lose"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 200)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#FCC6C6")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("x", 330 - x(timedata[i]["lose"]))
                            .attr("width", x(timedata[i]["lose"]));
                        player_name_plot
                            .append("rect")
                            .datum(timedata[i]["win"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 200)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#E6F2CD")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[i]["win"]))
                            .attr(
                                "x",
                                330 -
                                    x(timedata[i]["lose"]) -
                                    x(timedata[i]["win"])
                            );
                        player_name_plot
                            .append("line")
                            .attr("class", "mybar")
                            .attr("x1", 330)
                            .attr("x2", 330)
                            .attr("y1", height * i + 190)
                            .attr("y2", height * i + 190)
                            .attr("stroke", "grey")
                            .attr("stroke-width", "3px")
                            .transition()
                            .duration(800)
                            .attr("y2", height * i + 250);
                    }
                }
                for (j = 5; j < 10; j++) {
                    i = j - 5;
                    if (i <= 2) {
                        player_name_plot
                            .append("rect")
                            .datum(timedata[j]["lose"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 120)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#FCC6C6")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[j]["lose"]));
                        player_name_plot
                            .append("rect")
                            .datum(timedata[j]["win"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 120)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#E6F2CD")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("x", 330 + x(timedata[j]["lose"]))
                            .attr("width", x(timedata[j]["win"]));
                        player_name_plot
                            .append("line")
                            .attr("class", "mybar")
                            .attr("x1", 330)
                            .attr("x2", 330)
                            .attr("y1", height * i + 110)
                            .attr("y2", height * i + 110)
                            .attr("stroke", "grey")
                            .attr("stroke-width", "3px")
                            .transition()
                            .duration(800)
                            .attr("y2", height * i + 170);
                    } else {
                        player_name_plot
                            .append("rect")
                            .datum(timedata[j]["lose"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 200)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#FCC6C6")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[j]["lose"]));
                        player_name_plot
                            .append("rect")
                            .datum(timedata[j]["win"])
                            .attr("class", "mybar")
                            .attr("x", 330)
                            .attr("y", height * i + 200)
                            .attr("width", 0)
                            .attr("height", 40)
                            .attr("fill", "#E6F2CD")
                            .attr("opacity", 0.8)
                            .on("mouseover", function(d,i){showTooltip(d);} )
                            .on("mousemove", moveTooltip)
                            .on("mouseleave", hideTooltip )
                            .transition()
                            .duration(800)
                            .attr("width", x(timedata[j]["win"]))
                            .attr("x", 330 + x(timedata[j]["lose"]));
                        player_name_plot
                            .append("line")
                            .attr("class", "mybar")
                            .attr("x1", 330)
                            .attr("x2", 330)
                            .attr("y1", height * i + 190)
                            .attr("y2", height * i + 190)
                            .attr("stroke", "grey")
                            .attr("stroke-width", "3px")
                            .transition()
                            .duration(800)
                            .attr("y2", height * i + 250);
                    }
                    player_name_plot
                        .append("rect")
                        .attr("x", 200)
                        .attr("y", 50)
                        .attr("width", 40)
                        .attr("height", 25)
                        .attr("opacity", 0.8)
                        .attr("fill", "#E6F2CD");
                    player_name_plot
                        .append("text")
                        .attr("x", 250)
                        .attr("y", 70)
                        .text("win")
                        .attr("font-size", 24);
                    player_name_plot
                        .append("rect")
                        .attr("x", 350)
                        .attr("y", 50)
                        .attr("width", 40)
                        .attr("height", 25)
                        .attr("opacity", 0.8)
                        .attr("fill", "#FCC6C6");
                    player_name_plot
                        .append("text")
                        .attr("x", 400)
                        .attr("y", 70)
                        .text("lose")
                        .attr("font-size", 24);
                }
            }

            // this.changeParentName();
        },
    },
};
</script>
<style>
#bar_tooltip{
    position: absolute;
}

#times {
    position: absolute;
    width: 45%;
    height: 67%;
    top: 30%;
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
.name_text{
    cursor: pointer;
}
.team_blue{
    position: absolute;
    left:30%;
    top:7%;
    width: auto;
}

.team_red{
    position: absolute;
    left:55%;
    top:7%;
    width: auto;
}
#roundselect {
    position: absolute;
    right: 0.5%;
    top: 0.25%;
}
</style>