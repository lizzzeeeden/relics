cc.Class({
    extends: cc.Component,

    properties: {
        //常驻节点
        dataNode: cc.Node,

        //游戏胜负ui
        loseUI: cc.Node,
        winUI:cc.Node,

        //章节、关卡切换相关
        chapter: 0,
        level: 0,
        
        //其他
        HPLabel:cc.Node,
        scoreLabel: cc.Node,
        timeLabel: cc.Node,
        pauseButton:cc.Node,
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
                cc.director.getScene().getChildByName("Player1").active=true;
                break;
            case '2':
                cc.director.getScene().getChildByName("Player2").active=true;
                break;
            case '3':
                cc.director.getScene().getChildByName("Player3").active=true;
                this.node.getChildByName("DownCreator").active = true;
                break;    
        };
    },

    PlayerWin: function () {
        cc.director.pause();
        this.winUI.active = true;
        this.winUI.setSiblingIndex(this.node.childrenCount);
        if (this.level == 3) {
            this.winUI.getChildByName("PlayerWin").active = false;
            this.winUI.getChildByName("ChapterFin").active = true;
        }
    },

    PlayerLose: function () {
        cc.director.pause();
        this.loseUI.active = true;
        this.loseUI.setSiblingIndex(this.node.childrenCount);
    },

    TimeOver: function () {
        this.HPLabel.active = false;
        this.scoreLabel.active = false;
        this.timeLabel.active = false;
        this.pauseButton.active = false;

        var isWin = false;
        switch (this.chapter)
        {
            case '1':
                cc.director.getScene().getChildByName("Player1").active = false;
                switch (this.level)
                {
                    case '1':
                        if (this.dataNode.getComponent("Data").relics[0]==true)
                            isWin = true;
                        break;
                     case '2':
                        if (this.dataNode.getComponent("Data").relics[1]==true)
                            isWin = true;
                        break;
                     case '3':
                        if (this.dataNode.getComponent("Data").relics[2]==true)
                            isWin = true;
                        break;
                }
                break;
            
            case '2':
                cc.director.getScene().getChildByName("Player2").active = false;
                switch (this.level)
                {
                    case '1':
                        if (this.dataNode.getComponent("Data").relics[3]==true)
                            isWin = true;
                        break;
                     case '2':
                        if (this.dataNode.getComponent("Data").relics[4]==true)
                            isWin = true;
                        break;
                     case '3':
                        if (this.dataNode.getComponent("Data").relics[5]==true)
                            isWin = true;
                        break;
                }
                break;
            
            case '3':
                cc.director.getScene().getChildByName("Player3").active = false;
                switch (this.level)
                {
                    case '1':
                        if (this.dataNode.getComponent("Data").relics[6]==true)
                            isWin = true;
                        break;
                     case '2':
                        if (this.dataNode.getComponent("Data").relics[7]==true)
                            isWin = true;
                        break;
                     case '3':
                        if (this.dataNode.getComponent("Data").relics[8]==true)
                            isWin = true;
                        break;
                }
                break;
        }

        if (isWin) {
            this.PlayerWin();
        } else {
            this.PlayerLose();
        }

        cc.director.getScene().getChildByName("Streak").active = false;
    },

});

