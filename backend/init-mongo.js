conn = new Mongo()
db = conn.getDB("blogdb")
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
           required: [ "name", "email", "password", "salt" ],
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