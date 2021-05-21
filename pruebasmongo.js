const {MongoClient} = require('mongodb');
const mongoose = require('mongoose')
const mongo = require ('./mongo')
//conectar mongo
async function main(){
    const uri = "mongodb+srv://colmena:Almi123@cluster0.lh31a.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
        await client.connect();
        await listDatabases(client);
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
    }  
} 

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
        
    });
} 
const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
} 
)
module.exports = mongoose.model('users', userSchema)