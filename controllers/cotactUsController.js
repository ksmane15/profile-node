module.exports = function(req,res){
    console.log(" Inside Contact Us ====>")
    res.json({
        page:"/contactUs",
        details:{
            email:"kaustubh.mane@opusconsulting.com",
            contact:"7798654238",
            Ext:"511"
        }
    });
}