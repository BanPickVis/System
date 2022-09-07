<template>
    <div class="herolistmulti">
        <img id="select阿轲" :src="require('../../assets/image/icon/阿轲.jpg')" width=" 70" height=" 70" @click="select('阿轲')">
        <img id="select百里守约" :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img id="select百里玄策" :src="require('../../assets/image/icon/百里玄策.jpg')" width=" 70" height=" 70" @click="select('百里玄策')">
        <img id="select不知火舞" :src="require('../../assets/image/icon/不知火舞.jpg')" width=" 70" height=" 70" @click="select('不知火舞')">
        <img id="select貂蝉" :src="require('../../assets/image/icon/貂蝉.jpg')" width=" 70" height=" 70" @click="select('貂蝉')">
        <img id="select暃" :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img id="select韩信" :src="require('../../assets/image/icon/韩信.jpg')" width=" 70" height=" 70" @click="select('韩信')">
        <img id="select花木兰" :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img id="select镜" :src="require('../../assets/image/icon/镜.jpg')" width=" 70" height=" 70" @click="select('镜')">
        <img id="select橘右京" :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img id="select兰陵王" :src="require('../../assets/image/icon/兰陵王.jpg')" width=" 70" height=" 70" @click="select('兰陵王')">
        <img id="select澜" :src="require('../../assets/image/icon/澜.jpg')" width=" 70" height=" 70" @click="select('澜')">
        <img id="select李白" :src="require('../../assets/image/icon/李白.jpg')" width=" 70" height=" 70" @click="select('李白')">
        <img id="select马超" :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img id="select娜可露露" :src="require('../../assets/image/icon/娜可露露.jpg')" width=" 70" height=" 70" @click="select('娜可露露')">
        <img id="select裴擒虎" :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img id="select上官婉儿" :src="require('../../assets/image/icon/上官婉儿.jpg')" width=" 70" height=" 70" @click="select('上官婉儿')">
        <img id="selec司马懿" :src="require('../../assets/image/icon/司马懿.jpg')" width=" 70" height=" 70" @click="select('司马懿')">
        <img id="select孙悟空" :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img id="select元歌" :src="require('../../assets/image/icon/元歌.jpg')" width=" 70" height=" 70" @click="select('元歌')">
        <img id="select云缨" :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img id="select云中君" :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img id="select赵云" :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
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
            // console.log(selected_1);
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