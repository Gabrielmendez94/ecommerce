import dotenv from 'dotenv';

dotenv.config();

export default{
    server:{
        port: process.env.PORT,
        baseurl: process.env.BASE_URL,
    },
    mongo:{
        dbUser: process.env.MONGO_USER,
        dbPass: process.env.MONGO_PSWD,
        dbHost: process.env.MONGO_HOST
    }
}