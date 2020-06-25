
cc.Class({
    extends: cc.Component,

    properties: {
       //常驻节点
       dataNode: cc.Node,
        chapter: '0',
        isPuzzleFit:false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.dataNode = cc.director.getScene().getChildByName("DataNode");
        this.chapter = this.dataNode.getComponent("Data").GetChapter();
        switch (this.chapter)
        {
            case '1':
                this.node.getChildByName("Chapter1").active = true;
                break;
            case '2':
                this.node.getChildByName("Chapter2").active = true;
                break;
            case '3':
                this.node.getChildByName("Chapter3").active = true;
                break;
        }
    },

    //解锁馆藏
    UnlockRelics: function () {
        switch (this.chapter)
        {
            case '1':
                this.dataNode.getComponent("Data").ChangeIsChapterFin(0);
                break;
            case '2':
                this.dataNode.getComponent("Data").ChangeIsChapterFin(1);
                break;
            case '3':
                this.dataNode.getComponent("Data").ChangeIsChapterFin(2);
                break;
        }
    },
    
    //按键函数
    BackToMain: function () {
        this.CloseColl();
        cc.director.resume();
        cc.director.loadScene("StartUI");
    },

    GoToRelics: function () {
        this.CloseColl();
        cc.director.resume();
        cc.director.loadScene("Relics");
    },

    //关闭碰撞盒子
    CloseColl: function () {
        switch (this.chapter)
        {
            case '1':
                this.node.getChildByName("Chapter1").active = false;
                break;
            case '2':
                this.node.getChildByName("Chapter2").active = false;
                break;
            case '3':
                this.node.getChildByName("Chapter3").active = false;
                break;
        }
    }
});
