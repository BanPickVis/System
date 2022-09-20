<template>
    <div>
        <h1 id="title">
            BPCoach
        </h1>
        <div class="bp_view">
            <a>BP View</a>
            <bp :roundnow="roundDefault" :bon="bon" :round1seq="round1seq" :round2seq="round2seq" :round3seq="round3seq" :round4seq="round4seq" :round5seq="round5seq" :round6seq="round6seq" @yourteamside="teamsideselection"
                @handleChange1="changeName1" @handleChange2="changeName2" @teamChange1="changeTeam1" @teamChange2="changeTeam2" @teamChange1abbr="changeTeam1abbr" @teamChange2abbr="changeTeam2abbr" @seqSelection="select_num"
                @thisround="curround" />
        </div>
        <div class="seq_view">
            <a>Drafting Sequence View</a>
            <seq :change="sequencechanged" :bon="bon" :branch="n_of_b" :round1seq="round1seq" :round2seq="round2seq" :round3seq="round3seq" :round4seq="round4seq" :round5seq="round5seq" :round6seq="round6seq" :preview="n_of_p"
                :side="team_side" :team1="Team_1" :team2="Team_2" :allroundside="teamselection" :curround="round_num" />
        </div>
        <div class="player_view">
            <a>Player View</a>
            <player id="playerview" :playername1="Player_1" :playername2="Player_2" />
        </div>
        <div class="team_view">
            <a>Team View</a>
            <div style="font-family: 'Apple Braille';font-style: normal;font-weight: 400;font-size: 19.2982px;line-height: 10px;width: 500px;">
                &nbsp; Blue Side: &nbsp;
                <button class="radarselect" @click="selectheroes('blue')">
                    {{ keywords_blue_string }}
                </button>
                <br />
                <br />
                &nbsp; Red Side: &nbsp;&thinsp;
                <button class="radarselect" @click="selectheroes('red')">
                    {{ keywords_red_string }}
                </button>
            </div>
            <p style="line-height: 10px;">
                &nbsp; &nbsp; {{ radar_hint }}
            </p>

            <!-- radar plot -->
            <!-- <img :src="img1" />  -->
            <svg id="d3-radar-team" style="width: 450px" />

            &nbsp;&nbsp;&nbsp;
            <br />
            <word-cloud />
        </div>
        <div class="change_view">
            <a>In-game Change View</a><br />
            <change :team1="Team_1_abbr" :team2="Team_2_abbr" />
        </div>
        <div class="hero_glyph">
            <a>Hero View</a><br />
            <glyph />
        </div>

        <div class="control_panal">
            &nbsp; BO-N:
            <el-select v-model="bon" placeholder="Select" style="width: 90px">
                <el-option v-for="item in bon_select" :key="item" :label="item" :value="item" />
            </el-select>
            <br />
            &nbsp; Number of Default Branches:
            <el-select v-model="n_of_b" placeholder="Select" style="width: 90px">
                <el-option v-for="item in n_of_b_s" :key="item" :label="item" :value="item" />
            </el-select>
            <br />
            &nbsp; Number of Default Previews:
            <el-select v-model="n_of_p" placeholder="Select" style="width: 90px">
                <el-option v-for="item in n_of_p_s" :key="item" :label="item" :value="item" />
            </el-select>
        </div>

        <div id="selection_view">
            <heroS :numberseq="selected_sequence_num" :numberround="round_num" :round1seq="round1seq" :round2seq="round2seq" :round3seq="round3seq" :round4seq="round4seq" :round5seq="round5seq" :round6seq="round6seq"
                @sequenceChange="squenceChanging" @round1sequence="seqr1" @round2sequence="seqr2" @round3sequence="seqr3" @round4sequence="seqr4" @round5sequence="seqr5" @round6sequence="seqr6" />
        </div>
        <div id="multi_selection_view1" class="multi_selection_view1">
            <heroMS1 :keyword="keywords_blue" @heroselected1="keywordsel1" />
        </div>
        <div id="multi_selection_view2" class="multi_selection_view2">
            <heroMS2 :keyword="keywords_red" @heroselected2="keywordsel2" />
        </div>
        <span id="loader">
            <div id="loaderer"></div>
        </span>
    </div>
</template>
<script src="./script.js"></script>

<style>
a {
    font-size: 30px;
    padding: 10px;
    font-family: sans-serif;
    color: dimgrey;
}

#loader {
    position: absolute;
    width: 54.5%;
    height: 54%;
    top: 5.2%;
    right: 18.5%;
    background: #c6c6c6;
    opacity: 30%;
    display: none;
}
#loaderer {
    position: absolute;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    top: 40%;
    right: 45%;
    animation: spin 2s linear infinite;
    display: none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
#title {
    position: absolute;
    width: 5%;
    height: 3%;
    right: 13%;
    top: -0.5%;
    font-size: 35px;
    font-family: sans-serif;
}
.bp_view {
    /* BANPICK */
    box-sizing: border-box;

    position: absolute;
    width: 26%;
    height: 59%;
    left: 0.5%;
    top: 0.4%;

    border: 1px solid #9a9a9a;
    border-radius: 5px;
}
#selection_view {
    position: absolute;
    width: 23.5%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left: 100px;
    top: 100px;
    display: none;
}
#multi_selection_view1 {
    position: absolute;
    width: 23.5%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left: 950px;
    top: 520px;
    opacity: 1;
    display: none;
}
#multi_selection_view2 {
    position: absolute;
    width: 23%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left: 950px;
    top: 565px;
    display: none;
}
.seq_view {
    /* Sequence */
    box-sizing: border-box;

    position: absolute;
    width: 72%;
    height: 58.89%;
    left: 27%;
    top: 0.4%;

    border: 1px solid #9a9a9a;
    border-radius: 5px;
}
.player_view {
    /* Player */
    position: absolute;
    width: 26%;
    height: 38%;
    left: 0.5%;

    bottom: 2%;

    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 5px;
}
.team_view {
    /* Team */
    position: absolute;
    width: 30%;
    height: 38%;
    right: 30%;
    bottom: 2%;

    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 5px;
}
.hero_glyph {
    position: absolute;
    position: absolute;
    width: 12.8%;
    height: 38%;
    left: 27%;
    bottom: 2%;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 5px;
}
.change_view {
    /* Change */
    position: absolute;
    width: 28.5%;
    height: 38%;
    right: 1%;
    bottom: 2%;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 5px;
}
.control_panal {
    position: absolute;
    width: 17.2%;
    height: 8%;
    right: 1.2%;
    top: 5%;
    box-sizing: border-box;
    background: rgba(243, 243, 243, 0.5);
    font-size: 20px;
}

div.el-select {
    padding-top: 4px;
    padding-bottom: 2px;
}

button {
    color: #444444;
    background: #f3f3f3;
    border: 1px #dadada solid;
    padding: 6px 10px;
    border-radius: 2px;
    font-size: 12pt;
    outline: none;
    width: 50%;
}

button:hover {
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    color: #333333;
    background: #f7f7f7;
}

button:active {
    box-shadow: inset 1px 1px 1px #dfdfdf;
}
</style>