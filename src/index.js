import Phaser from "Phaser";
import TestScene from "./scenes/TestScene";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 },
          debug: true,
          debugShowBody: true,
          debugShowStaticBody: true,
          debugShowVelocity: true,
          debugVelocityColor: 0xffff00,
          debugBodyColor: 0x0000ff,
          debugStaticBodyColor: 0xffffff
      }
  },
  scale: {
    parent: "body",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1024,
    height: 768,
    min: {
      width: 400,
      height: 300
    },
    max: {
      width: 1600,
      height: 1200
    }
  },
  scene: [TestScene]
};
var game = new Phaser.Game(config);