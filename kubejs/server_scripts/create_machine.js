ServerEvents.recipes((event) => {
  let create = event.recipes.create;
  let addAndesiteMechanism = (target) => {
    event.stonecutting(target, "kubejs:andesite_machine");
  };

  [
    "create:andesite_alloy",
    "create:gearbox",
    "create:vertical_gearbox",
    "create:cogwheel",
    "create:large_cogwheel",
    "create:clutch",
    "create:gearshift",
    "create:encased_chain_drive",
    "create:adjustable_chain_gearshift",
    "create:chain_conveyor",
    "create:water_wheel",
    "create:large_water_wheel",
    "create:encased_fan",
    "create:millstone",
    "create:crushing_wheel",
    "create:mechanical_press",
    "create:mechanical_mixer",
    "create:basin",
    "create:depot",
    "create:weighted_ejector",
    "create:chute",
    "create:metal_bracket",
    "create:mechanical_drill",
    "create:mechanical_saw",
    "create:portable_storage_interface",
    "create:redstone_contact",
    "create:mechanical_harvester",
    "create:mechanical_plough",
    "create:mechanical_roller",
    "create:andesite_funnel",
    "create:andesite_tunnel",
    "create:item_hatch",
    "create:packager",
    "create:repackager",
    "create:package_frogport",
    "create:stock_link",
    "create:stock_ticker",
    "create:display_board",
  ].map(addAndesiteMechanism);

  let addBrassMechanism = (target) => {
    event.stonecutting(target, "kubejs:brass_machine");
  };

  [
    "create:brass_funnel",
    "create:brass_tunnel",
    "create:smart_chute",
    "create:mechanical_arm",
    "create:content_observer",
    "create:mechanical_crafter",
    "create:deployer",
    "create:sequenced_gearshift",
    "create:stockpile_switch",
  ].map(addBrassMechanism);

  let addCopperMechanism = (target) => {
    event.stonecutting(target, "kubejs:copper_machine");
  };
  [
    'create:fluid_pipe',
    'create:mechanical_pump',
    'create:fluid_valve',
    'create:copper_valve_handle',
    'create:fluid_tank',
    'create:hose_pulley',
    'create:item_drain',
    'create:spout',
    'create:steam_whistle',
    'create:portable_fluid_interface'
  ].map(addCopperMechanism);

  let addRedstoneMechanism = (target) => {
    event.stonecutting(target, "kubejs:redstone_machine");
  };
  [
    'minecraft:redstone_torch',
    'minecraft:repeater',
    'minecraft:comparator',
    'create:pulse_repeater',
    'create:pulse_extender',
    'create:pulse_timer',
    'create:powered_latch',
    'create:powered_toggle_latch',
    'minecraft:target',
    'minecraft:dropper',
    'minecraft:dispenser',
    'minecraft:observer',
    'minecraft:piston',
    'minecraft:note_block'
  ].map(addRedstoneMechanism);

  let addIndustrialMechanism = (target) => {
    event.stonecutting(target, 'industrialforegoing:machine_frame_pity');
  };
  [
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:pitiful_generator',
    '2x industrialforegoing:item_transporter_type',
    '2x industrialforegoing:fluid_transporter_type',
    '2x industrialforegoing:world_transporter_type'
  ].map(addIndustrialMechanism);
  let addIndustrialMechanism2 = (target) => {
    event.stonecutting(target, 'industrialforegoing:machine_frame_simple');
  };
  [
    'industrialforegoing:plant_fertilizer',
    'industrialforegoing:hydroponic_bed',
    'industrialforegoing:marine_fisher',
    'industrialforegoing:laser_drill',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:mycelial_furnace',
    'industrialforegoing:mycelial_culinary',
    'industrialforegoing:mycelial_frosty',
    'industrialforegoing:mycelial_pink',
    'industrialforegoing:mob_detector'
  ].map(addIndustrialMechanism2);
  let addIndustrialMechanism3 = (target) => {
    event.stonecutting(target, 'industrialforegoing:machine_frame_advanced');
  };
  [
    'industrialforegoing:mob_crusher',
    'industrialforegoing:mob_duplicator',
    'industrialforegoing:material_stonework_factory',
    'industrialforegoing:potion_brewer',
    'industrialforegoing:ore_laser_base',
    'industrialforegoing:fluid_laser_base',
    'industrialforegoing:washing_factory',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:mycelial_slimey',
    'industrialforegoing:mycelial_potion',
    'industrialforegoing:mycelial_disenchantment',
    'industrialforegoing:mycelial_ender',
    'industrialforegoing:mycelial_explosive',
    'industrialforegoing:mycelial_magma',
    'industrialforegoing:mycelial_death',
    'industrialforegoing:mycelial_rocket',
    'industrialforegoing:mycelial_crimed',
    'industrialforegoing:stasis_chamber',
    'industrialforegoing:enchantment_sorter',
    'industrialforegoing:enchantment_applicator',
    'industrialforegoing:enchantment_extractor',
    'industrialforegoing:enchantment_factory',
    'industrialforegoing:infinity_charger'
  ].map(addIndustrialMechanism3);
  let addIndustrialMechanism4 = (target) => {
    event.stonecutting(target, 'industrialforegoing:machine_frame_supreme');
  };
  [
    'industrialforegoing:wither_builder',
    'industrialforegoing:mycelial_halitosis',
    'industrialforegoing:mycelial_netherstar',
    'industrialforegoing:mycelial_meatallurgic'
  ].map(addIndustrialMechanism4);
  event.remove({ id: 'industrialforegoing:simulated_hydroponic_bed' });
  event.shapeless('industrialforegoing:simulated_hydroponic_bed',
    ['industrialforegoing:hydroponic_bed', 'industrialforegoing:hydroponic_simulation_processor']).id('industrialforegoing:simulated_hydroponic_bed');

  let addComputerMechanism = (target) => {
    event.stonecutting(target, 'ae2:controller');
  };
  [
    '4x ae2:inscriber',
    '8x ae2:charger',
    'ae2:wireless_access_point',
    'ae2:spatial_pylon',
    'ae2:spatial_io_port',
    'ae2:io_port',
    'ae2:drive',
    'ae2:chest',
    'ae2:cell_workbench',
    'ae2:energy_cell',
    'ae2:condenser',
    'ae2:energy_acceptor',
    'ae2:crystal_resonance_generator',
    'ae2:vibration_chamber',
    'ae2:growth_accelerator',
    'ae2:interface',
    'ae2:crafting_unit',
    'ae2:pattern_provider',
    '12x ae2:semi_dark_monitor',
    '4x ae2:terminal',
    'ae2:molecular_assembler',
    'ae2:spatial_anchor',
    '64x ae2:brown_smart_cable',
    '16x ae2:brown_smart_dense_cable'
  ].map(addComputerMechanism);

  event.stonecutting('ae2:silicon_press', 'kubejs:circuit_scrap');
  event.stonecutting('ae2:calculation_processor_press', 'kubejs:circuit_scrap');
  event.stonecutting('ae2:engineering_processor_press', 'kubejs:circuit_scrap');
  event.stonecutting('ae2:logic_processor_press', 'kubejs:circuit_scrap');

  let input = 'kubejs:incomplete_andesite_mechanism';
  create.sequenced_assembly('kubejs:andesite_mechanism', '#minecraft:wooden_slabs', [
    create.deploying(input, [input, 'create:andesite_alloy']),
    create.cutting(input, input),
    create.pressing(input, input)
  ]).transitionalItem(input).loops(1).id('kubejs:sequenced_assembly_andesite_mechanism')

  let input2 = 'kubejs:incomplete_copper_mechanism';
  create.sequenced_assembly('kubejs:copper_mechanism', '#c:plates/copper', [
    create.deploying(input2, [input2, 'create:zinc_ingot']),
    create.cutting(input2, input2),
    create.pressing(input2, input2)
  ]).transitionalItem(input2).loops(1).id('kubejs:sequenced_assembly_copper_mechanism')

  let input3 = 'kubejs:incomplete_pressure_mechanism';
  create.sequenced_assembly('kubejs:pressure_mechanism', '#c:plates/obsidian', [
    create.deploying(input3, [input3, 'mekanism:ingot_steel']),
    create.cutting(input3, input3),
    create.pressing(input3, input3)
  ]).transitionalItem(input3).loops(1).id('kubejs:sequenced_assembly_pressure_mechanism')

  let input4 = 'kubejs:incomplete_computer_mechanism';
  create.sequenced_assembly('kubejs:computer_mechanism', 'ae2:printed_silicon', [
    create.deploying(input4, [input4, 'kubejs:printed_circuit_board']),
    create.cutting(input4, input4),
    create.pressing(input4, input4)
  ]).transitionalItem(input4).loops(1).id('kubejs:sequenced_assembly_computer_mechanism')

  event.shaped("kubejs:redstone_machine", ["ABA"], {
    A: "minecraft:redstone_torch",
    B: "create:display_board",
  });

  event.shaped('8x kubejs:andesite_machine', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: 'kubejs:andesite_mechanism',
    B: '#minecraft:logs'
  });
  event.remove({ id: 'industrialforegoing:machine_frame_pity' });
  event.shaped('8x industrialforegoing:machine_frame_pity', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: 'kubejs:andesite_mechanism',
    B: '#c:cobblestones'
  });
  event.shaped('8x kubejs:copper_machine', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: 'kubejs:copper_mechanism',
    B: '#minecraft:logs'
  });
  event.shaped('8x kubejs:brass_machine', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: 'create:precision_mechanism',
    B: '#minecraft:logs'
  });
  event.remove({ id: 'ae2:network/blocks/controller' });
  event.shaped('8x ae2:controller', [
    "AAA",
    "ABA",
    "AAA"
  ], {
    A: 'kubejs:computer_mechanism',
    B: 'ae2:smooth_sky_stone_block'
  });
  create.mixing(Fluid.of('industrialforegoing:pink_slime', 250),
    [Fluid.of('poopsky:urine', 250), 'minecraft:pink_dye']).heated().id('poopsky:pink_slime_mixing');

  create.compacting('2x industrialforegoing:dryrubber',
    [Fluid.of('poopsky:urine', 250), 'minecraft:white_dye']).id('poopsky:dryrubber_compacting');

  create.milling('mekanism:dust_iron', 'minecraft:iron_ingot')
  create.milling('mekanism:dust_gold', 'minecraft:gold_ingot')
  create.milling('mekanism:dust_copper', 'minecraft:copper_ingot')

  create.pressing(Item.of('minecraft:leather'), Ingredient.of('#poopsky:poops')).id('poopsky:leather_pressing');
  create.mechanical_crafting('kubejs:printed_circuit_board', [
    "CCCTTT",
    "PPPPPP",
  ], {
    P: 'kubejs:plastic',
    C: 'kubejs:capacitor',
    T: 'kubejs:transistor'
  });
});
