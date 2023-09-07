const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")


// const base_url = process.env.base_url
const port = process.env.PORT || 5000


main().catch(err => console.log(err));
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const formSchema = new mongoose.Schema({
    first: {
        type:String,
        required:[true,"This field is required"]
    },
    last: {
        type:String,
        required:[true,"This field is required"]
    },
    company: {
        type:String,
        required:[true,"This field is required"]
    },
    bussinessEmail: {
        type:String,
        required:"Email is a reuired field",
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    useCase: {
        type:String,
        required:[true,"This field is required"]
    }
})
async function main(){
  
        await mongoose.connect("mongodb+srv://prathamalekar48:p33liZuE4Vk4CxC0@cluster0.glbf0ij.mongodb.net/?retryWrites=true&w=majority")}

main();
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.post("/login/submit",(req,res)=>{
    const Person = mongoose.model('person', formSchema);
    

    const person1 = new Person(req.body);
    
    person1.save();
    res.send(person1)
    // 
    
})
app.listen(port, ()=>{
    console.log("listening to port 5000")
})
 