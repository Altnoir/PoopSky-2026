StartupEvents.registry("item", (event) => {
    event.create("andesite_mechanism");
    event.create("incomplete_andesite_mechanism");
    event.create("copper_mechanism");
    event.create("incomplete_copper_mechanism");
    event.create("pressure_mechanism");
    event.create("incomplete_pressure_mechanism");
    event.create("computer_mechanism");
    event.create("incomplete_computer_mechanism");
    event.create("gravitation_mechanism");
    event.create("incomplete_gravitation_mechanism");
    event.create("circuit_scrap");
    event.create("plastic");
    event.create("transistor");
    event.create("capacitor");
    event.create("printed_circuit_board");
});

StartupEvents.registry('block', event => {
    event.create('andesite_machine')
        .displayName('Andesite Machine')
        .soundType('stone')
        .notSolid()
        .hardness(0)
        .tagBlock('kubejs:create_machines')
        .tagBlock('create:wrench_pickup')
        .item(itm => itm.maxStackSize(99))

    event.create('copper_machine')
        .displayName('Copper Machine')
        .soundType('stone')
        .notSolid()
        .hardness(0)
        .tagBlock('kubejs:create_machines')
        .tagBlock('create:wrench_pickup')
        .item(itm => itm.maxStackSize(99))

    event.create('brass_machine')
        .displayName('Brass Machine')
        .soundType('stone')
        .notSolid()
        .hardness(0)
        .tagBlock('kubejs:create_machines')
        .tagBlock('create:wrench_pickup')
        .item(itm => itm.maxStackSize(99))

    event.create('redstone_machine')
        .displayName('Redstone Machine')
        .soundType('stone')
        .notSolid()
        .hardness(0)
        .tagBlock('kubejs:create_machines')
        .tagBlock('create:wrench_pickup')
        .item(itm => itm.maxStackSize(99))
})