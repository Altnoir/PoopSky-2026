ServerEvents.tags("item", event => {
    event.remove('c:plastics', 'industrialforegoing:plastic')
    event.add('c:plastics', 'kubejs:plastic')
})