require('dotenv').config()
require('./database')
const app = require('./app')


const main = async ()=>{
    await app.listen(app.get('Port'));
    console.log(`App running on port ${app.get('Port')}`);
    
}

main()