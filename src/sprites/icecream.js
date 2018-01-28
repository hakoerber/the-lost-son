import Phaser from 'phaser'
import Inventory from '../models/inventory/inventory'

export default class IceCream extends Phaser.Sprite {

  constructor(game, x, y, level) {
    super(game, x, y, 'ice_cream');
    this.x = x
    this.y = y
    this.level = level
    this.loadTexture('ice_cream');
    this.game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  collect(player, ice_cream) {
    console.log("pick up")
    let currentItem = window.TheLostSon.playerInventory.getInventoryItem();
    if (currentItem == null) {
      window.TheLostSon.playerInventory.collectIcecream();
      player.loadTexture('ice_cream');
      player.game.velo = 200;
      ice_cream.remove();
    } else {
      console.log("cant pick up")
    }
  }

  remove() {
    for(var i in window.TheLostSon.items) {
      if (window.TheLostSon.items[i] == this) {
        window.TheLostSon.items[i].x = -100
        window.TheLostSon.items[i].y = -100
        break
      }
    }
    this.destroy()
  }
}