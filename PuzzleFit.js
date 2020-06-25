
cc.Class({
    extends: cc.Component,

    properties: {
        chil: {
            type: cc.Node,
            default:[],
        },
        bFixs:
         {
            type: cc.Component,
             default: [],
         },
         
        bFinished:cc.Node,
    },

    onLoad() {
        this.chil = this.node.children;
        //cc.log(this.chil.length);
        this.bFixs = new Array(this.chil.length);
        for (var i = 0; i < this.chil.length; i++){
            this.bFixs[i] = this.chil[i].getComponent("PuzzleController");
        }
        
       // cc.log(this.bFixs.length);
    },

    // start () {

    // },

    update(dt) {
        //逐个检测是否拼正确
        var i = 0;
        for (i = 0; i < this.bFixs.length; i++){
            //cc.log(this.bFixs[i].bFit);
            if (this.bFixs[i].bFit==false) {
                return;
            }
        }
        //延时显示胜利画面
        this.scheduleOnce(function () {
            this.bFinished.active = true;
            cc.director.pause();
        }, 0.7);
         //解锁馆藏
         this.node.parent.parent.getComponent("Puzzle").UnlockRelics();
        
    },

   
});
