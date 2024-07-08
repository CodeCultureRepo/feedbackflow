/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'CoLearnDB';


// Create a new database.
use(database);

// Create a new collection.
db.createCollection('students');
db.createCollection('tutors');
db.createCollection('subjects');
db.createCollection('messages');

db.users.insertMany([
    {
        user_id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'student'
      },
      {
        user_id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'student'
      }
]);

db.tutors.insertMany([
    {
        tutor_id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        qualifications: 'MSc in Mathematics',
        subjects: ['Mathematics', 'Physics']
      },
      {
        tutor_id: 2,
        name: 'Bob Brown',
        email: 'bob@example.com',
        qualifications: 'PhD in Chemistry',
        subjects: ['Chemistry']
      }
]);

db.subjects.insertMany([
    {
      subject_id: 1,
      name: 'Mathematics',
      tutor_ids: [1]
    },
    {
      subject_id: 2,
      name: 'Physics',
      tutor_ids: [1]
    },
    {
      subject_id: 3,
      name: 'Chemistry',
      tutor_ids: [2]
    }
  ]);
  db.users.createIndex({ user_id: 1 }, { unique: true });
  db.tutors.createIndex({ tutor_id: 1 }, { unique: true });
  db.subjects.createIndex({ subject_id: 1 }, { unique: true });
// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
