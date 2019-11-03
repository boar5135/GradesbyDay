var penguinPromise = d3.json("classData.json");

penguinPromise.then (
function(data)
    {
        console.log("works", data)
        //setup(data);
        days.forEach(function(day,index) {
        data.map(function(data) 
                 {return data.quizes[index].grade}) 
            
        d3.select("body")
            .append("button")
            .text("Day" + d)
            .on("click", function() {
            setup(points) 
        })

    },
function(error) 
{
    console.log("broke", err)
}
);

var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14, 16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40]



var setBanner= function()
{
    d3.select("h1").text("GradesbyDay")
}

var points = data.map(function(days,index)
{
    return {
        x:i,
        y:data.quizes[index].grades 
    }})
    
console.log("points", points)

var screen = {width:800, height:800}

var drawGraph = function(points, xscale, yscale) {
    d3.select("svg")
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(point) {//console.log(xscale(point.x));
    return xscale(point.x);
    })
    .attr("cy", function(point) {
        console.log(yscale(point.y));
        return yscale(point.y)
    })}



var setup = function(points) {
    d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height)
    
var xscale = d3.scaleLinear()

xscale.domain([0,d3.max(points, function(point) {return point.x
})])
               
xscale.range([100,screen.width-50])

var yscale=d3.scaleLinear()
yscale.domain
    ([d3.min(points, function(p) {
        return p.y}),
    d3.max(points,function(points) {return points.y})])
    yscale.range([100, screen.height-600])
    
    
    drawGraph(points, xscale, yscale)
}


setup(points);




