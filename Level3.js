cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
        bombPrefab: cc.Prefab,
        timeLabel: cc.Node,
        chip1Prefab:cc.Prefab,
        chip2Prefab: cc.Prefab,
        
        chipTimeLeap: 1,
        bombTimeLeap: 0.4,
        wrongChipTimeLeap:1.5,
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
        this.schedule(function () {
            this.CreateChip1();
        }, this.wrongChipTimeLeap+1);
        this.schedule(function () {
            this.CreateChip2();
        }, this.wrongChipTimeLeap+2);
        this.schedule(function () {     
            this.timeLabel.getComponent(cc.Label).string =
                "Time:" + this.time.toString();
            
             //判断结束
             if (this.time <= 0) {
                this.node.getComponent("GameController").TimeOver();
            }
            
            this.time-=1;
        },1);


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
    CreateChip1() {
        var chip = cc.instantiate(this.chip1Prefab);
        chip.parent = this.node;
    },
    CreateChip2() {
        var chip = cc.instantiate(this.chip2Prefab);
        chip.parent = this.node;
    },

    
});
