<template>
    <div class="herolistmulti2">
        <img id="select2阿古朵" :src="require('../../assets/image/icon/阿古朵.jpg')" width=" 70" height=" 70" @click="select('阿古朵')">
        <img id="select2白起" :src="require('../../assets/image/icon/白起.jpg')" width=" 70" height=" 70" @click="select('白起')">
        <img id="select2嫦娥" :src="require('../../assets/image/icon/嫦娥.jpg')" width=" 70" height=" 70" @click="select('嫦娥')">
        <img id="select2程咬金" :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img id="select2达摩" :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img id="select2东皇太一" :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img id="select2盾山" :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img id="select2铠" :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img id="select2廉颇" :src="require('../../assets/image/icon/廉颇.jpg')" width=" 70" height=" 70" @click="select('廉颇')">
        <img id="select2刘邦" :src="require('../../assets/image/icon/刘邦.jpg')" width=" 70" height=" 70" @click="select('刘邦')">
        <img id="select2刘禅" :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img id="select2吕布" :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img id="select2蒙恬" :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img id="select2芈月" :src="require('../../assets/image/icon/芈月.jpg')" width=" 70" height=" 70" @click="select('芈月')">
        <img id="select2牛魔" :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img id="select2苏烈" :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img id="select2孙策" :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img id="select2太乙真人" :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img id="select2夏侯惇" :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img id="select2项羽" :src="require('../../assets/image/icon/项羽.jpg')" width=" 70" height=" 70" @click="select('项羽')">
        <img id="select2亚瑟" :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img id="select2张飞" :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img id="select2钟无艳" :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
        <img id="select2猪八戒" :src="require('../../assets/image/icon/猪八戒.jpg')" width=" 70" height=" 70" @click="select('猪八戒')">
        <img id="select2庄周" :src="require('../../assets/image/icon/庄周.jpg')" width=" 70" height=" 70" @click="select('庄周')">
    </div>
</template>

<script>
import requesthelp from "common/utils/request.js";
export default ({
    props:{
    },
    setup() {
    },
    data(){
        return{
            selected_hero_array : []
        };
    },
    mounted() {
        this.default_change();
    },
    methods:{
        async default_change(){
            var selected_1 = await requesthelp.axiosGet('/multiSelect2');
            // console.log(selected_1);
            for (var i=0;i<selected_1.length;i++){
                var block=document.getElementById("select2"+selected_1[i]);
                if (block!=null){
                    block.style["border-width"]="8px";
                }
                this.selected_hero_array[this.selected_hero_array.length]=selected_1[i];
            }
        },
        heroselected(selected_hero_array){
            this.$emit('heroselected', selected_hero_array); 
        },
        select(hero_name){
            var flag = 0;
            var block;
            for (var i=0;i<this.selected_hero_array.length;i++){
                if (this.selected_hero_array[i]==hero_name){
                    flag = 1;
                    break;
                }
            }
            if (flag==1){
                this.selected_hero_array.splice(i,1);
                // console.log(this.selected_hero_array);
                block=document.getElementById("select2"+hero_name);
                // console.log(block);
                block.style["border-width"]="0px";
            }
            else{
                if (this.selected_hero_array.length < 5){
                    this.selected_hero_array[this.selected_hero_array.length]=hero_name;
                    // console.log(this.selected_hero_array);
                    block=document.getElementById("select2"+hero_name);
                    // console.log(block);
                    block.style["border-width"]="8px";
                }
            }
            this.heroselected(this.selected_hero_array);
        }

    },
});
</script>