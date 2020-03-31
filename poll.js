const {Schema , model} = require('mongoose') ;

const pollschema = new Schema({
    title:{
        type:String,
        required:true,
        trim : true

    },
    description : {
        type:String,
        required:true,
        trim : true
    },
    totalVotes : {
        type : Number,
        default : 0
    },
    options: {
        type:[{
            name : String,
            vote : Number
        }]
    }
})
const Poll = model('poll',pollschema)

module.exports=Poll