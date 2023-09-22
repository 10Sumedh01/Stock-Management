// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://new_user1:euek47jV9dFtcj0o@cluster0.mjxtz5i.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.find(query).toArray();

    console.log(allProducts);
    return NextResponse.json({ allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
    let body = await request.json()
    const uri =
      "mongodb+srv://new_user1:euek47jV9dFtcj0o@cluster0.mjxtz5i.mongodb.net/";
      
  
    const client = new MongoClient(uri);
  
    try {
      const database = client.db("stock");
      const inventory = database.collection("inventory");
  
      // Query for a movie that has the title 'Back to the Future'
      const query = {};
      const product = await inventory.insertOne(body);
  
      console.log(product );
      return NextResponse.json({ product , ok:true});
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  
