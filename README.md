Trivia App - Brief

The BBC are looking to improve their online offering of educational content for all ages by developing an interactive trivia app that presents quizzes on a variety of topics. The user should be able to select from a variety of topics and view their score. Your task is to make a Minimum Viable Product or prototype to put forward to them - this may only showcase some of the features to be included in the final app.

MVP

A user should be able to:
Select from a variety of topics 
be able to answer through multiple choice and view results (including score and incorrect answers)
Record and display the user’s scores even after the page refreshes. 

Example Extensions

Add multiplayer functionality.
Use charts to display user scores.
Automatically create new db collection for each user / set of users
Add a section for true / false quizzes instead of multiple choice

API, Libraries, Resources

https://opentdb.com/api_config.php Open Trivia to generate the trivia questions
https://www.highcharts.com/ HighCharts is an open-source library for rendering responsive charts.

Instructions to run this app -

Clone this app 

Server side - 
npm run server:dev (listens on localhost:5000)
to run MongoDB : sudo mongod --dbpath /System/Volumes/Data/data/db

If you are then receiving exit code 48 you will need to change the port on which Mongod runs
sudo mongod --dbpath /System/Volumes/Data/data/db -port 27018

Client side - 
npm install
npm install react-sound
npm start - opens browser on localhost:3000


Please find link to images presenting our frontend

[Image of the Quiz](https://github.com/szWoj/trivia_js_project/blob/main/client/src/images/Quiz.png) /

[Image of Questions ](https://github.com/szWoj/trivia_js_project/blob/main/client/src/images/Question.png) /

[Image of Answers and Scores](https://github.com/szWoj/trivia_js_project/blob/main/client/src/images/AnswersScores.png) /

[Image of background image](https://github.com/szWoj/trivia_js_project/blob/main/client/src/images/yellowbrickroad2.jpeg) 
![Screen Shot 2022-05-21 at 16 42 39](https://user-images.githubusercontent.com/79700458/169659063-83f6e163-70c9-4a14-bd97-5f4e29b3fbe6.png)
![Screen Shot 2022-05-21 at 16 42 59](https://user-images.githubusercontent.com/79700458/169659073-2b3cd725-7dca-4990-a222-1172219afe86.png)
![Screen Shot 2022-05-21 at 16 42 57](https://user-images.githubusercontent.com/79700458/169659086-c196c6d1-d1b4-4017-a8a7-db194af12086.png)
![Screen Shot 2022-05-21 at 16 43 06](https://user-images.githubusercontent.com/79700458/169659094-dd5e0fc8-8ca4-4c96-9d0a-d207b4b14a0e.png)
![Screen Shot 2022-05-21 at 16 43 15](https://user-images.githubusercontent.com/79700458/169659096-934566cc-0392-4b02-9a3b-bdcf7413fcdc.png)



