
db.createUser({
    user : "gabriel",
    pwd : "1234",
    roles:[
        {
            role: "readWrite",
            db : "blogdb"
        }
    ]
});
db.createCollection( 'user',{
    validator: {
        $jsonSchema: {
           bsonType: "object",
           required: [ "name", "email", "password" ],
           properties: {
              name: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              email: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              password: {
                bsonType: "string",
                description: "must be a string and is required"
              }
           }
        }
     }
  }
);
db.user.insertOne({email:'admin@admin.com.br', password : '$2a$10$0Rnbnyt.YKUpdF27C2PPvOYsUTB7.tzzDYhpJk0w7K1vzX.o7xRiW', name : 'admin', role : 'admin'})
