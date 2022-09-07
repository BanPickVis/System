<template>
    <div class="herolist">
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
    