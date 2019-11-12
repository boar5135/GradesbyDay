var penguinPromise = d3.json("classData.json");

penguinPromise.then (
function(penguins)
    {
        
        console.log("works", penguins)
        var getpoints = points(penguins, 1)
        console.log(getpoints)
        setup(getpoints)
        createDays(penguins)
        createNext(penguins)
        createPrevious(penguins)
        console.log(createDays)
    }),


        /*days.forEach(function(day,index) 
        {
        console.log(classData.map(function(studentinfo) 
         {return studentinfo.quizes[index].grade})
                   )})
                     
        d3.select(".penguinRow")
            .append("button")
            .text("Day" + days)
            .on("click", function() {
            d3.selectAll("svg").remove()
            setup(points);
        }),*/



function(error) 
{
    console.log("broke", err)
};

var createDays = function(penguins) {
    d3.select("#daytable")
    .selectAll("button")
    .data(penguins[0].quizes)
    .enter()
    .append("button")
    .text(function (d) {
        return ("Day " + d.day)
    })
    
    .on("click", function(quiz, index) {
      d3.selectAll("svg *").remove()
        
        var getpoints = points(penguins, index)
        console.log(getpoints)
        setup(getpoints)
        
    })
}


var createNext = function(penguins) {
    d3.select("#next")
    .append("button")
    .data(penguins[0].quizes)
    .text("Next")
    .on("click", function(quiz,index) {
        
        d3.selectAll("svg *").remove()
        
        if(index < 39)
        {var getpoints = points(penguins, index+2)
        console.log(getpoints)
        setup(getpoints)
         
         
         
         
    }})
    
    var getpoints = points(penguins, 0)
        console.log(getpoints)
        setup(getpoints)
        
}

var createPrevious = function(penguins) {
    d3.select("#previous")
    .append("button")
    .data(penguins[0].quizes)
    .text("Previous")
    .on("click", function(quiz,index) {
        
        d3.selectAll("svg *").remove()
        
          if(index < 39)
        {var getpoints = points(penguins, index+2)
        console.log(getpoints)
        setup(getpoints)
         
         
         
         
    }})
    
    var getpoints = points(penguins, 0)
        console.log(getpoints)
        setup(getpoints)
        
}
    
    

            
var setBanner= function()
{
    d3.select("h1").text("GradesbyDay")
}

  

var points = function(penguins, day)
{
    return penguins.map(function(d,i)

{
        return {
        x:i,
        y:d.quizes[day].grade
        }
})
}

    
console.log("points", points)

var screen = {width:800, height:800}

var drawGraph = function(points, xscale, yscale) {
    d3.select("svg")
     .attr("width", screen.width)
    .attr("height", screen.height)
    
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
        return yscale(point.y)
    })}


var setup = function(points) {
    d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height)
    
var xscale = d3.scaleLinear()

xscale.domain([0,d3.max(points, function(point) {return point.x})])
               
xscale.range([100,screen.width-50])

var yscale=d3.scaleLinear()
yscale.domain
    ([d3.min(points, function(p) {
        return p.y}),
    d3.max(points,function(points) {return points.y})])
    yscale.range([100, screen.height-600])
    
    drawGraph(points, xscale, yscale)
}

