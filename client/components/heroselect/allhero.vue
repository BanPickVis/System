<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/阿古朵.jpg')" width=" 70" height=" 70" @click="select('阿古朵')">
        <img :src="require('../../assets/image/icon/阿轲.jpg')" width=" 70" height=" 70" @click="select('阿轲')">
        <img :src="require('../../assets/image/icon/艾琳.jpg')" width=" 70" height=" 70" @click="select('艾琳')">
        <img :src="require('../../assets/image/icon/白起.jpg')" width=" 70" height=" 70" @click="select('白起')">
        <img :src="require('../../assets/image/icon/安琪拉.jpg')" width=" 70" height=" 70" @click="select('安琪拉')">
        <img :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img :src="require('../../assets/image/icon/百里玄策.jpg')" width=" 70" height=" 70" @click="select('百里玄策')">
        <img :src="require('../../assets/image/icon/扁鹊.jpg')" width=" 70" height=" 70" @click="select('扁鹊')">
        <img :src="require('../../assets/image/icon/不知火舞.jpg')" width=" 70" height=" 70" @click="select('不知火舞')">
        <img :src="require('../../assets/image/icon/蔡文姬.jpg')" width=" 70" height=" 70" @click="select('蔡文姬')">
        <img :src="require('../../assets/image/icon/曹操.jpg')" width=" 70" height=" 70" @click="select('曹操')">
        <img :src="require('../../assets/image/icon/嫦娥.jpg')" width=" 70" height=" 70" @click="select('嫦娥')">
        <img :src="require('../../assets/image/icon/成吉思汗.jpg')" width=" 70" height=" 70" @click="select('成吉思汗')">
        <img :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img :src="require('../../assets/image/icon/妲己.jpg')" width=" 70" height=" 70" @click="select('妲己')">
        <img :src="require('../../assets/image/icon/大乔.jpg')" width=" 70" height=" 70" @click="select('大乔')">
        <img :src="require('../../assets/image/icon/狄仁杰.jpg')" width=" 70" height=" 70" @click="select('狄仁杰')">
        <img :src="require('../../assets/image/icon/典韦.jpg')" width=" 70" height=" 70" @click="select('典韦')">
        <img :src="require('../../assets/image/icon/貂蝉.jpg')" width=" 70" height=" 70" @click="select('貂蝉')">
        <img :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img :src="require('../../assets/image/icon/伽罗.jpg')" width=" 70" height=" 70" @click="select('伽罗')">
        <img :src="require('../../assets/image/icon/干将莫邪.jpg')" width=" 70" height=" 70" @click="select('干将莫邪')">
        <img :src="require('../../assets/image/icon/高渐离.jpg')" width=" 70" height=" 70" @click="select('高渐离')">
        <img :src="require('../../assets/image/icon/戈娅.jpg')" width=" 70" height=" 70" @click="select('戈娅')">
        <img :src="require('../../assets/image/icon/公孙离.jpg')" width=" 70" height=" 70" @click="select('公孙离')">
        <img :src="require('../../assets/image/icon/宫本武藏.jpg')" width=" 70" height=" 70" @click="select('宫本武藏')">
        <img :src="require('../../assets/image/icon/关羽.jpg')" width=" 70" height=" 70" @click="select('关羽')">
        <img :src="require('../../assets/image/icon/鬼谷子.jpg')" width=" 70" height=" 70" @click="select('鬼谷子')">
        <img :src="require('../../assets/image/icon/韩信.jpg')" width=" 70" height=" 70" @click="select('韩信')">
        <img :src="require('../../assets/image/icon/后羿.jpg')" width=" 70" height=" 70" @click="select('后羿')">
        <img :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img :src="require('../../assets/image/icon/黄忠.jpg')" width=" 70" height=" 70" @click="select('黄忠')">
        <img :src="require('../../assets/image/icon/姜子牙.jpg')" width=" 70" height=" 70" @click="select('姜子牙')">
        <img :src="require('../../assets/image/icon/金蝉.jpg')" width=" 70" height=" 70" @click="select('金蝉')">
        <img :src="require('../../assets/image/icon/镜.jpg')" width=" 70" height=" 70" @click="select('镜')">
        <img :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img :src="require('../../assets/image/icon/狂铁.jpg')" width=" 70" height=" 70" @click="select('狂铁')">
        <img :src="require('../../assets/image/icon/兰陵王.jpg')" width=" 70" height=" 70" @click="select('兰陵王')">
        <img :src="require('../../assets/image/icon/澜.jpg')" width=" 70" height=" 70" @click="select('澜')">
        <img :src="require('../../assets/image/icon/老夫子.jpg')" width=" 70" height=" 70" @click="select('老夫子')">
        <img :src="require('../../assets/image/icon/李白.jpg')" width=" 70" height=" 70" @click="select('李白')">
        <img :src="require('../../assets/image/icon/李信.jpg')" width=" 70" height=" 70" @click="select('李信')">
        <img :src="require('../../assets/image/icon/李元芳.jpg')" width=" 70" height=" 70" @click="select('李元芳')">
        <img :src="require('../../assets/image/icon/廉颇.jpg')" width=" 70" height=" 70" @click="select('廉颇')">
        <img :src="require('../../assets/image/icon/刘邦.jpg')" width=" 70" height=" 70" @click="select('刘邦')">
        <img :src="require('../../assets/image/icon/刘备.jpg')" width=" 70" height=" 70" @click="select('刘备')">
        <img :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img :src="require('../../assets/image/icon/鲁班大师.jpg')" width=" 70" height=" 70" @click="select('鲁班大师')">
        <img :src="require('../../assets/image/icon/鲁班七号.jpg')" width=" 70" height=" 70" @click="select('鲁班七号')">
        <img :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img :src="require('../../assets/image/icon/马可波罗.jpg')" width=" 70" height=" 70" @click="select('马可波罗')">
        <img :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img :src="require('../../assets/image/icon/蒙犽.jpg')" width=" 70" height=" 70" @click="select('蒙犽')">
        <img :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img :src="require('../../assets/image/icon/米莱狄.jpg')" width=" 70" height=" 70" @click="select('米莱狄')">
        <img :src="require('../../assets/image/icon/芈月.jpg')" width=" 70" height=" 70" @click="select('芈月')">
        <img :src="require('../../assets/image/icon/明世隐.jpg')" width=" 70" height=" 70" @click="select('明世隐')">
        <img :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img :src="require('../../assets/image/icon/哪吒.jpg')" width=" 70" height=" 70" @click="select('哪吒')">
        <img :src="require('../../assets/image/icon/娜可露露.jpg')" width=" 70" height=" 70" @click="select('娜可露露')">
        <img :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img :src="require('../../assets/image/icon/女娲.jpg')" width=" 70" height=" 70" @click="select('女娲')">
        <img :src="require('../../assets/image/icon/盘古.jpg')" width=" 70" height=" 70" @click="select('盘古')">
        <img :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img :src="require('../../assets/image/icon/桑启.jpg')" width=" 70" height=" 70" @click="select('桑启')">
        <img :src="require('../../assets/image/icon/上官婉儿.jpg')" width=" 70" height=" 70" @click="select('上官婉儿')">
        <img :src="require('../../assets/image/icon/沈梦溪.jpg')" width=" 70" height=" 70" @click="select('沈梦溪')">
        <img :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img :src="require('../../assets/image/icon/司马懿.jpg')" width=" 70" height=" 70" @click="select('司马懿')">
        <img :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img :src="require('../../assets/image/icon/孙尚香.jpg')" width=" 70" height=" 70" @click="select('孙尚香')">
        <img :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img :src="require('../../assets/image/icon/王昭君.jpg')" width=" 70" height=" 70" @click="select('王昭君')">
        <img :src="require('../../assets/image/icon/武则天.jpg')" width=" 70" height=" 70" @click="select('武则天')">
        <img :src="require('../../assets/image/icon/西施.jpg')" width=" 70" height=" 70" @click="select('西施')">
        <img :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img :src="require('../../assets/image/icon/夏洛特.jpg')" width=" 70" height=" 70" @click="select('夏洛特')">
        <img :src="require('../../assets/image/icon/项羽.jpg')" width=" 70" height=" 70" @click="select('项羽')">
        <img :src="require('../../assets/image/icon/小乔.jpg')" width=" 70" height=" 70" @click="select('小乔')">
        <img :src="require('../../assets/image/icon/雅典娜.jpg')" width=" 70" height=" 70" @click="select('雅典娜')">
        <img :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img :src="require('../../assets/image/icon/杨戬.jpg')" width=" 70" height=" 70" @click="select('杨戬')">
        <img :src="require('../../assets/image/icon/杨玉环.jpg')" width=" 70" height=" 70" @click="select('杨玉环')">
        <img :src="require('../../assets/image/icon/瑶.jpg')" width=" 70" height=" 70" @click="select('瑶')">
        <img :src="require('../../assets/image/icon/曜.jpg')" width=" 70" height=" 70" @click="select('曜')">
        <img :src="require('../../assets/image/icon/弈星.jpg')" width=" 70" height=" 70" @click="select('弈星')">
        <img :src="require('../../assets/image/icon/虞姬.jpg')" width=" 70" height=" 70" @click="select('虞姬')">
        <img :src="require('../../assets/image/icon/嬴政.jpg')" width=" 70" height=" 70" @click="select('嬴政')">
        <img :src="require('../../assets/image/icon/元歌.jpg')" width=" 70" height=" 70" @click="select('元歌')">
        <img :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img :src="require('../../assets/image/icon/张良.jpg')" width=" 70" height=" 70" @click="select('张良')">
        <img :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
        <img :src="require('../../assets/image/icon/甄姬.jpg')" width=" 70" height=" 70" @click="select('甄姬')">
        <img :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
        <img :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
        <img :src="require('../../assets/image/icon/周瑜.jpg')" width=" 70" height=" 70" @click="select('周瑜')">
        <img :src="require('../../assets/image/icon/诸葛亮.jpg')" width=" 70" height=" 70" @click="select('诸葛亮')">
        <img :src="require('../../assets/image/icon/猪八戒.jpg')" width=" 70" height=" 70" @click="select('猪八戒')">
        <img :src="require('../../assets/image/icon/庄周.jpg')" width=" 70" height=" 70" @click="select('庄周')">
    </div>
