import React from 'react';
import './DeathKnight.css'

function DeathKnight() {
    return (
        <div className='main-death-img'>
            <h1 className='death-hero'>Death Knight</h1>
            <div>
                <div className='death-classInfo'><h1>Class Info</h1>
                    <div className='death-info'>
                        <h3>Heralds of Doom</h3>
                        <p>When the Lich King’s control over his death knights was broken,
                            his former champions found their new purpose as Knights of the Ebon Blade.
                            After Bolvar Fordragon donned the helm to keep the undead Scourge contained,
                            he called forth a new generation of death knights to join the Ebon Blade's cause.</p>
                    </div>
                </div>
                <div className='death-specialization'><h1>Specialization</h1></div>
                <div className="container-death">
                    <div className="column-death">
                        <h2>Blood</h2>
                        <p>
                            A dark guardian who manipulates and corrupts life energy to sustain themselves in the face of an enemy onslaught.
                            Preferred Weapon: Two-Handed Axe, Mace, Sword.
                        </p>
                    </div>
                    <div className="column-death">
                        <h2>Frost</h2>
                        <p>
                            An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.
                            Preferred Weapons: Dual Axes, Maces, Swords.
                        </p>
                    </div>
                    <div className="column-death">
                        <h2>Unholy</h2>
                        <p>
                            A master of death and decay, spreading infection and controlling undead minions to do their bidding.
                            Preferred Weapon: Two-Handed Axe, Mace, Sword.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeathKnight;