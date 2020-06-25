

cc.Class({
    extends: cc.Component,
    properties: {
        HP: 0,
        score: 0,
        scoreLabel: cc.Node,
        HPLabel: cc.Node,
        dataNode: cc.Node,
        streak:cc.Node,
    },


    onLoad: function () {
        //开启碰撞监听
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        //玩家移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);

        //得到常驻节点
        this.dataNode=cc.director.getScene().getChildByName('dataNode');
        
    },

    //接到碎片检测
    onCollisionEnter: function (other, self) {
        if (other.node.group == 'chip') {
            other.node.destroy();
            this.score++;
            //cc.log(this.score);
            this.scoreLabel.getComponent(cc.Label).string =
                "Score:" + this.score.toString();
        }  else if (other.node.group == 'bomb') {
            other.node.destroy();
            this.HP--;
            this.HPLabel.getComponent(cc.Label).string =
                "HP:" + this.HP.toString();
        }else if(other.node.group=='wrongchip'){
            other.node.destroy();
        }
        
    },


    //移动函数
    onTouchMove: function (event) {
        var delta = event.touch.getDelta();
        this.x += delta.x;
        this.y += delta.y;
    },

    update(dt)  {
        //移动墨迹
        this.MoveStreak();
    },

    //关闭监听
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove, this.node);
    },
 

    MoveStreak: function () {
        var pz = this.node.position;
        pz.y -= 50;
        this.streak.setPosition(pz);
        //cc.log(this.streak.position);
    },
});
