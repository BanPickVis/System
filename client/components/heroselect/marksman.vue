<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/艾琳.jpg')" width=" 70" height=" 70" @click="select('艾琳')">
        <img :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img :src="require('../../assets/image/icon/成吉思汗.jpg')" width=" 70" height=" 70" @click="select('成吉思汗')">
        <img :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img :src="require('../../assets/image/icon/狄仁杰.jpg')" width=" 70" height=" 70" @click="select('狄仁杰')">
        <img :src="require('../../assets/image/icon/伽罗.jpg')" width=" 70" height=" 70" @click="select('伽罗')">
        <img :src="require('../../assets/image/icon/戈娅.jpg')" width=" 70" height=" 70" @click="select('戈娅')">
        <img :src="require('../../assets/image/icon/公孙离.jpg')" width=" 70" height=" 70" @click="select('公孙离')">
        <img :src="require('../../assets/image/icon/后羿.jpg')" width=" 70" height=" 70" @click="select('后羿')">
        <img :src="require('../../assets/image/icon/黄忠.jpg')" width=" 70" height=" 70" @click="select('黄忠')">
        <img :src="require('../../assets/image/icon/李元芳.jpg')" width=" 70" height=" 70" @click="select('李元芳')">
        <img :src="require('../../assets/image/icon/鲁班七号.jpg')" width=" 70" height=" 70" @click="select('鲁班七号')">
        <img :src="require('../../assets/image/icon/马可波罗.jpg')" width=" 70" height=" 70" @click="select('马可波罗')">
        <img :src="require('../../assets/image/icon/蒙犽.jpg')" width=" 70" height=" 70" @click="select('蒙犽')">
        <img :src="require('../../assets/image/icon/孙尚香.jpg')" width=" 70" height=" 70" @click="select('孙尚香')">
        <img :src="require('../../assets/image/icon/虞姬.jpg')" width=" 70" height=" 70" @click="select('虞姬')">
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