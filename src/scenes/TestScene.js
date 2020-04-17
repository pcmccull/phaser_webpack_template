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
  
  }
}
