cc.Class({
    'extends': cc.Component,

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
    },

    // use this for initialization
    onLoad: function onLoad() {
        var animation = this.node.getComponent(cc.Animation);
        animation.on('stop', this.onStopMove, this);
        var anim = this.getComponent(cc.Animation);

        // 如果没有指定播放哪个动画，并且有设置 defaultClip 的话，则会播放 defaultClip 动画
        anim.play();
    },

    onStopMove: function onStopMove() {
        this.node.setScale(2);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});