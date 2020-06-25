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
        preIntro1:cc.Node,
        preIntro2:cc.Node,
        preIntro3: cc.Node,
        chapter: '0',
        tmpLNode: cc.Node,
        nextButton: cc.Node,
        startButton:cc.Node,
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
        this.node.setSiblingIndex(this.node.getParent().childrenCount);
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

    GotoPuzzle: function () {
        cc.director.loadScene("Puzzle");
    },

    GotoGame: function () {
        cc.director.loadScene("Game");
    },

    GotoRelics: function () {
        cc.director.loadScene("Relics");
    },

    NextIntro: function () {
        this.tmpLNode.getChildByName("BackIntro").active = false;
        this.tmpLNode.getChildByName("PlayIntro").active = true;
        this.startButton.active = true;
        this.nextButton.active = false;
    },

    //展示选择章节关卡
    ShowLevel: function (event, customEventData) {
        this.chapter = customEventData;
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
    ChooseLevel: function (event, customEventData) {
        this.dataNode.getComponent("Data").ChangeLevel(customEventData);
        var tmpPreIntro;
        switch (this.chapter)
        {
            case '1':
                this.preIntro1.active = true;
                tmpPreIntro = this.preIntro1;
                //cc.log(this.preIntro1.active);
                break;
            case '2':
                this.preIntro2.active = true;
                tmpPreIntro = this.preIntro2;
                break;
            case '3':
                this.preIntro3.active = true;
                tmpPreIntro = this.preIntro3;
                break;
        }

        switch (customEventData)
        {
            case '1':
                this.tmpLNode = tmpPreIntro.getChildByName("L1");
                this.tmpLNode.active = true;
                break;
            case '2':
                this.tmpLNode = tmpPreIntro.getChildByName("L2");
                this.tmpLNode.active = true;
                break;
            case '3':
                this.tmpLNode = tmpPreIntro.getChildByName("L3");
                this.tmpLNode.active = true;
                break;
        }

        this.nextButton.active=true,
        this.choose.active = false;
        //cc.log(this.dataNode.getComponent("Data").GetLevel())
        //cc.director.loadScene("Game");
    },


});
