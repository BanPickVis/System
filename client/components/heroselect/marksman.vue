<template>
    <div class="herolist">
        <img :src="require('../../assets/image/icon/艾琳.jpg')" width=" 70" height=" 70" @click="select('艾琳')">
        <img :src="require('../../assets/image/icon/百里守约.jpg')" width=" 70" height=" 70" @click="select('百里守约')">
        <img :src="require('../../assets/image/icon/成吉思汗.jpg')" width=" 70" height=" 70" @click="select('成吉思汗')">
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
    