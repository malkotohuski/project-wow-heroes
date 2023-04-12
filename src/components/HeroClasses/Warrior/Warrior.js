import React from 'react';
import '../Warrior/Warrior.css';

function Warrior() {
    return (
        <div className='warrior-main'>
            <div className='main-warrior-img'>
                <h1 className='warrior-hero'>Warrior</h1>
                <div className='class-warrior'>
                    <div className='warrior-classInfo'><h1>Class Info</h1>
                        <div className='warrior-info'>
                            <h3>Lords of War</h3>
                            <p>For as long as war has raged,
                                heroes from every race have aimed to master the art of battle.
                                Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat.
                                Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow.
                                Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.
                                Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor.

                            </p>
                        </div>
                        <div className='warrior-specialization'><h1>Specialization</h1></div>
                        <div className="container-warrior">
                            <div className="column-warrior">
                                <h2>Protection</h2>
                                <p>A stalwart protector who uses a shield to safeguard themselves and their allies. Preferred Weapon: Axe, Mace, Sword, and Shield
                                </p>
                            </div>
                            <div className="column-warrior">
                                <h2>Arms</h2>
                                <p>A battle-hardened master of weapons, using mobility and overpowering attacks to strike their opponents down.
                                    Preferred Weapon: Two-Handed Axe, Mace, Sword.
                                </p>
                            </div>
                            <div className="column-warrior">
                                <h2>Fury</h2>
                                <p>A furious berserker unleashing a flurry of attacks to carve their opponents to pieces. Preferred Weapons: Dual Axes, Maces, Swords
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Warrior;