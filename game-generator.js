function arena(gameId) {
  arenaStrObj = '{"gameId":"' + gameId + '","field":{';
  k = 0;
 for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      arenaStrObj = arenaStrObj + '"' + k + '":{"row":' + i + ',"col":' + j
         + ',"shipId":null}';
      if (k < 99) arenaStrObj = arenaStrObj + ',';
      k = k + 1;
    }
 }
 arenaStrObj = arenaStrObj + '}}';
 console.log(arenaStrObj);
}
