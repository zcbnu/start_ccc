var SKILLTYPE = cc.Enum({
    PASSIVE_SKILL:1,
    ACTIVE_SKILL:2,
});
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
        // beidongjineng: [cc.Integer],
        // zhudongjineng: cc.Integer,
        类型: {default: SKILLTYPE.ACTIVE_SKILL, type:SKILLTYPE, tooltip:"技能类型。。"}
    },

    // use this for initialization
    onLoad: function () {
        cc.log("汉子类型"+this.类型);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
