import Phaser from "Phaser";

export default class TestScene extends Phaser.Scene {
  constructor() {
    super({
      key: "MainMenu"
  });
    console.log("main menu");
  }
 
  create() {
    let { width, height } = this.sys.game.canvas;
    this.add.text(width/2, height/2, "It's Alive", { fontFamily: '"Roboto Condensed"' });
  }
}
