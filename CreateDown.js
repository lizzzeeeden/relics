// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bombPrefab: cc.Prefab,
        chipPrefab:cc.Prefab,
        chip1Prefab:cc.Prefab,
        chip2Prefab:cc.Prefab,

        timeLeap:0.1,
        wrongChipTimeLeap:0.8,
   
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.schedule(function () {
            this.CreatBomb();
        }, this.timeLeap);

        this.schedule(function () {
            this.CreateChip();
        }, this.timeLeap+1);
        this.schedule(function () {
            this.CreateChip1();
        }, this.wrongChipTimeLeap+1);
        this.schedule(function () {
            this.CreateChip2();
        }, this.wrongChipTimeLeap+2);

    },
    CreatBomb() {
        var bomb = cc.instantiate(this.bombPrefab);
        bomb.parent = this.node.parent;
    },

    CreateChip() {
        var chip = cc.instantiate(this.chipPrefab);
        chip.parent = this.node.parent;
    },
    CreateChip1() {
        var chip = cc.instantiate(this.chip1Prefab);
        chip.parent = this.node.parent;
    },
    CreateChip2() {
        var chip = cc.instantiate(this.chip2Prefab);
        chip.parent = this.node.parent;
    },
    // update (dt) {},
});


