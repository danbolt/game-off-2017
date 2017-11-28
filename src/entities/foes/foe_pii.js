// foe_pii.js - Type P2 foe
import Globals from '../../globals';
import { Npc } from './npc';
import { Animations } from './animations';

class FoeP2 extends Npc {

  constructor(game, sprite, level = 1, options = {}) {
    super(game, sprite, {
      // entity health (3 punches and 2 kicks, or 4 kicks)
      maxHealth: 60,

      // make entity bigger in size
      scale: 1.25,

      // entity AI behavior & control
      ai: {
        LEVEL: level,
        SPEED: 25,
        DAMAGE: 15,
        ENGAGE_RANGE: 96 * 96, // default 96 pixels
        ATTACK_RANGE: 27 * 27, // 27 pixels,
        ATTACK_SPEED: 1800, // ms
        COOLDOWN: 1200, // ms (pause after they get hit)
        ENGAGE_TRESHOLD: 5, // engage only when no more than X enemies are already engaging

        // x and y offset to stop before approaching the player
        // plus random positioning offsets
        EPSILON_X: 16 + game.rnd.integerInRange(0, 10),
        EPSILON_Y: 1,

        // custom options override
        ...options.ai
      },

      // AABB walking collision boxes
      collisions: {
        weight: 2,
        torsobody: [14, 22, 8, 9],
        attackbody: [14, 10, 21, 14],
        walkbody: [16, 8, 15, 40] 
      },

      // entity specific animations
      anims: Animations.p1(sprite),
    });
  }

}

export { FoeP2 };