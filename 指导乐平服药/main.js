enchant();
var totalScore = 1810;
//随机地图
var ram = Math.floor(1+Math.random()*(23-1));
// var ram = 10;
var answer = 0;


var testArr = [];

window.onload = function () {
    game = new Core(1280, 800); 
    game.fps = 60;
    game.scale = 1;
    game.loadingScene.backgroundColor = "#FFF";

    var resizeGame = function() {
        var _rescale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        var _reWidth = game.width * _rescale;
        var _reHeight = game.height * _rescale;
        document.getElementById('stage').setAttribute('style', 'width:'+ _reWidth.toString() +'px;height:'+ _reHeight.toString() +'px;');
        return _rescale;
    };

    var _rescale = resizeGame();
    _rescale = (_rescale > 1) ? 1 : _rescale;
    game.scale = _rescale;

    window.addEventListener('resize', function(){
        var tmpScale = resizeGame();
        tmpScale = (tmpScale > 1) ? 1 : tmpScale;
        game.scale = tmpScale;
    }, false);

    
    game.preload(
        //background
        './res/sick1.jpg',
        './res/clock.png',
        './res/hours.png',
        './res/minutes.png',
        './res/seconds.png',
        './res/play.png',
        './res/drug.png',
        './res/patient.png',
        './res/healthBar.png',
        './res/thermometer.png',
        './res/banner.png',
        './res/spoon.png'

    );

    
    game.onload = function() {
        // var group;
        scene = new gameScene();
        game.pushScene(scene);

        // scene2 = new Scene2();
        // game.pushScene(scene2);
    };

    game.start();
};

window.addEventListener("click", function(evt) {
    codeX = evt.offsetX; 
    codeY = evt.offsetY;
    // console.log('坐标： ', codeX, codeY);
});



    

    
    
