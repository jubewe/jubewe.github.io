let ws_ = {
    "connect": true
};

let opts = {
    "dev": true
};

let cache = {};
let msgnum = 0;

let badges = {
    "vip": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/"
    },
    "moderator": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/"
    },
    "broadcaster": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/"
    },
    "artist-badge": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/"
    },
    "founder": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/"
    },
    "glitchcon2020": {
        "url": "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/"
    }
};

document.onload = setTimeout(_main, 1);

let urlparams = {};
if(document.URL.includes("?")){
    let url = document.URL.replace("?", "&");
    url.split("&").forEach(p => {
        urlparams[p.split("=")[0]] = p.split("=")[1];
    })
};

if(urlparams.bgcolor){
    document.getElementsByTagName("body")[0].style.backgroundColor = urlparams.bgcolor;
}

function _main(){
    document.getElementById("j_chat").style.maxHeight = window.innerHeight;
    createmessage("Server", "Welcome", "#00FFFF");
    _ws(urlparams.channel || "jubewe");
};

function _ws(channel){
    const ws = new WebSocket("wss://irc-ws.chat.twitch.tv/");

    ws.addEventListener("open", w => {
        console.info("[WS] Opened");
        ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands");
        ws.send("PASS SCHMOOPIE");
        ws.send("NICK justinfan123")
        ws.send(`JOIN #${channel || "jubewe"}`);
    
        setInterval(() => {
            if(ws_.connect){
                ws.send("PING");
            } else {
                clearTimeout();
            }
        }, 25000);
        // ws.send(`CAP REQ :twitch.tv/tags twitch.tv/commands`);
    });
    
    ws.addEventListener("close", () => {
        console.info(`[WS] Closed`);
    });
    
    ws.addEventListener("error", e => {
        console.error(`[WS] Error`);
        console.error(a);
    });
    
    ws.addEventListener("message", m => {
        if(opts.dev){
            console.log(`[WS] Message\n${m.data}`);
        }
        let response = {
            "type": (m.data.startsWith("@badge") && !m.data.startsWith(":") ? "PRIVMSG" : (m.data.split(" ")[0].toUpperCase() === m.data.split(" ")[0] ? m.data.split(" ")[0] : m.data.split(" ")[1]))
        }
    
        switch (response.type){
            case "PONG": {
                console.info(`[WS] [PONG]`);
                break;
            }
    
            case "PRIVMSG": {
                console.log(`[WS] [MESSAGE]`);
                let pm = privmsg_parser(m.data);
                pm.message = m.data.split(" ");
                pm.message.splice(0, 3);
                console.log(pm.message)
                pm.message = pm.message.join(" ").split("\r\n")[0].split(":")[1];
                createmessage(pm.display_name, pm.message, pm.color, pm.badges)
                if(opts.dev){
                    console.log(pm);
                }
                break;
            }

            case "JOIN": {
                console.log(`[WS] [JOIN]`);
                createmessage("Server", `Joined #${channel}`, "#00FFFF");
                break;
            }
        }
    });
}

function getmsgbadges(msg_badges){
    if(!msg_badges) return "";
    if(msg_badges.length > 0){
        let msg_ret = "";
        for(let msg_badge in msg_badges.split(",")){
            if(badges[msg_badges.split(",")[msg_badge].split("/")[0]]){
                msg_ret += `<j_msg_badge><img src="${badges[msg_badges.split(",")[msg_badge].split("/")[0]].url}1" class="j_msg_badge"></j_msg_badge>`;
            }
        }
        return msg_ret;
    } else {
        return "";
    }
};

function createmessage(username, message, color, badges){
    let messagenode = document.createElement("j_msg");
    // messagenode.innerHTML = 
    // `<j_msg>
    //     <j_msg_timestamp>${new Date(new Date().setMinutes(new Date().getMinutes()-new Date().getTimezoneOffset())).toISOString().split(".")[0].split("T")[1]}</j_msg_timestamp>
    //     <j_msg_username ${(username == "server" ? `class='font_courier'` : '')}${(color ? `style="color:${color}"` : "")}>${getmsgbadges(badges)} <h>${username}</h></j_msg_username>
    //     <j_msg_message>${message}</j_msg_message>
    // </j_msg>`;
    let j_msg_timestamp = document.createElement("j_msg_timestamp");
    j_msg_timestamp.innerText = new Date(new Date().setMinutes(new Date().getMinutes()-new Date().getTimezoneOffset())).toISOString().split(".")[0].split("T")[1];
    let j_msg_badges = document.createElement("j_msg_badges");
    j_msg_badges.innerHTML = getmsgbadges(badges);
    let j_msg_username = document.createElement("j_msg_username");
    j_msg_username.innerText = username;
    if(username == "server"){j_msg_username.className = "font_courier";}
    if(color){j_msg_username.style.color = color;}
    let j_msg_message = document.createElement("j_msg_message");
    j_msg_message.innerText = message;

    if(urlparams.bgcolor){
        messagenode.style.backgroundColor = urlparams.bgcolor;
    } else {
        messagenode.className = "bgcolor_007474c6";
    }

    if(urlparams.fgcolor || ["transparent", "white"].includes(urlparams.bgcolor)){
        j_msg_timestamp.style.color = urlparams.fgcolor || "white";
        j_msg_message.style.color = urlparams.fgcolor || "white";
    }

    if(urlparams.minwidth){
        j_msg_badges.style.minWidth = urlparams.minwidth;
        j_msg_username.style.minWidth = urlparams.minwidth;
    }

    messagenode.appendChild(j_msg_timestamp);
    messagenode.appendChild(j_msg_badges);
    messagenode.appendChild(j_msg_username);
    messagenode.appendChild(j_msg_message);
    // scrollY({"bottom":0,"type":"smooth"})
    document.getElementById("j_chat").appendChild(messagenode);
    msgnum++;
    if(msgnum > 1){
        document.getElementById("j_chat").scroll({"behavior":"smooth","top":100000});
    }
    
};

function privmsg_parser(m){
    let mr = {};
    m.split(" ")[0].split(";").forEach(m2 => {
        mr[m2.split("=")[0].replace(/[@]/g, "").replace(/[\-]/g, "_")] = m2.split("=")[1];
    })
    return mr;
};