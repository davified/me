# Learning Ninja

This is the client for Learning Ninja, which is an app that makes learning math fun and accessible. It's built on Angular 1.5 (with lots of help from Angular Material)

## What the app does:

- Increased student engagement. Points, badges and social elements of the game keeps students engaged
- Maximised knowledge retention. It hopes to engage both the left brain (words and logic) and the right brain (visuals and imagination) of the student.
- Unlimited quests and questions for topics covered by PSLE, 'O' level and 'N' level exams. [pending more seed data]
- Immediate feedback on what a student knows/doesn't know.
- A platform for teachers to upload questions, distribute assignments and make learning fun (Best part: no marking needed!)
- Full exam papers at the end of the game to test a student's ability

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
