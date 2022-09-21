document.onload = appendlisteners();

function requestids(){
    if(getCookie("requestopts")){

    } else {

        displayerror("Error: Please login first");
    }
};

function request(){

};

function displayerror(errormessage){
    let errorel = document.getElementById("output_error");
    let errorcl = document.getElementsByClassName("output_error");
    errorel.innerText = errormessage;
    for(i = 0; i < errorcl.length; i++){
        errorcl[i].style.display = "inline-block";
    }

    setTimeout(() => {
        errorel.innerText = "";
        for(i = 0; i < errorcl.length; i++){
            errorcl[i].style.display = "none";
        }
    }, 5000)
};

function openblank(url){
    window.open(url, '_blank')
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
};

function appendlisteners(){
    document.getElementById("input_submit").addEventListener("click", () => {requestids});
    document.getElementById("_url_reference").addEventListener("click", () => {openblank('https://dev.twitch.tv/docs/api/reference#get-users')});
    
};