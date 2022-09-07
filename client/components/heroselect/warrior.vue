<template>
<div class="herolist">
        <img :src="require('../../assets/image/icon/曹操.jpg')" width=" 70" height=" 70" @click="select('曹操')">
        <img :src="require('../../assets/image/icon/程咬金.jpg')" width=" 70" height=" 70" @click="select('程咬金')">
        <img :src="require('../../assets/image/icon/达摩.jpg')" width=" 70" height=" 70" @click="select('达摩')">
        <img :src="require('../../assets/image/icon/典韦.jpg')" width=" 70" height=" 70" @click="select('典韦')">
        <img :src="require('../../assets/image/icon/暃.jpg')" width=" 70" height=" 70" @click="select('暃')">
        <img :src="require('../../assets/image/icon/宫本武藏.jpg')" width=" 70" height=" 70" @click="select('宫本武藏')">
        <img :src="require('../../assets/image/icon/关羽.jpg')" width=" 70" height=" 70" @click="select('关羽')">
        <img :src="require('../../assets/image/icon/花木兰.jpg')" width=" 70" height=" 70" @click="select('花木兰')">
        <img :src="require('../../assets/image/icon/橘右京.jpg')" width=" 70" height=" 70" @click="select('橘右京')">
        <img :src="require('../../assets/image/icon/铠.jpg')" width=" 70" height=" 70" @click="select('铠')">
        <img :src="require('../../assets/image/icon/狂铁.jpg')" width=" 70" height=" 70" @click="select('狂铁')">
        <img :src="require('../../assets/image/icon/老夫子.jpg')" width=" 70" height=" 70" @click="select('老夫子')">
        <img :src="require('../../assets/image/icon/李信.jpg')" width=" 70" height=" 70" @click="select('李信')">
        <img :src="require('../../assets/image/icon/刘备.jpg')" width=" 70" height=" 70" @click="select('刘备')">
        <img :src="require('../../assets/image/icon/露娜.jpg')" width=" 70" height=" 70" @click="select('露娜')">
        <img :src="require('../../assets/image/icon/吕布.jpg')" width=" 70" height=" 70" @click="select('吕布')">
        <img :src="require('../../assets/image/icon/马超.jpg')" width=" 70" height=" 70" @click="select('马超')">
        <img :src="require('../../assets/image/icon/蒙恬.jpg')" width=" 70" height=" 70" @click="select('蒙恬')">
        <img :src="require('../../assets/image/icon/梦奇.jpg')" width=" 70" height=" 70" @click="select('梦奇')">
        <img :src="require('../../assets/image/icon/墨子.jpg')" width=" 70" height=" 70" @click="select('墨子')">
        <img :src="require('../../assets/image/icon/哪吒.jpg')" width=" 70" height=" 70" @click="select('哪吒')">
        <img :src="require('../../assets/image/icon/盘古.jpg')" width=" 70" height=" 70" @click="select('盘古')">
        <img :src="require('../../assets/image/icon/裴擒虎.jpg')" width=" 70" height=" 70" @click="select('裴擒虎')">
        <img :src="require('../../assets/image/icon/司空震.jpg')" width=" 70" height=" 70" @click="select('司空震')">
        <img :src="require('../../assets/image/icon/孙策.jpg')" width=" 70" height=" 70" @click="select('孙策')">
        <img :src="require('../../assets/image/icon/孙悟空.jpg')" width=" 70" height=" 70" @click="select('孙悟空')">
        <img :src="require('../../assets/image/icon/夏侯惇.jpg')" width=" 70" height=" 70" @click="select('夏侯惇')">
        <img :src="require('../../assets/image/icon/夏洛特.jpg')" width=" 70" height=" 70" @click="select('夏洛特')">
        <img :src="require('../../assets/image/icon/雅典娜.jpg')" width=" 70" height=" 70" @click="select('雅典娜')">
        <img :src="require('../../assets/image/icon/亚瑟.jpg')" width=" 70" height=" 70" @click="select('亚瑟')">
        <img :src="require('../../assets/image/icon/杨戬.jpg')" width=" 70" height=" 70" @click="select('杨戬')">
        <img :src="require('../../assets/image/icon/曜.jpg')" width=" 70" height=" 70" @click="select('曜')">
        <img :src="require('../../assets/image/icon/云缨.jpg')" width=" 70" height=" 70" @click="select('云缨')">
        <img :src="require('../../assets/image/icon/云中君.jpg')" width=" 70" height=" 70" @click="select('云中君')">
        <img :src="require('../../assets/image/icon/赵云.jpg')" width=" 70" height=" 70" @click="select('赵云')">
        <img :src="require('../../assets/image/icon/钟无艳.jpg')" width=" 70" height=" 70" @click="select('钟无艳')">
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
                // console.log(this.roundnum);
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
    