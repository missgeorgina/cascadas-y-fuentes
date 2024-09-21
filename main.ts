let time = 0
let mod = 0
let active = 0
player.onChat("time", function () {
    player.say(gameplay.timeQuery(GAME_TIME))
})
player.onChat("tower-2", function () {
    player.say(" torre 9*9 bloques")
    player.say("¡¡¡No construyas 10*10!!!")
    player.say("porque entonces las ranuras no estarán en el centro")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    world(4, -60, 4),
    world(-4, -56, -4),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(4, -56, 0),
    world(-4, -56, 0),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(0, -56, 4),
    world(0, -56, -4),
    FillOperation.Replace
    )
    blocks.place(WATER, world(0, -56, 0))
})
player.onChat(" cascada", function (num1) {
    player.say("elegir aleatoriamente con solo bloques no funciona bien")
    player.say(" encuentre los números de estos bloques en la tabla y haga lo siguiente")
    for (let index = 0; index <= num1; index++) {
        shapes.circle(
        randint(blocks.blockById(97), blocks.blockById(98)),
        pos(0, index, index),
        num1 - 2,
        Axis.Y,
        ShapeOperation.Outline
        )
    }
    blocks.fill(
    DIRT,
    pos(-4, num1, num1 + 10),
    pos(4, num1 - 2, num1 + 9),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-4, num1, num1 + 8),
    pos(4, num1, num1 + 7),
    FillOperation.Replace
    )
})
player.onChat("fountain-2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    world(7, -60, 7),
    world(-7, -58, -7),
    FillOperation.Replace
    )
    player.say(" en la sinopsis hay un error en el aire")
    blocks.fill(
    AIR,
    world(6, -58, 6),
    world(-6, -59, -6),
    FillOperation.Replace
    )
    blocks.place(WATER, world(0, -55, 0))
})
player.onChat("fountain", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    world(5, -60, 5),
    world(-5, -59, -5),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(4, -59, 4),
    world(-4, -59, -4),
    FillOperation.Replace
    )
    blocks.place(WATER, world(0, -56, 0))
})
loops.forever(function () {
	
})
loops.forever(function () {
	
})
loops.forever(function () {
    time = gameplay.timeQuery(GAME_TIME) / 100
    mod = time % 10
    if (mod % 2 == 0) {
        if (active == 1) {
            player.say(" aumenta la x y la z del aire para una mejor animación")
            blocks.fill(
            AIR,
            world(1, -60, 1),
            world(-1, -57, -1),
            FillOperation.Replace
            )
            active = 0
        }
    } else {
        blocks.fill(
        WATER,
        world(0, -60, 0),
        world(0, -57, 0),
        FillOperation.Replace
        )
        active = 1
    }
})
player.onChat("водоспад", function () {
    player.say(" versión simplificada para 10 bloques")
    for (let index = 0; index <= 10; index++) {
        shapes.circle(
        randint(blocks.blockById(97), blocks.blockById(98)),
        pos(0, index, index),
        8,
        Axis.Y,
        ShapeOperation.Outline
        )
    }
    blocks.fill(
    DIRT,
    pos(-4, 10, 20),
    pos(4, 8, 19),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-4, 10, 18),
    pos(4, 10, 17),
    FillOperation.Replace
    )
})
player.onChat("tower", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    world(3, -60, 3),
    world(-3, -52, -3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(3, -52, 0),
    world(-3, -52, 0),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(0, -52, 3),
    world(0, -52, -3),
    FillOperation.Replace
    )
    blocks.place(WATER, world(0, -52, 0))
})
player.onChat("fountain-3", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    world(3, -60, 3),
    world(-3, -57, -3),
    FillOperation.Replace
    )
    player.say(" en la sinopsis hay un error en el aire")
    blocks.fill(
    AIR,
    world(2, -58, 2),
    world(-2, -57, -2),
    FillOperation.Replace
    )
    blocks.place(WATER, world(0, -54, 0))
})
player.onChat("к", function () {
    shapes.circle(
    GLOWSTONE,
    world(0, -61, 0),
    8,
    Axis.Y,
    ShapeOperation.Replace
    )
    player.say(" luego elige un contorno de las figuras")
    shapes.circle(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(0, -60, 0),
    8,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.sphere(
    WATER,
    world(0, -54, 0),
    5,
    ShapeOperation.Outline
    )
})
player.onChat("bath", function () {
    player.say("en el resumen solo hay 2 baños, aquí hay 4 a la vez")
    player.say("explica según el diagrama")
    blocks.fill(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(1, -60, -5),
    world(-1, -60, -4),
    FillOperation.Replace
    )
    blocks.place(AIR, world(0, -60, -4))
    blocks.fill(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(4, -60, 1),
    world(5, -60, -1),
    FillOperation.Replace
    )
    blocks.place(AIR, world(4, -60, 0))
    blocks.fill(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(-4, -60, 1),
    world(-5, -60, -1),
    FillOperation.Replace
    )
    blocks.place(AIR, world(-4, -60, 0))
    blocks.fill(
    CHISELED_STONE_BRICK_MONSTER_EGG,
    world(1, -60, 4),
    world(-1, -60, 5),
    FillOperation.Replace
    )
    blocks.place(AIR, world(0, -60, 4))
})
player.onChat("c", function () {
    blocks.fill(
    GRASS,
    world(10, -61, 10),
    world(-10, -61, -10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(10, -60, 10),
    world(-10, -44, -10),
    FillOperation.Replace
    )
})
player.onChat(" fuente", function () {
    shapes.circle(
    CHISELED_SANDSTONE,
    world(0, -61, 0),
    12,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    CHISELED_SANDSTONE,
    world(0, -60, 0),
    10,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    CHISELED_SANDSTONE,
    world(0, -56, 0),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    CHISELED_SANDSTONE,
    world(0, -52, 0),
    3,
    Axis.Y,
    ShapeOperation.Replace
    )
    blocks.place(WATER, world(0, -47, 0))
})
