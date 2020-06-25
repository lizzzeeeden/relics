
cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
        
        bombPrefab: cc.Prefab,
        wrongChipPrefab:cc.Prefab,
        timeLabel: cc.Node,
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
    
});
