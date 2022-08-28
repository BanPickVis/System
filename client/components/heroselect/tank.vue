<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/阿古朵.jpg')" width=" 70" height=" 70" @click="select('阿古朵')">
        <img :src="require('../../assets/image/icon/白起.jpg')" width=" 70" height=" 70" @click="select('白起')">
        <img :src="require('../../assets/image/icon/嫦娥.jpg')" width=" 70" height=" 70" @click="select('嫦娥')">
        <img :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img :src="require('../../assets/image/icon/廉颇.jpg')" width=" 70" height=" 70" @click="select('廉颇')">
        <img :src="require('../../assets/image/icon/刘邦.jpg')" width=" 70" height=" 70" @click="select('刘邦')">
        <img :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img :src="require('../../assets/image/icon/芈月.jpg')" width=" 70" height=" 70" @click="select('芈月')">
        <img :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img :src="require('../../assets/image/icon/项羽.jpg')" width=" 70" height=" 70" @click="select('项羽')">
        <img :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
        <img :src="require('../../assets/image/icon/猪八戒.jpg')" width=" 70" height=" 70" @click="select('猪八戒')">
        <img :src="require('../../assets/image/icon/庄周.jpg')" width=" 70" height=" 70" @click="select('庄周')">
    </div>
</template>

<script>
import requesthelp from "common/utils/request.js";

export default ({
    setup() {
        
    },
    data(){
    },
    methods:{
        async select(hero){
            let seq_num = await requesthelp.axiosGet('/get_sequence_number');
            let block = document.getElementById("hero_sequence"+seq_num);
            console.log(block);
            block.style.fill = "url(#p"+hero+")";
            block = document.getElementById("selection_view");
            block.style.display = "none";
        }

    },
});
</script>