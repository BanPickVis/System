<!-- http://www.vue-tags-input.com/#/ 
    npm install @johmun/vue-tags-input
-->
<!-- 
    https://element-plus.gitee.io/zh-CN/component/tag.html
    is better; but eslint-babel parser & jsx problems have many conficts that are hard to solve
    //"parser": "@babel/eslint-parser",//remember: npm install @babel/eslint-parser --save-dev
    (maybe caused by JsonVee's setting)
-->
<template>
    <vue-tags-input
     v-model.trim="tag"
     :tags="tags"
     :max-tags="maxTags"
     :placeholder="placeholder"
     :separators="separators"
     @before-adding-tag="beforeAddingTag"
     @before-deleting-tag="boforeDeletingTag"
     @tags-changed="newTags => $emit('update:tags', newTags)"
    />
</template>
    
<script>
   import VueTagsInput from "@johmun/vue-tags-input";
    
   export default {
    name: "BaseInputTags",
    components: { VueTagsInput },
    props: {
     tags: {
      type: Array,
      default() {
       return [];
      }
     },
     placeholder: {
      type: String,
      default: "请输入标签"
     },
     maxTags: {
      type: Number,
      default: 100
     },
     beforeAddingTag: {
      type: Function,
      default: obj => obj.addTag()
     },
     beforeDeletingTag: {
        type: Function,
      default: obj => obj.deleteTag()
     }
    },
    data() {
     return {
      tag: "",
      separators: [";", ",", "，"]
     };
    }
   };
</script>