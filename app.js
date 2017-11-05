// https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?
$(document).ready(function () {
    var allStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var streamer;
    var output = '';
    var offOutput = '';
    for (var i = 0; i < allStreamers.length; i++) {
        streamer = allStreamers[i];
        var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + streamer + '?callback=?';
        $.getJSON(url, function(json) {
            if (json.stream !== null) {
                output += '<div class="row online"> <div class="col-xs-3 col-sm-2" id="logo"> <img class="img img-responsive img-circle" src="' + json.stream.channel.logo + '"></div>';
                output += '<div class="col-xs-9 col-sm-3"><p class="stream online"><a href="https://www.twitch.tv/' + json.stream.channel.display_name + '">' + json.stream.channel.display_name + '</a></p></div>';
                output += '<div class="col-xs-10 col-sm-7"><p class="game online"><b>' + json.stream.channel.game + '</b> : ' + json.stream.channel.status + '</p></div></div>';
                $(output).appendTo("#outputBoard");                
            } else {
                offOutput += '<div class="row offline"><div class="col-xs-3 col-sm-2" id="logo"><i class="fa fa-minus-square" aria-hidden="true"></i></div>';
                offOutput += '<div class="col-xs-9 col-sm-3"><p class="stream offline"><a href="https://www.twitch.tv/' + json.stream._links.channel + '">Offline</a></p></div>';
                offOutput += '<div class="col-xs-10 col-sm-7"><p class="game offline"><b>' + 'No game' + '</b> : ' + '<i class="text-muted">Offline</i>' + '</p></div></div>'
            }
            $(offOutput).appendTo("#outputBoard");
          });        
    }
});