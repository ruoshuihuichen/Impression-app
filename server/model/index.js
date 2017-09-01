let mongoose=require('mongoose');
mongoose.Promise=Promise;
mongoose.connect('mongodb://localhost:27017/MyTravel',{useMongoClient:true});
let UserSchema=new mongoose.Schema({
    username:String,
    password:String
});
module.exports=mongoose.model("User",UserSchema);















