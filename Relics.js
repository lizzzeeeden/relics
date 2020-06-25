// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        dataNode: cc.Node,

        img1:cc.Node,
        img2:cc.Node,
        img3: cc.Node,
        
        chapter1:cc.Node,
        chapter2:cc.Node,
        chapter3: cc.Node,

        introBack: cc.Node,
        intro1:cc.Node,
        intro2:cc.Node,
        intro3:cc.Node,

        closeButton:cc.Node,
    },

    //判断是否达成解锁条件
    onLoad() {
        this.dataNode = cc.director.getScene().getChildByName("DataNode");
        var relics = this.dataNode.getComponent("Data").relics;
        //relics[2] = true;
        if (relics[2]) {
            this.img1.active = false;
            this.chapter1.active = true;
        }
        if (relics[5]) {
            this.img2.active = false;
            this.chapter2.active = true;
        }
        if (relics[8]) {
            this.img3.active = false;
            this.chapter3.active = true;
        }
   },
    
    //展示文物文字介绍
    ShwoRelics: function(event, customEventData) {
        switch (customEventData)
        {
            case '1':
                this.chapter1.active = false;
                this.intro1.active = true;
                this.closeButton.active = true;
                this.introBack.active = true;
                break;
            case '2':
                this.chapter2.active = false;
                this.intro2.active = true;
                this.closeButton.active = true;
                this.introBack.active = true;
                break;
            case '3':
                this.chapter3.active = false;
                this.intro3.active = true;
                this.closeButton.active = true;
                this.introBack.active = true;
                break;
        }
    },
    
    //关闭文字介绍
    RelicClose: function () {
        cc.director.loadScene("Relics");
    },

    //回到主菜单
    BackToMenu: function () {
        cc.director.loadScene("StartUI");
    },
});
