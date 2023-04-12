import React from 'react';
import '../Mage/Mage.css'

function Mage() {
    return (

        <div className='main-mage-img'>
            <h1 className='mage-hero'>Mage</h1>
            <div>
                <div className='mage-classInfo'><h1>Class Info</h1>
                    <div className='mage-info'>
                        <h3>Masters of Time and Space</h3>
                        <p>
                            Masters of Time and Space.Students gifted with a keen intellect and unwavering discipline may walk the path of the mage.
                            Mages demolish their foes with arcane incantations. Although they wield powerful offensive spells,
                            mages are fragile and lightly armored, making them particularly vulnerable to close-range attacks.
                            Wise mages make careful use of their spells to keep their foes at a distance or hold them in place.</p>
                    </div>
                </div>
                <div className='mage-specialization'><h1>Specialization</h1></div>
                <div className="container-mage">
                    <div className="column-mage">
                        <h2>Arcane</h2>
                        <p>
                            Manipulates raw Arcane magic, destroying enemies with overwhelming power.
                             Preferred Weapon: Staff, Wand, Dagger, Sword.
                        </p>
                    </div>
                    <div className="column-mage">
                        <h2>Frost</h2>
                        <p>
                            Freezes enemies in their tracks and shatters them with Frost magic. 
                            Preferred Weapon: Staff, Wand, Dagger, Sword.

                        </p>
                    </div>
                    <div className="column-mage">
                        <h2>Fire</h2>
                        <p>
                            Focuses the pure essence of Fire magic, assaulting enemies with combustive flames.
                             Preferred Weapon: Staff, Wand, Dagger, Sword.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Mage;