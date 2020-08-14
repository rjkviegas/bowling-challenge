"use strict";

class Game {
  constructor() {
    this.frames = [];
  }

  add(frame) {
    if (this.frames.length == 10) {
      return ("10 frames per game max");
    }
    this.frames.push(frame);
  }
  
  getTotalPoints() {
    var points = 0, frameArr = this.frames;
    frameArr.forEach(function(frame, index) {
      if (frame.isStrike()) {
        points += frameArr[index+1].getBasePoints();
      } else if (frame.isSpare()) {
        points += frameArr[index+1].spareBonus();
      }
      points += frame.getBasePoints();
    });
    return points;
  }
}
