import React from 'react';
import '../Warlock/Warlock.css'

function Warlock() {
    return (

        <div className='main-warlock-img'>
            <h1 className='warlock-hero'>Warlock</h1>
            <div>
                <div className='warlock-classInfo'><h1>Class Info</h1>
                    <div className='warlock-info'>
                        <p>Paladin talents increase their ability to heal the wounded, strengthen their capacity to protect their companions, and allow them to deal out vicious damage in the name of justice.</p>
                    </div>
                </div>
                <div className='warlock-specialization'><h1>Specialization</h1></div>
                <div className="container-warlock">
                    <div className="column-warlock">
                        <h2>Holy</h2>
                        <p>
                            Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield.
                        </p>
                    </div>
                    <div className="column-warlock">
                        <h2>Retribution</h2>
                        <p>
                            A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe.
                        </p>
                    </div>
                    <div className="column-warlock">
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

export default Warlock;