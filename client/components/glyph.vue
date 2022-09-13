<template>
    <div>
    <div id="glyph_view"></div>
    <span id="hero_glyph_select">
        <input id="glyphinput" v-model="glyphselect" type="text" placeholder="please select" list="typelist2" />
        <datalist id="typelist2">
            <option>阿古朵</option>
            <option>白起</option>
            <option>百里守约</option>
            <option>不知火舞</option>
            <option>蔡文姬</option>
            <option>曹操</option>
            <option>嫦娥</option>
            <option>成吉思汗</option>
            <option>大乔</option>
            <option>狄仁杰</option>
            <option>东皇太一</option>
            <option>盾山</option>
            <option>暃</option>
            <option>伽罗</option>
            <option>干将莫邪</option>
            <option>戈娅</option>
            <option>公孙离</option>
            <option>宫本武藏</option>
            <option>关羽</option>
            <option>鬼谷子</option>
            <option>后羿</option>
            <option>花木兰</option>
            <option>黄忠</option>
            <option>姜子牙</option>
            <option>金蝉</option>
            <option>镜</option>
            <option>橘右京</option>
            <option>铠</option>
            <option>兰陵王</option>
            <option>澜</option>
            <option>老夫子</option>
            <option>李元芳</option>
            <option>廉颇</option>
            <option>刘邦</option>
            <option>露娜</option>
            <option>鲁班大师</option>
            <option>鲁班七号</option>
            <option>吕布</option>
            <option>马超</option>
            <option>马可波罗</option>
            <option>蒙恬</option>
            <option>蒙犽</option>
            <option>梦奇</option>
            <option>芈月</option>
            <option>明世隐</option>
            <option>墨子</option>
            <option>娜可露露</option>
            <option>牛魔</option>
            <option>盘古</option>
            <option>裴擒虎</option>
            <option>桑启</option>
            <option>上官婉儿</option>
            <option>沈梦溪</option>
            <option>孙膑</option>
            <option>孙尚香</option>
            <option>太乙真人</option>
            <option>王昭君</option>
            <option>西施</option>
            <option>夏侯惇</option>
            <option>夏洛特</option>
            <option>项羽</option>
            <option>瑶</option>
            <option>曜</option>
            <option>弈星</option>
            <option>虞姬</option>
            <option>嬴政</option>
            <option>云缨</option>
            <option>张飞</option>
            <option>张良</option>
            <option>赵云</option>
            <option>周瑜</option>
            <option>猪八戒</option>
            <option>庄周</option>
        </datalist>
    </span>
    <span id="recent">
    <br />
        Recent selected:
    </span>
    <div id="selectedglyph">
            <button
                v-for="hero in hero_list_cloud"
                :key="hero"
                :class="['selectedgl']"
                @click="render_glyph_view(hero)"
            >
                {{ hero }}
        </button>
        </div>
</div>
</template>

