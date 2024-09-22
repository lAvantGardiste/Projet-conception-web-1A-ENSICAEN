var canvas = document.getElementById("canvaimage2");
var ctx = canvas.getContext("2d");

var sprite = new Image();
sprite.src = "./images/sheeppoe.png";

var sprite_selonX = 0;
var sprite_selonY = 0;
var size_tileX = 40;
var size_tileY = 40;
var anim_speed = 700;
var anim_on = false;
var width_max = 7 * 40;

var anim_step = 0;

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(sprite, sprite_selonX, sprite_selonY, size_tileX, size_tileY, 0, 0, 512, 256);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    switch (anim_step) {
        case 0:
            sprite_selonX += size_tileX;
            if (sprite_selonX >= width_max) {
                anim_step = 1;
                sprite_selonY = 4 * 40;
                sprite_selonX = 0;
            }
            break;
        case 1:
            sprite_selonX += size_tileX;
            if (sprite_selonX >= width_max) {
                anim_step = 2;
                sprite_selonY = 0;
                sprite_selonX = 0;
            }
            break;
        case 2:
            sprite_selonX += size_tileX;
            if (sprite_selonX >= width_max) {
                anim_step = 3;
                width_max = 7 * 40;
                sprite_selonY = 2*40;
                sprite_selonX = 5*40;
            }
            break;
        case 3:
            sprite_selonX += size_tileX;
            if (sprite_selonX > width_max) {
                anim_step = 0;
                sprite_selonX = 0;
                sprite_selonY = 0;
            }
            break;
          
        
    }

    if (anim_on) {
        setTimeout(animation, anim_speed);
    }
}

sprite.onload = function () {
    animation();
};

var startStopButton = document.getElementById("stop_clic");
startStopButton.addEventListener("click", function () {
    anim_on = !anim_on;
    console.log("size_tileX", sprite_selonX, "(", sprite_selonY, ")");
    if (anim_on) {
        animation();
    }
});





/*var canvas = document.getElementById("canvaimage2");
        var ctx = canvas.getContext("2d");

        var sprite = new Image();
        sprite.src = "./images/sheeppoe.png";

        var sprite_selonX = 0;
        var sprite_selonY = 0;
        var size_tileX = 40;
        var size_tileY = 40;
        var anim_speed = 700;
        var anim_on = false;
        var width_max = 7*40;

        
        
       
        function run() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.drawImage(sprite, sprite_selonX, sprite_selonY, size_tileX, size_tileY, 0, 0, 512, 256);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            sprite_selonX += size_tileX;
            console.log(width_max,"(",sprite_selonX,")");
                if (sprite_selonX >= width_max) {
                    
                    sprite_selonX = 0;
                    sprite_selonY = 4*40;
                    rouler();
                    
                }

            if (anim_on) {
                setTimeout(run, anim_speed);
                
            }
        }

        

        //////////////////////////////////////////////////////////////////////////////////


        function rouler() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.drawImage(sprite, sprite_selonX, sprite_selonY, size_tileX, size_tileY, 0, 0, 512, 256);
            console.log("passé à ROULER");
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            //sprite_selonY = 4*40;
            //sprite_selonX = 0;
            sprite_selonX += size_tileX;
            console.log("size_tileX",sprite_selonX,"(",sprite_selonY,")");
                if (sprite_selonX >= width_max) {
                    sprite_selonY= 2*40;
                    sprite_selonX = 5*40;
                    width_max = 9*40;
                    console.log("******",sprite_selonX);
                    bailler();
                    
                    
                    
                    
                }

            if (anim_on) {
                setTimeout(rouler, anim_speed);
            }
        }

       

        ///////////////////////////////////////////////////////////////////////
        
        
        function bailler() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log("passé à BAILLER");
            //width_max = 9*40;
            ctx.drawImage(sprite, sprite_selonX, sprite_selonY, size_tileX, size_tileY, 0, 0, 512, 256);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            //sprite_selonY = 3*40
            //sprite_selonX = 5*40;
            sprite_selonX += size_tileX;
            
            console.log("size_tileX",sprite_selonX,"(",sprite_selonY,")");
                if (sprite_selonX >= width_max) {
                    sprite_selonX = 0;
                    sprite_selonY = 0;
                    width_max = 7*40;
                    console.log(sprite_selonX);
                    run();
                    
                    
                }

            if (anim_on) {
                setTimeout(bailler, anim_speed);
            }
        }

        sprite.onload = function() {
            sprite_selonX = 0;
            sprite_selonY = 0;
            width_max = 7*40;
            run();
            anim_speed = 700;
            sprite_selonX = 0;
            sprite_selonY = 0;
            width_max = 7*40;
            //rouler();
            // bailler();
        }

        ///////////////////////////////////////////////////////////////////////////////

        var startStopButton = document.getElementById("stop_clic");
        startStopButton.addEventListener("click", function() {
            anim_on = !anim_on;
            console.log("size_tileX",sprite_selonX,"(",sprite_selonY,")");
            if (anim_on) {
                run();
            }
        });


*/ 