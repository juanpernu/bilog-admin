import React, { useState } from 'react';
import Button from '../Button';
import Input from './atomics/Input';
import TextArea from './atomics/TextArea';
import './index.scss';

const Form = ({ postData }) => {
    const [post, setPost] = useState(postData);
    //const [submitted, setSubmitted] = useState(false);
    //const [requiredFields, setRequiredFields] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { thumbnail, title, text, authors } = post;
        const requiredFields = (!thumbnail || thumbnail === '') ||
            (!title || title === '') ||
            (!text || text === '') ||
            (!authors || authors === '');

        if (requiredFields) {
            //setRequiredFields(true);

            //Requerir servicio
            //POST API
            //EDIT API
            console.log('posteo...', post);
            console.log('Pegada a la API');
        }
    };

    const handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setPost((prevState) => { return { post: { ...prevState.post, [name]: value } } });
    };

    return (
        <div className="form--container">
            <form id='post--form' className="form" onSubmit={handleFormSubmit}>
                <p className="form--title">{postData ? 'Editar' : 'Crear'} Post</p>
                <div className="form--interactive_area">
                    <Input
                        required
                        type='text'
                        title='Thumbnail'
                        name='thumbnail'
                        value={post.thumbnail}
                        placeholder='Post thumbnail..'
                        handleChange={handleInput}
                    />
                    <Input
                        required
                        type='text'
                        title='Title'
                        name='title'
                        value={post.title}
                        placeholder='Post title..'
                        handleChange={handleInput}
                    />
                    <TextArea
                        required
                        type='text'
                        title='Text'
                        name='text'
                        value={post.text}
                        placeholder='Post text..'
                        handleChange={handleInput}
                    />
                    <Input
                        required
                        type='text'
                        title='Authors'
                        name='authors'
                        value={post.authors}
                        placeholder='Post authors..'
                        handleChange={handleInput}
                    />
                </div>
                <div className="form--button_area">
                    <Button type="button" fullWidth onClick={handleFormSubmit}>
                        Guardar Post
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form;