<script>
import all_glyph_data from "../assets/json/glyph_view_output_2022.json";
import requesthelp from "common/utils/request.js";
// import $ from "jquery";
export default {
    props: {
    },
    setup() { },
    data() {
        return {
            glyphselect:"",
            hero_list_cloud:[]
        };
    },
    watch: {
        glyphselect(val){
        
            // console.log(val);
            var allhero = ["阿古朵", "白起", "百里守约", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "大乔", "狄仁杰", "貂蝉", "东方曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "廉颇", "刘邦", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "弈星", "嬴政", "虞姬", "李元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳"];

            var englishTrans = d3.scaleOrdinal()
                .range(["Aguto", "AKe", "Erin", "Angela", "Bai Qi", "Baili Shouyue", "Baili Xuance", "Bian Que", "Mai Shiranui", "Cai Wenji", "Cao Cao", "Chang'e", "Genghis Khan", "Cheng Yaojin", "Dharma", "Daji", "Da Qiao", "Di Renjie", "Dian Wei", "Diao Chan", "Dongfang Yao", "Tai Yi", "Dun Shan", "Fei", "Garo", "Ganjiang Moye", "Gao Jianli", "Ge Ya", "Gongsun Li", "Miyamoto Musashi", "Guan Yu", "Gui Guzi", "Han Xin", "Hou Yi", "Mulan", "Huang Zhong", "Jiang Ziya", "Jin Chan", "Jing", "Ukyo Tachibana", "Kai", "Magnus", "Lan Ling Wan", "Lam", "Fuzi", "Li Bai", "Li Xin", "Lian Po", "Liu Bang", "Liu Bei", "Liu Shan", "Luban Master", "Luban No. 7", "Luna", "Lu Bu", "Ma Chao", "Marco Polo", "Meng Tian", "Meng Ya", "Menki", "Milady", "Mi Yue", "Ming Shiyin", "Mozi", "Nezha", "Nakoruru", "Niumo", "Nuwa", "Pangu", "Tigerous", "Sang Qi", "Shangguan Wan'er", "Shen Mengxi", "Sikong Zhen", "Sima Yi", "Su Lie", "Sun Bin", "Sun Ce", "Sun Shangxiang", "Sun Wukong", "Taiyi Zhenren", "Wang Zhaojun", "Wu Ze Tian", "Xishi", "Xiahou Dun", "Charlotte", "Xiang Yu", "Xiao Qiao", "Athena", "Arthur", "Yang Jian", "Yang Yuhuan", "Yaria", "Yi Xing", "Ying Zheng", "Consort Yu", "Yuanfang", "Yuan Ge", "Yun Zhong Jun", "Zhang Fei", "Zhang Liang", "Zhao Yun", "Zhen Ji", "Zhong Kui", "Wu Yen", "Zhou Yu", "Kong Ming", "Zhu Bajie", "Zhuang Zhou", "Yun Ying", "Li Yuanfang", "customized"])
                .domain(["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "东方曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "弈星", "嬴政", "虞姬", "李元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳", "customized"]);

            for (var i=0;i<allhero.length;i++){
                if (val==allhero[i]){
                    this.render_glyph_view(englishTrans(val));
                    this.add(englishTrans(val));
                }
            }
            this.glyphselect="";
        }
    },
    mounted() {
        // this.render_glyph_view('宫本武藏');
    },
    methods: {

        
        async add(hero){
            for (var i=this.hero_list_cloud.length;i>0;i--){
                this.hero_list_cloud[i]=this.hero_list_cloud[i-1];
            }
            this.hero_list_cloud[0]=hero;
        },
        render_glyph_view(chosen_hero) {
            d3.select("#glyph_view").selectAll('*').remove();
            var englishTrans = d3.scaleOrdinal()
                .range(["Aguto", "AKe", "Erin", "Angela", "Bai Qi", "Baili Shouyue", "Baili Xuance", "Bian Que", "Mai Shiranui", "Cai Wenji", "Cao Cao", "Chang'e", "Genghis Khan", "Cheng Yaojin", "Dharma", "Daji", "Da Qiao", "Di Renjie", "Dian Wei", "Diao Chan", "Dongfang Yao", "Tai Yi", "Dun Shan", "Fei", "Garo", "Ganjiang Moye", "Gao Jianli", "Ge Ya", "Gongsun Li", "Miyamoto Musashi", "Guan Yu", "Gui Guzi", "Han Xin", "Hou Yi", "Mulan", "Huang Zhong", "Jiang Ziya", "Jin Chan", "Jing", "Ukyo Tachibana", "Kai", "Magnus", "Lan Ling Wan", "Lam", "Fuzi", "Li Bai", "Li Xin", "Lian Po", "Liu Bang", "Liu Bei", "Liu Shan", "Luban Master", "Luban No. 7", "Luna", "Lu Bu", "Ma Chao", "Marco Polo", "Meng Tian", "Meng Ya", "Menki", "Milady", "Mi Yue", "Ming Shiyin", "Mozi", "Nezha", "Nakoruru", "Niumo", "Nuwa", "Pangu", "Tigerous", "Sang Qi", "Shangguan Wan'er", "Shen Mengxi", "Sikong Zhen", "Sima Yi", "Su Lie", "Sun Bin", "Sun Ce", "Sun Shangxiang", "Sun Wukong", "Taiyi Zhenren", "Wang Zhaojun", "Wu Ze Tian", "Xishi", "Xiahou Dun", "Charlotte", "Xiang Yu", "Xiao Qiao", "Athena", "Arthur", "Yang Jian", "Yang Yuhuan", "Yaria", "Yi Xing", "Ying Zheng", "Consort Yu", "Yuanfang", "Yuan Ge", "Yun Zhong Jun", "Zhang Fei", "Zhang Liang", "Zhao Yun", "Zhen Ji", "Zhong Kui", "Wu Yen", "Zhou Yu", "Kong Ming", "Zhu Bajie", "Zhuang Zhou", "Yun Ying", "Li Yuanfang"])
                .domain(["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "东方曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "奕星", "嬴政", "虞姬", "元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳"]);
            function mouseover(anytext) {
                d3.select("body")
                    .append("div")
                    .attr("id", "seq_tooltip")
                    .style("opacity", 1)
                    .html(`${anytext}`)
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            }

            var moveTooltip = function (d, i) {
                d3.select("#seq_tooltip")
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY + 10 + "px");
            };

            function mouseout() {
                d3.select("#seq_tooltip").remove();
            }

            //////////////////////////
            /////////input////////////
            //////////////////////////
            // green: #C6E4A5  red: #FFBFBF  blue: #9EC6E9
            // DARK:  #9EBC7D       #D79797        #769EC1
            //        #769455       #AF6F6F        #4E7699
            var glyph_legend_color = [
                "#E6F2CD",
                "#C1E877",
                "#91CF60",
                "#F76060",
                "#F76060",
                "#FF6969",
                "#BFE5FF",
                "#86CDFF",
                "#2BA9FF",
            ];
            var glyph_legend_opacity = [
                0.85, 0.8, 0.8, 0.3, 0.6, 1, 0.7, 0.8, 0.8,
            ];
            var chineseTrans = d3.scaleOrdinal()
                .domain(["Aguto", "AKe", "Erin", "Angela", "Bai Qi", "Baili Shouyue", "Baili Xuance", "Bian Que", "Mai Shiranui", "Cai Wenji", "Cao Cao", "Chang'e", "Genghis Khan", "Cheng Yaojin", "Dharma", "Daji", "Da Qiao", "Di Renjie", "Dian Wei", "Diao Chan", "Dongfang Yao", "Tai Yi", "Dun Shan", "Fei", "Garo", "Ganjiang Moye", "Gao Jianli", "Ge Ya", "Gongsun Li", "Miyamoto Musashi", "Guan Yu", "Gui Guzi", "Han Xin", "Hou Yi", "Mulan", "Huang Zhong", "Jiang Ziya", "Jin Chan", "Jing", "Ukyo Tachibana", "Kai", "Magnus", "Lan Ling Wan", "Lam", "Fuzi", "Li Bai", "Li Xin", "Lian Po", "Liu Bang", "Liu Bei", "Liu Shan", "Luban Master", "Luban No. 7", "Luna", "Lu Bu", "Ma Chao", "Marco Polo", "Meng Tian", "Meng Ya", "Menki", "Milady", "Mi Yue", "Ming Shiyin", "Mozi", "Nezha", "Nakoruru", "Niumo", "Nuwa", "Pangu", "Tigerous", "Sang Qi", "Shangguan Wan'er", "Shen Mengxi", "Sikong Zhen", "Sima Yi", "Su Lie", "Sun Bin", "Sun Ce", "Sun Shangxiang", "Sun Wukong", "Taiyi Zhenren", "Wang Zhaojun", "Wu Ze Tian", "Xishi", "Xiahou Dun", "Charlotte", "Xiang Yu", "Xiao Qiao", "Athena", "Arthur", "Yang Jian", "Yang Yuhuan", "Yaria", "Yi Xing", "Ying Zheng", "Consort Yu", "Yuanfang", "Yuan Ge", "Yun Zhong Jun", "Zhang Fei", "Zhang Liang", "Zhao Yun", "Zhen Ji", "Zhong Kui", "Wu Yen", "Zhou Yu", "Kong Ming", "Zhu Bajie", "Zhuang Zhou", "Yun Ying", "Li Yuanfang"])
                .range(["阿古朵", "阿轲", "艾琳", "安琪拉", "白起", "百里守约", "百里玄策", "扁鹊", "不知火舞", "蔡文姬", "曹操", "嫦娥", "成吉思汗", "程咬金", "达摩", "妲己", "大乔", "狄仁杰", "典韦", "貂蝉", "东方曜", "东皇太一", "盾山", "暃", "伽罗", "干将莫邪", "高渐离", "戈娅", "公孙离", "宫本武藏", "关羽", "鬼谷子", "韩信", "后羿", "花木兰", "黄忠", "姜子牙", "金蝉", "镜", "橘右京", "铠", "狂铁", "兰陵王", "澜", "老夫子", "李白", "李信", "廉颇", "刘邦", "刘备", "刘禅", "鲁班大师", "鲁班七号", "露娜", "吕布", "马超", "马可波罗", "蒙恬", "蒙犽", "梦奇", "米莱狄", "芈月", "明世隐", "墨子", "哪吒", "娜可露露", "牛魔", "女娲", "盘古", "裴擒虎", "桑启", "上官婉儿", "沈梦溪", "司空震", "司马懿", "苏烈", "孙膑", "孙策", "孙尚香", "孙悟空", "太乙真人", "王昭君", "武则天", "西施", "夏侯惇", "夏洛特", "项羽", "小乔", "雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "奕星", "嬴政", "虞姬", "元芳", "元歌", "云中君", "张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "诸葛亮", "猪八戒", "庄周", "云缨", "李元芳"]);

            chosen_hero=chineseTrans(chosen_hero);
            var chosen_hero_data = all_glyph_data[chosen_hero];
            // console.log(`${chosen_hero}:`, chosen_hero_data);

            var offset_left = 165;
            var offset_top = 185;
            var glyph_view_svg = d3
                .select("#glyph_view")
                .append("svg")
                .attr("id", "glyph_view_svg")
                .attr("width", 300)
                .attr("height", 660)
                .append("g")
                .attr("id", "glyph_view_svg_g");

            //////////////////////////
            /////backgound arc////////
            //////////////////////////
            var background_arc_data = [
                { startAngle: 0, endAngle: 0.5 * Math.PI },
                { startAngle: 0.5 * Math.PI, endAngle: Math.PI },
                { startAngle: 1.5 * Math.PI, endAngle: 2 * Math.PI },
            ];
            var background_arc_color = [
                glyph_legend_color[0],
                glyph_legend_color[6],
                glyph_legend_color[3],
            ];
            var background_arc_opacity = [0.85, 0.7, 0.3];
            var background_arc_outer_r = 106;
            var background_arc_func = d3
                .arc()
                .innerRadius(0)
                .outerRadius(background_arc_outer_r);

            var background_arc_g = glyph_view_svg
                .append("g")
                .attr("id", "background_arc_g");
            background_arc_g
                .selectAll(".background_arc")
                .data(background_arc_data)
                .enter()
                .append("path")
                .attr("class", "background_arc")
                .attr("d", (d) => background_arc_func(d))
                .style("fill", (d, i) => background_arc_color[i])
                .style("opacity", (d, i) => background_arc_opacity[i])
                .attr("transform", `translate(${offset_left},${offset_top})`);
            // .attr("opacity", 0.5);

            //////////////////////////
            ///////////lines//////////
            //////////////////////////
            var line_func = d3
                .line()
                .x((d) => d.x)
                .y((d) => d.y);
            var lines_g = glyph_view_svg.append("g").attr("id", "lines_g");
            var line_length = 124;
            lines_g
                .selectAll(".lines")
                .data([0, 90, 180, 270])
                .enter()
                .append("path")
                .attr(
                    "d",
                    line_func([
                        { x: 0, y: 0 },
                        { x: line_length, y: 0 },
                    ])
                )
                .style("stroke", "#C9C9C9")
                .style("stroke-width", 2)
                .style("fill", "none")
                .attr(
                    "transform",
                    (d) =>
                        `translate(${offset_left},${offset_top}) rotate(${d})`
                );
            // .attr('opacity', .5)

            //////////////////////////
            ////////cur_hero//////////
            //////////////////////////
            var cur_hero_r = 53;
            glyph_view_svg
                .append("circle")
                .attr("id", "cur_hero")
                .style("fill", `url(#p${chosen_hero})`)
                .attr("r", cur_hero_r)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", `translate(${offset_left},${offset_top})`);

            //////////////////////////
            ////////circle_scale//////
            //////////////////////////
            chosen_hero_data["countered_top3"].forEach((ele, index) => {
                chosen_hero_data["countered_top3"][index][1] = Math.abs(
                    chosen_hero_data["countered_top3"][index][1]
                );
            });
            var all_data = [
                ...chosen_hero_data["counter_top3"],
                ...chosen_hero_data["countered_top3"],
                ...chosen_hero_data["team_mate"],
            ];
            // console.log(all_data);
            var min_val = d3.min(all_data, (d) => d[1]);
            var max_val = d3.max(all_data, (d) => d[1]);
            // console.log(min_val, max_val);
            var lower_line = 12;
            var higher_line = 17;
            if (min_val == max_val) {
                lower_line = (lower_line + higher_line) / 2;
                higher_line = lower_line;
            }
            var circle_scale = d3
                .scaleLinear()
                .domain([min_val, max_val])
                .range([lower_line, higher_line]);
            // console.log(lower_line, higher_line);

            //////////////////////////
            ////////counter_top3//////
            //////////////////////////
            var circle_r = 80;
            glyph_view_svg
                .append("g")
                .attr("id", "counter_top3_g")
                .selectAll(".counter")
                .data(chosen_hero_data["counter_top3"])
                .enter()
                .append("circle")
                .attr("class", "counter")
                .attr("id", (d, i) => `counterTop${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 15 45 75
                    var deg = 30 * i + 15;
                    var x =
                        Math.sin((deg / 180) * Math.PI) * circle_r +
                        offset_left;
                    var y =
                        offset_top - Math.cos((deg / 180) * Math.PI) * circle_r;
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return circle_scale(d[1]);
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                })
                .on("mouseover", function (d, i) {
                    mouseover(
                        `Counter Top${i + 1}:` +
                        "<br/>" +
                        `${englishTrans(d[0])}(${d[1].toFixed(2)})`
                    );
                })
                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            //////////////////////////
            //////countered_top3//////
            //////////////////////////
            glyph_view_svg
                .append("g")
                .attr("id", "countered_top3_g")
                .selectAll(".countered")
                .data(chosen_hero_data["countered_top3"])
                .enter()
                .append("circle")
                .attr("class", "countered")
                .attr("id", (d, i) => `counteredTop${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 75 45 15
                    var deg = -30 * i + 75;
                    var x =
                        offset_left -
                        Math.sin((deg / 180) * Math.PI) * circle_r;
                    var y =
                        offset_top - Math.cos((deg / 180) * Math.PI) * circle_r;
                    // console.log(x, y)
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return circle_scale(Math.abs(d[1]));
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                })
                .on("mouseover", function (d, i) {
                    mouseover(
                        `Countered Top${i + 1}:` +
                        "<br/>" +
                        `${englishTrans(d[0])}(${Math.abs(d[1]).toFixed(2)})`
                    );
                })

                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            //////////////////////////
            ////////team_mate/////////
            //////////////////////////
            glyph_view_svg
                .append("g")
                .attr("id", "team_mate_g")
                .selectAll(".team_mate")
                .data(chosen_hero_data["team_mate"])
                .enter()
                .append("circle")
                .attr("class", "team_mate")
                .attr("id", (d, i) => `team_mate${i + 1}`)
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("transform", (d, i) => {
                    // 15 45 75
                    var deg = 30 * i + 15;
                    var x =
                        offset_left +
                        Math.cos((deg / 180) * Math.PI) * circle_r;
                    var y =
                        offset_top + Math.sin((deg / 180) * Math.PI) * circle_r;
                    return `translate(${x}, ${y})`;
                })
                .attr("r", (d, i) => {
                    return circle_scale(d[1]);
                })
                .attr("fill", function (d, i) {
                    return `url(#p${d[0]})`;
                })
                .on("mouseover", function (d, i) {
                    mouseover(
                        `Best Team Mate ${i + 1}:` +
                        "<br/>" +
                        `${englishTrans(d[0])}(${d[1].toFixed(2)})`
                    );
                })
                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            //////////////////////////
            ////////kda_arc///////////
            //////////////////////////
            // green: #C6E4A5    red: #FFBFBF  blue: #9EC6E9
            // DARK:  #9EBC7D       #D79797        #769EC1
            var kda_percent_list = chosen_hero_data["kda_percent"];
            var kda_arc = glyph_view_svg.append("g").attr("id", "kda_arc");
            var arcs_color = [
                glyph_legend_color[2],
                glyph_legend_color[5],
                glyph_legend_color[8],
            ];
            var arcs_opacity = [0.8, 1, 0.8];
            var kda_arc_outer_r = 66;
            var arcs_g_func = d3
                .arc()
                .innerRadius(cur_hero_r)
                .outerRadius(kda_arc_outer_r);
            var start_angle = Math.PI;
            kda_arc
                .selectAll(".kda_arc")
                .data(kda_percent_list)
                .enter()
                .append("path")
                .attr("class", "kda_arc")
                .attr("d", (d) => {
                    var end_angle = start_angle + (Math.PI / 2) * d;
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    start_angle = end_angle;
                    return arcs_g_func(cur_arc_data);
                })
                .style("fill", (d, i) => arcs_color[i])
                .style("opacity", (d, i) => arcs_opacity[i])
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .on("mouseover", function (d, i) {
                    mouseover(
                        `${"KDA"[i]} percent:` + "<br/>" + `${d.toFixed(2)}`
                    );
                })
                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            //////////////////////////
            ////////win_ban_pick//////
            //////////////////////////
            // red: #FFBFBF  blue: #9EC6E9   green: #C6E4A5
            var win_ban_pick_data = [
                chosen_hero_data["win_rate"],
                chosen_hero_data["ban_rate"],
                chosen_hero_data["pick_rate"],
            ];
            var win_ban_pick_g = glyph_view_svg
                .append("g")
                .attr("id", "win_ban_pick_g");
            var win_ban_pick_color = [
                glyph_legend_color[7],
                glyph_legend_color[4],
                glyph_legend_color[1],
            ];
            var win_ban_pick_opacity = [0.8, 0.6, 0.8];
            var win_ban_pick_key = ["win_rate", "ban_rate", "pick_rate"];

            // background arc
            win_ban_pick_g
                .selectAll(".win_ban_pick_background_arc")
                .data(win_ban_pick_data)
                .enter()
                .append("path")
                .attr("class", "win_ban_pick_background_arc")
                .attr("d", (d, i) => {
                    var outer_r = 111 - i * 15;
                    var arc_width = 2.5;
                    var end_angle = Math.PI * 1.5;
                    var start_angle = Math.PI;
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    var win_ban_pick_arc_func = d3
                        .arc()
                        .innerRadius(outer_r - arc_width)
                        .outerRadius(outer_r);
                    return win_ban_pick_arc_func(cur_arc_data);
                })
                .style("fill", "#D9D9D9")
                .style("opacity", 0.5)
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .on("mouseover", function (d, i) {
                    mouseover(
                        `${win_ban_pick_key[i]}:` + "<br/>" + `${d.toFixed(2)}`
                    );
                })
                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            // color arc
            win_ban_pick_g
                .selectAll(".win_ban_pick_arc")
                .data(win_ban_pick_data)
                .enter()
                .append("path")
                .attr("class", "win_ban_pick_arc")
                .attr("d", (d, i) => {
                    var outer_r = 115 - i * 15;
                    var arc_width = 10;
                    var end_angle = Math.PI * 1.5;
                    var start_angle = end_angle - Math.PI * 0.5 * d;
                    var cur_arc_data = {
                        startAngle: start_angle,
                        endAngle: end_angle,
                    };
                    var win_ban_pick_arc_func = d3
                        .arc()
                        .innerRadius(outer_r - arc_width)
                        .outerRadius(outer_r);
                    return win_ban_pick_arc_func(cur_arc_data);
                })
                .style("fill", (d, i) => win_ban_pick_color[i])
                .style("opacity", (d, i) => win_ban_pick_opacity[i])
                .attr("transform", `translate(${offset_left},${offset_top})`)
                .on("mouseover", function (d, i) {
                    mouseover(
                        `${win_ban_pick_key[i]}:` + "<br/>" + `${d.toFixed(2)}`
                    );
                })
                .on("mousemove", moveTooltip)
                .on("mouseout", mouseout);

            ////////////////////////////////////////////////////
            ///////////////////////legend///////////////////////
            ////////////////////////////////////////////////////
            // glyph_legend
            var legend_left = 170;
            var legend_top = 300;
            var glyph_legend_svg_g = glyph_view_svg
                .append("g")
                .attr("id", "glyph_legend_svg_g")
                .attr("width", 200)
                .attr("height", 400)
                .attr("transform", `translate(${legend_left},${legend_top})`);

            var glyph_legend_key = [
                "Counter Top3",
                "Pick Rate",
                "Kill Percent",

                "Countered Top3",
                "Ban Rate",
                "Death Percent",

                "Best Team Mate",
                "Win Rate",
                "Assistant Percent",
            ];

            var glyph_legend_offset_left = 12;
            var offset_circlr_text = 10;
            var glyph_legend_offset_top = 21;
            glyph_legend_svg_g
                .selectAll(".glyph_legend_dots")
                .data(glyph_legend_key)
                .enter()
                .append("circle")
                .attr("class", "glyph_legend_dots")
                .attr("cx", glyph_legend_offset_left)
                .attr("cy", function (d, i) {
                    return glyph_legend_offset_top + i * 25;
                })
                .attr("r", 5)
                .style("fill", (d, i) => glyph_legend_color[i])
                .style("stroke", (d, i) => glyph_legend_color[i])
                .style("stroke-width", 1)
                .style("opacity", (d, i) => glyph_legend_opacity[i]);

            glyph_legend_svg_g
                .selectAll(".glyph_legend_text")
                .data(glyph_legend_key)
                .enter()
                .append("text")
                .attr("class", "glyph_legend_text")
                .attr("x", glyph_legend_offset_left + offset_circlr_text)
                .attr("y", function (d, i) {
                    return glyph_legend_offset_top + i * 25;
                })
                .style("fill", (d, i) => glyph_legend_color[i])
                .style("opacity", (d, i) => glyph_legend_opacity[i])
                .html((d) => d)
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle")
                .style("font-weight", "bold")
                .attr("stroke","gray")
                .style("stroke-width", 0.2);
        },
    },
};
</script>

