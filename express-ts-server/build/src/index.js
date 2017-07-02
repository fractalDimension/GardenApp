// <reference path="../typings/tsd.d.ts" />
"use strict";
const express = require("express");
const Middlewares = require("./config/middlewares/base/MiddlewaresBase");
const app = express();
// var port = parseInt(process.env.PORT, 10) || 5000;
const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
app.use(Middlewares.configuration);
app.listen(port, () => {
    console.log('Node app is running at localhost:' + port);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSSwyQ0FBMkM7O0FBRTdDLG1DQUFvQztBQUNwQyx5RUFBMEU7QUFFMUUsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDdEIscURBQXFEO0FBQ3JELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTFELENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuICBpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbiAgaW1wb3J0IE1pZGRsZXdhcmVzID0gcmVxdWlyZSgnLi9jb25maWcvbWlkZGxld2FyZXMvYmFzZS9NaWRkbGV3YXJlc0Jhc2UnKTtcblxuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIC8vIHZhciBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDUwMDA7XG4gIGNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgMzAwMDtcbiAgYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuICBhcHAudXNlKE1pZGRsZXdhcmVzLmNvbmZpZ3VyYXRpb24pO1xuXG4gIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGFwcCBpcyBydW5uaW5nIGF0IGxvY2FsaG9zdDonICsgcG9ydCk7XG5cbiAgfSk7XG4iXX0=