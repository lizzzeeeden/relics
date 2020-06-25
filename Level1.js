
cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
        bombPrefab: cc.Prefab,
        wrongChipPrefab:cc.Prefab,
        chip1Prefab:cc.Prefab,
        chip2Prefab:cc.Prefab,
        timeLabel: cc.Node,
        Canvas:cc.Node,

        chipTimeLeap: 1,
        bombTimeLeap: 1.73,
        wrongChipTimeLeap: 1.5,
        chapter:0,
    },

    //定时生成，数字单位为秒数
    start() {
        this.timeLabel.active = false;
        this.schedule(function () {
            this.CreateChip();
        }, this.chipTimeLeap);
        this.schedule(function () {
            this.CreatBomb();
        }, this.bombTimeLeap);
        this.schedule(function () {
            this.CreatWrongChip();
        }, this.wrongChipTimeLeap);
        this.schedule(function () {
            this.CreateChip1();
        }, this.wrongChipTimeLeap+1);
        this.schedule(function () {
            this.CreateChip2();
        }, this.wrongChipTimeLeap+2);
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
    //生成错误碎片
    CreatWrongChip() {
        var bomb = cc.instantiate(this.wrongChipPrefab);
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
