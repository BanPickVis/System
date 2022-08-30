<template>
    <div>
        <div class="bp_view">
            <b>BP View</b>
            <bp @handleChange1="changeName1" @handleChange2="changeName2" @teamChange1="changeTeam1" @teamChange2="changeTeam2" />
        </div>
        <div class="seq_view">
            <b>Sequence View</b>
            <seq />
        </div>
        <div class="player_view">
            <b>Player View</b>
            <player id="playerview" :playername1="Player_1" :playername2="Player_2" />
        </div>
        <div class="team_view">
            <b>Team View</b><br />
            <el-row :span="24">
                <!-- Team Radar Part -->
                <el-col :span="12">
                    &nbsp;
                    <div
                        style="
                            font-family: 'Apple Braille';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 19.2982px;
                            line-height: 22px;
                        "
                    >
                        &nbsp; Blue Side: &nbsp;
                        <button class="radarselect" @click="selectheroes('blue')">{{ keywords_blue_string }}</button>
                        <br />
                        <br />
                        &nbsp; Red Side: &nbsp;&thinsp;
                        <button class="radarselect" @click="selectheroes('red')">{{ keywords_red_string }}</button>
                    </div>
                    <br />

                    <!-- radar plot -->
                    <!-- <img :src="img1" />  -->
                    <svg id="d3-radar-team" />
                </el-col>

                <!-- Team Wordcloud Part -->
                <el-col :span="12">
                    &nbsp;&nbsp;&nbsp;
                    <el-input
                        v-model="input3"
                        placeholder="Please input"
                        class="input-with-select"
                        >
                        <template #prepend>
                            <el-button :icon="Search" /> 
                            </template>
                        <template #append>
                            <el-select
                                v-model="cloud_value"
                                multiple
                                placeholder="Select"
                                style="width: 450px"
                            >
                                <el-option
                                    v-for="item in cloud_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </template> 
                        </el-input>
                        <br />
                    <!-- <img :src="img2" /> -->
                    <!-- <word-tag /> -->>
                    <word-cloud :keyWords="cloud_words" /> 
                    </el-col>
            </el-row>
        </div>
        <div class="change_view">
            <b>In-game Change View</b><br />
            <change-item
                id="zhangliang"
                change_txt="被动：新增效果：自身处于移速受损时，被动回复效果翻倍"
                arrow="down"
            />
            <change-plot />
            <change-item
                id="gongsunli"
                arrow="up"
                change_txt="二技能：子弹速度：4500 → 3500"
            />
            <change-item
                id="makeboluo"
                arrow="down"
                change_txt="一技能：加速效果：20% → 40%	 二技能：基础伤害：250(+40/Lv)(+0.4Ap) → 300(+48/Lv)(+0.48Ap)	 二技能：效果调整：重复命中效果衰减至50% → 25%"
            />
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
    </div>
</template>
<script src="./script.js"></script>

<style lang="less">
.bp_view {
    /* BANPICK */
    box-sizing: border-box;

    position: absolute;
    width: 24.96%;
    height: 58.61%;
    left: 0.4%;
    top: 0.4%;

    border: 1px solid #000000;
    border-radius: 15px;
}
#selection_view{
    position: absolute;
    width: 22%;
    height: 25%;
    border: 1px solid #000000;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:100px;
    top:100px;
    display:none;
}
#multi_selection_view1{
    position: absolute;
    width: 22%;
    height: 25%;
    border: 1px solid #000000;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:700px;
    top:565px;
    opacity:1;
    display:none;
}
#multi_selection_view2{
    position: absolute;
    width: 22%;
    height: 25%;
    border: 1px solid #000000;
    border-radius: 15px;
    overflow-x: auto;
    background: white;
    left:700px;
    top:615px;
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

    border: 0.982768px solid #000000;
    border-radius: 15px;
}
.player_view {
    /* Player */
    position: absolute;
    width: 25%;
    height: 38.68%;
    left: 0.4%;
    bottom: 0.4%;

    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}
.team_view {
    /* Team */
    position: absolute;
    width: 43.5%;
    height: 38.68%;
    left: 26.21%;
    bottom: 0.4%;

    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}
.change_view {
    /* Change */
    position: absolute;
    width: 29%;
    height: 38.68%;
    right: 0.4%;
    bottom: 0.4%;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}

div.el-select {
    padding-top: 5px;
    padding-bottom: 5px;
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

<!--word tag-->
.ti-input::-webkit-scrollbar {
    display: none;
}
.ti-input[data-v-61d92e31] {
    border: 1px solid #dfe4ed;
    overflow-x: scroll;
    flex-wrap: nowrap;
    width: 100%;
    border-radius: 4px;
    padding:1px;
}

.vue-tags-input[data-v-61d92e31] {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    /* width: 200px; */
    white-space: nowrap;
}

.ti-tags[data-v-61d92e31] {
    flex-wrap: nowrap;
}
</style>