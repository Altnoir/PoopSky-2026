ServerEvents.recipes((event) => {
    event.custom({
        "type": "poopsky:anal_pressing",
        "input": {
            "item": 'minecraft:coal_block'
        },
        "output": 'mekanism:block_steel',
        "replace_target": 'minecraft:iron_block'
    })
    event.custom({
        "type": "poopsky:sieve",
        "input": {
            "item": 'ae2:sky_stone_block'
        },
        "outputs": [
            {
                "chance": 1.0,
                "item": {
                    "count": 1,
                    "id": 'kubejs:circuit_scrap'
                }
            },
            {
                "chance": 0.5,
                "item": {
                    "count": 1,
                    "id": 'ae2:sky_dust'
                }
            }
        ],
        "processingTime": 800
    })
});