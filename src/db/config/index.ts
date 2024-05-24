import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI || ''
const dbName = process.env.MONGO_DB_NAME


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const db = client.db(dbName)

export const getCollection = (collectionName: string) => {
  return db.collection(collectionName)
}