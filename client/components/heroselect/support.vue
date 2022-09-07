<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/蔡文姬.jpg')" width=" 70" height=" 70" @click="select('蔡文姬')">
        <img :src="require('../../assets/image/icon/大乔.jpg')" width=" 70" height=" 70" @click="select('大乔')">
        <img :src="require('../../assets/image/icon/东皇太一.jpg')" width=" 70" height=" 70" @click="select('东皇太一')">
        <img :src="require('../../assets/image/icon/盾山.jpg')" width=" 70" height=" 70" @click="select('盾山')">
        <img :src="require('../../assets/image/icon/鬼谷子.jpg')" width=" 70" height=" 70" @click="select('鬼谷子')">
        <img :src="require('../../assets/image/icon/刘禅.jpg')" width=" 70" height=" 70" @click="select('刘禅')">
        <img :src="require('../../assets/image/icon/鲁班大师.jpg')" width=" 70" height=" 70" @click="select('鲁班大师')">
        <img :src="require('../../assets/image/icon/明世隐.jpg')" width=" 70" height=" 70" @click="select('明世隐')">
        <img :src="require('../../assets/image/icon/牛魔.jpg')" width=" 70" height=" 70" @click="select('牛魔')">
        <img :src="require('../../assets/image/icon/桑启.jpg')" width=" 70" height=" 70" @click="select('桑启')">
        <img :src="require('../../assets/image/icon/苏烈.jpg')" width=" 70" height=" 70" @click="select('苏烈')">
        <img :src="require('../../assets/image/icon/孙膑.jpg')" width=" 70" height=" 70" @click="select('孙膑')">
        <img :src="require('../../assets/image/icon/太乙真人.jpg')" width=" 70" height=" 70" @click="select('太乙真人')">
        <img :src="require('../../assets/image/icon/瑶.jpg')" width=" 70" height=" 70" @click="select('瑶')">
        <img :src="require('../../assets/image/icon/张飞.jpg')" width=" 70" height=" 70" @click="select('张飞')">
        <img :src="require('../../assets/image/icon/钟馗.jpg')" width=" 70" height=" 70" @click="select('钟馗')">
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
    