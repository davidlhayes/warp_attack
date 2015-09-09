function arena(gameId) {
  arenaStrObj = '{"gameId":"' + gameId + '","field":{';
 for (var i = 0; i < 100; i++) {
      arenaStrObj = arenaStrObj + '"' + k + '":{"shipId":"0"}';
      if (i < 100) arenaStrObj = arenaStrObj + ',';
 }
 arenaStrObj = arenaStrObj + '}}';
 return JSON.parse(arenaStrObj);
}

function tray(gameId) {
  trayStrObj = '{"gameId":"' + gameId + '","field":{';
 for (var i = 0; i < 40; i++) {
      trayStrObj = trayStrObj + '"' + k + '":{"shipId":"0"}';
      if (i < 40) trayStrObj = trayStrObj + ',';
  }
  trayStrObj = trayStrObj + '}}';
  return trayStrObj;
}

var rank = ['1','2','3','4','5','6','7','8','9','suicide','mine','flag'];
var dist = [ 1 , 1 , 2 , 3 , 4 , 4 , 4 , 5 , 8 ,    1    ,   6  ,   1  ];
function pieces(gameId,fleet) {
  var pStrObj = '{ "pieces": {'
  var url_prefix = '/images/starship-';
  if (fleet == 'f') {
    var pid = 1;
  } else {
    pid = 41;
  }
  for (var r in rank) {
    for (var i=0;i< dist[r];i++) {
       pStrObj =
       pStrObj + '"' + pid + '":' +
                '{ "gameId": "' + gameId + '",' +
                '"fleet":"' + fleet + '",' +
                '"rank":"' + rank[r] + '",' +
                '"url":"' + url_prefix + fleet + '-' + rank[r] + '.png"}';
       if (r < rank.length-1) { pStrObj = pStrObj + ','}
       pid = pid + 1;
    }
  }
  pStrObj = pStrObj + '}}';
  return JSON.parse(pStrObj);
}

function checkSquare(row,col) {
  console.log(arena('A'));
}

checkSquare(4,4);
