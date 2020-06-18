

cc.Class({
    extends: cc.Component,

    properties: {
        //下落速度，可以在属性检查器中修改
        speed: 100,
    },

    
    // LIFE-CYCLE CALLBACKS:

    //生成位置
    start() {
        this.node.y =this.node.parent.height/2-this.node.height/2;
        this.node.x = -this.node.parent.width / 2 - this.node.width / 2
            +2*(this.node.parent.width/2-this.node.width/2)/9*(Math.random()*(10-1)+1);
    },

    //下落
    update(dt) {
        this.node.y -= dt * this.speed;
    },
});
