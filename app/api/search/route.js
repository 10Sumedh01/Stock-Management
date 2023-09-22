// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    const query = request.nextUrl.searchParams.get("query");

  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://new_user1:euek47jV9dFtcj0o@cluster0.mjxtz5i.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    
    const allProducts = await inventory.aggregate([{
        $match:{
            $or:[
          {slug:{$regex:query,$options:"i"}},
        //   {quantity:{$regex:"sh",$options:"i"}},
        //   {price:{$regex:"sh",$options:"i"}},
    ]
    }
    }]).toArray();

    // console.log(allProducts);
    return NextResponse.json({success:true, allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}