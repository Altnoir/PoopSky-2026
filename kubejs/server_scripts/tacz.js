// ================= A) 配方修改 (ServerEvents.recipes) =================
ServerEvents.recipes((event) => {
    // 删除 AA12 配方(枪械工作台内无法再合成 AA12)
    event.remove({ id: "tacz:gun/aa12" });

    // 覆盖 沙漠之鹰 配方(演示: 换成 1 个苹果)
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [{ item: { item: "minecraft:apple" }, count: 1 }],
        result: { type: "gun", id: "tacz:deagle" },
    }).id("tacz:gun/deagle");

    // 覆盖 9mm 弹药配方
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            { item: { tag: "c:ingots/copper" }, count: 10 },
            { item: { tag: "c:gunpowders" }, count: 1 },
        ],
        result: { type: "ammo", group: "pd_cartridges", id: "tacz:9mm", count: 50 },
    }).id("tacz:ammo/9mm");

    // materials.item 两种写法:
    //   { item: { item: "minecraft:apple" }, count: 1 }   按物品
    //   { item: { tag: "c:ingots/iron" },    count: 42 }  按标签
});

// ================= B) 数据修改 (TaCZServerEvents) =================
// 这里改「数据」文件(如 data/tacz/data/guns/<枪名>_data.json), 不是配方。
// 事件 id 形如: tacz:p90_data、tacz:deagle_golden_data
// 用 event.getStdJson() 读、event.setJson(JSON.stringify(json)) 写回。

// 枪械数据加载
TaCZServerEvents.gunDataLoad((event) => {
    const id = event.getId().toString();

    // 把 P90 的弹匣容量改为 123
    if (id === "tacz:p90_data") {
        const json = JSON.parse(event.getStdJson());
        json.ammo_amount = 123;
        return event.setJson(JSON.stringify(json));
    }

    // 把 黄金沙漠之鹰 的伤害改为 999
    if (id === "tacz:deagle_golden_data") {
        const json = JSON.parse(event.getStdJson());
        json.bullet.extra_damage.damage_adjust = [
            { distance: 18, damage: 999 },
            { distance: 36, damage: 999 },
            { distance: 55, damage: 999 },
            { distance: "infinite", damage: 999 },
        ];
        return event.setJson(JSON.stringify(json));
    }
});

// 配件数据加载(优先级比启动端同名单事件更高)
TaCZServerEvents.attachmentDataLoad((event) => {
    const id = event.getId().toString();
    // 把 克苏鲁 K7 制退器 的后坐力改成 10 倍
    if (id === "tacz:muzzle_brake_cthulhu_data") {
        const json = JSON.parse(event.getStdJson());
        json.recoil.pitch = { multiplier: 10 };
        return event.setJson(JSON.stringify(json));
    }
});