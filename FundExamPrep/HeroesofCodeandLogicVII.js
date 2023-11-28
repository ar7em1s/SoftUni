function game(input) {
    // parse inout
    // store heto data
    
    // for eahc line until 'End':
    // - check command and execute

    // print result

    //heal
    // - check how much health can be restored
    // - add HP to hero stats
    // - print result of the heal

    //recharge
    // - check how much mana can be restored
    // - add MP to hero stats
    // - print result of the recharge

    //cast spell
    // - check if hero has enough mana
    // -- if yes, cast spell, substract MP and print result
    // -- otherwise, print error message

    //take damage
    // subtract damage from hero HP
    // check if hero is still alive
    // - if yes, print damage message
    // - if no, print death message and remove hero from the party

}

game(['2',
   'Solmyr 85 120',
   'Kyrre 99 50',
   'Heal - Solmyr - 10',
   'Recharge - Solmyr - 50',
   'TakeDamage - Kyrre - 66 - Orc',
   'CastSpell - Kyrre - 15 - ViewEarth',
   'End']);
   console.log('----------');
   game(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);
