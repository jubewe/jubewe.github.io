let commands = [
    ["test", [], "Test command"],
    ["ping", [], "Bot Ping, Memory usage and more"],
    ["channel", [["channel", "current channel"]], "Get the mods of a channel", true],
    ["user", [["user", "sender"]], "Get the channels the user is mod in", true],
    ["channels", [], "Get the number of channels in the mod-database"],
    ["users", [], "Get the number of users in the mod-database"],
    ["vipchannel", [["channel", "current channel"]], "Get the vips of a channel", true],
    ["vipuser", [["user", "sender"]], "Get the channels the user is vip in", true],
    ["vipchannels", [], "Get the number of channels in the vip-database"],
    ["vipusers", [], "Get the number of users in the vip-database"],
    ["chans", [], "Get the number of channels the bot is currently tracking in"],
    ["join", [], "Join the chatbot to a channel", false, 60],
    ["part", [], "Part the chatbot from a channel", false, 60],
    ["getperm", [], "Get the permission level of a user", false, 60],
    ["setperm", [], "Set the permission level of a user", false, 62],
    ["help", [], "Sends the help website (this one)"]
];

function appendcommands() {
    commands.forEach(command => {
        let cmdelem = document.createElement("tr");

        let cmdaclass = ["tbl_name", "tbl_args", "tbl_desc", "tbl_retr", "tbl_perm"];

        let cmdcelem1 = document.createElement("td");
        let cmdcelem2 = document.createElement("td");
        let cmdcelem3 = document.createElement("td");
        let cmdcelem4 = document.createElement("td");
        let cmdcelem5 = document.createElement("td");

        cmdcelem1.innerText = command[0];
        cmdcelem2.innerText = command[1].map(a => a[0]).join(", ");
        cmdcelem3.innerText = command[2];
        cmdcelem4.innerHTML = `<input type="checkbox" onclick="return false" ${command[3] ? "checked" : ""} readonly>`;
        // cmdcelem4.innerText = `<td><input type="checkbox"></td>`
        cmdcelem5.innerText = command[4] ?? 10;

        let cmdcelems = [cmdcelem1, cmdcelem2, cmdcelem3, cmdcelem4, cmdcelem5];
        cmdcelems.forEach(a => { a.classList.add(cmdaclass[cmdcelems.indexOf(a)]); cmdelem.appendChild(a) });

        document.querySelector("tbody").appendChild(cmdelem);
    });
};

appendcommands();