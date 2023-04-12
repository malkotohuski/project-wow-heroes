import React from 'react';
import '../Shaman/Shaman.css'

function Shaman() {
    return (
        <div className='shaman-main'>
            <div className='main-shaman-img'>
                <h1 className='shaman-hero'>Shaman</h1>
                <div className='class-shaman'>
                    <div className='shaman-classInfo'><h1>Class Info</h1>
                        <div className='shaman-info'>
                            <h3></h3>
                            <p>Paladin talents increase their ability to heal the wounded, strengthen their capacity to protect their companions, and allow them to deal out vicious damage in the name of justice.</p>
                        </div>
                    </div>
                    <div className='shaman-specialization'><h1>Specialization</h1></div>
                    <div className="container-shaman">
                        <div className="column-shaman">
                            <h2>Holy</h2>
                            <p>
                                Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield.
                            </p>
                        </div>
                        <div className="column-shaman">
                            <h2>Retribution</h2>
                            <p>
                                A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe.
                            </p>
                        </div>
                        <div className="column-shaman">
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

export default Shaman;