
use quizzes;
db.dropDatabase();

db.scores.insertOne(
    
    { 
        name: "developer",
        category : "Science",
        difficulty : "hard",
        score :  6
    }

);
