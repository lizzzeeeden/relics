
cc.Class({
    extends: cc.Component,

    properties: {
        bFit: false,
        bIn: false,
        iniPosition: new cc.Vec3(),
    },

    onCollisionEnter: function (other, self) {
        if (other.node.group == 'default') { 
            this.bIn = true;
            //cc.log(this.bIn);
            //吸附效果
            this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                if (this.getComponent("PuzzleController").bIn) {
                     var pz1 = other.node.parent.convertToWorldSpaceAR(other.node.position);
                     var pz2 = this.parent.convertToNodeSpaceAR(pz1);
                     this.setPosition(pz2);
                 }
            }, this.node);
            
            //判断拼图正确
            if (this.getComponent(cc.BoxCollider).tag == other.node.getComponent(cc.BoxCollider).tag) {
                this.bFit = true;
            } else {
                this.bFit = false;
            }
        }
        // cc.log(this.getComponent(cc.BoxCollider).tag);
        // cc.log(other.node.getComponent(cc.BoxCollider).tag);
    },

    //优化拖拽吸附
    onCollisionStay:function(other, self) {
        this.bIn = true;
    },
    onCollisionExit:function(other, self) {
        this.bIn = false;
    },


    onLoad() {
        //开启碰撞监听
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        
        //得到初始位置
        this.iniPosition = this.node.position;

        //移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove, this.node);
        //this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEND, this.node);
    },

    // update (dt) {},

   //吸附效果
    onTouchEnd: function (event) {
        if (this.getComponent("PuzzleController").bIn) {
             var pz1 = other.node.parent.convertToWorldSpaceAR(other.node.position);
             var pz2 = this.parent.convertToNodeSpaceAR(pz1);
             this.setPosition(pz2);
         }
    },
    //移动
    onTouchMove: function (event) {
        this.setSiblingIndex(9);
        var delta = event.touch.getDelta();
            this.y += delta.y;
            this.x += delta.x;
    },

     //销毁关闭监听
    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);

        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
    }


});
