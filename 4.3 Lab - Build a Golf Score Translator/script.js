const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(parNumb, strokesMade) {
  if (strokesMade === 1) {
    return (names[0]);
  }
  if (strokesMade <= parNumb - 2) {
    return (names[1]);
  }
  if (strokesMade === parNumb - 1) {
    return(names[2]);
  }
  if (strokesMade === parNumb) {
    return (names[3]);
  }
  if (strokesMade === parNumb + 1) {
    return (names[4]);
  }
  if (strokesMade === parNumb + 2) {
    return (names[5]);
  }
  if (strokesMade >= parNumb + 3) {
    return (names[6]);
  }
}

