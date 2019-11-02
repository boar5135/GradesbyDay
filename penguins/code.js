var penguinPromise = d3.json("classData.json");

penguinPromise.then (
function(data)
    {
        console.log("works", data)
        getQuizGrade(data)
        console.log(getQuizGrade(data))
        console.log(getQuizHelper(data[0]))
        drawGraph(data)

    },
function(error) 
{
    console.log("broke", err)
}
);

var setBanner= function()
{
    d3.select("h1").text("GradesbyDay")
}

var getQuizGrade = function(data) {
    
    var x= data.map(getQuizHelper);
    return x
}

var getQuizHelper = function(data) {
    
    return data.quizes[0].grade
}

var ys = [7, 9, 3, 6, 7, 5, 6, 7, 5, 7, 4, 6, 5, 7, 5, 6, 9, 6, 5, 8, 5, 6, 9]  

var points = ys.map(function(y,i)
{
    return {
        x:i,
        y:y 
    }})
    
console.log("points", points)

var screen = {width:800, height:800}

var setup = function(points) {
    d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height)
    
var xscale = d3.scale.linear()
xscale.domain([0,d3.max(points, function(points) {
    return points.x
})])
xscale.range([0,screen.width])

var yscale=d3.scale.linear()
y.scale.domain
    d3.min(points, function(p) {
        return points.y})
    d3.max(points,function(points) {return points.y})
    yscale.range([screen.height,0])
    
}


var drawGraph = function(points, xscale, yscale) {
    d3.select("svg")
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(points) {
        return xscale(points)
    })
    .attr("cy", function(points) {
        return yscale(points)
    })}



