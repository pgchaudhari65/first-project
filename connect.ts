import mongoose from 'mongoose';
import config from "./config/default";

async function connect(){
    const dburi = config.dburi;

    try{
    await mongoose.connect(dburi);
    console.log("DB Connected");
    }catch(error) {
          console.error("Could not connect to DB");
          process.exit(1);
      }
}

export default connect