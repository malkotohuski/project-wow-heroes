import React from 'react';
import './DeathKnight.css'

function DeathKnight() {
    return (
        <div className='main-death-img'>
            <h1 className='death-hero'>Paladin</h1>
            <div>
                <div className='death-classInfo'><h1>Class Info</h1>
                    <div className='death-info'>
                        <p>Paladin talents increase their ability to heal the wounded, strengthen their capacity to protect their companions, and allow them to deal out vicious damage in the name of justice.</p>
                    </div>
                </div>
                <div className='death-specialization'><h1>Specialization</h1></div>
                <div className="container-death">
                    <div className="column-death">
                        <h2>Holy</h2>
                        <p>
                            Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield.
                        </p>
                    </div>
                    <div className="column-death">
                        <h2>Retribution</h2>
                        <p>
                            A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe.
                        </p>
                    </div>
                    <div className="column-death">
                        <h2>Protection</h2>
                        <p>
                            Uses Holy magic to shield themselves and defend allies from attackers. Preferred Weapon: Sword, Mace, Axe, and Shield.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeathKnight;