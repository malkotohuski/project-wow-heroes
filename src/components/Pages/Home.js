import { Link } from 'react-router-dom';
import React from 'react';
import '../../App.css';
import '../../Home.css'

export default function Home() {
    return (
        <>
            <section id="welcome-world">

                <div className="welcome-message">
                    <h2>ALL NEW HEROES</h2>
                    <h3>READY FOR BATTLE</h3>
                </div>


                <div id="home-page">
                    <h1>Latest Heroes</h1>

                    {/* <!-- Display div: w ith information about every game (if any) --> */}
                    <div className="game">
                        <div className="image-wrap-one">
                        
                        </div>
                        <h3>Shushkata</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <Link to="/Shushkata" className="btn details-btn">Details</Link>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap-two">
                        </div>
                        <h3>Illidan</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <Link to="#" className="btn details-btn">Details</Link>
                        </div>
                    </div>
                    <div className="game">
                        <div className="image-wrap-three">
                        </div>
                        <h3>Legulas</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <Link to="#" className="btn details-btn">Details</Link>
                        </div>
                    </div>

                    {/* <!-- Display paragr aph: If there is no games  --> */}
                    <p className="no-articles">No heroes yet</p>
                </div>
            </section>
        </>
    );
}