import mongoose from "mongoose";



type connectionObject = {
    isConnected? : number
}


const connection : connectionObject = {}

export async function dbConnect() : Promise<void> {

    if (connection.isConnected) {
        console.log("database is already connected");
        return
    }

    try {

        const dbConnection = await mongoose.connect(`${process.env.MONGO_URI}`);

        connection.isConnected = dbConnection.connections[0].readyState;

        console.log("database is already connected");
        
    } catch (error) {
        console.log("error while connecting to databse: ",error);
        process.exit(1);
    }

}