<template>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <a class="close-button" @click="close()">Close</a>
      <component :is="currentTabComponent" :seqnum="numberseq" :roundnum="numberround" :round1seq="round1seq" :round2seq="round2seq" :round3seq="round3seq" :round4seq="round4seq" :round5seq="round5seq" :round6seq="round6seq" class="tab" @r1Change="changer1" @r2Change="changer2" @r3Change="changer3" @r4Change="changer4" @r5Change="changer5" @r6Change="changer6"></component>
    </div>
</template>

<script>

import all from "@/components/heroselect/allhero.vue";
import warrior from "@/components/heroselect/warrior.vue";
import support from "@/components/heroselect/support.vue";
import assassin from "@/components/heroselect/assassin.vue";
import mage from "@/components/heroselect/mage.vue";
import marksman from "@/components/heroselect/marksman.vue";
import tank from "@/components/heroselect/tank.vue";


export default({
    components:{
        all,
        warrior,
        support,
        assassin,
        mage,
        marksman,
        tank
    },
    props:{
      numberseq:{ type: Number, default: 0 },
      numberround:{ type: Number, default: 0 },
      round1seq:{type:Object, default:()=>{}},
      round2seq:{type:Object, default:()=>{}},
      round3seq:{type:Object, default:()=>{}},
      round4seq:{type:Object, default:()=>{}},
      round5seq:{type:Object, default:()=>{}},
      round6seq:{type:Object, default:()=>{}},
    },
    setup() {
    },
    data() {
        return {
            currentView: "all",
            select_hero_job: "all",
            currentTab: "all",
            tabs: ["all","tank","warrior","assassin","mage","marksman","support"],
        };
    },
    computed: {
        currentTabComponent: function() {
            return this.currentTab;
          }
        },
    watch: {
    },
    methods:{
      close(){
        var block = document.getElementById('selection_view');
        block.style.display='none';
      },
      changer1(val){
        // console.log('selection:',val);
        this.$emit('round1sequence', val); 
      },
      changer2(val){
        this.$emit('round2sequence', val); 
      },
      changer3(val){
        this.$emit('round3sequence', val); 
      },
      changer4(val){
        this.$emit('round4sequence', val); 
      },
      changer5(val){
        this.$emit('round5sequence', val); 
      },
      changer6(val){
        this.$emit('round6sequence', val); 
      }
    }
});
</script>
<style>
.tab-button {
width:20px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border: 1px solid #ccc;
cursor: pointer;
background: #f0f0f0;
margin-bottom: -1px;
margin-right: -1px;
}
.tab-button:hover {
background: #e0e0e0;
}
.tab-button.active {
background: #e0e0e0;
}

</style>

<style lang="less">
.transition (@prop: all, @time: 1s, @ease: ease-out) {
  -webkit-transition : @prop @time @ease;
  -moz-transition    : @prop @time @ease;
  -ms-transition     : @prop @time @ease;
  -o-transition      : @prop @time @ease;
  transition         : @prop @time @ease;
}
.rotate(@degrees) {
  -webkit-transform : rotate(@degrees);
  -moz-transform    : rotate(@degrees);
  -ms-transform     : rotate(@degrees);
  -o-transform      : rotate(@degrees);
  transform         : rotate(@degrees);
}

.square( @size ){
  width: @size;
  height: @size;
}

@black : #000;
@white : #fff;

// ---- [ Close Button ] ---- //
.close-button{
  .square(30px);
  box-shadow : 0px 10 10px 10px rgba( 0, 0, 0, .25 );
  border-radius: 10px; 
  background : grey;
  left       : 100%;
  top        : 20%;
  margin-top : -70px;
  margin-left: -30px;
  position   : absolute;
  display    : block;
  z-index    : 200;
  text-indent : -9999px;

  &:before,
  &:after{
    content    : '';
    width      : 55%;
    height     : 2px;
    background : @white;
    position   : absolute;
    top        : 48%;
    left       : 22%;
    .rotate(-45deg);
    .transition( @time : 0.3s );
  }

  &:after{
    .rotate(45deg);
    .transition( @time : 0.3s );
  }

  &:hover{
    &:before,
    &:after{
      .rotate(180deg);
    }
  }
}

</style>