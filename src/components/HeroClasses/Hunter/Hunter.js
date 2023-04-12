import React from 'react';
import './Hunter.css'

function Hunter() {
    return (

        <div className='main-hunter-img'>
            <h1 className='hunter-hero'>Hunter</h1>
            <div>
                <div className='hunter-classInfo'><h1>Class Info</h1>
                    <div className='hunter-info'>
                        <h3>Inescapable Stalkers</h3>
                        <p>From an early age, the call of the wild draws some adventurers from the comfort of
                            their homes into the unforgiving primal world outside. Those who endure become hunters.
                            Hunters battle their foes at a distance or up close, commanding their pets to attack while they nock their arrows,
                            fire their guns, or ready their polearms.
                        </p>
                    </div>
                    <div className='hunter-specialization'><h1>Specialization</h1></div>
                    <div className="container-hunter">
                        <div className="column-hunter">
                            <h2>Beast Mastery</h2>
                            <p>
                            A master of the wild who can tame a wide variety of beasts to assist them in combat.
                             Preferred Weapon: Bow, Crossbow, Gun.
                            </p>
                        </div>
                        <div className="column-hunter">
                            <h2>Marksmanship</h2>
                            <p>
                            A master sharpshooter who excels in bringing down enemies from afar. 
                            Preferred Weapon: Bow, Crossbow, Gun.
                            </p>
                        </div>
                        <div className="column-hunter">
                            <h2>Survival</h2>
                            <p>
                            An adaptive ranger who favors using explosives, animal venom, and coordinated attacks with their bonded beast.
                             Preferred Weapon: Polearm, Staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}

            export default Hunter;