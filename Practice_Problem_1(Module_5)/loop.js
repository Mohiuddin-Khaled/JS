// structure of for loop
// for(initialization; condition; step value)
// {
// code
// }

// same work use loop
// for (var i = 0; i < 15; i++) {
//     console.log("Hello World!");
//     console.log(i);
// }


var friends = ["rahim", "karim", "jobbar", "salam", "borkot"];

// array element print
// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
// array element check with condition 
// for (var i = 0; i < friends.length; i++) {
//     if (friends[i] == "jobbar") {
//         console.log("Jobbar was a Legendary person!");
//     }
// }
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];
    if (element == "karim") {
        console.log("karim is a good person!");
    }
}
