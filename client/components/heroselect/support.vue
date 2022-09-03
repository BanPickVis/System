<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/蔡文姬.jpg')" width=" 70" height=" 70" @click="select('蔡文姬')">
        <img :src="require('../../assets/image/icon/大乔.jpg')" width=" 70" height=" 70" @click="select('大乔')">
        <img :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img :src="require('../../assets/image/icon/鬼谷子.jpg')" width=" 70" height=" 70" @click="select('鬼谷子')">
        <img :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img :src="require('../../assets/image/icon/鲁班大师.jpg')" width=" 70" height=" 70" @click="select('鲁班大师')">
        <img :src="require('../../assets/image/icon/明世隐.jpg')" width=" 70" height=" 70" @click="select('明世隐')">
        <img :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img :src="require('../../assets/image/icon/桑启.jpg')" width=" 70" height=" 70" @click="select('桑启')">
        <img :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img :src="require('../../assets/image/icon/瑶.jpg')" width=" 70" height=" 70" @click="select('瑶')">
        <img :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
        <img :src="require('../../assets/image/icon/庄周.jpg')" width=" 70" height=" 70" @click="select('庄周')">
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