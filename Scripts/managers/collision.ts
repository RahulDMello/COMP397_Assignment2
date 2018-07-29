namespace managers {
  export class Collision {
    public static checkMeteorBullet(
      object1: objects.Bullet,
      object2: objects.Meteor
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        object1.x = -5;
        object1.y = -5;
        object2.Reset();
        createjs.Sound.play("bubble");
        managers.Game.ScoreBoardManager.Score += 10;
      }
    }
    
    public static checkMeteorCanon(
      object1: objects.Canon,
      object2: objects.Meteor
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        object2.Reset();
        managers.Game.ScoreBoardManager.Lives -= 1;
        if(managers.Game.ScoreBoardManager.Lives <= 0) {
          managers.Game.CurrentState = config.Scene.END;
        }
      }
    }

  }
}
