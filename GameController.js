cc.Class({
    extends: cc.Component,

    properties: {
        //常驻节点
        dataNode: cc.Node,
        //章节、关卡切换相关
        chapter: 0,
        level: 0,
    },

    onLoad() {
        //墙相关

         //得到常驻节点及赋值
        this.dataNode = cc.director.getScene().getChildByName("DataNode");
        this.chapter = this.dataNode.getComponent("Data").GetChapter();
        this.level = this.dataNode.getComponent("Data").GetLevel();

        //游戏模式切换
        this.LevelControl();
        this.ChapterControl();

    },
    //update(dt) { },
    
    //游戏模式切换函数
    LevelControl() {
        switch (this.level) {
            case '1':
                this.getComponent("Level2").destroy();
                this.getComponent("Level3").destroy();
                break;
            case '2':
                this.getComponent("Level1").destroy();
                this.getComponent("Level3").destroy();
                break;
            case '3':
                this.getComponent("Level1").destroy();
                this.getComponent("Level2").destroy();
                break;
        };
    },
    ChapterControl() {
        switch (this.chapter) {
            case '1':
                this.node.getChildByName("Player2").destroy();
                this.node.getChildByName("Player3").destroy();
                break;
            case '2':
                this.node.getChildByName("Player1").destroy();
                this.node.getChildByName("Player3").destroy();
                break;
            case '3':
                this.node.getChildByName("Player1").destroy();
                this.node.getChildByName("Player2").destroy();
                this.node.getChildByName("DownCreator").active = true;
                break;    
                
        };
    }
});
