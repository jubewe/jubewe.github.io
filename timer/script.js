let countnum = 0;
let countnuma = 0;
let counttype = 2;
let counttypea = 2;
// 0 = off, 1 = countdown, 2 = countup
let overtime = 1;
// 0 = off, 1 = on, 2 = active
let controls = 0;
let controlstop = 0;
let controlreset = 0;

async function rf(filepath){
    return new Promise(function(resolve, reject) {
        fetch(filepath)
        .then(response => {
            return resolve(response.text());
        })
        .catch(e => {
            return reject();
        })
    })
}

function countdown(countdownstart, countdownid){
    if(![undefined, null].includes(countdownstart)){
        countnum = countdownstart;
    }
    if([undefined, null].includes(countdownid)){
        countdownid = "counter";
    }
    if(overtime !== 2){
        document.getElementById("counter_ot_div").style.display = "none";
    }
    
    setTimeout(() => {
        document.getElementById(countdownid).innerHTML = `${convert(countnum).join(":")}`;
        document.getElementById("control_countup").style.backgroundColor = "white";
        document.getElementById("control_countdown").style.backgroundColor = "aqua";
    }, 0);
    let countdowninterval = setInterval(() => {
        if(controlstop === 1){
            controlstop = 0;
            countnuma = countnum;
            clearInterval(countdowninterval);
        }
        if(controlreset === 1){
            controlreset = 0;
            clearInterval(countdowninterval);
        }
        if(counttype === 1){
            if(countnum - 1000 > 0){
                countnum = countnum - 1000;
                document.getElementById(countdownid).innerHTML = `${convert(countnum).join(":")}`;
            } else {
                if(countnum > 0){
                    countnum = countnum - 1000;
                    document.getElementById(countdownid).innerHTML = `${convert(countnum).join(":")}`;
                }
                document.getElementById("counter_div").style.backgroundColor = "red";
                if(overtime === 1){
                    document.getElementById("counter_ot_div").style.display = "block";
                    overtime = 2;
                    // counttype = 2;
                    countup(countnum, "counter_ot");
                } else {
                    counttype = 0;
                }
                clearInterval(countdowninterval);
            }
        } else {
            clearInterval(countdowninterval);
        }
    }, 1000);
}
function countup(countupstart, countupid){
    if(![undefined, null].includes(countupstart)){
        countnum = countupstart;
    }
    if([undefined, null].includes(countupid)){
        countupid = "counter";
    }
    if(overtime !== 2){
        document.getElementById("counter_ot_div").style.display = "none";
    }
    setTimeout(() => {
        document.getElementById(countupid).innerHTML = `${convert(countnum).join(":")}`;
        document.getElementById("control_countup").style.backgroundColor = "aqua";
        document.getElementById("control_countdown").style.backgroundColor = "white";
        if(overtime === 2){
            document.getElementById("control_countdown").style.backgroundColor = "red";
        }
    }, 0);
    let countupinterval = setInterval(() => {
        // console.log(`${controlstop} ${controlreset}`)
        if(controlstop === 1){
            controlstop = 0;
            countnuma = countnum;
            clearInterval(countupinterval);
        }
        if(controlreset === 1){
            controlreset = 0;
            clearInterval(countupinterval);
            if(counttypea === 1){
                countdown(countnuma, countupid)
            } else if(counttypea === 2){
                countup(countnuma, countupid)
            }
        }
        if(counttype === 2 || overtime === 2){
            countnum = countnum + 1000;
            document.getElementById(countupid).innerHTML = `${convert(countnum).join(":")}`;
        } else {
            clearInterval(countupinterval);
        }
    }, 1000);
}
function pad2(n) { return n < 10 ? '0' + n : n };
function convert(inp){
    let seconds = inp / 1000
    let hours = parseInt(seconds / 3600)
    seconds = seconds % 3600
    let minutes = parseInt(seconds / 60)
    seconds = seconds % 60
    return [pad2(hours), pad2(minutes), pad2(seconds)]
}
if(/(\?|\&)+(time)+(\=)/g.test(document.URL)){
    let starttime = document.URL.split(/(\?|\&)+(time)+(\=)/g).reverse()[0]
    if(starttime.includes("&")){
        starttime = starttime.split("&")[0]
    }
    if(starttime.includes("T")){
        let starttimea = new Date(starttime);
        countnum = parseInt(((Date.now() - starttimea.getTime()) + (2*60*60*1000)).toString().substr(0, ((Date.now() - starttimea.getTime()) + (2*60*60*1000)).toString().length-3)+"000");
        countnuma = countnum;
    } else if(starttime.includes(":")){
        countnum = (starttime.split(":").length === 3 ? parseInt(starttime.split(":")[0])*60*60*1000+parseInt(starttime.split(":")[1])*60*1000+parseInt(starttime.split(":")[2])*1000 : 0)
        countnuma = countnum;
    } else {
        countnum = (!isNaN(parseInt(starttime)) ? parseInt(starttime) : 0)
        countnuma = countnum;
    }
    document.getElementById("control_time").innerHTML = countnum
}
if(/(\?|\&)+(type)+(\=)/g.test(document.URL)){
    let counturltype = document.URL.split(/(\?|\&)+(type)+(\=)/g).reverse()[0]
    
    if(counturltype.includes("&")){
        counturltype = counturltype.split("&")[0]
    }
    if(["0", "stop"].includes(counturltype)){
        counttype = 0;
        counttypea = counttype;
    } else if(["1", "countdown"].includes(counturltype)){
        counttype = 1;
        counttypea = counttype;
        // countdown(countnum);
    } else if(["2", "countup"].includes(counturltype)){
        counttype = 2;
        counttypea = counttype;
        // countup(countnum);
    }
} else {
    // countup(countnum);
}
if(/(\?|\&)+(ot|overtime)+(\=)/g.test(document.URL)){
    let counturlot = document.URL.split(/(\?|\&)+(ot|overtime)+(\=)/g).reverse()[0]
    if(counturlot.includes("&")){
        counturlot = counturlot.split("&")[0]
    }
    if(["0", "off"].includes(counturlot)){
        overtime = 0;
    } else if(["1", "on"].includes(counturlot)){
        overtime = 1;
    }
}
if(/(\?|\&)+(controls)+(\=)/g.test(document.URL)){
    let counturlcontrols = document.URL.split(/(\?|\&)+(controls)+(\=)/g).reverse()[1]
    if(counturlcontrols.includes("&")){
        counturlcontrols = counturlcontrols.split("&")[0]
    }
    if(["0", "off"].includes(counturlcontrols)){
        controls = 0;
    } else if(["1", "on"].includes(counturlcontrols)){
        controls = 1;
    }
}
if(/(\?|\&)+(bgcolor|backgroundcolor)+(\=)/g.test(document.URL)){
    let counterurlbgcolor = document.URL.split(/(\?|\&)+(bgcolor|backgroundcolor)+(\=)/g).reverse()[0]
    if(counterurlbgcolor.includes("&")){
        counterurlbgcolor = counterurlbgcolor.split("&")[0]
    }
    document.getElementById("counter_div").style.backgroundColor = counterurlbgcolor;
}
if(/(\?|\&)+(tcolor|textcolor)+(\=)/g.test(document.URL)){
    let counterurltcolor = document.URL.split(/(\?|\&)+(tcolor|textcolor)+(\=)/g).reverse()[0]
    if(counterurltcolor.includes("&")){
        counterurltcolor = counterurltcolor.split("&")[0]
    }
    document.getElementById("counter_div").style.color = counterurltcolor;
}
if(/(\?|\&)+(bgimg|backgroundimage)+(\=)/g.test(document.URL)){
    let counterurlbgimg = document.URL.split(/(\?|\&)+(bgimg|backgroundimage)+(\=)/g).reverse()[0]
    if(counterurlbgimg.includes("&")){
        counterurlbgimg = counterurlbgimg.split("&")[0]
    }
    counterurlbgimg = decodeURI(counterurlbgimg)
    if(counterurlbgimg.includes('"')){
        counterurlbgimg = counterurlbgimg.split('"')[1].split('"')[0]
    }
    document.getElementById("counter_div").style.backgroundImage = `URL('${counterurlbgimg}')`;
}

