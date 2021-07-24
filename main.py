@namespace
class SpriteKind:
    Race_car = SpriteKind.create()
    Finish = SpriteKind.create()
    Boat = SpriteKind.create()
    Fish = SpriteKind.create()
    Wall = SpriteKind.create()
    Health_food = SpriteKind.create()

def on_overlap_tile(sprite, location):
    if Nether_respawn == 10:
        tiles.set_tile_at(tiles.get_tile_location(1, 7),
            assets.tile("""
                myTile28
            """))
        Car.vx = 87
        Car.image.flip_x()
    else:
        pass
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile43
    """),
    on_overlap_tile)

def on_on_created(sprite):
    sprite.set_image(img("""
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
    """))
    tiles.place_on_tile(sprite, tiles.get_tile_location(randint(0, 72), 14))
sprites.on_created(SpriteKind.Health_food, on_on_created)

def on_overlap_tile2(sprite, location):
    if Nether_respawn == 0:
        game.over(False, effects.confetti)
    elif Nether_respawn == 10:
        tiles.place_on_tile(Car, tiles.get_tile_location(0, 22))
        Car.set_velocity(87, 0)
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        tile1
    """),
    on_overlap_tile2)

def on_on_overlap(sprite, otherSprite):
    Car.set_image(img("""
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
    """))
    info.start_countdown(16)
sprites.on_overlap(SpriteKind.Health_food, SpriteKind.Race_car, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    game.over(False)
sprites.on_overlap(SpriteKind.Race_car, SpriteKind.Fish, on_on_overlap2)

def SharkC():
    global Shark
    Shark = sprites.create(img("""
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
        """),
        SpriteKind.Fish)
    SharkV()
    tiles.place_on_tile(Shark, tiles.get_tile_location(212, 38))

def on_b_pressed():
    if Nether_respawn == 0:
        game.over(False)
    elif Nether_respawn == 10:
        tiles.place_on_tile(Car, tiles.get_tile_location(0, 22))
        Car.set_velocity(87, 0)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def Summon_shark():
    SharkC()

def on_a_pressed():
    Car.vy = -266
    if Car.is_hitting_tile(CollisionDirection.BOTTOM):
        Car.vy = -266
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile3(sprite, location):
    if Nether_respawn == 10:
        tiles.set_tile_at(tiles.get_tile_location(31, 13),
            assets.tile("""
                myTile28
            """))
        Car.vx = -87
        Car.image.flip_x()
    else:
        pass
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile42
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    Car.vy = -150
    Car.vx = -87
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile53
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite, location):
    Car.vy = -150
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile33
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite, location):
    Car.vy = -150
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile40
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite, location):
    Car.set_velocity(87, 0)
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile36
    """),
    on_overlap_tile7)

def on_overlap_tile8(sprite, location):
    Car.vy = -300
    pause(500)
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile41
    """),
    on_overlap_tile8)

def SharkV():
    Shark.image.flip_x()

def on_overlap_tile9(sprite, location):
    Car.vy = -150
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile11
    """),
    on_overlap_tile9)

def on_overlap_tile10(sprite, location):
    Car.vy = -250
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile12
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite, location):
    global Nether_respawn
    tiles.set_tilemap(tilemap("""
        level6
    """))
    scene.set_background_color(2)
    tiles.place_on_tile(Car, tiles.get_tile_location(0, 22))
    Car.set_velocity(87, 0)
    Nether_respawn = 10
    info.change_score_by(1)
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile10
    """),
    on_overlap_tile11)

def on_overlap_tile12(sprite, location):
    global Nether_respawn
    info.change_score_by(1)
    scene.set_background_color(6)
    tiles.set_tilemap(tilemap("""
        HacksOff
    """))
    tiles.place_on_tile(Car, tiles.get_tile_location(0, 14))
    Car.ay = 500
    Car.set_velocity(87, 0)
    Nether_respawn = 0
scene.on_overlap_tile(SpriteKind.Race_car,
    assets.tile("""
        myTile47
    """),
    on_overlap_tile12)

Shark: Sprite = None
Nether_respawn = 0
Car: Sprite = None
fuel: Sprite = None
info.start_countdown(16)
tiles.set_tilemap(tilemap("""
    HacksOff
"""))
index = 0
while index < 0:
    fuel = sprites.create(img("""
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
        """),
        SpriteKind.Health_food)
    tiles.place_on_tile(fuel, tiles.get_tile_location(1, 14))
    index += 1
Car.ay = 500
Car = sprites.create(img("""
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
    """),
    SpriteKind.Race_car)
tiles.place_on_tile(Car, tiles.get_tile_location(0, 14))
scene.camera_follow_sprite(Car)
Car.set_velocity(87, 0)
info.set_score(0)
Summon_shark()
Nether_respawn = 0
scene.set_background_color(6)