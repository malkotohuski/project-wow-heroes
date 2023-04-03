import React from 'react';
import '../Warrior/Warrior.css'

function Warrior() {
    return (

        <div className='main-warrior-img'>
            <h1 className='warrior-hero'>Warrior</h1>
            <div className='warrior-specialization'><h1>Specialization</h1></div>
            <div className="container-warrior">
                <div className="column-warrior">
                    <h2>Protection</h2>
                    <p>A stalwart protector who uses a shield to safeguard themselves and their allies. Preferred Weapon: Axe, Mace, Sword, and Shield
                    </p>
                </div>
                <div className="column-warrior">
                    <h2>Arms</h2>
                    <p>A battle-hardened master of weapons, using mobility and overpowering attacks to strike their opponents down. Preferred Weapon: Two-Handed Axe, Mace, Sword
                    </p>
                </div>
                <div className="column-warrior">
                    <h2>Fury</h2>
                    <p>A furious berserker unleashing a flurry of attacks to carve their opponents to pieces. Preferred Weapons: Dual Axes, Maces, Swords
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Warrior;