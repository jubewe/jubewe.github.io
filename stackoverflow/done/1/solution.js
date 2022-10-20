//what is the URL of your google spreadsheet?
var sheetURL = "https://script.google.com/macros/s/AKfycbzFUCt3CCgxKuh-LpX3J864Lu0iCyQJLDkJ_bgedhBiDiRPKAjbs7u7aEk5yX99NeM2/exec";
var scoreVarName = "userScore"; //what is the name of the score varible in SL?
var userVarName = 'userName'; //what is the name of the user name varible in SL?
var topTenVarName = 'topTen'; //what is the name of the top ten message varible in SL?

/*
 *** Do not edit below this line. ***
 */
var player = GetPlayer(); //Get the SL player
var userScore = player.GetVar(scoreVarName); //Get the score from the player
var userTag = player.GetVar(userVarName); //Get the user name from the player
player.SetVar(topTenVarName, "Loading..."); //Temporarily set the top ten message 
var topTenMsg; //We will build the top ten message in this var. 
//Set up our AJAX 
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.open("GET", sheetURL + "?id=" + userTag + "&score=" + userScore, true);
xhttp.send();
xhttp.onreadystatechange = function () {
    //If we get a successful reply from our spreadsheet:
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var topTenJson = JSON.parse(xhttp.responseText);
        //This is the begining of the top ten message. Edit carefully
        //First we create the results for this learner (\n creates a new line)
        var userResults = "جایگاه شما " + topTenJson.user.rank + " با امتیاز: " + topTenJson.user.score + "\n";
        //Then we introduce the top ten.
        var topTenUsers = " " + topTenJson.users.length + " بازیکن برتر: \n";
        //We append the second line of text to the message
        topTenMsg = userResults + topTenUsers;
        //Now we loop through each of the top 10
        for (var i = 0; i < topTenJson.users.length; i++) {
            //convert the date to something friendly 
            var recordDate = new Date(topTenJson.users[i].date);
            var recordDateString = recordDate.getDate() + "/" + (recordDate.getMonth() + 1) + "/" + recordDate.getFullYear() + " " + recordDate.getHours() + ":" + recordDate.getMinutes();
            //Append the users info (rank, name, date) to the message. 
            topTenMsg += (i + 1) + " - نام: " + topTenJson.users[i].id + " امتیاز: " + topTenJson.users[i].score + " زمان: " + recordDateString + "\n";
        }
        //Push the message back into Storyline
        player.SetVar(topTenVarName, topTenMsg);
    }
}
