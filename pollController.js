exports.createPollGetController = (req,res,next)=>{
    res.render('create')
}
exports.createPollPostController = async (req,res,next)=>{
    console.log(req.body)
    
    res.render('create')

}
