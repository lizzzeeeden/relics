//挂在画布上了
cc.Class({
    extends: cc.Component,

    properties: {
        startPage: cc.Node,
        choose: cc.Node,
        C1Level: cc.Node,
        C2Level: cc.Node,
        C3Level: cc.Node,
        dataNode: cc.Node,
        gameCavas: cc.Node,
    },

    // start () {
             
    // },

    onLoad: function () {
        //整了一天都在整这个bug终于整好了我杀cocos
        //场景切换的常驻脚本不能直接挂载
        this.dataNode = cc.director.getScene().getChildByName("DataNode");
     },


    StartGame:function(){
        //cc.director.loadScene("Game");
        this.startPage.active = false;
        this.choose.active = true;
    },

    QuitGame: function () {
        cc.director.end();
    },

    PauseGame: function () {
        cc.director.pause();
        this.node.active = true;
    },

    ResumeGame: function () {
        cc.director.resume();
        this.node.active = false;
    },

    BackToMainMenu: function () {
        //一定要复原不然碰撞体会出错
        cc.director.resume();
        cc.director.loadScene("StartUI");
    },

    GoToPuzzle: function () {
        cc.director.loadScene("Puzzle");
    },

    GoToGame: function () {
        cc.director.loadScene("Game");
    },

    //展示选择章节关卡
    ShowLevel: function (event,customEventData) {
        switch (customEventData)
        {
            case '1':
                this.C1Level.active = true;
                this.C2Level.active = false;
                this.C3Level.active = false;
                break;
            case '2':
                this.C2Level.active = true;
                this.C1Level.active = false;
                this.C3Level.active = false;
                break;
            case '3':
                this.C3Level.active = true;
                this.C1Level.active = false;
                this.C2Level.active = false;
                break;
        }
        this.dataNode.getComponent("Data").ChangeChapter(customEventData);
        //cc.log(this.dataNode.getComponent("Data").GetChapter());
    },
    
    //选择关卡并开始
    ChooseLevel: function (event,customEventData) {
        this.dataNode.getComponent("Data").ChangeLevel(customEventData);
        //cc.log(this.dataNode.getComponent("Data").GetLevel())
        cc.director.loadScene("Game");
    },
});
