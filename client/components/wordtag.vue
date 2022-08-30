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
        <div>
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="newTags => tags = newTags"
        />
        </div>
    </template>
    
    <script>
    import VueTagsInput from '@johmun/vue-tags-input';
    
    export default {
        components: {
        VueTagsInput,
        },
        data() {
        return {
            tag: '',
            tags: [],
            autocompleteItems: [{
            text: 'KPL',
            }, ],
        };
        },
        computed: {
        filteredItems() {
            return this.autocompleteItems.filter(i => {
            return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
            });
        },
        },
    };
    </script>