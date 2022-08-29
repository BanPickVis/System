<template>
    <div class="herolistmulti2">
        <img id="select2艾琳" :src="require('../../assets/image/icon/艾琳.jpg')" width=" 70" height=" 70" @click="select('艾琳')">
        <img id="select2百里守约" :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img id="select2成吉思汗" :src="require('../../assets/image/icon/成吉思汗.jpg')" width=" 70" height=" 70" @click="select('成吉思汗')">
        <img id="select2程咬金" :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img id="select2狄仁杰" :src="require('../../assets/image/icon/狄仁杰.jpg')" width=" 70" height=" 70" @click="select('狄仁杰')">
        <img id="select2伽罗" :src="require('../../assets/image/icon/伽罗.jpg')" width=" 70" height=" 70" @click="select('伽罗')">
        <img id="select2戈娅" :src="require('../../assets/image/icon/戈娅.jpg')" width=" 70" height=" 70" @click="select('戈娅')">
        <img id="select2公孙离" :src="require('../../assets/image/icon/公孙离.jpg')" width=" 70" height=" 70" @click="select('公孙离')">
        <img id="select2后羿" :src="require('../../assets/image/icon/后羿.jpg')" width=" 70" height=" 70" @click="select('后羿')">
        <img id="select2黄忠" :src="require('../../assets/image/icon/黄忠.jpg')" width=" 70" height=" 70" @click="select('黄忠')">
        <img id="select2李元芳" :src="require('../../assets/image/icon/李元芳.jpg')" width=" 70" height=" 70" @click="select('李元芳')">
        <img id="select2鲁班七号" :src="require('../../assets/image/icon/鲁班七号.jpg')" width=" 70" height=" 70" @click="select('鲁班七号')">
        <img id="select2马可波罗" :src="require('../../assets/image/icon/马可波罗.jpg')" width=" 70" height=" 70" @click="select('马可波罗')">
        <img id="select2蒙犽" :src="require('../../assets/image/icon/蒙犽.jpg')" width=" 70" height=" 70" @click="select('蒙犽')">
        <img id="select2孙尚香" :src="require('../../assets/image/icon/孙尚香.jpg')" width=" 70" height=" 70" @click="select('孙尚香')">
        <img id="select2虞姬" :src="require('../../assets/image/icon/虞姬.jpg')" width=" 70" height=" 70" @click="select('虞姬')">
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