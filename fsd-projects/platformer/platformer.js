$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 500, 200 , 20 , "darkblue");
createPlatform(400,525,150,25, "purple");
createPlatform(300,550,100,20, "red");
createPlatform(250,575,30,20, "aqua");
createPlateform(150,600,60,20,"orange");




    // TODO 3 - Create Collectables
createCollectable("Steve",15,75);
createCollectable("diamond", 20, 170, 0.5, 0.7 );
createCollectable("bob",50,60,0.4,0.8);



    
    // TODO 4 - Create Cannons
createCannons("left", 300, 2000);
createCannons("right", 900, 1750);
createCannon("top", 600, 1250);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
