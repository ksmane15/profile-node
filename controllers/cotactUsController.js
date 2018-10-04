module.exports = function(req,res){
    console.log(" Inside Contact  ====>")
    res.json({
        page:"/contact",
        details:{
            email:"kaustubhmane15@gmail.com",
            contact:"1234567890",
            Ext:"511"
        }
    });
}