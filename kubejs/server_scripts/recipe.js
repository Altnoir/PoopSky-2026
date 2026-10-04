ServerEvents.recipes(event => {
    let recipes = event.recipes;

    event.shapeless('2x mekanism:dust_steel', ['mekanism:dust_iron', 'ae2:sky_dust']);

    event.remove({ output: 'waystones:warp_stone' });
    event.shapeless('waystones:warp_stone', ['poopsky:toilet_plug_wand', 'minecraft:amethyst_shard']).keepIngredient('poopsky:toilet_plug_wand');

    event.remove({ id: 'industrialforegoing:plastic' });
    recipes.minecraft.smelting('kubejs:plastic', 'industrialforegoing:dryrubber').xp(0.3);
    event.shapeless('industrialforegoing:pink_slime_block', ['poopsky:poolime_block', 'minecraft:pink_dye']);
    event.remove({ id: 'industrialforegoing:iron_gear' })
    recipes.kubejs.shaped(Item.of('industrialforegoing:iron_gear'), [
        ' R ',
        'RPR',
        ' R '
    ], {
        P: 'poopsky:roundworm',
        R: 'minecraft:iron_ingot'
    }
    ).id('industrialforegoing:iron_gear')
    event.remove({ id: 'industrialforegoing:gold_gear' })
    recipes.kubejs.shaped(Item.of('industrialforegoing:gold_gear'), [
        ' R ',
        'RPR',
        ' R '
    ], {
        P: 'poopsky:roundworm',
        R: 'minecraft:gold_ingot'
    }
    ).id('industrialforegoing:gold_gear')
    event.remove({ id: 'industrialforegoing:diamond_gear' })
    recipes.kubejs.shaped(Item.of('industrialforegoing:diamond_gear'), [
        ' R ',
        'RPR',
        ' R '
    ], {
        P: 'poopsky:roundworm',
        R: 'minecraft:diamond'
    }
    ).id('industrialforegoing:diamond_gear')

    event.shapeless('8x kubejs:transistor', ['#c:plastics', 'kubejs:pressure_mechanism', 'poopsky:king_of_dragon_fruit']);
    event.shapeless('8x kubejs:capacitor', ['#c:plastics', 'kubejs:pressure_mechanism', 'poopsky:dragon_breath_chili']);
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": 'poopsky:poop_block'
        },
        "output": {
            "amount": 8,
            "id": "industrialforegoing:latex"
        },
        "result": {
            "Name": 'poopsky:dried_poop_block'
        }
    })
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": 'poopsky:chili_poop_block'
        },
        "output": {
            "amount": 8,
            "id": "industrialforegoing:latex"
        },
        "result": {
            "Name": 'poopsky:dried_chili_poop_block'
        }
    })
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": 'poopsky:golden_poop_block'
        },
        "output": {
            "amount": 8,
            "id": "industrialforegoing:latex"
        },
        "result": {
            "Name": 'poopsky:dried_golden_poop_block'
        }
    })

    event.custom({
        "type": "gateways:gate_recipe",
        "group": "gateways",
        "pattern": [
            "BBB",
            "BBB",
            "BBB"
        ],
        "key": {
            "B": {
                "item": "poopsky:seedbed_curse"
            }
        },
        "result": {
            "id": "gateways:gate_pearl"
        },
        "gateway": "gateways:basic/zombie"
    })

    event.remove({ id: 'hostilenetworks:prediction_matrix' })
    recipes.kubejs.shaped(
        Item.of('hostilenetworks:prediction_matrix'), [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#c:nuggets/iron'
    }
    ).id('hostilenetworks:prediction_matrix')

    event.remove({ id: 'hostilenetworks:framework' })
    recipes.kubejs.shaped(Item.of('hostilenetworks:blank_data_model'), [
        'ARA',
        'RSR',
        'ARA'
    ], {
        A: 'minecraft:clay_ball',
        S: 'minecraft:smooth_stone',
        R: 'minecraft:redstone'
    }
    ).id('hostilenetworks:framework')

    event.remove({ id: 'industrialforegoing:meat_feeder' })
    recipes.kubejs.shaped(Item.of('industrialforegoing:meat_feeder'), [
        'PIP',
        'BIB',
        ' I '
    ], {
        P: '#c:plastics',
        I: 'minecraft:iron_ingot',
        B: 'minecraft:glass_bottle'
    }
    ).id('industrialforegoing:meat_feeder')

    event.remove({ id: 'torchmaster:megatorch' })
    recipes.kubejs.shaped(
        Item.of('torchmaster:megatorch'), [
        'A',
        'B'
    ], {
        A: 'poopsky:raw_poop_block',
        B: 'minecraft:coal_block'
    }
    ).id('torchmaster:megatorch')


    event.remove({ id: 'projecte:transmutation_table' })
    recipes.kubejs.shaped(Item.of('projecte:transmutation_table'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ae2:controller',
        B: 'projecte:philosophers_stone'
    }
    ).id('projecte:transmutation_table')
})