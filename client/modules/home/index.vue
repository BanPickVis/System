<template>
    <div>
        <div class="bp_view">
            <b>BP View</b>
            <bp />
        </div>
        <div class="seq_view">
            <b>Sequence View</b>
            <seq />
        </div>
        <div class="player_view">
            <b>Player View</b>
            <player name1="虔诚" name2="花海" />
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
                        &nbsp; Blue Side:
                        <el-select
                            v-model="blue_value"
                            multiple
                            placeholder="Select"
                            style="width: 300px"
                        >
                            <el-option
                                v-for="item in blue_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                        <br />
                        &nbsp; Red Side:&nbsp;
                        <el-select
                            v-model="red_value"
                            multiple
                            placeholder="Select"
                            style="width: 300px"
                        >
                            <el-option
                                v-for="item in red_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
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
                        ><template #prepend>
                            <el-button :icon="Search" /> </template
                        ><template #append>
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
                        </template> </el-input
                    ><br />
                    <!-- <img :src="img2" /> -->
                    <word-cloud :keyWords="cloud_words" /> </el-col
            ></el-row>
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

    border: 0.981508px solid #000000;
    border-radius: 15px;
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
    width: 41.17%;
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
    width: 31.56%;
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
</style>