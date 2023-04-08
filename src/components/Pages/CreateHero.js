import React from 'react';
import '../CreateHero.css'
import { useState } from 'react';

export const CreateHero = ({
    onCreateHeroSubmit,
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateHeroSubmit(values);
    };

    return (
        <div className='create-hero'>
            <section id="create-page" className="auth">
                <form id="create" onSubmit={onSubmit}>
                    <div className="container-heroes">

                        <h1>Create Hero</h1>

                        <label htmlFor="leg-title"></label>
                        <input defaultValue={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Character name" />

                        <label htmlFor="category"></label>
                        <input defaultValue={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Class" />

                        <label htmlFor="hero-img"></label>
                        <input defaultValue={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary"></label>
                        <textarea name="summary" id="summary" defaultValue={values.summary} onChange={onChangeHandler} placeholder='Comment'></textarea>
                        <input className="btn submit" type="submit" value="Create Hero" />
                    </div>
                </form>
            </section>
        </div >
    );
}

