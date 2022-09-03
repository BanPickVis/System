<template>
<div class="herolist">
        <img :src="require('../../assets/image/icon/曹操.jpg')" width=" 70" height=" 70" @click="select('曹操')">
        <img :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img :src="require('../../assets/image/icon/典韦.jpg')" width=" 70" height=" 70" @click="select('典韦')">
        <img :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img :src="require('../../assets/image/icon/宫本武藏.jpg')" width=" 70" height=" 70" @click="select('宫本武藏')">
        <img :src="require('../../assets/image/icon/关羽.jpg')" width=" 70" height=" 70" @click="select('关羽')">
        <img :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img :src="require('../../assets/image/icon/狂铁.jpg')" width=" 70" height=" 70" @click="select('狂铁')">
        <img :src="require('../../assets/image/icon/老夫子.jpg')" width=" 70" height=" 70" @click="select('老夫子')">
        <img :src="require('../../assets/image/icon/李信.jpg')" width=" 70" height=" 70" @click="select('李信')">
        <img :src="require('../../assets/image/icon/刘备.jpg')" width=" 70" height=" 70" @click="select('刘备')">
        <img :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img :src="require('../../assets/image/icon/哪吒.jpg')" width=" 70" height=" 70" @click="select('哪吒')">
        <img :src="require('../../assets/image/icon/盘古.jpg')" width=" 70" height=" 70" @click="select('盘古')">
        <img :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img :src="require('../../assets/image/icon/夏洛特.jpg')" width=" 70" height=" 70" @click="select('夏洛特')">
        <img :src="require('../../assets/image/icon/雅典娜.jpg')" width=" 70" height=" 70" @click="select('雅典娜')">
        <img :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img :src="require('../../assets/image/icon/杨戬.jpg')" width=" 70" height=" 70" @click="select('杨戬')">
        <img :src="require('../../assets/image/icon/曜.jpg')" width=" 70" height=" 70" @click="select('曜')">
        <img :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
        <img :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
    </div>
</template>

<script>
import requesthelp from "common/utils/request.js";

export default ({
    setup() {
        
    },
    data(){
        return{
            sequence_change: true,
        };
    },
    methods:{
        async select(hero){
            let seq_num = await requesthelp.axiosGet('/get_sequence_number');
            let block = document.getElementById("hero_sequence"+seq_num);
            console.log(block);
            block.style.fill = "url(#p"+hero+")";
            block = document.getElementById("selection_view");
            block.style.display = "none";
            this.sequence_change = !this.sequence_change;
            this.changeSequence(this.sequence_change);
        },
        
        changeSequence(sequence_change){
            // console.log(sequence_change);
            this.$emit('sequenceChange', sequence_change); 
        }

    },
});
</script>