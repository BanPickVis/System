// import HttpHelper from "common/utils/axios_helper.js";

// dependent components
import bp from '@/components/bp.vue';
import seq from '@/components/seq.vue';
import player from '@/components/player.vue';
import change from '@/components/change.vue';
import wordcloud from '@/components/wordcloud.vue';
// import inputtag from '@/components/inputtag.vue';
import heroS from "@/components/heroselect/heroSelection.vue";
import heroMS1 from "@/components/heromultiselect/heroSelection.vue";
import heroMS2 from "@/components/heromultiselect2/heroSelection.vue";

// dependent function & json files
import wrap from "@/components/wrap.js";
import radarJson from '@/assets/json/team_view_output.json';
import { Search } from '@element-plus/icons-vue';
import requesthelp from "common/utils/request.js";


export default {
    props:{
    },
    
    data() {
        return {
            name1: "玩家1",
            name2: "玩家2",

            img1: require('assets/image/octPlot.png'),
            img2: require('assets/image/wordcloud.png'),
            blue_value: '', // blue side
            red_value: '', // red side
            Player_1: "Player 1",
            Player_2: "Player 2",
            SequenceNum: "0",
            keywords_blue:[],
            Team_1:"",
            Team_2:"",

            radarkeylength:0,
            keywords_red:[],
            radarkeylength_red:0,
            keywords_blue_string:"Please select heroes ⇪",
            keywords_red_string:"Please select heroes ⇪",
            radar_hint:"",

            roundDefault:"round",
            round_num:0,

            teamside:["Blue", "Red"],
            team_side:"Blue",
            bon:"3",
            bon_select:["3","5","7"],
            n_of_b_s:["1","2","3"],
            n_of_b:"1",
            n_of_p_s:["4","5","6","7","8","9","10"],
            n_of_p:"4",

            selected_sequence_num:0,

            sequencechanged:true,
            round1seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
            round2seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
            round3seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
            round4seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
            round5seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
            round6seq:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
        };
    },
    computed: {
        },
    components: {
        // ElTable,
        // ElTableColumn,
        bp, seq,
        player,
        // "input-tag": inputtag,
        "word-cloud": wordcloud,
        heroS,
        heroMS1,
        heroMS2,
        change
    },
    setup() {
        const cloud_options = [
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
            ];

        return {
            cloud_options
        };
    },
    mounted() {
        this.default_backend();
        this.roundDefault="round1";
        // console.log(this.roundDefault);
        // location.reload();
    },
    watch:{
        radarkeylength_red(val){
            this.DrawRadar();
            // this.keywords_red_string = this.keywords_red.toString();
            // console.log(this.keywords_blue_string);
        },
        radarkeylength(val){
            this.DrawRadar();
            // this.keywords_blue_string = this.keywords_blue.toString()
            },
        Team_1(val){
            if (this.Team_2!=""){
                this.DrawRadar();
                
                // this.radar_hint="Info of all battles is shown.";

            }
            },
        Team_2(val){
            if (this.Team_2!=""){
                this.DrawRadar();
                
                // this.radar_hint="Info of all battles is shown.";
            }
            },
    },
    methods: {
        async default_backend(){
            var defaultbackend =  await requesthelp.axiosGet('/defaults');
        },
        async DrawRadar(){
            var data = await requesthelp.axiosGet('/teamView',{ team1: this.Team_1, team2: this.Team_2, keywords_blue:JSON.stringify(this.keywords_blue), keywords_red:JSON.stringify(this.keywords_red)});
            console.log(data);
            if (data["msg1"]=="team1未使用过此英雄阵容, 默认显示所有英雄场次" && this.radarkeylength!=0 ){
                if (data["msg2"]=="team2未使用过此英雄阵容, 默认显示所有英雄场次"){
                    this.radar_hint = "No such lineup combinations for both teams. Info of all battles is shown";
                }
                else{
                    this.radar_hint = "No such lineup combination for blue team. Info of all battles is shown";
                }
            }
            else{
                if (data["msg2"]=="team2未使用过此英雄阵容, 默认显示所有英雄场次"  && this.radarkeylength_red!=0){
                    this.radar_hint = "No such lineup combinations for red team. Info of all battles is shown";
                }
                else{
                    this.radar_hint = "Info of such lineup combinations is shown";
                }
            }
            
            if (this.radarkeylength==0 && this.radarkeylength_red == 0){
                this.radar_hint="Info of all battles is shown.";
            }
            // console.log(data);
            // console.log(data[this.Team_1]);
            //////////////////////////////////////////////////////////////
            //////////////////// Plot Radar //////////////////////////////
            //////////////////////////////////////////////////////////////
            var margin = { top: 45, right: 50, bottom: 50, left: 50 },
            width = 300,
            height = 300,
            color = d3.scaleOrdinal().range(["#46A4E4","#F76060"]),
            radarChartOptions = {
                w: width,
                h: height,
                margin: margin,
                maxValue: 100,
                levels: 5,
                roundStrokes: true,
                color: color,
            };

            var radar_data = [
                [
                    // team1
                    { axis: "Winning Rate", value: data[this.Team_1][0],  rvalue: data[this.Team_1][0] },
                    { axis: "team KDA ratio", value: data[this.Team_1][1], rvalue: data[this.Team_1][1] },
                    { axis: "# Average Tyrant", value: data[this.Team_1][2], rvalue: data[this.Team_1][2] },
                    { axis: "# Average Dragon", value: data[this.Team_1][3], rvalue: data[this.Team_1][3] },
                    { axis: "# Average Tower Destroyed",value: data[this.Team_1][4], rvalue: data[this.Team_1][4] },
                    { axis: "Average Game Duration", value: data[this.Team_1][5], rvalue: data[this.Team_1][5]},
                ],
                [
                    { axis: "Winning Rate", value: data[this.Team_2][0], rvalue: data[this.Team_2][0] },
                    { axis: "team KDA ratio", value: data[this.Team_2][1], rvalue: data[this.Team_2][1] },
                    { axis: "# Average Tyrant", value: data[this.Team_2][2], rvalue: data[this.Team_2][2] },
                    { axis: "# Average Dragon", value: data[this.Team_2][3], rvalue: data[this.Team_2][3] },
                    { axis: "# Average Tower Destroyed",value: data[this.Team_2][4], rvalue: data[this.Team_2][4] },
                    { axis: "Average Game Duration", value: data[this.Team_2][5], rvalue: data[this.Team_2][5]},
                ],
            ];
            // standardize radar_data
            // console.log(radar_data[0][0].value);
            const radar_range = [1, 9, 3, 3, 9, 30];
            for (var i in d3.range(2)) {
                for (let j in d3.range(6)) {
                    // console.log(radar_range[j]);
                    var rScale = d3
                        .scaleLinear()
                        .domain([0, radar_range[j]])
                        .range([0, radarChartOptions.maxValue]);
                    var temp = radar_data[i][j].value;
                    radar_data[i][j].value = rScale(temp);
                }
            }
            
            // console.log(radar_data);

            //Call function to draw the Radar chart
            this.RadarChart("d3-radar-team", radar_data, radarChartOptions);
        },

        RadarChart(id, data, options) {
            // console.log(this.keywords_blue);
            var cfg = {
                w: 600, //Width of the circle
                h: 600, //Height of the circle
                margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
                levels: 5, //How many levels or inner circles should there be drawn
                maxValue: 0, //What is the value that the biggest circle will represent
                labelFactor: 1.2, //How much farther than the radius of the outer circle should the labels be placed
                wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
                opacityArea: 0.35, //The opacity of the area of the blob
                dotRadius: 4, //The size of the colored circles of each blog
                opacityCircles: 0.1, //The opacity of the circles of each blob
                strokeWidth: 2, //The width of the stroke around each blob
                roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
            };

            //Put all of the options into a variable called cfg
            if ("undefined" !== typeof options) {
                for (var i in options) {
                    if ("undefined" !== typeof options[i]) {
                        cfg[i] = options[i];
                    }
                } //for i
            } //if

            //If the supplied maxValue is smaller than the actual one, replace by the max in the data
            var maxValue = Math.max(
                cfg.maxValue,
                d3.max(data, function (i) {
                    return d3.max(
                        i.map(function (o) {
                            return o.value;
                        })
                    );
                })
            );

            var allAxis = data[0].map(function (i, j) {
                return i.axis;
            }), //Names of each axis
                total = allAxis.length, //The number of different axes
                radius = Math.min(cfg.w / 2, cfg.h / 2), //Radius of the outermost circle
                angleSlice = (Math.PI * 2) / total; //The width in radians of each "slice"

            //Scale for the radius
            var rScale = d3
                .scaleLinear()
                .range([0, radius])
                .domain([0, maxValue]);

            /////////////////////////////////////////////////////////
            //////////// Create the container SVG and g /////////////
            /////////////////////////////////////////////////////////
            //Calculate width and height
            const height = cfg.h + cfg.margin.top + cfg.margin.bottom,
                width = cfg.w + cfg.margin.left + cfg.margin.right;

            //Initiate the radar chart SVG
            var svg = d3
                .select("#" + id)
                .attr("width", width)
                .attr("height", height);

            //Append a g element
            svg.selectAll("g").remove();
            var g = svg
                .append("g")
                .attr(
                    "transform",
                    "translate(" +
                    (cfg.w / 2 + cfg.margin.left +50) +
                    "," +
                    (cfg.h / 2 + cfg.margin.top) +
                    ")"
                );

            /////////////////////////////////////////////////////////
            ////////// Glow filter for some extra pizzazz ///////////
            /////////////////////////////////////////////////////////

            //Filter for the outside glow
            var filter = g.append("defs").append("filter").attr("id", "glow"),
                feGaussianBlur = filter
                    .append("feGaussianBlur")
                    .attr("stdDeviation", "2.5")
                    .attr("result", "coloredBlur"),
                feMerge = filter.append("feMerge"),
                feMergeNode_1 = feMerge
                    .append("feMergeNode")
                    .attr("in", "coloredBlur"),
                feMergeNode_2 = feMerge
                    .append("feMergeNode")
                    .attr("in", "SourceGraphic");

            /////////////////////////////////////////////////////////
            /////////////// Draw the Circular grid //////////////////
            /////////////////////////////////////////////////////////

            //Wrapper for the grid & axes
            var axisGrid = g.append("g").attr("class", "axisWrapper");

            //Draw the background circles
            axisGrid
                .selectAll(".levels")
                .data(d3.range(1, cfg.levels + 1).reverse())
                .enter()
                .append("circle")
                .attr("class", "gridCircle")
                .attr("r", function (d, i) {
                    return (radius / cfg.levels) * d;
                })
                .style("fill", "#CDCDCD")
                .style("stroke", "#CDCDCD")
                .style("fill-opacity", cfg.opacityCircles)
                .style("filter", "url(#glow)");

            //Text indicating at what % each level is
            // axisGrid
            //     .selectAll(".axisLabel")
            //     .data(d3.range(1, cfg.levels + 1).reverse())
            //     .enter()
            //     .append("text")
            //     .attr("class", "axisLabel")
            //     .attr("x", 4)
            //     .attr("y", function (d) {
            //         return (-d * radius) / cfg.levels;
            //     })
            //     .attr("dy", "0.4em")
            //     .style("font-size", "10px")
            //     .attr("fill", "#737373")
            //     .text(function (d, i) {
            //         return (maxValue * d) / cfg.levels;
            //     });

            /////////////////////////////////////////////////////////
            //////////////////// Draw the axes //////////////////////
            /////////////////////////////////////////////////////////

            //Create the straight lines radiating outward from the center
            var axis = axisGrid
                .selectAll(".axis")
                .data(allAxis)
                .enter()
                .append("g")
                .attr("class", "axis");

            //Append the lines
            axis.append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", function (d, i) {
                    return (
                        rScale(maxValue * 1.1) *
                        Math.cos(angleSlice * i - Math.PI / 2)
                    );
                })
                .attr("y2", function (d, i) {
                    return (
                        rScale(maxValue * 1.1) *
                        Math.sin(angleSlice * i - Math.PI / 2)
                    );
                })
                .attr("class", "line")
                .style("stroke", "white")
                .style("stroke-width", "2px");

            //Append the labels at each axis
            axis.append("text")
                .attr("class", "legend")
                .style("font-size", "11px")
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .attr("x", function (d, i) {
                    return (
                        rScale(maxValue * cfg.labelFactor) *
                        Math.cos(angleSlice * i - Math.PI / 2)
                    );
                })
                .attr("y", function (d, i) {
                    return (
                        rScale(maxValue * cfg.labelFactor) *
                        Math.sin(angleSlice * i - Math.PI / 2) - 8
                    );
                })
                .text(function (d) {
                    return d;
                })
                .call(wrap, cfg.wrapWidth);

            /////////////////////////////////////////////////////////
            ///////////// Draw the radar chart blobs ////////////////
            /////////////////////////////////////////////////////////

            //The radial line function
            var radarLine = d3
                .lineRadial()
                .curve(d3.curveLinearClosed)
                .radius(function (d) {
                    return rScale(d.value);
                })
                .angle(function (d, i) {
                    return i * angleSlice;
                });

            if (cfg.roundStrokes) {
                radarLine.curve(d3.curveLinearClosed);
            }

            //Create a wrapper for the blobs
            var blobWrapper = g
                .selectAll(".radarWrapper")
                .data(data)
                .enter()
                .append("g")
                .attr("class", "radarWrapper");

            //Append the backgrounds
            blobWrapper
                .append("path")
                .attr("class", "radarArea")
                .attr("d", function (d, i) {
                    return radarLine(d);
                })
                .style("fill", function (d, i) {
                    return cfg.color(i);
                })
                .style("fill-opacity", cfg.opacityArea)
                .on("mouseover", function (d, i) {
                    //Dim all blobs
                    d3.selectAll(".radarArea")
                        .transition()
                        .duration(200)
                        .style("fill-opacity", 0.1);
                    //Bring back the hovered over blob
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .style("fill-opacity", 0.7);
                })
                .on("mouseout", function () {
                    //Bring back all blobs
                    d3.selectAll(".radarArea")
                        .transition()
                        .duration(200)
                        .style("fill-opacity", cfg.opacityArea);
                });

            //Create the outlines
            blobWrapper
                .append("path")
                .attr("class", "radarStroke")
                .attr("d", function (d, i) {
                    return radarLine(d);
                })
                .style("stroke-width", cfg.strokeWidth + "px")
                .style("stroke", function (d, i) {
                    return cfg.color(i);
                })
                .style("fill", "none")
                .style("filter", "url(#glow)");

            //Append the circles
            blobWrapper
                .selectAll(".radarCircle")
                .data(function (d, i) {
                    for (var item in d) {// item: key
                        d[item].index = i;
                    }
                    return d;
                })
                .enter()
                .append("circle")
                .attr("class", "radarCircle")
                .attr("r", cfg.dotRadius)
                .attr("cx", function (d, i) {
                    // console.log(d,i);

                    return (
                        rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2)
                    );
                })
                .attr("cy", function (d, i) {
                    return (
                        rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2)
                    );
                })
                .style("fill", function (d, i) {
                    return cfg.color(d.index);
                })
                .style("fill-opacity", 0.8);

            /////////////////////////////////////////////////////////
            //////// Append invisible circles for tooltip ///////////
            /////////////////////////////////////////////////////////

            //Wrapper for the invisible circles on top
            var blobCircleWrapper = g
                .selectAll(".radarCircleWrapper")
                .data(data)
                .enter()
                .append("g")
                .attr("class", "radarCircleWrapper");

            //Append a set of invisible circles on top for the mouseover pop-up
            blobCircleWrapper
                .selectAll(".radarInvisibleCircle")
                .data(function (d, i) {
                    return d;
                })
                .enter()
                .append("circle")
                .attr("class", "radarInvisibleCircle")
                .attr("r", cfg.dotRadius * 1.5)
                .attr("cx", function (d, i) {
                    return (
                        rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2)
                    );
                })
                .attr("cy", function (d, i) {
                    return (
                        rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2)
                    );
                })
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("mouseover", function (d, i) {
                    var newX = parseFloat(d3.select(this).attr("cx")) - 10;
                    var newY = parseFloat(d3.select(this).attr("cy")) - 10;

                    tooltip
                        .attr("x", newX)
                        .attr("y", newY)
                        .text(d.rvalue)
                        .transition()
                        .duration(200)
                        .style("opacity", 1);
                })
                .on("mouseout", function () {
                    tooltip.transition().duration(200).style("opacity", 0);
                });

            //Set up the small tooltip for when you hover over a circle
            var tooltip = g
                .append("text")
                .attr("class", "tooltip")
                .style("opacity", 0);

            return svg.node();
        }, //RadarChart
        curround(val) {
            // console.log("index",val);
            // this.Player_2 = val;
            this.round_num = val;
        },
        select_num(val) {
            // console.log("index",val);
            // this.Player_2 = val;
            this.selected_sequence_num = val;
        },
        seqr1(val){
            this.round1seq=val;
            // console.log("index:",typeof(this.round1seq));
            // console.log(this.round1seq);
        },
        seqr2(val){
            this.round2seq=val;
            // console.log("index;",this.round1seq);
        },
        seqr3(val){
            this.round3seq=val;
            // console.log("index;",this.round1seq);
        },
        seqr4(val){
            this.round4seq=val;
            // console.log("index;",this.round1seq);
        },
        seqr5(val){
            this.round5seq=val;
            // console.log("index;",this.round1seq);
        },
        seqr6(val){
            this.round6seq=val;
            // console.log("index;",this.round1seq);
        },
        changeName1(name) {
            this.Player_1 = name;
        },
        changeName2(name) {
            // console.log(name);
            this.Player_2 = name;
        },
        changeTeam1(name) {
            // console.log(name);
            this.Team_1 = name;
            // console.log(this.Team_1);
        },
        changeTeam2(name) {
            this.Team_2 = name;
        },
        squenceChanging(sequence){
            this.sequencechanged = sequence;
            // console.log(this.sequencechanged);
        },
        keywordsel1(keywords){
            // console.log(this.keywords_blue);
            this.keywords_blue.splice(0,this.keywords_blue.length);
            this.radarkeylength=0;
            for (var i=0;i<keywords.length;i++){
                this.keywords_blue.push(keywords[i]);
                // console.log(this.keywords_blue);
            this.radarkeylength = keywords.length;
            }
            // console.log(this.radarkeylength);
            // console.log(this.keywords_blue);
        },
        keywordsel2(keywords){
            // console.log(this.keywords_blue);
            this.keywords_red.splice(0,this.keywords_red.length);
            this.radarkeylength_red=0;
            for (var i=0;i<keywords.length;i++){
                this.keywords_red.push(keywords[i]);
                // console.log(this.keywords_red);
            this.radarkeylength_red = keywords.length;
            // console.log(keywords);
            }
            // console.log(this.keywords_red);
        },
        selectheroes(side){
            var block;
            if (side=="blue"){
                block = document.getElementById("multi_selection_view1");
                if (block.style.display=="block"){
                    block.style.display="none";
                    this.keywords_blue_string = this.keywords_blue.toString();
                    if (this.keywords_blue.length==0){
                        this.keywords_blue_string = "Please select heroes ⇪";
                    }
                } 
                else {
                    block.style.display="block";
                    this.keywords_blue_string = "Close ⇩";
                } 
                block = document.getElementById("multi_selection_view2");
                if (block.style.display=="block"){
                    block.style.display="none";
                }
            }
            if (side=="red"){
                block = document.getElementById("multi_selection_view2");
                if (block.style.display=="block"){
                    block.style.display="none";
                    this.keywords_red_string = this.keywords_red.toString();
                    if (this.keywords_red.length==0){
                        this.keywords_red_string = "Please select heroes ⇪";
                    }
                } 
                else{
                    block.style.display="block";
                    this.keywords_red_string = "Close ⇩";
                } 
                block = document.getElementById("multi_selection_view1");
                if (block.style.display=="block"){
                    block.style.display="none";
                }
            }
        }
    }
};