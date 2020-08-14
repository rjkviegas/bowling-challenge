"use strict";

describe("Feature Test", function() {
  var game;
  var frame;
  beforeEach(function() {
    frame = new Frame([4, 4]);
    game = new Game();
  });
  describe("adding frames to game", function() {
    it("records 10 frames per game", function() {
      for (var i = 0; i <= 9; i += 1) {
        game.add(frame);
      }
      expect(game.frames).toContain(frame);
      expect(game.frames.length).toBe(10);
      game.add(frame);
      expect(game.frames.length).toBe(10);
      expect(game.frames.length).not.toBe(11);
    });
  });
  describe("getting game total points", function () {
    it("Gutter Game results in 0 points", function() {
      var gutterFrame = new Frame([0,0]);
      for (var i = 0; i <= 9; i += 1) {
        game.add(gutterFrame);
      }
      expect(game.getTotalPoints()).toBe(0);
    });
  });
});
