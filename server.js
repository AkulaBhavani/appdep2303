const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path=require("node:path");
const app = express();
app.use(cors());
app.use(express.static(path.join(_dirname, "./client/build")));

app.get("/getEmployees",async (req,res)=>{

   // limit(100).skip(10)
   //.select({ firstName: 1, lastName: 1,_id:0 });
   //.sort([['department', 'desc']])
   //.and([{ department: 'Marketing' }, { country: 'Russia' }]).count()
   //.and([{ country: 'Russia',
   //age: { $gte: 18,$lte:35 } }])

    let retrievedData = await Employee.
    find()
    //.select({country:1,_id:0}).distinct("country")
    

    res.json(retrievedData);
})
  
app.put("/updateCountry",async (req,res)=>{

let result = await Employee.updateMany({country:"China"},
{country:"India", firstName:"Radha",lastName:"Krishna"})

res.json(result);

})

app.delete("/deleteCountry",async (req,res)=>{
    let result = await Employee.deleteMany({country:"United Kingdom"})
    res.json(result);
})
app.listen(1111,()=>{
    console.log("Listening to port 1111")
})



let connectToMDB = async ()=>{

 try{
    await mongoose.connect("mongodb+srv://bhavani22:bhavani22@cluster0.59adeej.mongodb.net/Batch2303?retryWrites=true&w=majority")
  console.log("successfully connected to mdb");
// getDataFromMDB();
 }catch(err){
    console.log("Unable to connect to mdb")
 }

}

let employeeSchema = new mongoose.Schema({
    
id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
country:String,
age:Number,
department:String,
})

let Employee = new mongoose.model("employee",employeeSchema);

// let listingAndReviewsSchema = new mongoose.Schema({

//     _id:Number,
//     listing_url:String,
//     name:String, 
//     summary:String,
//     space:String,
//     description:String,
//     neighborhood_overview:String,
//     notes:String,
//     transit:String,
//     access:String,
//     interaction:String,
//     house_rules:String,
//     property_type:String,
//     room_type:String,
//     bed_type:String,
//     minimum_nights:Number,
//     maximum_nights:Number,
//     cancellation_policy:String,
//     last_scraped:String,
//     calendar_last_scraped:String,
//     first_review:String,
//     last_review:String,
//     accommodates:Number,
//     bedrooms:Number,
//     beds:Number,
//     number_of_reviews:Number,
//     bathrooms:Number,
    
//     amenities:Array,
//     price:Number,
//     security_deposit:Number,
//     cleaning_fee:Number,
//     extra_people:Number,
//     guests_included:Number,
//     images:Object,
//    host:Object,
//     address:Object,  
//     availability:Object,
//     review_scores:Object,
//      reviews:Array,


// })

// let Hotel = new mongoose.model("hotel",listingAndReviewsSchema,"listingsAndReviews");

let getDataFromMDB = async ()=>{
    let retrievedData = await Employee.find()
    console.log(retrievedData);
}



connectToMDB();
