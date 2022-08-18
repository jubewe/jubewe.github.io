window.onload = () => {
  var int2 = setInterval(() => {
    ju_execute_twitch_urprotection()
  }, 100);
  setTimeout(() => {
    ju_initialize_twitch_urprotection();
    clearInterval(int2)
  }, 3000);
}

var urlreg = new RegExp("(?:(((h+t+p+s*)?)\\:+\\/+)*)(\\S)+([\\.,])+(?:com|de|en|io|lol|me|at|org|net|int|etu|gov|ac|app|bot|tv|gg|co|chat|channel|ceo|club|coop|contact|dating|dev|diy|docs|download|domains|earth|expert|fail|fan|film|final|fit|foo|forum|fun|free|game|gift|google|group|hangout|host|hot|how|inc|info|ink|joy|law|lgbt|like|link|lotto|love|map|media|now|origin|pay|party|pic|porn|prime|prof|hub|pub|radio|racing|read|rest|rip|room|run|sale|search|sex|to|single|site|social|software|song|sucks|support|systems|talk|tax|team|tech|top|trust|vid|vip|vote|watch|website|wiki|work|win|world|wow|wtf|xxx|xyz|zip|eu|bing|cal|dell|dhl|gle|microsoft|ms|netflix|instagram|facebook|ch|be|edu|shop)(\\S*)", "gi");

function ju_initialize_twitch_urprotection() {
  console.info(`Ju_Twitch-URprotection\nInitialization`);
  document.getElementsByClassName("ScInteractableBase-sc-awmohi-0 ScInteractableDefault-sc-awmohi-1");
  for (var i = 0; i < document.getElementsByClassName("ScInteractableBase-sc-awmohi-0 ScInteractableDefault-sc-awmohi-1").length; i++) {
    let e = document.getElementsByClassName("ScInteractableBase-sc-awmohi-0 ScInteractableDefault-sc-awmohi-1")[i];
    e.onclick = () => {
      var int = setInterval(() => {
        ju_execute_twitch_urprotection(1)
      }, 100);
      setTimeout(() => {
        ju_execute_twitch_urprotection();
        clearInterval(int)
      }, 1000);
    }
  }

  ju_execute_twitch_urprotection();
}

function ju_execute_twitch_urprotection() {
  if (arguments[0] === undefined || arguments[0] !== 1) {
    console.info(`Ju_Twitch-URprotection\nExecution\nMatch: ${document.getElementsByClassName("link-fragment").length} links`);
    
    if([undefined,null].includes(document.getElementById("ju_twitch_urprotection_display"))){
      let e = document.createElement("p");
      e.id = "ju_twitch_urprotection_display";
      e.innerText = "dest";
      document.getElementsByClassName("mod-view-panel-header")[0].appendChild(e);
    }
  }
  
  document.getElementById("ju_twitch_urprotection_display").innerText = `${document.getElementsByClassName("link-fragment").length} URLs found`
  
  if (urlreg.test(document.body.innerText)) {
    if (document.getElementsByClassName("link-fragment") !== undefined) {
      for (var i = 0; i < document.getElementsByClassName("link-fragment").length; i++) {
        document.getElementsByClassName("link-fragment")[i].innerText = `<Link ${document.getElementsByClassName("link-fragment")[i].origin.split("://")[1].replace(/(www)+(\.)/g, "")}>`;
      }
    }
  }
}