import React from 'react';
import '../CreateHero.css'
import { useForm } from '../../hooks/useForm';

export const CreateHero = ({
    onCreateHeroSubmit,
}) => {
    const {values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onCreateHeroSubmit);

    return (
        <div className='create-hero'>
            <section id="create-page" className="auth">
                <form id="create" method="post" onSubmit={onSubmit}>
                    <div className="container-heroes">

                        <h1>Create Hero</h1>

                        <label htmlFor="leg-title"></label>
                        <input defaultValue={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Character name" />

                        <label htmlFor="category"></label>
                        <input defaultValue={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Class" />

                        <label htmlFor="hero-img"></label>
                        <input defaultValue={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary"></label>
                        <textarea name="summary" id="summary" defaultValue={values.summary} onChange={changeHandler} placeholder='Comment'></textarea>
                        <input className="btn submit" type="submit" value="Create Hero" />
                    </div>
                </form>
            </section>
        </div >
    );
}

