import mongoose from "mongoose"
import 'dotenv/config'

const mongoAtlasUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cluster0.siopf.mongodb.net/jwtDb?retryWrites=true&w=majority&appName=Cluster0`;
function mongooseConnection() {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(mongoAtlasUri).then(() => {
      console.log("Db connected!");
    });
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
}

function check(){
  console.log("here")
}

export {mongooseConnection,check}