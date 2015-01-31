window.onload = function() 
{
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() 
    {
        // Load an image and call it 'logo'.
    //    game.load.image( 'logo', 'assets/phaser.png' );
        game.load.spritesheet( 'girlChar', 'assets/ExGirl.png', 40, 40, 12 );
    }
    
   // var bouncy;
    
    
    function create() 
    {
        var girl;
        
        
        
        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        
        girl = game.add.sprite(game.world.centerX, game.world.centerY, 'girlChar');
        girl.animations.add('walk');
        girl.animations.play('walk', 50, true);
        girl.animations.add('left', [0, 1, 2], 10, true);
        girl.animations.add('down', [3, 4, 5], 10, true);
        girl.animations.add('up', [6, 7, 8], 10, true);
        girl.animations.add('right', [9, 10, 11], 10, true);
        
        girl.body.gravity.y = 300;
        
    //    cursors = game.input.keyboard.createCursorKeys();
        
        // Turn on the arcade physics engine for this sprite.
    //    game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
     //   bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something awesome.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() 
    {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
     //   bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );\
        
         cursors = game.input.keyboard.createCursorKeys();
        
        // girl.body.gravity.y = 300; 
         girl.body.velocity.x = 0;
         
         if (cursors.left.isDown)
         {
        //  Move to the left
             player.body.velocity.x = -150;
             player.animations.play('left');
             
         }
        else if (cursors.right.isDown)
        {
            //  Move to the right
            player.body.velocity.x = 150;
            player.animations.play('right');
        }
        else
        {
            //  Stand still
            player.animations.stop();
            player.frame = 4;
        }
        
        //  Allow the player to jump if they are touching the ground.
       /* if (cursors.up.isDown && player.body.touching.down)
        {
            player.body.velocity.y = -350;
        } */
             
     }
};
