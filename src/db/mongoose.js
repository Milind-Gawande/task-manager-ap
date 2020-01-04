const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true, //access to data in collection whenever
    useUnifiedTopology: true,
    useFindAndModify: true
});
