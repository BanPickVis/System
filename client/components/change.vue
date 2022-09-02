<template>
    <div id="change_plot">
        <!-- Initialize a select button -->
        <span class="selectButton">
            <el-select
                v-model="select_hero"
                placeholder="Select"
                style="width: 90px"
            >
            <el-option
                v-for="item in heroselection"
                :key="item"
                :label="item"
                :value="item"
            />
            </el-select>
        </span>

        <span class="selectTeam">
            <el-select
                v-model="select_team"
                placeholder="Select"
                style="width: 90px"
            >
            <el-option
                v-for="item in teamselection"
                :key="item"
                :label="item"
                :value="item"
            />
            </el-select>
        </span>
        <span id="changecontent">
            {{ content }}
        </span>
    </div>
</template>

<!-- <script src="./simpletimeline.js"></script> -->
<script>
import requesthelp from "common/utils/request.js";

export default {
    props: {
        team1:{ type: String, default:""},
        team2:{ type: String, default:""},
    },
    setup() {
        
    },
    data(){
        return {
            heroselection:[],
            select_hero: "",
            select_team:"",
            content:"",
            constdata:{},
            herodata:{},
            selectdate:"",
            teamselection:[this.team1,this.team2]
        };
    },
    watch:{
        select_hero(val){
            for (var i=0;i<this.constdata.hero.length;i++){
                if (this.constdata.hero[i].name==val){
                    this.content = this.constdata.hero[i].change;
                }
            }
            
            this.plotchange();
            // this.plotline();
            this.select_team="";
            // this.plotchange();
        },
        team1(){
            this.teamselection=[this.team1,this.team2];
            console.log(this.teamselection);
        },
        team2(){
            this.teamselection=[this.team1,this.team2];
            console.log(this.teamselection);
        },
        select_team(){
            // this.plotchange();
            this.plotline();
        }
    },
    mounted(){
        this.plot();
    },
    methods:{
        async plotline(){
            // console.log(this.team1);
            d3.selectAll(".myline").remove();
            var svg=d3.select("#thissvg").append('g');
            var teamdata = await requesthelp.axiosGet('/getHeroChangeTeam', { hero: this.select_hero, date: this.selectdate, team: this.select_team });
            console.log(teamdata);
            var alldata = await requesthelp.axiosGet('/getHeroChange', { hero: this.select_hero, date: this.selectdate });
            var data = alldata.herodata;
            var teamherodata = teamdata.herodata;

            var margin = {top: 130, right: 50, bottom: 30, left: 40},
            width = 700 - margin.left - margin.right,
            height = 390 - margin.top - margin.bottom;

            var Item = ["Win Rate", "Picked Rate", "Banned Rate"],
            Item2 = ["Average Kill", "Average Death", "Average Assist"];

            // X axis
            var x = d3.scaleBand()
            .range([ 0, width/2 ])
            .domain(Item);

            var x2 = d3.scaleBand()
            .range([ 0, width/2 ])
            .domain(Item2);


            // Add Y axis
            var y = d3.scaleLinear()
            .domain([0, 1])
            .range([ height, 0]);
            var y2 = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return d.value; })+2])
            .range([ height, 0]);

            var data_t1 = [teamherodata[0],teamherodata[1],teamherodata[2]];
            var data_t2 = [teamherodata[3],teamherodata[4],teamherodata[5]];

            svg.selectAll("lines")
            .data(data_t1)
            .enter()
            .append("line")
                .attr("class","myline")
                .attr("x1", function(d) { return (x(d.group)); })
                .attr("x2", function(d) { return (x(d.group)+x.bandwidth()-20); })
                .attr("transform", "translate(50,130)")
                .attr("stroke", "#991239")
                .attr("stroke-width", "5px")
                .attr("y1", height)
                .attr("y2", height)
                .style("stroke-dasharray", ("10, 10"))
                .transition()
                .duration(800)
                .attr("y1", function(d) { return y(d.value); })
                .attr("y2", function(d) { return y(d.value); })
                .delay(function(d,i){return(i*100);});

            svg.selectAll("lines")
            .data(data_t2)
            .enter()
            .append("line")
                .attr("class","myline")
                .attr("x1", function(d) { return (x2(d.group)); })
                .attr("x2", function(d) { return (x2(d.group)+x2.bandwidth()-20); })
                // .attr("transform", "translate(20,0)")
                .attr("transform", "translate(355,130)")
                .attr("stroke", "#991239")
                .attr("stroke-width", "5px")
                .attr("y1", height)
                .attr("y2", height)
                .style("stroke-dasharray", ("10, 10"))
                .transition()
                .duration(800)
                .attr("y1", function(d) { return height - y2(d.value); })
                .attr("y2", function(d) { return height - y2(d.value); })
                .delay(function(d,i){return(i*100);});
        },
        async plotchange(){
            // console.log(this.team1);
            d3.select("#thissvg").remove();
            var alldata = await requesthelp.axiosGet('/getHeroChange', { hero: this.select_hero, date: this.selectdate });
            var data = alldata.herodata;
            // console.log(data);

            var margin = {top: 130, right: 50, bottom: 30, left: 40},
            width = 700 - margin.left - margin.right,
            height = 390 - margin.top - margin.bottom;

            var svg = d3.select("#change_plot")
            .append("svg")
                .attr("id","thissvg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            var Item = ["Win Rate", "Picked Rate", "Banned Rate"],
            Item2 = ["Average Kill", "Average Death", "Average Assist"];

            // X axis
            var x = d3.scaleBand()
            .range([ 0, width/2 ])
            .domain(Item);

            var x2 = d3.scaleBand()
            .range([ 0, width/2 ])
            .domain(Item2);

            // legends
            var legend = svg.append("g")
                .attr("transform", "translate(100,-10)");
            legend.append("rect")
                .attr("fill","#999999")
                .attr("width",50)
                .attr("height",25)
                .attr("opacity",0.5);
            legend.append("text")
                .text("before")
                .attr("transform", "translate(70,20)")
                .style("font-size", 25);

            legend.append("rect")
                .attr("fill","#EF8A62")
                .attr("width",50)
                .attr("height",25)
                .attr("opacity",0.5)
                .attr("transform", "translate(200,0)");
            
            legend.append("text")
                .text("after")
                .attr("transform", "translate(270,20)")
                .style("font-size", 25);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                    .attr("transform", "translate(15,0)")
                    .attr("font-size","15px");
            
            svg.append("g")
                .attr("transform", "translate(305," + height + ")")
                .call(d3.axisBottom(x2))
                .selectAll("text")
                    .attr("transform", "translate(15,0)")
                    .attr("font-size","15px");

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, 1])
                .range([ height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y).ticks(3));
            var y2 = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return d.value; })+2])
                .range([ height, 0]);
            svg.append("g")
                .attr("transform", "translate("+width+",0)")
                .call(d3.axisRight(y2).ticks(3));

            var data1 = [data[0],data[1],data[2]];
            var data2 = [data[3],data[4],data[5]];
            
            var data3 = [data[6],data[7],data[8]];
            var data4 = [data[9],data[10],data[11]];
            // Bars
            svg.selectAll("mybar")
                .data(data1)
                .enter()
                .append("rect")
                    .attr("x", function(d) { return x(d.group); })
                    .attr("width", x.bandwidth()-20)
                    .attr("transform", "translate(10,0)")
                    .attr("fill", "#999999")
                    .attr("opacity",0.5)
                    // no bar at the beginning thus:
                    .attr("height", function(d) { return height - y(0); }) // always equal to 0
                    .attr("y", function(d) { return y(0); })
                    .transition()
                    .duration(800)
                    .attr("y", function(d) { return y(d.value); })
                    .attr("height", function(d) { return height - y(d.value); })
                    .delay(function(d,i){return(i*100);});

            // Bars
            svg.selectAll("mybar")
                .data(data2)
                .enter()
                .append("rect")
                    .attr("x", function(d) { return x2(d.group); })
                    .attr("width", x2.bandwidth()-20)
                    .attr("transform", "translate(315,0)")
                    .attr("fill", "#999999")
                    .attr("opacity",0.5)
                    // no bar at the beginning thus:
                    .attr("height", 0) // always equal to 0
                    .attr("y", function(d) { return y2(d3.min(data, function(d) { return d.value; })); })
                    .transition()
                    .duration(800)
                    .attr("y", function(d) { return y2(d.value); })
                    .attr("height", function(d) { return height - y2(d.value); })
                    .delay(function(d,i){return(i*100);});

            svg.selectAll("mybar")
                .data(data3)
                .enter()
                .append("rect")
                    .attr("x", function(d) { return x(d.group); })
                    .attr("width", x.bandwidth()-60)
                    .attr("transform", "translate(30,0)")
                    .attr("fill", "#EF8A62")
                    .attr("opacity",0.5)
                    // no bar at the beginning thus:
                    .attr("height", function(d) { return height - y(0); }) // always equal to 0
                    .attr("y", function(d) { return y(0); })
                    .transition()
                    .duration(800)
                    .attr("y", function(d) { return y(d.value); })
                    .attr("height", function(d) { return height - y(d.value); })
                    .delay(function(d,i){return(i*100);});

            // Bars
            svg.selectAll("mybar")
            .data(data4)
            .enter()
            .append("rect")
                .attr("x", function(d) { return x2(d.group); })
                .attr("width", x2.bandwidth()-60)
                .attr("transform", "translate(335,0)")
                .attr("fill", "#EF8A62")
                .attr("opacity",0.5)
                // no bar at the beginning thus:
                .attr("height", 0) // always equal to 0
                .attr("y", function(d) { return y2(d3.min(data, function(d) { return d.value; })); })
                .transition()
                .duration(800)
                .attr("y", function(d) { return y2(d.value); })
                .attr("height", function(d) { return height - y2(d.value); })
                .delay(function(d,i){return(i*100);});
        },

        async plot(){
        var self = this;
        var data =  await requesthelp.axiosGet('/getChange');
        // console.log(data);
        // this.constdata=data;

        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 50, bottom: 30, left: 50},
            width = 700 - margin.left - margin.right,
            height = 90 - margin.top - margin.bottom;
        var svg = d3.select("#change_plot")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
        
        const parseTime =  d3.timeParse("%Y/%m/%d");
        
        var x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return parseTime(d.date); }))
            .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("stroke-width",3)
        // .attr("stroke","grey")
        .call(d3.axisBottom(x))
        .attr("font-size",20);

        // Add the points
        svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("class", "myCircle")
            .attr("cx", function(d) { return x(parseTime(d.date)); } )
            .attr("cy", 30 )
            .attr("r", 20)
            .attr("stroke", "grey")
            .attr("stroke-width", 4)
            .attr("fill", "white")
            .on("click", function(d){self.selection(d);});
        svg
        .append("g")
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
            .attr("class", "myText")
            .attr("x", function(d) { return x(parseTime(d.date))-7.5; } )
            .attr("y", 39 )
            .attr("r", 20)
            .style("font-size", 25)
            .attr("fill","grey")
            .style("font-family", "Impact")
            .text(function(d) { return d.number; })
            .on("click", function(d){self.selection(d);});




        },
        selection(data){
            this.heroselection = [];
            for (var i=0;i<data.hero.length;i++){
                this.heroselection[i]=data.hero[i].name;
            }
            this.constdata=data;
            
            this.select_hero = this.heroselection[0];
            this.content = data.hero[0].change;
            this.selectdate = data.date;
            // this.plotchange();

        },
        

    }
};
</script>

<style>
.selectButton {
    position: absolute;
    top: 25%;
    left: 2%;
    opacity: 100%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
.selectTeam {
    position: absolute;
    top: 33%;
    left: 2%;
    opacity: 100%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
#changecontent{
    position: absolute;
    top: 26%;
    left: 20%;
    width:70%;
    opacity: 100%;
    display: block;
    font-size: 14px;
    margin-bottom: 20px;
}
.myCircle{
    cursor: pointer;
}
.myText{
    cursor: pointer;
}
</style>