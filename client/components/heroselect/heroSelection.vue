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
      <component :is="currentTabComponent" class="tab" @sequenceChange="changedSequence"></component>
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
    setup() {
    },
    data() {
        return {
            currentView: "all",
            select_hero_job: "all",
            currentTab: "all",
            tabs: ["all","tank","warrior","assassin","mage","marksman","support"],
            seqchange:"true",
        };
    },
    computed: {
        currentTabComponent: function() {
            return this.currentTab;
          }
        },
    watch: {
      seqchange(val){
            this.changeSequencetoIndex(val);
            // console.log(val);
        },
    },
    methods:{
      close(){
        var block = document.getElementById('selection_view');
        block.style.display='none';
      },
      changedSequence(sequence_change){
          this.seqchange = sequence_change;
          // console.log(this.seqchange);
      },
      changeSequencetoIndex(sequence_change){
          // console.log(sequence_change);
          this.$emit('sequenceChange', sequence_change); 
      },
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