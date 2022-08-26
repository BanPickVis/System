<template>
    <div class="herolist')">
        <img :src="require('../../assets/image/icon/阿轲.jpg')" width=" 70" height=" 70" @click="select('阿轲')">
        <img :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img :src="require('../../assets/image/icon/百里玄策.jpg')" width=" 70" height=" 70" @click="select('百里玄策')">
        <img :src="require('../../assets/image/icon/不知火舞.jpg')" width=" 70" height=" 70" @click="select('不知火舞')">
        <img :src="require('../../assets/image/icon/貂蝉.jpg')" width=" 70" height=" 70" @click="select('貂蝉')">
        <img :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img :src="require('../../assets/image/icon/韩信.jpg')" width=" 70" height=" 70" @click="select('韩信')">
        <img :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img :src="require('../../assets/image/icon/镜.jpg')" width=" 70" height=" 70" @click="select('镜')">
        <img :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img :src="require('../../assets/image/icon/兰陵王.jpg')" width=" 70" height=" 70" @click="select('兰陵王')">
        <img :src="require('../../assets/image/icon/澜.jpg')" width=" 70" height=" 70" @click="select('澜')">
        <img :src="require('../../assets/image/icon/李白.jpg')" width=" 70" height=" 70" @click="select('李白')">
        <img :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img :src="require('../../assets/image/icon/娜可露露.jpg')" width=" 70" height=" 70" @click="select('娜可露露')">
        <img :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img :src="require('../../assets/image/icon/上官婉儿.jpg')" width=" 70" height=" 70" @click="select('上官婉儿')">
        <img :src="require('../../assets/image/icon/司马懿.jpg')" width=" 70" height=" 70" @click="select('司马懿')">
        <img :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img :src="require('../../assets/image/icon/元歌.jpg')" width=" 70" height=" 70" @click="select('元歌')">
        <img :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
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