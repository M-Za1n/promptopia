import mongoos from 'mongoose'
let isConnected = false;
export const connectToDB = async () => {
    mongoos.set('strictQuery', true)
    if (isConnected) {
        console.log('already connected to db')
    }
    else {
        try {
            const db = await mongoos.connect(process.env.MONGO_DB_URI, {
                dbName: 'PromptopiaUsers',
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            isConnected = true
        }
        catch (error) {
            console.log(error)
        }
    }
}