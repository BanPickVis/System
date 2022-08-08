// import HttpHelper from "common/utils/axios_helper.js";
// import { reactive, onMounted, ref} from 'vue';
// import { ElTable, ElTableColumn } from "element-plus";
// import 'element-plus/es/components/table/style/css';
import changeItem from '@/components/changeItem.vue';


export default {
    data() {
        return {
            img1: require('assets/image/octPlot.png'),
            img2: require('assets/image/wordcloud.png'),
            value1: '',
            value2: ''
            // todo
        };
    },
    components: {
        // ElTable,
        // ElTableColumn,
        'change-item': changeItem
    },
    setup() {

        const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },];

        return {
            options
        };
    }
};