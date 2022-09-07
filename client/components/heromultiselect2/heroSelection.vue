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
      <component :is="currentTabComponent" :keywords="keyword" class="tab" @heroselected="multiheroes"></component>
    </div>
</template>

<script>

import all from "@/components/heromultiselect2/allhero.vue";
import warrior from "@/components/heromultiselect2/warrior.vue";
import support from "@/components/heromultiselect2/support.vue";
import assassin from "@/components/heromultiselect2/assassin.vue";
import mage from "@/components/heromultiselect2/mage.vue";
import marksman from "@/components/heromultiselect2/marksman.vue";
import tank from "@/components/heromultiselect2/tank.vue";


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
      keyword:{type:Object, default:()=>{}}
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
      multiheroes(multiheroes){
        this.$emit('heroselected2', multiheroes); 
      },
    }
});
</script>
<style>
.tab-button {
padding: 6px 10px;
width:80px;
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