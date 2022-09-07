<template>
    <div class="herolist">
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
    