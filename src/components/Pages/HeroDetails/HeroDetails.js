import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../HeroDetails/HeroDetails.css';
import * as HeroService from '../../../services/HeroService';
//import * as commentServies from '../../../services/commentServies';
import { useEffect, useState } from 'react';


export const HeroDetails = () => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { heroId } = useParams();
    const [hero, setHero] = useState({});

    useEffect(() => {
        HeroService.getOne(heroId)
            .then(result => {
                setHero(result);
            });
    }, [heroId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await HeroService.addComment(heroId, {
            username,
            comment,
        });

        setHero(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        setUsername('');
        setComment('');
    };

    return (
        <div className='main-details'>
            <section id="hero-details">
                <h1>Hero Details</h1>
                <div className="info-section">

                    <div className="hero-header">
                        <img className="hero-img" src={hero.imageUrl} alt='' />
                        <h1>{hero.title}</h1>
                        <span className="levels">Level: {hero.maxLevel}</span>
                        <p className="type">{hero.category}</p>
                    </div>

                    <p className="text">{hero.summary}</p>


                    <div className="details-comments">
                        <h2 className='comments-type'>Comments:</h2>
                        <ul>
                            {hero.comments && Object.values(hero.comments).map(x => (
                                <li key={x._id} className="comment">
                                    <p>{x.username}: {x.comment}</p>
                                </li>
                            ))}

                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>

                        <p className="no-comment">No comments.</p>
                    </div>


                    <div className="buttons">
                        <Link to='Edit' className="button">Edit</Link>
                        <Link to='Delete' className="button">Delete</Link>
                    </div>
                </div>


                <article className="create-comment">
                    <label className='add-comment'>Add new comment:</label>
                    <form className="form"  onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder='MechoPanda' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

            </section>
        </div>
    );
};