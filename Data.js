
cc.Class({
    extends: cc.Component,

    properties: {
        chapter:0,
        level: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //常驻节点
        cc.game.addPersistRootNode(this.node);
        //cc.log(cc.loader.isAutoRelease(this.node));
        //cc.log(cc.game.isPersistRootNode(this.node));
    },

    // start () {

    // },

    ChangeChapter: function (c) {
        this.chapter = c;
    },

    ChangeLevel: function (l) {
        this.level = l;
    },

    GetChapter: function () {
        return this.chapter;
    },

    GetLevel: function () {
        return this.level;
    },

    // update (dt) {},
});
