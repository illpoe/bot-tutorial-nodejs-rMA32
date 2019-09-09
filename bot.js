var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
        botRegex = /^\/cool guy/;  botRegexDL = /^\/DEP/i;
      botRegexSC = /^\/SCH/i; botODB = /^\odb/i; botDuck = /^\/duck/;
      botRegexP = /^\/find/i;  botRegexTw = /^\/twitch/i; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/;
      botRegexSS = /^\/who is stu/;  botRegexCC = /^\/cool/; botRegexGL = /^\/LG schedule/;
      botRegexSTP = /^\/stats/;botRegexSTT = /^\/tstats/;botRegexRL = /^\/rule/;
      botRegexSTD = /^\/standings/;botRegexRK = /^\/rank/; botRegexFA = /^\/free agents/;botRegexMRK = /^\/rookies/;
      botRegexTD = /^\/trade/; botRegexSG = /^\/sign/; botRegexRLP = /^\/release/;botRegexSLR = /^\/salary/;
      botRegexRLS = /^\/rules/; botRegexBRK = /^\/breakdown/; botRegexADMIN = /^\/admin/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  

  
  else if(request.text && botRegexSTP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/stats/player");
    this.res.end();
  }    
  
  else if(request.text && botRegexADMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/admin");
    this.res.end();
  }  
  
  else if(request.text && botRegexSTT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/stats/team");
    this.res.end();
  } 
  
    
  else if(request.text && botRegexRL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1geVo5hmcDjujAZPpKvcgSo6D5pzn3SwkjRiLrSDD0rw/edit");
    this.res.end();
  } 
    
  else if(request.text && botRegexRLS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1geVo5hmcDjujAZPpKvcgSo6D5pzn3SwkjRiLrSDD0rw/edit");
    this.res.end();
  } 
    
  else if(request.text && botRegexSTD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/standings");
    this.res.end();
  } 
    
 else if(request.text && botRegexRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/standing/ranking");
    this.res.end();
  } 
    
  else if(request.text && botRegexFA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/players?name=&position=all&team=fa");
    this.res.end();
  } 
    
  else if(request.text && botRegexMRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/players?name=&position=all&team=all&rookie=1");
    this.res.end();
  } 
    
  else if(request.text && botRegexTD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/frontoffice/trade");
    this.res.end();
  } 
    
  else if(request.text && botRegexSG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/frontoffice/sign");
    this.res.end();
  } 
    
  else if(request.text && botRegexRLP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/frontoffice/release");
    this.res.end();
  } 
    
  else if(request.text && botRegexSG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/frontoffice/salaries");
    this.res.end();
  } 
    
  else if(request.text && botRegexBRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/frontoffice/rosterbreakdown");
    this.res.end();
  } 
      
 else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("As cool as the other side of the pillow.");
    this.res.end();
  } 
  
   else if(request.text && botRegexGL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/schedules");
    this.res.end();
  } 
  else if(request.text && botRegexSS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cbsmiami.files.wordpress.com/2015/01/452250140.jpg?w=1500");
    this.res.end();
  } 
  
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/tffl/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(6,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/tffl/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  
  }

  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
