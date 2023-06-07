function totalConsonants(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
      if (isConsonant(str[i])) ++count;
    return count;
  }