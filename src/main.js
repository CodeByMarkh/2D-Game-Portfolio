import { k } from "./kaboomCtx";

k.loadSprite("spritesheet", "./spritesheet.png",{
    sliceX: 39,
    sliceY: 31,
    anims:{
        "idle-down":936,
        "walk-down":{from:936, to:939,loop:true, speed:8},
        "idle-side":975,
        "walk-side":{from: 975, to:978, loop:true, speed:8},
        "idle-up":1014,
        "walk-up": {from: 1014, to:1017, loop: true, speed:8},
    },
});

k.loadSprite("map", "./map.png");

k.setBackground(k.color.fromHex("#25637"));

k.scene("main", async() => {
    const mapData = await (await fetch("./map.json")).json()
    const layers = mapData.layers;

    const map = k.make([
        k.sprite("map"),
        k.position(0),
        k.scale
    ]);
});

k.go("main");