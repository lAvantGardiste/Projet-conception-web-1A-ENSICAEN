// les fonctions du tableau sont en bas de la page


// js pour l'animation du chat

var canvas = document.getElementById("canvaimage2");
    var ctx = canvas.getContext("2d");

    var mon_img = new Image();
    mon_img.src = "./images/chat.png";

    var mon_img_selonX = 0;
    var mon_img_selonY = 0;
    var size_tileX = 512;
    var size_tileY = 256;
    var speed_animation = 100;
    var animation_is_on = false;



    function run() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(mon_img, mon_img_selonX, mon_img_selonY, size_tileX, size_tileY, 0, 0, 512, 256);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        mon_img_selonX += size_tileX;

        if (mon_img_selonX >= mon_img.width) {
            mon_img_selonX = 0;
            mon_img_selonY += size_tileY;
            if (mon_img_selonY >= mon_img.height) {
                mon_img_selonY = 0;
            }
        }

        if (animation_is_on) {
            setTimeout(run, speed_animation);
        }
    }

    mon_img.onload = function() {
        run();
    }

    var startStopButton = document.getElementById("stop_clic");
    startStopButton.addEventListener("click", function() {
        animation_is_on = !animation_is_on;
        console.log("size_tileX",mon_img_selonX,"(",mon_img_selonY,")");
        if (animation_is_on) {
            run();

        }
    });





// ===================================================================================
// canvasImage : image sur un canvas
// nameImg : URL de l'image
// (posX,posY) : position du coin supérieur gauche de l'image dans le canvas
// ctx : contexte graphique
function canvasImage(imgURL,posX,posY,ctx)
{
	this.image = new Image();
    this.image.src = imgURL;
    this.image.alt = "image";
    this.image.ctx = ctx;
   
    this.image.posX = posX;
    this.image.posY = posY;
    return this.image;
}
// -----------------------------------------------------------------------------------
// Dessine l'image sur le canvas
// imge: graphics source
// (posX,posY) : position du coin supérieur gauche de l'image dans le canvas
function drawCanvasImage(image,posX,posY)
{
    let canva = document.getElementbyID("canva")
    var contexte = image.ctx;
    function imageLoaded(evt) {
		contxt.drawImage(image,image.posX,image.posY)
   }
}
// ===================================================================================
// Constructeur for an animation object
// image: graphics source
// (x, y): position to draw the animation
// width, height: size of each tile
// nbXTiles : nombre de tiles horizontalement
// nbYTiles : nombre de tiles verticallement
// loop : animation en boucle (true) ou non (false)
function CanvasSprite(spriteImgURL, x, y, widthTile, heightTile, nbXTiles, nbYTiles,ctx)
{
    this.spriteImage=new Image(); 
    this.spriteImage.src=spriteImgURL;
    this.spriteImage.alt="sprite image";

    this.x=x;
    this.y=y;
    this.tile_width=widthTile;   
    this.heightTile=heightTile;
    this.nbXTiles=nbXTiles;
    this.nbYTiles=nbYTiles;
    this.ctx=ctx;
    this.loop = false;


    


}
// -----------------------------------------------------------------------------------
// Ajout d'une animation spécifique
// nameAnim : nom de l'animation
// tiles : tableau d'indices de tile
CanvasSprite.prototype.addAnimation = function(nameAnim, tiles)
{
    this.animation[nameAnim] = tiles;    
}
// -----------------------------------------------------------------------------------
// Sélectionne une animation spécifique nameAnim
CanvasSprite.prototype.selectAnimation = function(nameAnim,loop)
{
    if(this.animation.hasOwnProperty(nameAnim)){
        this.current_animation = nameAnim;
        this.tile_courante = 0;
        this.loop = loop;
    }else{
        console.log("erreur");
    }
    
}
// -----------------------------------------------------------------------------------
// Sélectionne la tile suivante et la dessine, si la tile existe (mode sans boucle)
// retourne false si la tile courrante est la dernière (mode sans boucle), true sinon
CanvasSprite.prototype.nextTile = function()
{
    if (this.current_anim && this.animations[this.current_anim] ) {
        let anim_tiles=this.animations[this.current_anim];
        this.tile_courante=(this.tile_courante+1)%anim_tiles.length;
        if (!this.loop && this.tile_courante==anim_tiles.length) {
            return false;
        }
        return true;
        }
    return false;
}
// -----------------------------------------------------------------------------------
// Retourne la position de la tile dans le sprite selon x
CanvasSprite.prototype.tileX = function(index_tile)
{
    
	return (index_tile%this.nbXTiles)*this.tile_width;

}
// -----------------------------------------------------------------------------------
// Retourne la position de la tile dans le sprite selon y
CanvasSprite.prototype.tileY = function(index_tile)
{
	return Math.floor(index_tile/this.nbXTiles)*this.heightTile;

}
// -----------------------------------------------------------------------------------
// Dessine une tile
CanvasSprite.prototype.drawTile = function(index_tile)
{
    let tileX=this.tileX(index_tile);
    let tileY=this.tileY(index_tile);
    var context = image.contxt;
    
    monImage.addEventListener('load',imageLoaded,false)
    function imageLoaded(evt) {
        context.clearRect(0,0,512,256);
		context.drawImage(monImage,tileX,tileY,this.tile_width,this.heightTile,0,0,512,256);
   }

};
// ----------------------------------------------------------------------------------
// Dessine une tile
CanvasSprite.prototype.simpleAnim = function(tps)
{
    if (this.loop) {
        let sprite = this;
        this.animationInterval = setInterval(function () {
            sprite.drawTile(sprite.currentTile);
            if (!sprite.nextTile()) {
                // Arrêtez l'animation si la dernière tuile est atteinte (mode sans boucle)
                clearInterval(sprite.animationInterval);
                this.simpleAnim(tps);
            }
        }, tps);
    }
};

// ----------------------------------------------------------------------------------
CanvasSprite.prototype.stopAnim = function()
{
    clearInterval(this.animationInterval);
};



// ----------------------------------------------------------------------------------



    