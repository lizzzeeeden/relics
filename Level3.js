cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
        bombPrefab: cc.Prefab,
        timeLabel: cc.Node,
        chipTimeLeap: 1,
        bombTimeLeap: 0.4,
        time: 60,
    },

    //定时生成，数字单位为秒数
    start() {

        this.schedule(function () {
            this.CreateChip();
        }, this.chipTimeLeap);
        this.schedule(function () {
            this.CreatBomb();
        }, this.bombTimeLeap);
        this.schedule(function(){        
            this.timeLabel.getComponent(cc.Label).string =
            "Time:" + this.time.toString();
            this.time-=1;
        },1);

        if (this.chapter == 3) {
            
        }
    },

    //生成碎片
    CreateChip() {
        var chip = cc.instantiate(this.chipPrefab);
        chip.parent = this.node;
    },

    //生成炸弹
    CreatBomb() {
        var bomb = cc.instantiate(this.bombPrefab);
        bomb.parent = this.node;
    },

    
});
