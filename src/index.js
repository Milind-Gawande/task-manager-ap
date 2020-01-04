const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

//Below registered middleware function for specific request to execute
// app.use((req, res, next)=>{
//     console.log(req.method, req.path);
//     next();
//     if (req.method === 'GET') {
//         res.send('GET request are disabled');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next)=>{
//         res.status(501).send('Site is currently down. Check back soon');
// });


// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'));
//         }

//         cb(undefined, true);
//         // cb(new Error('File must be a PDF'));
//         // cb(undefined, true);
//         // cb(undefined, false)
//     }
// });

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware');
// }

// app.post('/upload', upload.single('upload') , (req, res)=>{
//     res.send();
// }, (error, req, res, next)=>{
//     res.status(400).send({error: error.message}); //the  message is coming from middleware function which is filefilter that throws a msg or middleware function if it is being called
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5e087a80a046c11754313985');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5e0878b3178fa812201e8bcb');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();