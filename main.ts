sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Pokeball.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
let Pokeball: Sprite = null
scene.setBackgroundColor(9)
let Anibal = sprites.create(img`
    . . . . . . . . . f . . . . . . 
    . . f f f . . . f 5 f . f f f . 
    . . f 5 5 f . . f 5 5 f 5 f f . 
    . . . f 5 5 f f f f f 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 f 5 5 5 f 5 f . . . 
    . . . . f 5 5 5 f 5 5 5 f . . . 
    . . . f 5 2 5 f f f 5 2 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 f 5 5 5 f 5 5 f . . 
    . . . f 5 f f 5 5 5 f f 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 f f f 5 5 f . . . 
    . . . . . f f . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Pokeball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 2 2 f . . 
    . . . f 2 2 2 f f f 2 2 2 f . . 
    . . . f 2 2 f b b b f 2 2 f . . 
    . . . f f f b b f b b f f f . . 
    . . . f 1 1 f b b b f 1 1 f . . 
    . . . f 1 1 1 f f f 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(Anibal)
Anibal.setStayInScreen(true)
Pokeball.setStayInScreen(true)
Pokeball.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
