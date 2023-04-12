import React from 'react';
import '../Priest/Priest.css'

function Priest() {
    return (

        <div className='main-priest-img'>
            <h1 className='priest-hero'>Priest</h1>
            <div>
                <div className='priest-classInfo'><h1>Class Info</h1>
                    <div className='priest-info'>
                        <h3>Invokers of Light and Darkness</h3>
                        <p>Priests are devoted to the spiritual, and express their unwavering faith by serving the people.
                            Priests use powerful healing magic to fortify themselves and their allies. They also wield powerful offensive spells from a distance,
                            but can be overwhelmed by enemies due to their physical frailty and minimal armor.
                        </p>
                    </div>
                </div>
                <div className='priest-specialization'><h1>Specialization</h1></div>
                <div className="container-priest">
                    <div className="column-priest">
                        <h2>Discipline</h2>
                        <p>
                            Uses magic to shield allies from taking damage as well as heal their wounds.
                            Preferred Weapon: Staff, Wand, Dagger, Mace.

                        </p>
                    </div>
                    <div className="column-priest">
                        <h2>Holy</h2>
                        <p>
                            A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.
                            Preferred Weapon: Staff, Wand, Dagger, Mace.
                        </p>
                    </div>
                    <div className="column-priest">
                        <h2>Shadow</h2>
                        <p>
                            Uses sinister Shadow magic and terrifying Void magic to eradicate enemies.
                            Preferred Weapon: Staff, Wand, Dagger, Mace.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Priest;