const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Change mongoose's promise to ES6
mongoose.Promise = global.Promise;

// Variables needed from configs.js
const { PORT, DATABASE_URL } = require('./config/config');

// Create the express app
const app = express();

// Set up routs
const Post = require("./routers/routerPost");
const Users = require("./routers/routerUsers");


// Let express know to grab files from public folder
app.use(morgan("common")); // Our server logger
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", Post);
app.use("/api/auth", Users;




// this is mock data, but when we create our API
// we'll have it return data that looks like this
var MOCK_WORRY_UPDATE = {
	"worryUpdates": [
        {
            "id": "1111111",
            "text": "Wow I'm really anxious about this. Duis quis mi rhoncus, fermentum massa a, efficitur augue. Integer posuere sapien diam, in feugiat mi faucibus ut. Nullam gravida lacus ut mi eleifend, lacinia sagittis lectus dapibus. Nulla facilisi. Vivamus vel nunc id erat blandit pretium sit amet eu sem. Nam diam velit, suscipit eu libero accumsan, dignissim eleifend ante. Mauris vestibulum sodales augue sit amet tempus.",
            "friendId": "aaaa",
            "upVotes": 3,
            "comments": [
                { "content": "i know it doesn't feel like it but it'll be ok" },
                { "content": "i was dealing with the same shit recently" },
                { "content": "sometimes time is the best teacher" },
                { "content": "wow that's really challenging. maybe seek out outside support?" }
            ]
        },
        {
            "id": "2222222",
            "text": "i can't stop thinking about xyz. Quisque viverra eros ante, in commodo sem maximus sed. Morbi posuere sapien at eros cursus feugiat. Maecenas commodo at erat eu rutrum.",
            "friendId": "bbbb",
            "upVotes": 1,
            "comments": [
                { "content": "i know it doesn't feel like it but it'll be ok" },
                { "content": "i was dealing with the same shit recently" },
                { "content": "sometimes time is the best teacher" },
                { "content": "wow that's really challenging. maybe seek out outside support?" }
            ]
        },
        {
            "id": "333333",
            "text": "I've always had trouble getting over abc. Vivamus in auctor diam. Curabitur eleifend efficitur tempus. Vivamus mollis posuere lorem ac egestas. Quisque libero augue, varius at lorem et, tempus ultrices odio. Cras pellentesque nisl vel aliquam iaculis. Aliquam pulvinar ante vitae rhoncus dignissim. Duis ultricies volutpat luctus. Duis quis mi rhoncus, fermentum massa a, efficitur augue. Integer posuere sapien diam, in feugiat mi faucibus ut. Nullam gravida lacus ut mi eleifend, lacinia sagittis lectus dapibus. ",
            "friendId": "cccc",
            "upVotes": 7,
            "comments": [
                { "content": "i know it doesn't feel like it but it'll be ok" },
                { "content": "i was dealing with the same shit recently" },
                { "content": "sometimes time is the best teacher" },
                { "content": "wow that's really challenging. maybe seek out outside support?" }
            ]
        },
        {
            "id": "333333",
            "text": "I can't get this out of my head. I know it's not a big deal, but...Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida interdum ultrices. Nunc pellentesque nunc tellus, ac tincidunt nibh feugiat id. Fusce eu nibh urna.",
            "friendId": "dddd",
            "upVotes": 10,
            "comments": [
                { "content": "i know it doesn't feel like it but it'll be ok" },
                { "content": "i was dealing with the same shit recently" },
                { "content": "sometimes time is the best teacher" },
                { "content": "wow that's really challenging. maybe seek out outside support?" }
            ]
        },
    ]
};

var MOCK_USER_INFO = {
    "usersLogin" : [
        {
            "email": "aaaa",
            "password": "abc123!",
            "firstName": "Susan"
        },
    ]
};


// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getRecentWorries(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(MOCK_WORRY_UPDATES)}, 1);
}

// this function stays the same when we connect
// to real API later
function displayWorryUpdates(data) {
    for (index in data.worryUpdates) {
	   $("body").append(
        "<p>" + data.worryUpdates[index].text + "</p>",
        "<ul>",
        "<li>" + data.worryUpdates[index].comments.content[0] + "</li>",
        "<li>" + data.worryUpdates[index].comments.content[1] + "</li>",
        "<li>" + data.worryUpdates[index].comments.content[2] + "</li>",
        "<li>" + data.worryUpdates[index].comments.content[3] + "</li>",
        "</ul>"
        );
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayWorries() {
	getRecentWorries(displayWorryUpdates);
}

//  on page load do this
$(function() {
	getAndDisplayWorries();
})