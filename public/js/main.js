// random function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// game function

function game() {

    // creating both pakémoun 

    let paquetchou = {
        name: 'paquetchou',
        maxHp: 100,
        hp: 100,
        attack: 20,
        speed: 9
    }

    let carapills = {
        name: 'carapills',
        maxHp: 100,
        hp: 100,
        attack: 20,
        speed: 7
    }

    let turn = 1

    // creating the game loop

    while (carapills.hp > 0 && paquetchou.hp > 0) {
        if (turn%2 == 0) {
            let proba = getRandomInt(2)

            if (proba == 0) {
                // 1% chance of hitting
                let proba = getRandomInt(100)

                if (proba == 0) {
                    paquetchou.hp -= 100;
                    alert("unbelievable! carapills just hit paquetchou with a critical 'Vomit Gun' which beats paquetchou in a single shot!!!");
                    turn += 1;
                } else {
                    paquetchou.hp -= carapills.attack;
                    alert("carapills just used 'Vomit Gun' paquetchou's health drops to " + paquetchou.hp + "HP!");
                    turn += 1;
                }
            } else {
                    // cannot heal over max HP
                    if (carapills.hp > 90){
                        carapills.hp += (carapills.maxHp - carapills.hp);
                        alert("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    } else {
                        carapills.hp += 10;
                        alert("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    }
                };
        } else {
            let choice = +prompt('what are you gonna do?')

            if (choice == 0) {
                carapills.hp -= (2 * paquetchou.attack);
                alert("this attack was really effective! carapills' health drops to " + carapills.hp + "HP!");
                turn += 1;
            } else if (choice == 1) {
                // 50% chance of hitting
                let proba = getRandomInt(2)

                if (proba == 0) {
                    alert("oh, pakéchou used 'do not move!' which means carapills needs to wait another turn before attacking!");
                    turn += 2;
                } else {
                    alert("pakéchou failed to use 'do not move!', nothing changes.")
                    turn += 1;
                }
            }
        }
    }
}

game()