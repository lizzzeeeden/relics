
cc.Class({
    extends: cc.Component,

    properties: {
        //下面两个都是字符型
        chapter:'0',
        level: '0',

        relics: {
            type: cc.Boolean,
            default:[],
        },
        isChapterFin: {
            type: cc.Boolean,
            default:[],
        },
        isNextLevel:false,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //常驻节点
        cc.game.addPersistRootNode(this.node);
        this.relics = [9];
        this.isChapterFin = [3];
        //cc.log(this.relics[0]);
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

    GetIsNextLevel: function () {
        return this.isNextLevel;
    },
    ChangeIsNextLevel: function (b) {
        this.isNextLevel = b;
    },

    ChangeIsChapterFin: function (num) {
        this.isChapterFin[num] = true;
    }


    // update (dt) {},
});
