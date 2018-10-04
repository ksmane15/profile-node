module.exports = function(req,res){
    console.log(" Inside About Page ===>")
    res.json({
        page:"/about",
        details:{
            name:"Kaustubh Mane",
            emp_id:"3676",
            desc: "Hunger for learning. Voracious reader. Loves Coding"
        }
    })
}