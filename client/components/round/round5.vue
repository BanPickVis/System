<template>
    <svg>
        <rect id="hero_sequence1" class="hero_icon" filter="url(#trans-shadow)" x="15" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(width, 200, 1)" />
        <rect id="hero_sequence3" filter="url(#trans-shadow)" x="90" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(175, 200, 3)" />

        <image id="hero_sequence1" class="hero_icon" x="50" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(100, 200, 1)" />

        <image id="hero_sequence3" class="hero_icon" x="125" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(175, 200, 3)" />

        <rect id="hero_sequence2" class="hero_icon" filter="url(#trans-shadow)" x="475" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(560, 200, 2)" />

        <rect id="hero_sequence4" class="hero_icon" filter="url(#trans-shadow)" x="550" y="5" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(635, 200, 4)" />

        <image id="hero_sequence2" class="hero_icon" x="510" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(560, 200, 2)" />

        <image id="hero_sequence4" class="hero_icon" x="585" y="40" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(635, 200, 4)" />

        <rect id="hero_sequence5" class="hero_icon" filter="url(#trans-shadow)" x="10" y="95" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 300, 5)" />

        <rect id="hero_sequence6" class="hero_icon" filter="url(#trans-shadow)" x="540" y="95" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 300, 6)" />

        <rect id="hero_sequence8" class="hero_icon" filter="url(#trans-shadow)" x="10" y="195" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 400, 8)" />

        <rect id="hero_sequence7" class="hero_icon" filter="url(#trans-shadow)" x="540" y="195" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 400, 7)" />

        <rect id="hero_sequence9" class="hero_icon" filter="url(#trans-shadow)" x="10" y="295" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 500, 9)" />

        <rect id="hero_sequence10" class="hero_icon" filter="url(#trans-shadow)" x="540" y="295" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 500, 10)" />

        <rect id="hero_sequence11" class="hero_icon" filter="url(#trans-shadow)" x="15" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(100, 600, 11)" />

        <rect id="hero_sequence13" class="hero_icon" filter="url(#trans-shadow)" x="90" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(175, 600, 13)" />

        <image id="hero_sequence11" class="hero_icon" x="50" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(100, 600, 11)" />

        <image id="hero_sequence13" class="hero_icon" x="125" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(175, 600, 13)" />

        <rect id="hero_sequence12" class="hero_icon" filter="url(#trans-shadow)" x="475" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(560, 600, 12)" />

        <rect id="hero_sequence14" class="hero_icon" filter="url(#trans-shadow)" x="550" y="390" rx="35" width="70" height="70" fill="url(#pnone)" @click="select(635, 600, 14)" />

        <image id="hero_sequence12" class="hero_icon" x="510" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(560, 600, 12)" />

        <image id="hero_sequence14" class="hero_icon" x="585" y="425" width="40" height="40" :href="require('../../assets/image/ban.png')" @click="select(635, 600, 14)" />

        <rect id="hero_sequence16" class="hero_icon" filter="url(#trans-shadow)" x="10" y="475" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 700, 16)" />

        <rect id="hero_sequence15" class="hero_icon" filter="url(#trans-shadow)" x="540" y="475" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 700, 15)" />

        <rect id="hero_sequence17" class="hero_icon" filter="url(#trans-shadow)" x="10" y="575" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(100, 800, 17)" />

        <rect id="hero_sequence18" class="hero_icon" filter="url(#trans-shadow)" x="540" y="575" rx="5" width="80" height="80" fill="url(#pnone)" @click="select(635, 800, 18)" />

    </svg>
</template>
<script>
import requesthelp from "common/utils/request.js";
export default {
    ////////////////////////////////
    data() {
        return {
            sequence_change: true,
        };
    },
    ////////////////////////////////
    computed: {
        team1: function () {
            return this.team1abbr;
        },
        team2: function () {
            return this.team2abbr;
        },
        hero1: function () {
            return "none";
        }
    },
    watch: {
    },
    mounted() {
        this.default_change();
    },
    methods: {
        async default_change(){
            let block;
            let seqn;
            let preivious_seq = await requesthelp.axiosGet('/selected', {round: "5"} );
            for (var i=0;i<preivious_seq.length;i++){
                seqn = i+1;
                block = document.getElementById("hero_sequence"+seqn);
                block.style.fill = "url(#p"+preivious_seq[i]+")";
            }
            // let block = document.getElementById("hero_sequence"+seq_num);
            // console.log(block);
            // block.style.fill = "url(#p"+hero+")";
        },
        async select(x, y, num) {
            let block = document.getElementById("selection_view");
            // console.log(x);
            block.style.left = x + "px";
            block.style.top = y + "px";
            block.style.display = "inline-block";
            await requesthelp.axiosGet('/sequence_number', { sequence_num: num, round_num: 5 });
        ////////////////////////////////
        this.sequence_change = !this.sequence_change;
            this.changeSequence(this.sequence_change);
        },
        changeSequence(sequence_change){
            // console.log(sequence_change);
            this.$emit('sequenceChange', sequence_change); 
        }
            
        ////////////////////////////////
    },
};
</script>

<style>
.hero_icon{
    cursor: pointer;
}
</style>