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
    },

    // use this for initialization
    onLoad: function () {
        var animation = this.node.getComponent(cc.Animation);
        animation.on('stop', this.onStopMove, this);
    },
    
    attackEnemy: function () {
        var anim = this.getComponent(cc.Animation);

        // 如果没有指定播放哪个动画，并且有设置 defaultClip 的话，则会播放 defaultClip 动画
        anim.play();
    },
    
    onStopMove: function() {
        // this.node.setScale(2);
        var spine = this.node.getComponent(sp.Skeleton);
        spine.setAnimation (0, "active01", false, 0);
        // spine.setEndListener(()=>{this.node.getComponent(sp.Skeleton).setAnimation(0, "stand", true); });
        spine.setEndListener(()=>{
            // var spined = this.node.getComponent(sp.Skeleton);
            // spined.setAnimation(0, "stand", true);
            this.count = this.count || 0;
            this.count = this.count + 1;
            console.log("stand!!!" + this.count);
            if (this.state === "start") this.state = "finish";
        });
        this.state = "start";
    },
    
    onAttackEnd: function() {
        var spine = this.node.getComponent(sp.Skeleton);
        spine.setAnimation (0, "stand", true);  
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        if (this.state === "finish")
        {
            this.node.getComponent(sp.Skeleton).setAnimation(0, "stand", true, 0);
            this.state = "stop";
        }
        // 每帧判断和主角之间的距离是否小于收集距离
        // if (this.getPlayerDistance() < this.pickRadius) {
        //     // 调用收集行为
        //     this.attackEnemy();
        //     return;
        // }
        
        // 根据 Game 脚本中的计时器更新星星的透明度
        // var opacityRatio = 1 - this.game.timer/this.game.starDuration;
        // var minOpacity = 50;
        // this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));

    },
});
