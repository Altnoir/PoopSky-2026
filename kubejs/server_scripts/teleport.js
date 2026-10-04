PlayerEvents.tick(event => {
	const player = event.player;
	// 每 20 tick 只处理一次，减少开销
	if (event.server.getTickCount() % 20 !== 0) return;
	let owKey = 'minecraft:overworld';
	let neKey = 'minecraft:the_nether';
	let slKey = 'minecraft:sky_lands';

	if (!player || player.isFake && player.isFake()) return;
	if (player.level.dimensionKey == owKey) {
		if (player.y < -68) {
			try {
				event.server.runCommandSilent(`effect give "${player.username}" minecraft:slow_falling 30`);
				player.teleportTo(neKey, player.x, 256, player.z, player.yaw || 0, player.pitch || 0);
			} catch (e) {
				player.tell('§c传送失败，请联系管理员！');
			}
		} else if (player.y > 380) {
			try {
				event.server.runCommandSilent(`effect give "${player.username}" minecraft:levitation 30`);
				player.teleportTo(slKey, player.x, -64, player.z, player.yaw || 0, player.pitch || 0);
			} catch (e) {
				player.tell('§c传送失败，请联系管理员！');
			}
		}
	} else if (player.level.dimensionKey == slKey) {
		if (player.y < -68) {
			try {
				event.server.runCommandSilent(`effect give "${player.username}" minecraft:slow_falling 30`);
				player.teleportTo(owKey, player.x, 320, player.z, player.yaw || 0, player.pitch || 0);
			} catch (e) {
				player.tell('§c传送失败，请联系管理员！');
			}
		}
	} else if (player.level.dimensionKey == neKey) {
		if (player.y > 320) {
			try {
				event.server.runCommandSilent(`effect give "${player.username}" minecraft:levitation 30`);
				player.teleportTo(owKey, player.x, -64, player.z, player.yaw || 0, player.pitch || 0);
			} catch (e) {
				player.tell('§c传送失败，请联系管理员！');
			}
		}
	}
});