</template>

<script>
export default ({
    props:{
        seqnum:{ type: Number, default: 0 },
        roundnum:{ type: Number, default: 0 },
        round1seq:{type:Object, default:()=>{}},
        round2seq:{type:Object, default:()=>{}},
        round3seq:{type:Object, default:()=>{}},
        round4seq:{type:Object, default:()=>{}},
        round5seq:{type:Object, default:()=>{}},
        round6seq:{type:Object, default:()=>{}},
    },
    data() {
        return{
            sequence_change: true,
            round1:this.round1seq,
            round2:this.round2seq,
            round3:this.round3seq,
            round4:this.round4seq,
            round5:this.round5seq,
            round6:this.round6seq,
        };
    },
    methods:{
        async select(hero){
            // console.log(this.seqNum);
            // let seq_num = await requesthelp.axiosGet('/get_sequence_number');
            // let preivious_seq = await requesthelp.axiosGet('/sequence_record', {hero: hero});
            console.log(this.roundnum);
            if (this.roundnum==1){
                this.round1[this.seqnum-1]=hero;
                this.round1Changed(this.round1);
            }
            if (this.roundnum==2){
                this.round2[this.seqnum-1]=hero;
                this.round2Changed(this.round2);
            }
            if (this.roundnum==3){
                this.round3[this.seqnum-1]=hero;
                this.round3Changed(this.round3);
            }
            if (this.roundnum==4){
                this.round4[this.seqnum-1]=hero;
                this.round4Changed(this.round4);
            }
            if (this.roundnum==5){
                this.round5[this.seqnum-1]=hero;
                this.round5Changed(this.round5);
            }
            if (this.roundnum==6){
                this.round6[this.seqnum-1]=hero;
                this.round6Changed(this.round6);
            }
            // console.log(this.round1seq);

            let block = document.getElementById("hero_sequence"+this.seqnum);
            // console.log(block);
            block.style.fill = "url(#p"+hero+")";
            block = document.getElementById("selection_view");
            block.style.display = "none";
            this.sequence_change = !this.sequence_change;
            this.changeSequence(this.sequence_change);
        },
        
        changeSequence(sequence_change){
            // console.log(sequence_change);
            this.$emit('sequenceChange', sequence_change); 
        },
        round1Changed(val){
            // console.log(val);
            this.$emit('r1Change', val); 
        },
        round2Changed(val){
            // console.log(sequence_change);
            this.$emit('r2Change', val); 
        },
        round3Changed(val){
            // console.log(sequence_change);
            this.$emit('r3Change', val); 
        },
        round4Changed(val){
            // console.log(sequence_change);
            this.$emit('r4Change', val); 
        },
        round5Changed(val){
            // console.log(sequence_change);
            this.$emit('r5Change', val); 
        },
        round6Changed(val){
            // console.log(sequence_change);
            this.$emit('r6Change', val); 
        }
    },
});
</script>

<style>
.herolist {
    margin-top: 20px;
    margin-left: 20px;
    
}
.herolist img {
    float: left;
    width: 70px;
    margin-bottom: 5px;
    margin-left: 5px;
    border-radius: 4px;

}
</style>