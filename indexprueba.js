const Db = require('mongodb/lib/db')
const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () =>{
    await mongo().then((mongoose) =>{
        try{
            console.log('Connected to mongodb!')

            const user ={
                email: 'test@email.comt',
                username: 'Maiku',
                password: 'Almi123'
            }
            await new userSchema(user).save() 
        }   finally{
            mongoose.connection.close()
        }  
        } 
)} 
connectToMongoDB()
Db.collection('test').insertOne(
   {
       testid : 4,
       testname: "test53523"
   } 
);