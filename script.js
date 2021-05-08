
const colors = ["SeaGreen", "Blue" , "OrangeRed", "Chocolate", "Firebrick"]
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
const blackwords = []
let usr = prompt("Username: ");
const emotes = {
    'ez': {
        'name': 'EZ',
        'img': 'https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/1x'
    },
    'hackermans': {
        'name': 'HACKERMANS',
        'img': 'https://cdn.betterttv.net/emote/5b490e73cf46791f8491f6f4/2x'
    }, 'pressf': {
        'name': 'pressF',
        'img': 'https://cdn.betterttv.net/emote/5c857788f779543bcdf37124/1x'
    }
}
const skipLine = "<br>"
const hwEmotes = "height=28 width=28"
const hwBadge = "height=15 width=15" 
const botUsr = "Nightbot"
const mentionNightbot = `<span id="mentionSomebody">Nightbot</span>`

 /* function censoredFunction(String, blackword){
    const censored = `****`
    return String.replace(`${blackword}`, `${censored}`)
} */
if(!usr){
    usr = "no1crate"
} else if(usr.length < 5){
    usr = "no1crate"
} else if(usr.toLowerCase() == botUsr.toLowerCase()){
    usr = "no1crate"
}
const onlyUsr = usr
const mention = `<span id="mention">${usr}</span>`
const color = colors[randomNum(0, colors.length)]
usr = `<span id="${color}">${usr}</span>`
function send(){
    msg = document.getElementById("chatId").value;
    if(!msg){
        null
    } else {
        actualTime = new Date()
        hours = actualTime.getHours();
        minutes = actualTime.getMinutes();
        finalTime = `${hours}:${minutes}`;
        /* Here is where emotes and blackwords, etc are replazed*/
        msg = msg.replace(`${emotes.ez.name}`, `<img src="${emotes.ez.img}" ${hwEmotes}></img>`);
        msg = msg.replace(`${emotes.hackermans.name}`, `<img src="${emotes.hackermans.img}" ${hwEmotes}> </img>`);
        msg = msg.replace(`${emotes.pressf.name}`, `<img src="${emotes.pressf.img}" ${hwEmotes}> </img>`);
        msg = msg.replace(`${botUsr}`, `${mentionNightbot}`)
        msg = msg.replace(`${usr}`, `${mention}`)
        /*Here is where message send*/
        document.getElementById(`chat`).innerHTML += `${finalTime} <img src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1" ${hwBadge}></img><a href="https://twitch.tv/${onlyUsr}">${usr}</a>: ${msg} ${skipLine}`
        msg = msg.toLowerCase()
        if(msg.startsWith("hi")){
            document.getElementById(`chat`).innerHTML += `${finalTime} <span id="mentionMsg"><img src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1" ${hwBadge}></img>${botUsr}: Hi @${mention}, how are you? ${skipLine}</span>`
        } else if(msg.startsWith("goodbye")){
            document.getElementById(`chat`).innerHTML += `${finalTime} <span id="mentionMsg">${botUsr}: Goodbye @${mention}, see you soon <img src="${emotes.hackermans.img}" ${hwEmotes}></img></span>`
        } else if(msg.startsWith("a")){
            document.getElementById(`chat`).innerHTML += `${finalTime} <span id="mentionMsg">${botUsr}: @${mention}, Modo fan de  la señora activado, pero... jormijha</span>`
        }
    }
}