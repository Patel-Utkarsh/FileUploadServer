const mongoose = require("mongoose");
const dbConnect = async () => {
    const dbConnect = await mongoose.connect('mongodb://127.0.0.1:27017/Files',{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })

    .then(()=>{
        console.log('Db connected successfully')
    })

    .catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnect;