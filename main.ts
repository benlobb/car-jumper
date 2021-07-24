namespace SpriteKind {
    export const Race_car = SpriteKind.create()
    export const Finish = SpriteKind.create()
    export const Boat = SpriteKind.create()
    export const Fish = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const Health_food = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile43`, function (sprite, location) {
    if (Nether_respawn == 10) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile28`)
        Car.vx = 87
        Car.image.flipX()
    } else {
    	
    }
})
sprites.onCreated(SpriteKind.Health_food, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 . . . 2 2 . . . . . . f . 
        . . 2 . . . . 2 2 . . . . f f . 
        . . 2 . . . . . 2 2 . . f f . . 
        . . 2 2 2 2 2 2 2 2 2 f f . . . 
        . . 2 f f 2 f 2 f 2 2 f . . . . 
        . . 2 f 2 2 f 2 f 2 2 . . . . . 
        . . 2 f f 2 f 2 f 2 2 . . . . . 
        . . 2 f 2 2 f f f 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 f f 2 f 2 2 2 2 . . . . . 
        . . 2 f 2 2 f 2 2 2 2 . . . . . 
        . . 2 f f 2 f 2 2 2 2 . . . . . 
        . . 2 f 2 2 f 2 2 2 2 . . . . . 
        . . 2 f f 2 f f f 2 2 . . . . . 
        `)
    tiles.placeOnTile(sprite, tiles.getTileLocation(randint(0, 72), 14))
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`tile1`, function (sprite, location) {
    if (Nether_respawn == 0) {
        game.over(false, effects.confetti)
    } else if (Nether_respawn == 10) {
        tiles.placeOnTile(Car, tiles.getTileLocation(0, 22))
        Car.setVelocity(87, 0)
    }
})
sprites.onOverlap(SpriteKind.Health_food, SpriteKind.Race_car, function (sprite, otherSprite) {
    sprite.destroy()
    Car.setImage(img`
        ........................
        ............22222222....
        ...........24222222c2...
        ..........2c4222222cc2..
        .........2cc4444442cc42d
        .........2c2eeeeeeebc422
        .........22ebbebbbeeb422
        .......2.2ebbbebbbbe2222
        ...222242ee222e22222e222
        .22244444eeeeeefeeefe2dd
        224445554eeeeeefeefeee2d
        24445588feeeeeefffeeeeee
        222445554effffeeeefffeee
        .222444542fffffeefffffe.
        ...222442..fff....ffff..
        .....2222...............
        `)
    info.startCountdown(10)
    for (let index = 0; index < 4; index++) {
        Car.vx += 10
        pause(290)
    }
    for (let index = 0; index < 4; index++) {
        Car.vx += -10
        pause(290)
    }
    Car.setImage(img`
        ........................
        ............22222222....
        ...........24222222c2...
        ..........2c4222222cc2..
        .........2cc4444442cc42d
        .........2c2eeeeeeebc422
        .........22ebbebbbeeb422
        .........2ebbbebbbbe2222
        .........ee222e22222e222
        .........eeeeeefeeefe2dd
        .........eeeeeefeefeee2d
        ........feeeeeefffeeeeee
        .........effffeeeefffeee
        .........2fffffeefffffe.
        ...........fff....ffff..
        ........................
        `)
})
sprites.onOverlap(SpriteKind.Race_car, SpriteKind.Fish, function (sprite, otherSprite) {
    game.over(false)
})
function SharkC () {
    Shark = sprites.create(img`
        ......................bbb.......................................
        ....................bbbbb.........................b.............
        ...................bbbbbb........................bb.............
        .................bbbbbbbb.......................bbb.............
        ..............bbbbbbbbbbbbbbbbbbb..............bbbb.............
        ............bbbbbbbbbbbbbbbbbbbbbbbbb.........bbbbb.............
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbb.............
        ....bb2bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ...bbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ..bbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ...bbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...bbbbb.............
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........bbbb.............
        ............bbbbbbbbbbbbbbbbbb..................bbb.............
        .................................................bb.............
        ................................................................
        `, SpriteKind.Fish)
    SharkV()
    tiles.placeOnTile(Shark, tiles.getTileLocation(212, 38))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Nether_respawn == 0) {
        game.over(false)
    } else if (Nether_respawn == 10) {
        tiles.placeOnTile(Car, tiles.getTileLocation(0, 22))
        Car.setVelocity(87, 0)
    }
})
function createnether () {
    tiles.setTilemap(tilemap`level6`)
    for (let index = 0; index < 21; index++) {
        fuel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 . . . 2 2 . . . . . . f . 
            . . 2 . . . . 2 2 . . . . f f . 
            . . 2 . . . . . 2 2 . . f f . . 
            . . 2 2 2 2 2 2 2 2 2 f f . . . 
            . . 2 f f 2 f 2 f 2 2 f . . . . 
            . . 2 f 2 2 f 2 f 2 2 . . . . . 
            . . 2 f f 2 f 2 f 2 2 . . . . . 
            . . 2 f 2 2 f f f 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f f f 2 2 . . . . . 
            `, SpriteKind.Health_food)
        tiles.placeOnTile(fuel, tiles.getTileLocation(randint(0, 31), randint(0, 31)))
    }
    scene.setBackgroundColor(2)
    tiles.placeOnTile(Car, tiles.getTileLocation(0, 22))
    Car.setVelocity(87, 0)
    Nether_respawn = 10
    info.changeScoreBy(1)
}
function Summon_shark () {
    SharkC()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Car.isHittingTile(CollisionDirection.Bottom)) {
        Car.vy = -266
    }
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile42`, function (sprite, location) {
    if (Nether_respawn == 10) {
        tiles.setTileAt(tiles.getTileLocation(31, 13), assets.tile`myTile28`)
        Car.vx = -87
        Car.image.flipX()
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile53`, function (sprite, location) {
    Car.vy = -150
    Car.vx = -87
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile33`, function (sprite, location) {
    Car.vy = -150
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile40`, function (sprite, location) {
    Car.vy = -150
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile36`, function (sprite, location) {
    Car.setVelocity(87, 0)
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile41`, function (sprite, location) {
    Car.vy = -300
    pause(500)
})
function SharkV () {
    Shark.image.flipX()
}
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile11`, function (sprite, location) {
    Car.vy = -150
    Car.vx = 87
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile55`, function (sprite, location) {
    if (nothing_meter == 0) {
        game.splash("Secret found!", "You gain: 5 seconds!")
        music.powerUp.play()
        info.startCountdown(15)
        tiles.setTileAt(location, assets.tile`myTile26`)
        secrets += 1
        nothing_meter = 1
    }
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile12`, function (sprite, location) {
    Car.vy = -250
})
function start () {
    info.startCountdown(10)
    tiles.setTilemap(tilemap`HacksOff`)
    for (let index = 0; index < 5; index++) {
        fuel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 . . . 2 2 . . . . . . f . 
            . . 2 . . . . 2 2 . . . . f f . 
            . . 2 . . . . . 2 2 . . f f . . 
            . . 2 2 2 2 2 2 2 2 2 f f . . . 
            . . 2 f f 2 f 2 f 2 2 f . . . . 
            . . 2 f 2 2 f 2 f 2 2 . . . . . 
            . . 2 f f 2 f 2 f 2 2 . . . . . 
            . . 2 f 2 2 f f f 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f f f 2 2 . . . . . 
            `, SpriteKind.Health_food)
        tiles.placeOnTile(fuel, tiles.getTileLocation(randint(0, 72), randint(9, 14)))
    }
    for (let index = 0; index < 5; index++) {
        fuel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 . . . 2 2 . . . . . . f . 
            . . 2 . . . . 2 2 . . . . f f . 
            . . 2 . . . . . 2 2 . . f f . . 
            . . 2 2 2 2 2 2 2 2 2 f f . . . 
            . . 2 f f 2 f 2 f 2 2 f . . . . 
            . . 2 f 2 2 f 2 f 2 2 . . . . . 
            . . 2 f f 2 f 2 f 2 2 . . . . . 
            . . 2 f 2 2 f f f 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f f f 2 2 . . . . . 
            `, SpriteKind.Health_food)
        tiles.placeOnTile(fuel, tiles.getTileLocation(randint(79, 115), randint(19, 22)))
    }
    for (let index = 0; index < 5; index++) {
        fuel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 . . . 2 2 . . . . . . f . 
            . . 2 . . . . 2 2 . . . . f f . 
            . . 2 . . . . . 2 2 . . f f . . 
            . . 2 2 2 2 2 2 2 2 2 f f . . . 
            . . 2 f f 2 f 2 f 2 2 f . . . . 
            . . 2 f 2 2 f 2 f 2 2 . . . . . 
            . . 2 f f 2 f 2 f 2 2 . . . . . 
            . . 2 f 2 2 f f f 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f f f 2 2 . . . . . 
            `, SpriteKind.Health_food)
        tiles.placeOnTile(fuel, tiles.getTileLocation(randint(144, 153), randint(9, 14)))
    }
    for (let index = 0; index < 25; index++) {
        fuel = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 . . . . . . . . . 
            . . 2 . . . 2 2 . . . . . . f . 
            . . 2 . . . . 2 2 . . . . f f . 
            . . 2 . . . . . 2 2 . . f f . . 
            . . 2 2 2 2 2 2 2 2 2 f f . . . 
            . . 2 f f 2 f 2 f 2 2 f . . . . 
            . . 2 f 2 2 f 2 f 2 2 . . . . . 
            . . 2 f f 2 f 2 f 2 2 . . . . . 
            . . 2 f 2 2 f f f 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f 2 2 2 2 . . . . . 
            . . 2 f 2 2 f 2 2 2 2 . . . . . 
            . . 2 f f 2 f f f 2 2 . . . . . 
            `, SpriteKind.Health_food)
        tiles.placeOnTile(fuel, tiles.getTileLocation(randint(154, 248), randint(15, 38)))
    }
    Car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Race_car)
    Car.ay = 500
    tiles.placeOnTile(Car, tiles.getTileLocation(0, 14))
    scene.cameraFollowSprite(Car)
    Car.setVelocity(87, 0)
    info.setScore(0)
    Summon_shark()
    Nether_respawn = 0
    scene.setBackgroundColor(6)
}
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile10`, function (sprite, location) {
    createnether()
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile6`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Race_car, assets.tile`myTile47`, function (sprite, location) {
    info.changeScoreBy(1)
    start()
})
let secretsorsecret = ""
let nothing_meter = 0
let fuel: Sprite = null
let Shark: Sprite = null
let Car: Sprite = null
let Nether_respawn = 0
start()
let secrets = 0
forever(function () {
    Car.say("" + secrets + " " + secretsorsecret + " " + "found.", 500)
})
forever(function () {
    if (secrets == 0) {
        secretsorsecret = "secrets"
    } else if (secrets == 1) {
        secretsorsecret = "secret"
    } else {
        secretsorsecret = "secrets"
    }
})
