var addSprite = Class.create(Sprite, {
    initialize: function(src, x, y, width, height, _canMove) {
        // Sprite.call(this, game.assets[src].width, game.assets[src].height);
        Sprite.call(this, width, height);
        this.image = Game.instance.assets[src];
        this.x = x;
        this.y = y;
        this.visible = true;
        
        var curX;
        var curY;
        var sprite_curX;
        var sprite_curY;

        // var _canMove;
        this._canMove = false;

        this.addEventListener('touchstart', function(e) {
            curX = e.x;
            curY = e.y;
            sprite_curX = this.x;
            sprite_curY = this.y;
        });

        this.addEventListener('touchmove', function(e) {
            if(_canMove) {
                this.x = e.x-curX+sprite_curX;
                this.y = e.y-curY+sprite_curY;
            }
        });

        this.addEventListener('touchend', function(e) {
            console.log("sprite_pos:", Math.ceil(sprite_curX), Math.ceil(sprite_curY));
        });
    }
});

var puzzle = Class.create(Sprite, {
    initialize: function(src, x, y, width, height, _canMove, score) {
        Sprite.call(this, game.assets[src].width, game.assets[src].height);
        this.image = Game.instance.assets[src];
        this.x = x;
        this.y = y;
        this.visible = true;
        this._canMove = _canMove;
        this.score = score;

        this.flash = function() {
            this.tl.fadeOut(30);
        }

        this.addEventListener('touchstart', function() {
            scene.removeChild(this);
            if(totalScore-this.score > 0) {
                totalScore = totalScore-this.score;
            }
            else {
                totalScore = 0;
            }
        });
        this.addEventListener('touchstart', function(e) {
            curX = e.x;
            curY = e.y;
            sprite_curX = this.x;
            sprite_curY = this.y;
        });

        this.addEventListener('touchmove', function(e) {
            if(_canMove) {
                this.x = e.x-curX+sprite_curX;
                this.y = e.y-curY+sprite_curY;
            }
        });

        this.addEventListener('touchend', function(e) {
            console.log("sprite_pos:", Math.ceil(sprite_curX), Math.ceil(sprite_curY));
        });
    }
});

// var score = new addSprite()

var Score = Class.create(Sprite, {
    initialize: function(x, y) {
        Sprite.call(this);
        var self = this;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.scale(0.8);
        this.image = Game.instance.assets['./res/num.png'];
    }
});


//aray
Array.prototype.shuffle = function() {
    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};

Array.prototype.del=function(n) {　//n表示第几项，从0开始算起。
//prototype为对象原型，注意这里为对象增加自定义方法的方法。
　if(n<0)　//如果n<0，则不进行任何操作。
　　return this;
　else
　　return this.slice(0,n).concat(this.slice(n+1,this.length));
　　/*
　　　concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
　　　　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
　　 　　　　　　组成的新数组，这中间，刚好少了第n项。
　　　slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
　　*/
}

