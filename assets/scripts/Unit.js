var Skill = require("Skill");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        hp: 1000,
        hpMax: 1000,
        attack: 200,
        defence: 100,
        passiveSkill: [Skill],
        activeSkill: 0,
    },

    // use this for initialization
    onLoad: function () {
        this._minionRole = this.node.getChildByName("skeleton minion 4");
        this._hpBar = this.node.getChildByName("progressBar").getComponent(cc.ProgressBar);
        this.updateBar();
    },

    updateBar: function () {
        // this._hpBar.mode = cc.ProgressBar.Mode.HORIZONTAL;
        this._hpBar.progress = parseFloat( this.hp / this.hpMax);
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.updateBar();
    },
});
