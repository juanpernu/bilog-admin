import React from 'react';
import Form from '../../components/Form';
import Layout from '../../components/Layout';

const defaultPost = {
    id_post: '',
    thumbnail: '',
    title: '',
    text: '',
    authors: '',
    date: '',
}

const PostView = () => {
    return (
        <Layout>
            <Form postData={defaultPost}></Form>
        </Layout>
    )
}

export default PostView;