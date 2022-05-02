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
npm mongod

Client side - 
npm install
npm install react-sound
npm start - opens browser on localhost:3000

