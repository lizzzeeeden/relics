cc.Class({
    extends: cc.Component,

    properties: {
        //常驻节点
        dataNode: cc.Node,
        //章节、关卡切换相关
        cavas:cc.Node,
        chapter: 0,
        level:0,
    },

    onLoad() {
        //墙相关
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

         //得到常驻节点及赋值
        this.dataNode = cc.director.getScene().getChildByName("DataNode");
        this.chapter = this.dataNode.getComponent("Data").GetChapter();
        this.level = this.dataNode.getComponent("Data").GetLevel();

        //游戏模式切换
        this.LevelControl();
        this.ChapterControl();

    },

    //墙相关
    onCollisionEnter: function (other, self) {
        if (other.node.group == 'bomb'||other.node.group=='chip') {
            other.node.destroy();
        }
    },

    //update(dt) { },
    
    //游戏模式切换函数
    LevelControl(l) {
        switch (this.level) {
            case '1':
                this.cavas.getComponent("Level2").destroy();
                this.cavas.getComponent("Level3").destroy();
                break;
            case '2':
                this.cavas.getComponent("Level1").destroy();
                this.cavas.getComponent("Level3").destroy();
                break;
            case '3':
                this.cavas.getComponent("Level1").destroy();
                this.cavas.getComponent("Level2").destroy();
                break;
        };
    },
    ChapterControl() {
        switch (this.chapter) {
            case '1':
                this.cavas.getChildByName("Player2").destroy();
                this.cavas.getChildByName("Player3").destroy();
                break;
            case '2':
                this.cavas.getChildByName("Player1").destroy();
                this.cavas.getChildByName("Player3").destroy();
                break;
            case '3':
                this.cavas.getChildByName("Player1").destroy();
                this.cavas.getChildByName("Player2").destroy();
                break;    
        };
    }
});
