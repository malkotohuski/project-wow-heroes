import React from 'react';
import '../Warlock/Warlock.css'

function Warlock() {
    return (

        <div className='main-warlock-img'>
            <h1 className='warlock-hero'>Warlock</h1>
            <div>
                <div className='warlock-classInfo'><h1>Class Info</h1>
                    <div className='warlock-info'>
                        <h3>Channelers of Forbidden Powers</h3>
                        <p>In the face of demonic power, most heroes see death. Warlocks see only opportunity.
                            Dominance is their aim, and they have found a path to it in the dark arts.
                            These voracious spellcasters summon demonic minions to fight beside them.
                            Warlocks burn and destroy weakened foes with a combination of crippling illnesses and dark magic.
                        </p>
                    </div>
                </div>
                <div className='warlock-specialization'><h1>Specialization</h1></div>
                <div className="container-warlock">
                    <div className="column-warlock">
                        <h2>Affliction</h2>
                        <p>
                            A master of shadow magic who specializes in drains and damage-over-time spells.
                            Preferred Weapon: Staff, Wand, Dagger, Sword.
                        </p>
                    </div>
                    <div className="column-warlock">
                        <h2>Demonology</h2>
                        <p>
                            A commander of demons who twists the souls of their army into devastating power.
                            Preferred Weapon: Staff, Wand, Dagger, Sword.

                        </p>
                    </div>
                    <div className="column-warlock">
                        <h2>Destruction</h2>
                        <p>
                            A master of chaos who calls down fire to burn and demolish enemies.
                            Preferred Weapon: Staff, Wand, Dagger, Sword.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Warlock;