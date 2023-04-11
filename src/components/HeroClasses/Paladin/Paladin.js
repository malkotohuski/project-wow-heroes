import React from 'react';
import '../Paladin/Paladin.css'

function Paldin() {
    return (
        <div className='paladin-main'>
            <div className='main-paladin-img'>
                <h1 className='paladin-hero'>Paladin</h1>
                <div className='class-Paladin'>
                    <div className='paladin-classInfo'><h1>Class Info</h1>
                        <div className='paladin-info'>
                            <p>Paladin talents increase their ability to heal the wounded, strengthen their capacity to protect their companions, and allow them to deal out vicious damage in the name of justice.</p>
                        </div>
                    </div>
                    <div className='paladin-specialization'><h1>Specialization</h1></div>
                    <div className="container-paladin">
                        <div className="column-paladin">
                            <h2>Holy</h2>
                            <p>
                                Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield.
                            </p>
                        </div>
                        <div className="column-paladin">
                            <h2>Retribution</h2>
                            <p>
                                A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe.
                            </p>
                        </div>
                        <div className="column-paladin">
                            <h2>Protection</h2>
                            <p>
                                Uses Holy magic to shield themselves and defend allies from attackers. Preferred Weapon: Sword, Mace, Axe, and Shield.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Paldin;