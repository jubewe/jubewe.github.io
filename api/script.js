// import * as endpoints from "./endpoints.json";
const endpoints = require("./endpoints.json")

function appendendpoints(){
    let j_api_endpoints_div = document.getElementById("j_div_endpoints");

    console.log(endpoints)

};

document.onload = setTimeout(() => {
    appendendpoints();
}, 1);