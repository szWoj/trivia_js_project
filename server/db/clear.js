
use quizzes;
db.dropDatabase();

db.scores.insertOne(
    
    { 
        name: "developer",
        category : "Science: Computers",
        difficulty : "hard",
        score :  10
    }

);
