<template>
<div class="herolistmulti">
        <img id="select曹操" :src="require('../../assets/image/icon/曹操.jpg')" width=" 70" height=" 70" @click="select('曹操')">
        <img id="select程咬金" :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img id="select达摩" :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img id="select典韦" :src="require('../../assets/image/icon/典韦.jpg')" width=" 70" height=" 70" @click="select('典韦')">
        <img id="select暃" :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img id="select宫本武藏" :src="require('../../assets/image/icon/宫本武藏.jpg')" width=" 70" height=" 70" @click="select('宫本武藏')">
        <img id="select关羽" :src="require('../../assets/image/icon/关羽.jpg')" width=" 70" height=" 70" @click="select('关羽')">
        <img id="select花木兰" :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img id="select橘右京" :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img id="select铠" :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img id="select狂铁" :src="require('../../assets/image/icon/狂铁.jpg')" width=" 70" height=" 70" @click="select('狂铁')">
        <img id="select老夫子" :src="require('../../assets/image/icon/老夫子.jpg')" width=" 70" height=" 70" @click="select('老夫子')">
        <img id="select李信" :src="require('../../assets/image/icon/李信.jpg')" width=" 70" height=" 70" @click="select('李信')">
        <img id="select刘备" :src="require('../../assets/image/icon/刘备.jpg')" width=" 70" height=" 70" @click="select('刘备')">
        <img id="select露娜" :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img id="select吕布" :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img id="select马超" :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img id="select蒙恬" :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img id="select梦奇" :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img id="select墨子" :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img id="select哪吒" :src="require('../../assets/image/icon/哪吒.jpg')" width=" 70" height=" 70" @click="select('哪吒')">
        <img id="select盘古" :src="require('../../assets/image/icon/盘古.jpg')" width=" 70" height=" 70" @click="select('盘古')">
        <img id="select裴擒虎" :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img id="select司空震" :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img id="select孙策" :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img id="select孙悟空" :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img id="select夏侯惇" :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img id="select夏洛特" :src="require('../../assets/image/icon/夏洛特.jpg')" width=" 70" height=" 70" @click="select('夏洛特')">
        <img id="select雅典娜" :src="require('../../assets/image/icon/雅典娜.jpg')" width=" 70" height=" 70" @click="select('雅典娜')">
        <img id="select亚瑟" :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img id="select杨戬" :src="require('../../assets/image/icon/杨戬.jpg')" width=" 70" height=" 70" @click="select('杨戬')">
        <img id="select曜" :src="require('../../assets/image/icon/曜.jpg')" width=" 70" height=" 70" @click="select('曜')">
        <img id="select云缨" :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img id="select云中君" :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img id="select赵云" :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
        <img id="select钟无艳" :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
    </div>
</template>

<script>
import requesthelp from "common/utils/request.js";

export default ({
    props:{
        keywords:{type:Object, default:()=>{}}
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
            // var selected_1 = await requesthelp.axiosGet('/multiSelect1');
            
            // console.log(this.keywords);
            var selected_1=this.keywords;
            for (var i=0;i<selected_1.length;i++){
                var block=document.getElementById("select"+selected_1[i]);
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
                block=document.getElementById("select"+hero_name);
                // console.log(block);
                block.style["border-width"]="0px";
            }
            else{
                if (this.selected_hero_array.length < 5){
                    this.selected_hero_array[this.selected_hero_array.length]=hero_name;
                    // console.log(this.selected_hero_array);
                    block=document.getElementById("select"+hero_name);
                    // console.log(block);
                    block.style["border-width"]="8px";
                }
            }
            this.heroselected(this.selected_hero_array);
        }

    },
});
</script>