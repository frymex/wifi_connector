 var WiFiControl = require('wifi-control');
 var prompt = require('prompt-sync')();
var childProcess = require('child_process');

childProcess.execSync('cls').toString();


WiFiControl.init();

var wiwi = WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    console.log(response);

    var user = prompt('SSID: ')
    var password = prompt('Password: ')

    var _ap = {
    ssid: user,
    password: password
    };
    var results = WiFiControl.connectToAP( _ap, function(err, response) {
      console.log(`Successfully conected to ${user} | Script by: t.me/frymex`);
    });


  });

