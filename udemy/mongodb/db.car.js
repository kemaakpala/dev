//insert records into document
db.car.insert({
  name: 'honda',
  make: 'accord',
  year: '2010'
});

// update a key value in document
db.car.update({
  name: 'honda'
},
{
  $set:{
    name: 'ford'
  }
})

//updated document to include new key
db.car.update({
  name: 'ford'
},
{
  $set:{
    transmission: 'automatic'
  }
},
{
  $upset:true
})
//insert multiple records
db.contactlist.insert([
  { name: 'Patrick', email: 'patrick@testemail.com', number: '(555) 555-5555' },
  { name: 'Demee', email: 'Demee@testemail.com', number: '(777) 777-7777' }
]);
// deletes all records in the document
//db.car.remove({})

// deletes all record with the name ford
//db.car.remove({name:ford})
