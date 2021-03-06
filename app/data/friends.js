//client side js file
let friendArr = [{
    "name": "Ahmed",
    "photo": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5637e3a5-c9de-47b3-9a4b-5ca00eae3084/d3doqc4-b25414f7-3b39-4d40-a427-e71da3056e6a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2MzdlM2E1LWM5ZGUtNDdiMy05YTRiLTVjYTAwZWFlMzA4NFwvZDNkb3FjNC1iMjU0MTRmNy0zYjM5LTRkNDAtYTQyNy1lNzFkYTMwNTZlNmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tw_JV7EwwxQvORiHIOLVKxRJTJFDD0QYId59ZPc8yPg",
    "survey": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}]

//function to return the friend Array
function getIt() {
    return friendArr;
}

//function to add a friend to the Array
function addIt(friendObj) {
    //get the answers from the form
    for (var i = 0; i < friendObj.survey.length; i++) {
        friendObj.survey[i] = parseInt(friendObj.survey[i]);
    }
    //find the best match
    let bestie = findBestie(friendObj);
    //push the new friend on the array
    //this must be done after we search for a match or we will always match 
    //ourselves :)
    friendArr.push(friendObj);
    /*console.log("========================================================")
    console.log("friendArr");
    console.log(friendArr);
    console.log("bestie");
    console.log(bestie);

    console.log("=========================================================")
    console.log("friendArr[bestie]")
    console.log(friendArr[bestie]);
    console.log("=========================================================")*/
    return friendArr[bestie];
}

//find the best friend by comparing you answers to everyone on the list
//get the absolute value of the deiffernece of each answer and total it up
//lower difference is you best friend
function findBestie(friendObj) {
    let bestie = 0;
    let bestieDiff = 0;
    for (var i = 0; i < friendArr.length; i++) {
        totalDiff = 0;
        for (var j = 0; j < friendArr[i].survey.length; j++) {
            totalDiff += Math.abs(friendObj.survey[j] - friendArr[i].survey[j]);
        }
        if (i !== 0) {
            if (totalDiff < bestieDiff) {
                bestie = i;
                bestieDiff = totalDiff;
            }
        } else {
            bestie = 0;
            bestieDiff = totalDiff;
        }
    }
    return bestie;
}

module.exports.getIt = getIt;
module.exports.addIt = addIt;