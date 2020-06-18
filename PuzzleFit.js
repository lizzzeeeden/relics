// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
         
    bFinished:{
            type: cc.Node,
            default:null,
        },
    
        
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

    start () {

    },

    update(dt) {
        var i = 0;
        for (i = 0; i < this.bFixs.length; i++){
            //cc.log(this.bFixs[i].bFit);
            if (!this.bFixs[i].bFit) {
                return;
            }
        }
        //延时显示胜利画面
        this.scheduleOnce(function(){
            this.bFinished.active=true; 
       },0.7);
        
    },
});
