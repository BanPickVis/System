<template>
    <div class="herolist')">
        <img :src="require('../../assets/image/icon/安琪拉.jpg')" width=" 70" height=" 70" @click="select('安琪拉')">
        <img :src="require('../../assets/image/icon/扁鹊.jpg')" width=" 70" height=" 70" @click="select('扁鹊')">
        <img :src="require('../../assets/image/icon/不知火舞.jpg')" width=" 70" height=" 70" @click="select('不知火舞')">
        <img :src="require('../../assets/image/icon/嫦娥.jpg')" width=" 70" height=" 70" @click="select('嫦娥')">
        <img :src="require('../../assets/image/icon/妲己.jpg')" width=" 70" height=" 70" @click="select('妲己')">
        <img :src="require('../../assets/image/icon/貂蝉.jpg')" width=" 70" height=" 70" @click="select('貂蝉')">
        <img :src="require('../../assets/image/icon/干将莫邪.jpg')" width=" 70" height=" 70" @click="select('干将莫邪')">
        <img :src="require('../../assets/image/icon/高渐离.jpg')" width=" 70" height=" 70" @click="select('高渐离')">
        <img :src="require('../../assets/image/icon/姜子牙.jpg')" width=" 70" height=" 70" @click="select('姜子牙')">
        <img :src="require('../../assets/image/icon/金蝉.jpg')" width=" 70" height=" 70" @click="select('金蝉')">
        <img :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img :src="require('../../assets/image/icon/米莱狄.jpg')" width=" 70" height=" 70" @click="select('米莱狄')">
        <img :src="require('../../assets/image/icon/芈月.jpg')" width=" 70" height=" 70" @click="select('芈月')">
        <img :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img :src="require('../../assets/image/icon/女娲.jpg')" width=" 70" height=" 70" @click="select('女娲')">
        <img :src="require('../../assets/image/icon/上官婉儿.jpg')" width=" 70" height=" 70" @click="select('上官婉儿')">
        <img :src="require('../../assets/image/icon/沈梦溪.jpg')" width=" 70" height=" 70" @click="select('沈梦溪')">
        <img :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img :src="require('../../assets/image/icon/司马懿.jpg')" width=" 70" height=" 70" @click="select('司马懿')">
        <img :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img :src="require('../../assets/image/icon/王昭君.jpg')" width=" 70" height=" 70" @click="select('王昭君')">
        <img :src="require('../../assets/image/icon/武则天.jpg')" width=" 70" height=" 70" @click="select('武则天')">
        <img :src="require('../../assets/image/icon/西施.jpg')" width=" 70" height=" 70" @click="select('西施')">
        <img :src="require('../../assets/image/icon/小乔.jpg')" width=" 70" height=" 70" @click="select('小乔')">
        <img :src="require('../../assets/image/icon/杨玉环.jpg')" width=" 70" height=" 70" @click="select('杨玉环')">
        <img :src="require('../../assets/image/icon/弈星.jpg')" width=" 70" height=" 70" @click="select('弈星')">
        <img :src="require('../../assets/image/icon/嬴政.jpg')" width=" 70" height=" 70" @click="select('嬴政')">
        <img :src="require('../../assets/image/icon/张良.jpg')" width=" 70" height=" 70" @click="select('张良')">
        <img :src="require('../../assets/image/icon/甄姬.jpg')" width=" 70" height=" 70" @click="select('甄姬')">
        <img :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
        <img :src="require('../../assets/image/icon/周瑜.jpg')" width=" 70" height=" 70" @click="select('周瑜')">
        <img :src="require('../../assets/image/icon/诸葛亮.jpg')" width=" 70" height=" 70" @click="select('诸葛亮')">
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