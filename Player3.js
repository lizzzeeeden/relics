

cc.Class({
    extends: cc.Component,
    properties: {
        HP: 3,
        score: 0,
        scoreLabel: cc.Node,
        HPLabel: cc.Node,
        streak: cc.Node,
        canvas: cc.Node,
        
        level: 0,
        relics: {
            type: cc.Boolean,
            default:[],
        },
    },


    onLoad: function () {
        //开启碰撞监听
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        //玩家移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);

         //得到等级
        this.level = this.canvas.getComponent("GameController").dataNode.getComponent("Data").GetLevel();
        this.relics = this.canvas.getComponent("GameController").dataNode.getComponent("Data").relics;
    },

   //接到碎片检测
   onCollisionEnter: function (other, self) {
        if (other.node.group == 'chip') {
        other.node.destroy();
        this.score+=other.node.getComponent("ChipMove").getmark();//计算得分
        //cc.log(this.score);
        this.scoreLabel.getComponent(cc.Label).string =
                "Score:" + this.score.toString();
            
            //判断是否达到得分
            switch (this.level)
            {
                case '1':
                    if (this.score >= 14000) {
                        this.relics[6] = true;
                        this.canvas.getComponent("GameController").TimeOver();
                    }
                    break;
                case '2':
                    if (this.score >= 23000) {
                        this.relics[7] = true;
                    }
                    break;
                case '3':
                    if (this.score >= 24000) {
                        this.relics[8] = true;
                    }
                    break;
            }
        } else if (other.node.group == 'bomb') {
            other.node.destroy();
            
        //判断是否死亡
        if (this.HP <= 1) {
            this.canvas.getComponent("GameController").TimeOver();
            this.node.active = false;
            this.streak.active = false;
            }
            
        this.HP--;
        this.HPLabel.getComponent(cc.Label).string =
            "HP:" + this.HP.toString();
        }
    },
   
    update(dt)  {
        //移动墨迹
        this.MoveStreak();
    },

    //关闭监听
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove, this.node);
    },

    //移动函数
    onTouchMove: function (event) {
        var delta = event.touch.getDelta();
            this.x += delta.x;
    },
    

    //拖尾效果
    MoveStreak: function () {
        var pz = this.node.position;
        pz.y -= 50;
        this.streak.setPosition(pz);
        //cc.log(this.streak.position);
    },

});

