<template>
    <div class="herolistmulti">
        <img id="select安琪拉" :src="require('../../assets/image/icon/安琪拉.jpg')" width=" 70" height=" 70" @click="select('安琪拉')">
        <img id="select扁鹊" :src="require('../../assets/image/icon/扁鹊.jpg')" width=" 70" height=" 70" @click="select('扁鹊')">
        <img id="select不知火舞" :src="require('../../assets/image/icon/不知火舞.jpg')" width=" 70" height=" 70" @click="select('不知火舞')">
        <img id="select嫦娥" :src="require('../../assets/image/icon/嫦娥.jpg')" width=" 70" height=" 70" @click="select('嫦娥')">
        <img id="select妲己" :src="require('../../assets/image/icon/妲己.jpg')" width=" 70" height=" 70" @click="select('妲己')">
        <img id="select貂蝉" :src="require('../../assets/image/icon/貂蝉.jpg')" width=" 70" height=" 70" @click="select('貂蝉')">
        <img id="select干将莫邪" :src="require('../../assets/image/icon/干将莫邪.jpg')" width=" 70" height=" 70" @click="select('干将莫邪')">
        <img id="select高渐离" :src="require('../../assets/image/icon/高渐离.jpg')" width=" 70" height=" 70" @click="select('高渐离')">
        <img id="select姜子牙" :src="require('../../assets/image/icon/姜子牙.jpg')" width=" 70" height=" 70" @click="select('姜子牙')">
        <img id="select金蝉" :src="require('../../assets/image/icon/金蝉.jpg')" width=" 70" height=" 70" @click="select('金蝉')">
        <img id="select露娜" :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img id="select梦奇" :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img id="select米莱狄" :src="require('../../assets/image/icon/米莱狄.jpg')" width=" 70" height=" 70" @click="select('米莱狄')">
        <img id="select芈月" :src="require('../../assets/image/icon/芈月.jpg')" width=" 70" height=" 70" @click="select('芈月')">
        <img id="select墨子" :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img id="select女娲" :src="require('../../assets/image/icon/女娲.jpg')" width=" 70" height=" 70" @click="select('女娲')">
        <img id="select上官婉儿" :src="require('../../assets/image/icon/上官婉儿.jpg')" width=" 70" height=" 70" @click="select('上官婉儿')">
        <img id="select沈梦溪" :src="require('../../assets/image/icon/沈梦溪.jpg')" width=" 70" height=" 70" @click="select('沈梦溪')">
        <img id="select司空震" :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img id="select司马懿" :src="require('../../assets/image/icon/司马懿.jpg')" width=" 70" height=" 70" @click="select('司马懿')">
        <img id="select孙膑" :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img id="select王昭君" :src="require('../../assets/image/icon/王昭君.jpg')" width=" 70" height=" 70" @click="select('王昭君')">
        <img id="select武则天" :src="require('../../assets/image/icon/武则天.jpg')" width=" 70" height=" 70" @click="select('武则天')">
        <img id="select西施" :src="require('../../assets/image/icon/西施.jpg')" width=" 70" height=" 70" @click="select('西施')">
        <img id="select小乔" :src="require('../../assets/image/icon/小乔.jpg')" width=" 70" height=" 70" @click="select('小乔')">
        <img id="select杨玉环" :src="require('../../assets/image/icon/杨玉环.jpg')" width=" 70" height=" 70" @click="select('杨玉环')">
        <img id="select弈星" :src="require('../../assets/image/icon/弈星.jpg')" width=" 70" height=" 70" @click="select('弈星')">
        <img id="select嬴政" :src="require('../../assets/image/icon/嬴政.jpg')" width=" 70" height=" 70" @click="select('嬴政')">
        <img id="select张良" :src="require('../../assets/image/icon/张良.jpg')" width=" 70" height=" 70" @click="select('张良')">
        <img id="select甄姬" :src="require('../../assets/image/icon/甄姬.jpg')" width=" 70" height=" 70" @click="select('甄姬')">
        <img id="select钟馗" :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
        <img id="select周瑜" :src="require('../../assets/image/icon/周瑜.jpg')" width=" 70" height=" 70" @click="select('周瑜')">
        <img id="select诸葛亮" :src="require('../../assets/image/icon/诸葛亮.jpg')" width=" 70" height=" 70" @click="select('诸葛亮')">
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