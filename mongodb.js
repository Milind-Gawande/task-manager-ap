// Below also can work individually

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//Alternative to destructure object of mongodb.Takes mongoclient and objectID at same time
const {MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
//console.log(id);
// console.log(id.id.length)
// console.log(id.toHexString().length);
//console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
        if (error) {
            return console.log('Unable to connect to database');
        }

        // console.log('Connected correctly');
        const db = client.db(databaseName);

        db.collection('tasks').deleteOne({
            description: 'Clean the house'
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })

        // db.collection('users').deleteMany({
        //     age : 27
        // }).then((result)=>{
        //     console.log(result);
        // }).catch((error)=>{
        //     console.log(error);
        // });

        // db.collection('tasks').updateMany({
        //     completed: false
        // },{
        //     $set: {
        //         completed: true
        //     }
        // }).then((result)=>{
        //     console.log(result.modifiedCount);
        // }).catch((error)=>{
        //     console.log(error);
        // });

        // db.collection('users').updateOne({
        //     _id: new ObjectID('5e01045bd6180628d88fa2bf')
        // },{
        //     // $set: {
        //     //     name: 'Mike'
        //     // }
        //     $inc: {
        //         age: 1  //to increment the age by 1
        //     }
        // }).then((result)=>{
        //     console.log(result);
        // }).catch((error)=>{
        //     console.log(error);
        // })

        // db.collection('users').findOne({_id: new ObjectID("5e010a7ab6c1bf42acb4cc72")},(error, user)=>{
        //         if(error) {
        //             return console.log('Unable to fetch');
        //         }
        //         console.log(user);
        // });

        //find return cursor which has toArray, count method which has callback
        // db.collection('users').find({ age: 27 }).toArray((error, user)=>{
        //     console.log(user);
        // });

        // db.collection('users').find({ age: 27 }).count((error, count)=>{
        //     console.log(count);
        // });

        // db.collection('tasks').findOne({_id: new ObjectID("5e01074fd7abe11bfc9c107a")}, (error, task)=>{
        //     console.log(task);
        // });

        // db.collection('tasks').find({completed: false}).toArray((error, tasks)=>{
        //     console.log(tasks);
        // });
        //Insert only one document

        // db.collection('users').insertOne({
        //     _id: id,
        //     name: 'Vikram',
        //     age: 26
        // },(error, result)=>{
        //     if (error) {
        //         return console.log('Unable to insert user');
        //     }
        //     //result of array in documents
        //     console.log(result.ops);
        // });

        //Insert Multiple documents
        // db.collection('users').insertMany([
        //     {
        //         name: 'Jen',
        //         age: 28
        //     },
        //     {
        //         name: 'Gunther',
        //         age: 27
        //     }
        // ], (error, result)=>{
        //      if(error) {
        //          return console.log('Unable to insert documents');
        //      }

        //      console.log(result.ops);

        // });

        // db.collection('tasks').insertMany([
        //     {
        //         description: 'Clean the house',
        //         completed: true
        //     },
        //     {
        //         description: 'Renew inspection',
        //         completed: false
        //     },
        //     {
        //         description: 'Put plants',
        //         completed: false
        //     }
        // ],(error, result)=>{
        //         if (error) {
        //             return console.log('Unable to insert tasks');
        //         }

        //         console.log(result.ops);
        // });
});