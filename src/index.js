module.exports = function multiply(first, second) {

    var reverseFirst = first.split('').reverse();
    var reverseSecond = second.split('').reverse();
  
    var resultMultiply = [];
  
    for (var i = 0; i < reverseFirst.length; i++) {
      for (var j = 0; j < reverseSecond.length; j++) {
        var m = reverseFirst[i] * reverseSecond[j];
        resultMultiply[i + j] = (resultMultiply[i + j]) ? resultMultiply[i + j] + m : m;
      }
    }
  
    for (var i = 0; i < resultMultiply.length; i++) {
      var num = resultMultiply[i] % 10;
      var move = Math.floor(resultMultiply[i] / 10);
      resultMultiply[i] = num;
  
      if (resultMultiply[i + 1])
        resultMultiply[i + 1] += move;
      else if (move != 0)
        resultMultiply[i + 1] = move;
    }
  
    return resultMultiply.reverse().join('');
  }