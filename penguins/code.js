var penguinPromise = d3.json("classData.json");
penguinPromise.then (
function(data)
    {
        console.log("works", data)
        getQuizGrade(data)
        console.log(getQuizGrade(data))
        console.log(getQuizHelper(data[0]))

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

var getQuizHelper = function(penguin) {
    
    return penguin.quizes[0].grade
}