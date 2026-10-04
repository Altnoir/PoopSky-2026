// let PLATFORM_Y = 127;
// let PLAYER_Y = PLATFORM_Y + 1;
// let PLAYER_INIT_KEY = 'linit';

// const buildBedrockPlatform = (level) => {
//     level.setBlock(new BlockPos(0, PLATFORM_Y, 0), "poopsky:wooden_toilet", 3);
//     level.setBlock(new BlockPos(0, PLAYER_Y, 0), Blocks.AIR.defaultBlockState(), 3);
//     level.setBlock(new BlockPos(0, PLAYER_Y + 1, 0), Blocks.AIR.defaultBlockState(), 3);
// }

// const ensureWorldPlatform = (server) => {
//     let level = server.getLevel('minecraft:overworld');

//     buildBedrockPlatform(level);
//     level.setDefaultSpawnPos(new BlockPos(0.5, PLAYER_Y, 0.5), 0);

//     return level;
// }

// PlayerEvents.loggedIn(event => {
//     let player = event.player;
//     if (!player || player.isFake && player.isFake()) return;

//     if (player.stages.has(PLAYER_INIT_KEY)) return;

//     let level = ensureWorldPlatform(event.server);
//     if (!level) return;

//     player.stages.add(PLAYER_INIT_KEY);
//     player.teleportTo('minecraft:overworld', 0.5, PLAYER_Y, 0.5, 0, 0);

//     player.tell('Wellcome! ');
// });

// PlayerEvents.tick(event => {
//     let player = event.player;
//     if (!player || player.isFake && player.isFake()) return;

//     if (player.level.dimensionKey != 'minecraft:overworld') return;
// })


