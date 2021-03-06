"use strict";
cc._RFpush(module, '0d751WwURRFaIWOP4sjI+5D', 'skeleton');
// scripts/skeleton.js

var ANIMATION_TYPE = cc.Enum({
    ANIMATION_START: 0,
    ANIMATION_END: 1,
    ANIMATION_COMPLETE: 2,
    ANIMATION_EVENT: 3
});

module.exports = cc.Class({
    "extends": cc.Component,

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
        targets: {
            "default": [],
            type: cc.Node
        },
        animstate: {
            "default": ANIMATION_TYPE.ANIMATION_END,
            type: ANIMATION_TYPE
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var animation = this.node.getComponent(cc.Animation);
        animation.on('stop', this.onStopMove, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onStopMove, this);
    },

    destory: function destory() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onStopMove, this);
    },

    animationStateEvent: function animationStateEvent(obj, trackIndex, type, event, loopCount) {
        var entry = this.node.getComponent(sp.Skeleton).getCurrent(0);
        var animationName = entry && entry.animation ? entry.animation.name : 0;

        switch (type) {
            case ANIMATION_TYPE.ANIMATION_START:
                cc.log(trackIndex + " start: " + animationName);
                break;
            // case ANIMATION_TYPE.ANIMATION_END:
            //     cc.log(trackIndex + " end:" + animationName);
            //     break;
            case ANIMATION_TYPE.ANIMATION_EVENT:
                cc.log(trackIndex + " event: " + animationName);
                break;
            case ANIMATION_TYPE.ANIMATION_COMPLETE:
                cc.log(trackIndex + " event: " + animationName + " type: complete");
                if (this.state === "start") this.state = "finish";
                break;
            // case ANIMATION_TYPE.ANIMATION_COMPLETE:
            //     cc.log(trackIndex + " complete: " + animationName + "," + loopCount);
            //     if(this._flipped){
            //         this._flipped = false;
            //         this._spineboy.setScaleX(0.5);
            //     }else{
            //         this._flipped = true;
            //         this._spineboy.setScaleX(-0.5);
            //     }
            //     break;
            default:
                cc.log("default event log");
                break;
        }
    },

    attackEnemy: function attackEnemy() {
        var anim = this.getComponent(cc.Animation);

        // 如果没有指定播放哪个动画，并且有设置 defaultClip 的话，则会播放 defaultClip 动画
        anim.play();
    },

    onStopMove: function onStopMove() {
        // this.node.setScale(2);
        var spine = this.node.getComponent(sp.Skeleton);
        spine.setAnimation(0, "active01", false, 0);

        spine.setAnimationListener(this, this.animationStateEvent);
        this.state = "start";
    },

    onAttackEnd: function onAttackEnd() {
        var spine = this.node.getComponent(sp.Skeleton);
        spine.setAnimation(0, "stand", true);
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {

        // if (this.state === "finish")
        // {
        //     this.node.getComponent(sp.Skeleton).setAnimation(0, "stand", true, 0);
        //     this.state = "stop";
        // }
        // 每帧判断和主角之间的距离是否小于收集距离
        // if (this.getPlayerDistance() < this.pickRadius) {
        //     // 调用收集行为
        //     this.attackEnemy();
        //     return;
        // }

        // 根据 Game 脚本中的计时器更新星星的透明度
        // let opacityRatio = 1 - this.game.timer/this.game.starDuration;
        // let minOpacity = 50;
        // this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));

    }
});;

cc._RFpop();