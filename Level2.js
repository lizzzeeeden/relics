
cc.Class({
    extends: cc.Component,

    properties: {
        chipPrefab: cc.Prefab,
    },

    //定时生成，数字单位为秒数
    start() {
        this.schedule(function() {
            this.CreateChip();
        }, 1);
    },

    //生成预制
    CreateChip() {
        var chip = cc.instantiate(this.chipPrefab);
        chip.parent = this.node;
    },

});
