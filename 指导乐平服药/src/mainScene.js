var startScene;
startScene = Class.create(Scene, {
    initialize: function () {
        Scene.call(this);

        var bg = new addSprite('./res/gameStart.png', 0, 0, 1280, 800);
        this.addChild(bg);

        var easyBtn = new addSprite('./res/easy.png', 211, 579, 264, 110, 0);
        this.addChild(easyBtn);

        var hardBtn = new addSprite('./res/hard.png', 213, 693, 264, 110, 0);
        this.addChild(hardBtn);

        easyBtn.addEventListener('touchstart', function () {
            scene = new easyScene();
            easyBtn.tl.fadeOut(60);
            hardBtn.tl.fadeOut(60);
            bg.tl.fadeOut(60).then(function () {
                game.replaceScene(scene);
            });
        });

        hardBtn.addEventListener('touchstart', function() {

        })
        hardBtn.addEventListener('touchstart', function () {
            scene = new hardScene();
            hardBtn.tl.fadeOut(60);
            easyBtn.tl.fadeOut(60);
            bg.tl.fadeOut(60).then(function () {
                game.replaceScene(scene);
            });
        });
    }
});

var mainScene = Class.create(Scene, {
    initialize: function() {
        Scene.call(this);
        self = this;

        var bg = new addSprite('./res/sick1.jpg', 470, 271, 358, 290, 0);
        this.addChild(bg);

        var playBtn = new addSprite('./res/play.png', 1158, 673, 78, 78, 1);
        this.addChild(playBtn);
        var clock = new addSprite('./res/clock.png', 881, 51, 125, 140, 0);
        this.addChild(clock);
        // var sec = new addSprite('./res/seconds.png', 881, 51, 125, 140, 1);
        // this.addChild(sec);
        var mins = new addSprite('./res/minutes.png', 920, 121, 30, 31, 0);
        this.addChild(mins);
        var hours = new addSprite('./res/hours.png', 936, 124 , 22, 12, 0);
        this.addChild(hours);

        mins.originX = 0.5*mins.width;
        mins.originY = 0.5*mins.height;
        // mins.rotate(27.5);

        playBtn.addEventListener('touchstart', function() {
            scene = new gameScene();
            game.replaceScene(scene);
        });

    }
});

var gameScene = Class.create(Scene, {
    initialize: function() {
        Scene.call(this);
        self = this;

        var patient = new addSprite('./res/patient.png', 366, 205, 250, 193, 0);
        this.addChild(patient);
        var healthBar = new addSprite('./res/healthBar.png', 389, 32, 491, 64, 0);
        this.addChild(healthBar);
        var thermometer = new addSprite('./res/thermometer.png', 1061, 504, 144, 238, 1);
        this.addChild(thermometer);

        var drugA = new addSprite('./res/drug.png', 200, 494, 134, 243, 1);
        this.addChild(drugA);
        var drugB = new addSprite('./res/drug.png', 425, 494, 134, 243, 1);
        this.addChild(drugB);
        var drugC = new addSprite('./res/drug.png', 650, 494, 134, 243, 1);
        this.addChild(drugC);
       
        var clock = new addSprite('./res/clock.png', 981+80, 51-30, 125, 140, 0);
        this.addChild(clock);
        // var sec = new addSprite('./res/seconds.png', 881, 51, 125, 140, 1);
        // this.addChild(sec);
        var mins = new addSprite('./res/minutes.png', 1020+80, 121-30, 30, 31, 0);
        this.addChild(mins);
        var hours = new addSprite('./res/hours.png', 1036+80, 124-30, 22, 12, 0);
        this.addChild(hours);

        patient.scale(1.5);

        var info = new Label();
        info.text = '康复进度';
        info.x = 170;
        info.y = 35;
        info.font = '50px Arial';
        this.addChild(info);

        var banner = new addSprite('./res/banner.png', 445, 207, 507, 172, 0);
        this.addChild(banner);
        var spoon = [];
        for(var i=0; i<4; i++) {
            spoon[i] = new addSprite('./res/spoon.png', banner.x+40+110*i, banner.y+15, 130, 132, 0);
            this.addChild(spoon[i]);
        }
        
        drugA.addEventListener('touchend', function() {
            if(drugA.intersect(patient)) {
                drugA.scale(0.5);
            }
        });
        drugA.addEventListener('mouseout', function() {
            console.log('b');
            if(drugA.intersect(patient)) {
                drugA.scale(0.5);
                console.log('c');
            }
        });

        spoon[0].addEventListener('touchstart', function() {
            for(var i=1; i<4; i++) {
                spoon[i].image = game.assets[];
            }
        });
        //aaa;
        // spoon[1].addEventListener('touchstart', function() {
        //     for(var i=2; i<4; i++) {
        //         spoon[i].image = game.assets[];
        //     }
        // });
        // spoon[2].addEventListener('touchstart', function() {
        //     for(var i=3; i<4; i++) {
        //         spoon[i].image = game.assets[];
        //     }
        // });
    }
});

