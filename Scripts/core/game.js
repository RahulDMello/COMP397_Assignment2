//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoardManager;
    var TextureAtlas;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/StartButton.png" },
        { id: "canon", src: "/Assets/images/canon.png" },
        { id: "meteor", src: "/Assets/images/meteor.png" },
        { id: "bullet", src: "/Assets/images/bullet.png" },
        { id: "blast", src: "/Assets/audio/blast.mp3" },
        { id: "bubble", src: "/Assets/audio/bubble.mp3" },
        { id: "background", src: "/Assets/images/background.png" },
        { id: "bgmusic", src: "Assets/audio/bgmusic.mp3" },
        { id: "tutorial", src: "/Assets/images/tutorial.png" },
        { id: "PlayButton", src: "/Assets/images/PlayButton.png" },
        { id: "RestartButton", src: "/Assets/images/RestartButton.png" },
        { id: "TutorialButton", src: "/Assets/images/TutorialButton.png" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // setup scoreboard manager
        ScoreBoardManager = new managers.ScoreBoard();
        managers.Game.ScoreBoardManager = ScoreBoardManager;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
            // createjs.Sound.stop(); // stop all sounds
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.TUTORIAL:
                CurrentScene = new scenes.Tutorial();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map