if(/(\?|\&)+(timer)+(\=)/g.test(document.URL)){
    let counterurltimer = document.URL.split(/(\?|\&)+(timer)+(\=)/g).reverse()[0]
    if(counterurltimer.includes("&")){
        counterurltimer = counterurltimer.split("&")[0];
    }

    (async() => {
        let timers;
        await rf("./timers.json")
        .then(f => {
            timers = JSON.parse(f);
        })
        .catch(e => {
            return;
        })
        
        

        if(Object.keys(timers).includes(counterurltimer)){
            let timer = timers[counterurltimer];
            if(timer.time.includes("T")){
                let starttimea = new Date(timer.time.replace(/[^0-9TZ\-\:\.]/g, ""));
                countnum = parseInt(((Date.now() - starttimea.getTime()) + (2*60*60*1000)).toString().substr(0, ((Date.now() - starttimea.getTime()) + (2*60*60*1000)).toString().length-3)+"000");
                countnuma = countnum;
            } else if(timer.time.includes(":")){
                countnum = (timer.time.split(":").length === 3 ? parseInt(timer.time.split(":")[0])*60*60*1000+parseInt(timer.time.split(":")[1])*60*1000+parseInt(timer.time.split(":")[2])*1000 : 0)
                countnuma = countnum;
            } else {
                countnum = (!isNaN(parseInt(timer.time)) ? parseInt(timer.time) : 0)
                countnuma = countnum;
            }
    
            overtime = timer.ot;
            controls = timer.controls;
            document.getElementById("counter_div").style.backgroundColor = timer.bgcolor;
            document.getElementById("counter_div").style.color = timer.tcolor;
            if(!["",0,null,undefined].includes(timer.bgimg)){
                document.getElementById("counter_div").style.backgroundImage = `URL('${timer.bgimg}')`;
            }
            startcounter();
        }
    })()
} else {
    startcounter();
}

/*
    document.getElementById("control_time").oninput = function(){
        if(!isNaN(parseInt(document.getElementById("control_time").innerHTML))){
            countnum = parseInt(document.getElementById("control_time").innerHTML);
            countnuma = countnum;
        }
    }

    document.getElementById("control_start").onclick = function(){
        startcounter()
    }

    document.getElementById("control_reset").onclick = function(){
        controlreset = 1;
    }

    document.getElementById("control_stop").onclick = function(){
        controlstop = 1;
    }

*/

function startcounter(){
    if(counttype === 1){
        countdown(countnum);
    } else if(counttype === 2){
        countup(countnum);
    }
}
