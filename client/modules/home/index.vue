<template>
    <div>
        <h1 id="title">
            BPCoach
        </h1>
        <div class="bp_view">
            <b>BP View</b>
            <bp :roundnow="roundDefault" :bon="bon" @handleChange1="changeName1" @handleChange2="changeName2" @teamChange1="changeTeam1" @teamChange2="changeTeam2" @sequenceChange="squenceChanging" />
        </div>
        <div class="seq_view">
            <b>Sequence View</b>
            <seq :change="sequencechanged" :bon="bon" :branch="n_of_b" :preview="n_of_p" :side="team_side" />
        </div>
        <div class="player_view">
            <b>Player View</b>
            <player id="playerview" :playername1="Player_1" :playername2="Player_2" />
        </div>
        <div class="team_view">
            <b>Team View</b>
            <el-row :span="18">
                <!-- Team Radar Part -->
                <el-col :span="12">
                    <div
                        style="
                            font-family: 'Apple Braille';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 19.2982px;
                            line-height: 10px;
                        "
                    >
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
                </el-col>

                <!-- Team Wordcloud Part -->
                <el-col :span="10">
                    &nbsp;&nbsp;&nbsp;
                        <br />
                    <word-cloud /> 
                    </el-col>
            </el-row>
        </div>
        <div class="change_view">
            <b>In-game Change View</b><br />
            <change :team1="Team_1" :team2="Team_2" />
        </div>

        <div class="control_panal">
            &nbsp; Side of your team:
            <el-select
                v-model="team_side"
                placeholder="Select"
                style="width: 90px"
            >
                <el-option
                    v-for="item in teamside"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            <br />
            &nbsp; BO-N:
            <el-select
                v-model="bon"
                placeholder="Select"
                style="width: 90px"
            >
                <el-option
                    v-for="item in bon_select"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            <br />
            &nbsp; Number of Default Branches: 
            <el-select
                v-model="n_of_b"
                placeholder="Select"
                style="width: 90px"
            >
                <el-option
                    v-for="item in n_of_b_s"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
            <br />
            &nbsp; Number of Default Previews: 
            <el-select
                v-model="n_of_p"
                placeholder="Select"
                style="width: 90px"
            >
                <el-option
                    v-for="item in n_of_p_s"
                    :key="item"
                    :label="item"
                    :value="item"
                />
            </el-select>
        </div>

        <div id="selection_view">
            <heroS />
        </div>
        <div id="multi_selection_view1" class="multi_selection_view1">
            <heroMS1 @heroselected1="keywordsel1" />
        </div>
        <div id="multi_selection_view2" class="multi_selection_view2">
            <heroMS2 @heroselected2="keywordsel2" />
        </div>
        <span id = "loader">
            <div class="loader"></div>
        </span>
    </div>
</template>
<script src="./script.js"></script>

<style>
#loader{
    position: absolute;
    width: 56%;
    height: 54%;
    top:4%;
    right: 17%;
    background: #C6C6C6;
    opacity: 30%;
    display: none;
}
.loader {
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#title{
    position: absolute;
    width: 5%;
    height: 3%;
    right: 11%;
    top: 0%;
}
.bp_view {
    /* BANPICK */
    box-sizing: border-box;

    position: absolute;
    width: 24.96%;
    height: 58.61%;
    left: 0.4%;
    top: 0.4%;

    border: 1px solid #9a9a9a;
    border-radius: 15px;
}
#selection_view{
    position: absolute;
    width: 23%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:100px;
    top:100px;
    display:none;
}
#multi_selection_view1{
    position: absolute;
    width: 23.5%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:700px;
    top:550px;
    opacity:1;
    display:none;
}
#multi_selection_view2{
    position: absolute;
    width: 23%;
    height: 25%;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:700px;
    top:595px;
    display:none;
}
.seq_view {
    /* Sequence */
    box-sizing: border-box;

    position: absolute;
    width: 73.2%;
    height: 58.89%;
    right: 0.4%;
    top: 0.4%;

    border: 1px solid #9a9a9a;
    border-radius: 15px;
}
.player_view {
    /* Player */
    position: absolute;
    width: 25%;
    height: 39%;
    left: 0.4%;
    bottom: 0.4%;

    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 15px;
}
.team_view {
    /* Team */
    position: absolute;
    width: 43.5%;
    height: 39%;
    left: 26.21%;
    bottom: 0.4%;

    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 15px;
}
.change_view {
    /* Change */
    position: absolute;
    width: 29%;
    height: 39%;
    right: 0.4%;
    bottom: 0.4%;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 15px;
}
.control_panal{
    position: absolute;
    width: 16%;
    height: 10.5%;
    right: 0.4%;
    top: 5%;
    border-top: 1px solid #9a9a9a;
    border-bottom: 1px solid #9a9a9a;
    box-sizing: border-box;

    font-size: 20px;
}

div.el-select {
    padding-top: 2px;
    padding-bottom: 2px;
}

button {
    color: #444444;
    background: #F3F3F3;
    border: 1px #DADADA solid;
    padding: 6px 10px;
    border-radius: 2px;
    font-size: 12pt;
    outline: none;
    width: 60%;
}

button:hover {
    border: 1px #C6C6C6 solid;
    box-shadow: 1px 1px 1px #EAEAEA;
    color: #333333;
    background: #F7F7F7;
}

button:active {
    box-shadow: inset 1px 1px 1px #DFDFDF;   
}

</style>