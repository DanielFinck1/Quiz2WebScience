Sample Angular/Node/AJAX application
====================================
This sample application demonstrates how to use Angular and Node together,
and how to get Angular to automagically update itself. Comments are in the
appropriate files.

To get this set up:
* Run `npm install` to install everything Node needs.
* cd into the `ajax` directory.
* Run `npm install` to install everything Angular needs.
* Run `ng build`.
* cd back to the first directory ("..").
* Run `npm start`.
* The application should now be available at http://localhost:3000

List of files to examine:
* server.js
* ajax/src/styles.css
* ajax/src/app/app.component.html
* ajax/src/app/http.service.ts
* ajax/src/app/ajax/ajax.component.html
* ajax/src/app/ajax/ajax.component.ts

Test 2 - Daniel Finck

Sources:
Dr. Callahan - started with his ajax file and worked from that
https://www.javatpoint.com/display-data-from-json-file-in-angular - used this to learn how to read from json files in angular
https://material.angular.io - used some angular materials
ResuManager - used the some html and css from our header component 