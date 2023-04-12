import React from 'react';
import './Druid.css'

function Druid() {
    return (

        <div className='main-druid-img'>
            <h1 className='druid-hero'>Druid</h1>
            <div>
                <div className='druid-classInfo'><h1>Class Info</h1>
                    <div className='druid-info'>
                        <h3>Savage Shapeshifters</h3>
                        <p>Druids harness the vast powers of nature to preserve balance and protect life.
                            With experience, druids can unleash natures raw energy against their enemies,
                            raining celestial fury on them from a great distance, binding them with enchanted vines,
                            or ensnaring them in unrelenting cyclones.Druids are versatile combatants,
                            in that they can fulfill nearly every role healing, tanking, and damage dealing.
                        </p>
                    </div>
                </div>
                <div className='druid-specialization'><h1>Specialization</h1></div>
                <div className="container-druid">
                    <div className="column-druid">
                        <h2>Balance</h2>
                        <p>
                            Can shapeshift into a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies.
                            Preferred Weapon: Staff, Dagger, Mace.
                        </p>
                    </div>
                    <div className="column-druid">
                        <h2>Feral</h2>
                        <p>
                            Takes on the form of a great cat to deal damage with bleeds and bites. Preferred Weapon: Staff, Polearm.
                            Takes on the form of a mighty bear to absorb damage and protect allies. Preferred Weapon: Staff, Polearm.
                        </p>
                    </div>
                    <div className="column-druid">
                        <h2>Restoration</h2>
                        <p>
                            Channels powerful Nature magic to regenerate and revitalize allies. Preferred Weapon: Staff, Dagger, Mace.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Druid;