var request = require('request');
var fs = require('fs');

var baseUrl = 'https://api.getirkit.com/1/messages';
var requestDelay = 0;

// read command list
if (process.argv.length !== 3) {
  console.log('usage: node app.js <macro command>');
  return;
}
// var macroJson = JSON.parse(fs.readFileSync('macro.json', 'utf-8'));
var macroJson = require('./macro');
var macroCommand = process.argv[2];
var commandList = macroJson[macroCommand];
if (commandList === undefined) {
  console.log('macro command "' + macroCommand + '" is node defined in macro.json.');
  return;
}

// read security file
var settingJson = require('./settings');
var irSettings = settingJson.irkit;

commandList.forEach(Post);

function Post(data, index) {
  var message = fs.readFileSync(data.command, 'utf-8');
  setTimeout( function()  {
    request.post(
      baseUrl, 
      { 
        form: { 
          clientkey : irSettings.clientkey,
      deviceid  : irSettings.deviceid,
      message   : message
        } 
      },
      function (err, res, body) {
        console.log(index + ': ' + data.command + ", " + data.compTime);
        if (!err && res.statusCode == 200) {
          console.log('request succeeded: ' + index);
        } else {
          console.log('post error: ' + err);
        }   
      }   
      );
  }, requestDelay);
  requestDelay += data.compTime;
}

