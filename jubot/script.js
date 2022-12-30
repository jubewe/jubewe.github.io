const commands = {
    "test": {
        "aliases": [],
        "permission": 10,
        "arguments": {
            "$1-": "repeats $1- after the command message"
        },
        "description": "test command"
    },
    "test2": {
        "aliases": ["test3"],
        "arguments": {
            "$1-": "repeats $1- after the command message 2"
        },
        "description": "test command"
    }
};

const defaults = { 
    permission: 10,
    channel_cooldown: 1000,
    user_cooldown: 2000
};

const permissions = {"1":{"desc":"Bot","tag":["bot"]},"10":{"desc":"Regular","tag":["default"]},"11":{"desc":"Approved-Bot","tag":["approvedbot"]},"20":{"desc":"Twitch-Channel-Bit-Donator","name":"bits","tag":["bits"]},"21":{"desc":"Twitch-Channel-Subscriber","name":"subscriber","tag":["subscriber","sub"]},"22":{"desc":"Twitch-Channel-VIP","name":"vip","tag":["vip"]},"25":{"desc":"Twitch-Channel-Moderator","name":"moderator","tag":["moderator","mod"]},"30":{"desc":"Twitch-Channel-Broadcaster","name":"broadcaster","tag":["broadcaster","streamer"]},"40":{"desc":"Twitch-Staff","name":"staff"},"60":{"desc":"Bot-Supervisor"},"61":{"desc":"Bot-Moderator"},"62":{"desc":"Bot-Admin"},"69":{"desc":"Owner"}};

Object.keys(commands).forEach(command => {
    const command_ = commands[command];
   
    let commandelem = document.createElement("j_command");
    commandelem.classList.add("j_command");
    // commandelem.style.display = "inline-block";
    // div containing the parts

    let commandelems = {
        "name": document.createElement("j_command_name"),
        "aliases": document.createElement("j_command_aliases"),
        "permission": document.createElement("j_command_permission"),
        "channel_cooldown": document.createElement("j_command_channel_cooldown"),
        "user_cooldown": document.createElement("j_command_user_cooldown"),
        "arguments": document.createElement("j_command_arguments"),
        "description": document.createElement("j_command_description")
    };

    commandelems.name.innerText = command;
    commandelems.aliases.innerText = (command_.aliases && command_.aliases.length > 0 ? command_.aliases : "");
    commandelems.permission.innerText = (command_.permission ? (permissions[command_.permission.toString()].tag ? permissions[command_.permission.toString()].tag[0] : permissions[command_.permission.toString()].desc): permissions["10"].tag[0])
    commandelems.channel_cooldown.innerText = `${(command_.channel_cooldown || defaults.channel_cooldown)/1000}s`;
    commandelems.user_cooldown.innerText = `${(command_.command_user_cooldown || defaults.user_cooldown)/1000}s`;
    commandelems.arguments.innerText = ``;
    commandelems.description.innerText = `${(command_.description || "none")}`;

    Object.keys(commandelems).forEach(a => {
        commandelem.appendChild(commandelems[a]);
    });

    commandelem.appendChild(document.createElement("br"));
    document.getElementById("j_commands").append(commandelem);
});

// let set_commands = [];
// let row_items = {};
// Object.keys(commands).forEach(command => {
//     const elem_commands = document.getElementById("j_commands");
//     let td_arguments = [];

//     let command_ = document.createElement("tr");
//     command_.classList = ["j_command"];
//     command_.id = `j_command_${command}`;
    
//     const trows = ["name", "aliases", "permission", "arguments", "channel_cooldown", "user_cooldown", "description"];
//     const trowdefaults = ["", "", "10", "",  "5000", "10000", "none"];
//     for(let trow in trows){
//         let td_skip;
//         let td = document.createElement("td", {"is": command_.id});
//         td.classList.add(`j_commands_command`, `j_commands_${trows[trow]}`);
//         if(trows[trow] == "name"){
//             td.innerText = command;
//         } else {
//             if(typeof commands[command][trows[trow]] === "object" && ["arguments"].includes(trows[trow])){
//                 for(let td_argument in commands[command][trows[trow]]){
//                     let td_argument_ = commands[command][trows[trow]][td_argument];
//                     let td_argument_elem = document.createElement("tr");
//                     // let td_argument_elem = command_;
//                     td_argument_elem.classList = td.classList;
//                     td_argument_elem.classList.add(`j_commands_arguments`, `j_commands_${trows[trow]}_argument_${td_argument}`);
//                     for(let td_argument2 in trows){
//                         let td_argument2_elem = document.createElement("td");
//                         td_argument2_elem.classList.add(`j_commands_command`, `j_commands_${trows[trow]}`);
//                         if(trows[td_argument2] == "arguments"){
//                             td_argument2_elem.innerText = td_argument;
//                         } else if(trows[td_argument2] == "description") {
//                             td_argument2_elem.innerText = td_argument_;
//                         }
//                         if(!(Object.keys(row_items).length > 0 && row_items[trows[trow]] && row_items[trows[trow]][0] == (commands[command][trows[trow]] || trowdefaults[trow]))){
//                             // td_argument_elem.appendChild(td_argument2_elem);
//                         }
//                     }
//                     td_arguments.push(td_argument_elem)
//                 }
//             } else {
//                 // command_.rowspan = "1";
//                 if(Object.keys(row_items).length > 0 && row_items[trows[trow]] && row_items[trows[trow]][0] == (commands[command][trows[trow]] || trowdefaults[trow])){
//                     document.getElementsByClassName(`j_commands_${trows[trow]}`).item(document.getElementsByClassName(`j_commands_${trows[trow]}`).length-1).setAttribute("rowspan", (document.getElementsByClassName(`j_commands_${trows[trow]}`).item(document.getElementsByClassName(`j_commands_${trows[trow]}`).length-1).getAttribute("rowspan")||1 +1));
//                     // td_skip = true;
//                 } else {
//                     if(!row_items[trows[trow]]) row_items[trows[trow]] = [];
//                     row_items[trows[trow]].unshift(commands[command][trows[trow]] || trowdefaults[trow]);
//                     td.innerText = commands[command][trows[trow]] || trowdefaults[trow];
//                 }
//             }
//         }
//         if(!td_skip) command_.appendChild(td);

//         td_arguments.forEach(td_argument => {
//             elem_commands.appendChild(td_argument);
//         })
//     }

//     // set_commands.push({[command]:[set_commands]});
//     set_commands.push(command);

//     elem_commands.appendChild(command_);
// })