var AnsScene = Class.create(Scene, {
    initialize: function() {
        Scene.call(this);
        self = this;

        if(ram == 2 || ram == 5 || ram == 12 || ram == 14 || ram == 19 || ram == 20) {
            alert('im 春节');
            answer = 1;
        }
        else if(ram == 1 || ram == 3) {
            alert('im 清明节');
            answer = 2;
        }
        else if(ram == 16 || ram == 23) {
            alert('im 中秋节');
            answer = 4;
        }
        else if(ram == 8 || ram == 9 || ram == 21) {
            alert('im 复活节');
            answer = 5;
        }
        else if(ram == 13 || ram == 15 || ram == 22) {
            alert('im 端午节');
            answer = 6;
        }
        else if(ram == 6 || ram == 7) {
            alert('im 佛诞');
            answer = 7;
        }
        else if(ram == 10) {
            alert('im 重阳节');
            answer = 8;
        }
        else if(ram == 4 || ram == 11 || ram == 17 || ram == 18 ) {
            alert('im 圣诞节');
            answer = 10;
        }

        var Ans_bg = new addSprite('./res/png/01.png', 0, 0, 1280, 800);
        this.addChild(Ans_bg);

        var Ans_A = new addSprite('./res/png/Ans_A.png', 352, 407 , 38, 38,1);
        this.addChild(Ans_A);
        var Ans_B = new addSprite('./res/png/Ans_B.png', 679, 407 , 38, 38,1);
        this.addChild(Ans_B);
        var Ans_C = new addSprite('./res/png/Ans_C.png', 352, 461, 38, 38,1);
        this.addChild(Ans_C);
        var Ans_D = new addSprite('./res/png/Ans_D.png',  679, 461, 38, 38,1);
        this.addChild(Ans_D);

        var arr_fId = [];
        for(var i=0; i<10; i++) {
            arr_fId[i] = ('FE'+[i+1]).toString();
           }
        var festival = [];
        festival[0] = new addSprite(arr_fId[4],  425, 405, 155, 54,0);
        festival[1] = new addSprite(arr_fId[1],  750, 405, 155, 54,0);
        festival[2] = new addSprite(arr_fId[2],  425, 454, 155, 54,0);
        festival[3] = new addSprite(arr_fId[3],  750, 454, 155, 54,0);

        var festival_shuffle = [];
        festival_shuffle = festival.slice(0);
        festival_shuffle.shuffle();


        for(var i=0; i<4; i++) {
            festival_shuffle[i].image = Game.instance.assets[arr_fId[parseInt((answer+i-1)%10)]];
            this.addChild(festival_shuffle[i]);
        }
        festival_shuffle[0].addEventListener('touchstart', function() {
            alert('Congratulations! your score is '+ totalScore);
            scene = new startScene();
            Ans_bg.tl.fadeOut(60).then(function() {
                game.replaceScene(scene); 
            });

        })
        festival_shuffle[1].addEventListener('touchstart', function() {
            alert('try again!');
        })
        festival_shuffle[2].addEventListener('touchstart', function() {
            alert('try again!');
        })
        festival_shuffle[3].addEventListener('touchstart', function() {
            alert('try again!');
        })
        
    }
});

