<template>
    <div class="herolistmulti">
        <img id="select阿古朵" :src="require('../../assets/image/icon/阿古朵.jpg')" width="70" height="70" @click="select('阿古朵')">
        <img id="select阿轲" :src="require('../../assets/image/icon/阿轲.jpg')" width="70" height="70" @click="select('阿轲')">
        <img id="select艾琳" :src="require('../../assets/image/icon/艾琳.jpg')" width="70" height="70" @click="select('艾琳')">
        <img id="select白起" :src="require('../../assets/image/icon/白起.jpg')" width="70" height="70" @click="select('白起')">
        <img id="select安琪拉" :src="require('../../assets/image/icon/安琪拉.jpg')" width="70" height="70" @click="select('安琪拉')">
        <img id="select百里守约" :src="require('../../assets/image/icon/百里守约.jpg')" width="70" height="70" @click="select('百里守约')">
        <img id="select百里玄策" :src="require('../../assets/image/icon/百里玄策.jpg')" width="70" height="70" @click="select('百里玄策')">
        <img id="select扁鹊" :src="require('../../assets/image/icon/扁鹊.jpg')" width="70" height="70" @click="select('扁鹊')">
        <img id="select不知火舞" :src="require('../../assets/image/icon/不知火舞.jpg')" width="70" height="70" @click="select('不知火舞')">
        <img id="select蔡文姬" :src="require('../../assets/image/icon/蔡文姬.jpg')" width="70" height="70" @click="select('蔡文姬')">
        <img id="select曹操" :src="require('../../assets/image/icon/曹操.jpg')" width="70" height="70" @click="select('曹操')">
        <img id="select嫦娥" :src="require('../../assets/image/icon/嫦娥.jpg')" width="70" height="70" @click="select('嫦娥')">
        <img id="select成吉思汗" :src="require('../../assets/image/icon/成吉思汗.jpg')" width="70" height="70" @click="select('成吉思汗')">
        <img id="select程咬金" :src="require('../../assets/image/icon/程咬金.jpg')" width="70" height="70" @click="select('程咬金')">
        <img id="select达摩" :src="require('../../assets/image/icon/达摩.jpg')" width="70" height="70" @click="select('达摩')">
        <img id="select妲己" :src="require('../../assets/image/icon/妲己.jpg')" width="70" height="70" @click="select('妲己')">
        <img id="select大乔" :src="require('../../assets/image/icon/大乔.jpg')" width="70" height="70" @click="select('大乔')">
        <img id="select狄仁杰" :src="require('../../assets/image/icon/狄仁杰.jpg')" width="70" height="70" @click="select('狄仁杰')">
        <img id="select典韦" :src="require('../../assets/image/icon/典韦.jpg')" width="70" height="70" @click="select('典韦')">
        <img id="select貂蝉" :src="require('../../assets/image/icon/貂蝉.jpg')" width="70" height="70" @click="select('貂蝉')">
        <img id="select东皇太一" :src="require('../../assets/image/icon/东皇太一.jpg')" width="70" height="70" @click="select('东皇太一')">
        <img id="select盾山" :src="require('../../assets/image/icon/盾山.jpg')" width="70" height="70" @click="select('盾山')">
        <img id="select暃" :src="require('../../assets/image/icon/暃.jpg')" width="70" height="70" @click="select('暃')">
        <img id="select伽罗" :src="require('../../assets/image/icon/伽罗.jpg')" width="70" height="70" @click="select('伽罗')">
        <img id="select干将莫邪" :src="require('../../assets/image/icon/干将莫邪.jpg')" width="70" height="70" @click="select('干将莫邪')">
        <img id="select高渐离" :src="require('../../assets/image/icon/高渐离.jpg')" width="70" height="70" @click="select('高渐离')">
        <img id="select戈娅" :src="require('../../assets/image/icon/戈娅.jpg')" width="70" height="70" @click="select('戈娅')">
        <img id="select公孙离" :src="require('../../assets/image/icon/公孙离.jpg')" width="70" height="70" @click="select('公孙离')">
        <img id="select宫本武藏" :src="require('../../assets/image/icon/宫本武藏.jpg')" width="70" height="70" @click="select('宫本武藏')">
        <img id="select关羽" :src="require('../../assets/image/icon/关羽.jpg')" width="70" height="70" @click="select('关羽')">
        <img id="select鬼谷子" :src="require('../../assets/image/icon/鬼谷子.jpg')" width="70" height="70" @click="select('鬼谷子')">
        <img id="select韩信" :src="require('../../assets/image/icon/韩信.jpg')" width="70" height="70" @click="select('韩信')">
        <img id="select后羿" :src="require('../../assets/image/icon/后羿.jpg')" width="70" height="70" @click="select('后羿')">
        <img id="select花木兰" :src="require('../../assets/image/icon/花木兰.jpg')" width="70" height="70" @click="select('花木兰')">
        <img id="select黄忠" :src="require('../../assets/image/icon/黄忠.jpg')" width="70" height="70" @click="select('黄忠')">
        <img id="select姜子牙" :src="require('../../assets/image/icon/姜子牙.jpg')" width="70" height="70" @click="select('姜子牙')">
        <img id="select金蝉" :src="require('../../assets/image/icon/金蝉.jpg')" width="70" height="70" @click="select('金蝉')">
        <img id="select镜" :src="require('../../assets/image/icon/镜.jpg')" width="70" height="70" @click="select('镜')">
        <img id="select橘右京" :src="require('../../assets/image/icon/橘右京.jpg')" width="70" height="70" @click="select('橘右京')">
        <img id="select铠" :src="require('../../assets/image/icon/铠.jpg')" width="70" height="70" @click="select('铠')">
        <img id="select狂铁" :src="require('../../assets/image/icon/狂铁.jpg')" width="70" height="70" @click="select('狂铁')">
        <img id="select兰陵王" :src="require('../../assets/image/icon/兰陵王.jpg')" width="70" height="70" @click="select('兰陵王')">
        <img id="select澜" :src="require('../../assets/image/icon/澜.jpg')" width="70" height="70" @click="select('澜')">
        <img id="select老夫子" :src="require('../../assets/image/icon/老夫子.jpg')" width="70" height="70" @click="select('老夫子')">
        <img id="select李白" :src="require('../../assets/image/icon/李白.jpg')" width="70" height="70" @click="select('李白')">
        <img id="select李信" :src="require('../../assets/image/icon/李信.jpg')" width="70" height="70" @click="select('李信')">
        <img id="select李元芳" :src="require('../../assets/image/icon/李元芳.jpg')" width="70" height="70" @click="select('李元芳')">
        <img id="select廉颇" :src="require('../../assets/image/icon/廉颇.jpg')" width="70" height="70" @click="select('廉颇')">
        <img id="select刘邦" :src="require('../../assets/image/icon/刘邦.jpg')" width="70" height="70" @click="select('刘邦')">
        <img id="select刘备" :src="require('../../assets/image/icon/刘备.jpg')" width="70" height="70" @click="select('刘备')">
        <img id="select刘禅" :src="require('../../assets/image/icon/刘禅.jpg')" width="70" height="70" @click="select('刘禅')">
        <img id="select露娜" :src="require('../../assets/image/icon/露娜.jpg')" width="70" height="70" @click="select('露娜')">
        <img id="select鲁班大师" :src="require('../../assets/image/icon/鲁班大师.jpg')" width="70" height="70" @click="select('鲁班大师')">
        <img id="select鲁班七号" :src="require('../../assets/image/icon/鲁班七号.jpg')" width="70" height="70" @click="select('鲁班七号')">
        <img id="select吕布" :src="require('../../assets/image/icon/吕布.jpg')" width="70" height="70" @click="select('吕布')">
        <img id="select马超" :src="require('../../assets/image/icon/马超.jpg')" width="70" height="70" @click="select('马超')">
        <img id="select马可波罗" :src="require('../../assets/image/icon/马可波罗.jpg')" width="70" height="70" @click="select('马可波罗')">
        <img id="select蒙恬" :src="require('../../assets/image/icon/蒙恬.jpg')" width="70" height="70" @click="select('蒙恬')">
        <img id="select蒙犽" :src="require('../../assets/image/icon/蒙犽.jpg')" width="70" height="70" @click="select('蒙犽')">
        <img id="select梦奇" :src="require('../../assets/image/icon/梦奇.jpg')" width="70" height="70" @click="select('梦奇')">
        <img id="select米莱狄" :src="require('../../assets/image/icon/米莱狄.jpg')" width="70" height="70" @click="select('米莱狄')">
        <img id="select芈月" :src="require('../../assets/image/icon/芈月.jpg')" width="70" height="70" @click="select('芈月')">
        <img id="select明世隐" :src="require('../../assets/image/icon/明世隐.jpg')" width="70" height="70" @click="select('明世隐')">
        <img id="select墨子" :src="require('../../assets/image/icon/墨子.jpg')" width="70" height="70" @click="select('墨子')">
        <img id="select哪吒" :src="require('../../assets/image/icon/哪吒.jpg')" width="70" height="70" @click="select('哪吒')">
        <img id="select娜可露露" :src="require('../../assets/image/icon/娜可露露.jpg')" width="70" height="70" @click="select('娜可露露')">
        <img id="select牛魔" :src="require('../../assets/image/icon/牛魔.jpg')" width="70" height="70" @click="select('牛魔')">
        <img id="select女娲" :src="require('../../assets/image/icon/女娲.jpg')" width="70" height="70" @click="select('女娲')">
        <img id="select盘古" :src="require('../../assets/image/icon/盘古.jpg')" width="70" height="70" @click="select('盘古')">
        <img id="select裴擒虎" :src="require('../../assets/image/icon/裴擒虎.jpg')" width="70" height="70" @click="select('裴擒虎')">
        <img id="select桑启" :src="require('../../assets/image/icon/桑启.jpg')" width="70" height="70" @click="select('桑启')">
        <img id="select上官婉儿" :src="require('../../assets/image/icon/上官婉儿.jpg')" width="70" height="70" @click="select('上官婉儿')">
        <img id="select沈梦溪" :src="require('../../assets/image/icon/沈梦溪.jpg')" width="70" height="70" @click="select('沈梦溪')">
        <img id="select司空震" :src="require('../../assets/image/icon/司空震.jpg')" width="70" height="70" @click="select('司空震')">
        <img id="select司马懿" :src="require('../../assets/image/icon/司马懿.jpg')" width="70" height="70" @click="select('司马懿')">
        <img id="select苏烈" :src="require('../../assets/image/icon/苏烈.jpg')" width="70" height="70" @click="select('苏烈')">
        <img id="select孙膑" :src="require('../../assets/image/icon/孙膑.jpg')" width="70" height="70" @click="select('孙膑')">
        <img id="select孙策" :src="require('../../assets/image/icon/孙策.jpg')" width="70" height="70" @click="select('孙策')">
        <img id="select孙尚香" :src="require('../../assets/image/icon/孙尚香.jpg')" width="70" height="70" @click="select('孙尚香')">
        <img id="select孙悟空" :src="require('../../assets/image/icon/孙悟空.jpg')" width="70" height="70" @click="select('孙悟空')">
        <img id="select太乙真人" :src="require('../../assets/image/icon/太乙真人.jpg')" width="70" height="70" @click="select('太乙真人')">
        <img id="select王昭君" :src="require('../../assets/image/icon/王昭君.jpg')" width="70" height="70" @click="select('王昭君')">
        <img id="select武则天" :src="require('../../assets/image/icon/武则天.jpg')" width="70" height="70" @click="select('武则天')">
        <img id="select西施" :src="require('../../assets/image/icon/西施.jpg')" width="70" height="70" @click="select('西施')">
        <img id="select夏侯惇" :src="require('../../assets/image/icon/夏侯惇.jpg')" width="70" height="70" @click="select('夏侯惇')">
        <img id="select夏洛特" :src="require('../../assets/image/icon/夏洛特.jpg')" width="70" height="70" @click="select('夏洛特')">
        <img id="select项羽" :src="require('../../assets/image/icon/项羽.jpg')" width="70" height="70" @click="select('项羽')">
        <img id="select小乔" :src="require('../../assets/image/icon/小乔.jpg')" width="70" height="70" @click="select('小乔')">
        <img id="select雅典娜" :src="require('../../assets/image/icon/雅典娜.jpg')" width="70" height="70" @click="select('雅典娜')">
        <img id="select亚瑟" :src="require('../../assets/image/icon/亚瑟.jpg')" width="70" height="70" @click="select('亚瑟')">
        <img id="select杨戬" :src="require('../../assets/image/icon/杨戬.jpg')" width="70" height="70" @click="select('杨戬')">
        <img id="select杨玉环" :src="require('../../assets/image/icon/杨玉环.jpg')" width="70" height="70" @click="select('杨玉环')">
        <img id="select瑶" :src="require('../../assets/image/icon/瑶.jpg')" width="70" height="70" @click="select('瑶')">
        <img id="select曜" :src="require('../../assets/image/icon/曜.jpg')" width="70" height="70" @click="select('曜')">
        <img id="select弈星" :src="require('../../assets/image/icon/弈星.jpg')" width="70" height="70" @click="select('弈星')">
        <img id="select虞姬" :src="require('../../assets/image/icon/虞姬.jpg')" width="70" height="70" @click="select('虞姬')">
        <img id="select嬴政" :src="require('../../assets/image/icon/嬴政.jpg')" width="70" height="70" @click="select('嬴政')">
        <img id="select元歌" :src="require('../../assets/image/icon/元歌.jpg')" width="70" height="70" @click="select('元歌')">
        <img id="select云缨" :src="require('../../assets/image/icon/云缨.jpg')" width="70" height="70" @click="select('云缨')">
        <img id="select云中君" :src="require('../../assets/image/icon/云中君.jpg')" width="70" height="70" @click="select('云中君')">
        <img id="select张飞" :src="require('../../assets/image/icon/张飞.jpg')" width="70" height="70" @click="select('张飞')">
        <img id="select张良" :src="require('../../assets/image/icon/张良.jpg')" width="70" height="70" @click="select('张良')">
        <img id="select赵云" :src="require('../../assets/image/icon/赵云.jpg')" width="70" height="70" @click="select('赵云')">
        <img id="select甄姬" :src="require('../../assets/image/icon/甄姬.jpg')" width="70" height="70" @click="select('甄姬')">
        <img id="select钟馗" :src="require('../../assets/image/icon/钟馗.jpg')" width="70" height="70" @click="select('钟馗')">
        <img id="select钟无艳" :src="require('../../assets/image/icon/钟无艳.jpg')" width="70" height="70" @click="select('钟无艳')">
        <img id="select周瑜" :src="require('../../assets/image/icon/周瑜.jpg')" width="70" height="70" @click="select('周瑜')">
        <img id="select诸葛亮" :src="require('../../assets/image/icon/诸葛亮.jpg')" width="70" height="70" @click="select('诸葛亮')">
        <img id="select猪八戒" :src="require('../../assets/image/icon/猪八戒.jpg')" width="70" height="70" @click="select('猪八戒')">
        <img id="select庄周" :src="require('../../assets/image/icon/庄周.jpg')" width="70" height="70" @click="select('庄周')">
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
            var selected_1 = await requesthelp.axiosGet('/multiSelect1');
            console.log(selected_1);
            for (var i=0;i<selected_1.length;i++){
                var block=document.getElementById("select"+selected_1[i]);
                block.style["border-width"]="8px";
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

<style>
.herolistmulti {
    margin-top: 20px;
    margin-left: 20px;
    
}
.herolistmulti img {
    float: left;
    box-sizing: border-box;
    width: 70px;
    margin-bottom: 5px;
    margin-left: 5px;
    border-radius: 4px;
    border-image-width: 70px;
    border-style: solid;
    border-width: 0px;
    border-color: #46A4E4;

}
</style>