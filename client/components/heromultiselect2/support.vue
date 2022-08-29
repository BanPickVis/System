<template>
    <div class="herolistmulti2">
        <img id="select2蔡文姬" :src="require('../../assets/image/icon/蔡文姬.jpg')" width=" 70" height=" 70" @click="select('蔡文姬')">
        <img id="select2大乔" :src="require('../../assets/image/icon/大乔.jpg')" width=" 70" height=" 70" @click="select('大乔')">
        <img id="select2东皇太一" :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img id="select2盾山" :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img id="select2鬼谷子" :src="require('../../assets/image/icon/鬼谷子.jpg')" width=" 70" height=" 70" @click="select('鬼谷子')">
        <img id="select2刘禅" :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img id="select2鲁班大师" :src="require('../../assets/image/icon/鲁班大师.jpg')" width=" 70" height=" 70" @click="select('鲁班大师')">
        <img id="select2明世隐" :src="require('../../assets/image/icon/明世隐.jpg')" width=" 70" height=" 70" @click="select('明世隐')">
        <img id="select2牛魔" :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img id="select2桑启" :src="require('../../assets/image/icon/桑启.jpg')" width=" 70" height=" 70" @click="select('桑启')">
        <img id="select2苏烈" :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img id="select2孙膑" :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img id="select2太乙真人" :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img id="select2瑶" :src="require('../../assets/image/icon/瑶.jpg')" width=" 70" height=" 70" @click="select('瑶')">
        <img id="select2张飞" :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img id="select2钟馗" :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
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