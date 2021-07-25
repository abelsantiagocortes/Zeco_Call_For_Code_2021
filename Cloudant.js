const Cloudant = require("@cloudant/cloudant")

cloudant()

async function cloudant(){

  console.log("Creating cloudant connection...")

  try{
    const cloudant = Cloudant ({
      url: "https://aa45b4e1-a1a1-4f43-84e9-c3142b477080-bluemix.cloudantnosqldb.appdomain.cloud",
      plugins:{
        iamauth:{
          iamApiKey:"Ca6Vg8WCxLBkAqlYc6I2fMFeFWQL0PbIsQtJg0_sF09I"
        }
      }
    })
    console.log("Created cloudant connection...")

    console.log("Getting cloudant dbs...")

    let allDBS= await cloudant.db.list(); 


    console.log(`Cloudant dbs [${allDBS}]`);

    console.log("Insert doc into dbs...");

    const enterprise={"_id":"1","name":"Saju"};

    let res="";

    const db = cloudant.db.use("zeco-db");

    res = await db.insert(enterprise)

    console.log(res);


  }catch(err){

  }
  

}  