<style>
#glyph_view {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: rgba(243, 243, 243, 0.5); */
    left: 0%;
    top: 0%;
    display: block;
}

#glyph_view .counter,
.countered,
.team_mate,
.kda_arc,
.win_ban_pick_arc,
.win_ban_pick_background_arc {
    cursor: pointer;
}

#glyphinput{
    position: absolute;
    width: 40%;
    height: 5%;
    left: 5%;
    bottom: 35%;
    border-block-color: lightgray;
    border-inline-color: lightgray;
    border-radius: 3px;
}

.selectedgl{
    float: left;
    /* padding: 6px 10px; */
    margin-right: 25px;
    margin-bottom: 5px;
    /* width:80px; */
    font-size: 80%;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    width:fit-content;
    background: #fcfcfc;
}
.selectedgl:hover {
background: #f0f0f0;
}
.selectedgl.active {
background: #f0f0f0;
}
#recent{
    position: absolute;
    width: 40%;
    height: 37%;
    left: 5%;
    top: 62%;
    border-block-color: lightgray;
    border-inline-color: lightgray;
    border-radius: 3px;
}
#selectedglyph{
    position: absolute;
    width: 40%;
    height: 29%;
    left: 5%;
    top: 70%;
    border-block-color: lightgray;
    border-inline-color: lightgray;
    border-radius: 3px;
    overflow-x: auto;
}
</style>
