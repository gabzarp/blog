
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
                description: "must be a string and is required",
                text: true                
              },
              email: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              password: {
                bsonType: "string",
                description: "must be a string and is required",
              }
           }
        }
     }
  }
);
db.createCollection( 'post',{
    validator: {
        $jsonSchema: {
           bsonType: "object",
           required: [ "title", "text", 'date', 'user'],
           properties: {
              title: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              text: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              user:{ 
                bsonType: "object",
                required: [ "name"],
                properties: {
                  name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                  }
                }
              }          
           }
        }
     }
  }
);
db.post.createIndex( { title: "text", text: "text" } )
db.user.createIndex( { "email": 1 }, { unique: true } )

 

db.user.insertOne({email:'admin@admin.com.br', password : '$2a$10$hYulJ1c0WHXlBwFuk/mqkeGU2/qSfjPd/5n7PS95AJF9dtrLyZpue', name : 'admin', role : 'admin'})
