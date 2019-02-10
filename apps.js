// this is mock data, but when we create our API
// we'll have it return data that looks like this
var MOCK_WORRY_UPDATE = {
	"worryUpdates": [
        {
            "id": "1111111",
            "text": "wow i'm really anxious about this.",
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
            "text": "i can't stop thinking about xyz",
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
            "text": "i've always had trouble getting over abc",
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
            "text": "i can't get this out of my head. i know it's not a big deal, but...",
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