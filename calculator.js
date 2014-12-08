function Calculator(saveData) {

  this.data = {};

  if(saveData) {
    var preHashKey = "Fe12NAfA3R6z4k0z";
    var saltValue = "af0ik392jrmt0nsfdghy0"
    
    var preHashKeyStart = saveData.indexOf(preHashKey);
    if (preHashKeyStart === -1) {
      throw "Invalid save data: no pre-hash key value found";
    }
    var preHashKeyEnd = preHashKeyStart + preHashKey.length;
    
    var encodedData = "";
    for (var saveCharIndex = 0; saveCharIndex < preHashKeyStart; saveCharIndex += 2) {
      encodedData = encodedData + saveData.charAt(saveCharIndex);
    }
    var attachedHash = saveData.substr(preHashKeyEnd);
    var computedHash = md5(encodedData+saltValue);
    if(computedHash !== attachedHash) {
    throw "Invalid save data: unable to verify attached hash";
    }
    
    var decodedData = atob(encodedData);
    this.data = JSON.parse(decodedData);
  }
  
}
