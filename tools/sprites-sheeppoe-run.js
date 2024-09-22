var canvas = document.getElementById("canvaimage2");
        var ctx = canvas.getContext("2d");

        var sprite = new Image();
        sprite.src = "./images/sheeppoe.png";

        var sprite_selonX = 0;
        var sprite_selonY = 0;
        var tile_selonX = 40;
        var tile_selonY = 40;
        var anim_speed = 300;
        var anim_on = false;
        var width_max = 7*40;
        
        
        
        function run() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log("RUN");
            sprite_selonY = 0;
            ctx.drawImage(sprite, sprite_selonX, sprite_selonY, tile_selonX, tile_selonY, 0, 0, 512, 256);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            sprite_selonX += tile_selonX;
            console.log("tile_selonX",sprite_selonX,"(",sprite_selonY,")");
                if (sprite_selonX >= width_max) {
                    sprite_selonX = 0;
                    console.log(sprite_selonX);
                    
                    
                }

            if (anim_on) {
                setTimeout(run, anim_speed);
            }
        }

        sprite.onload = function() {
            run();
        }

        var run_Button = document.getElementById("run_clic");
        run_Button.addEventListener("click", function() {
            anim_on = !anim_on;
            console.log("tile_selonX",sprite_selonX,"(",sprite_selonY,")");
            if (anim_on) {
                run();
                
            }
        });