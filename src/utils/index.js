const postsGridMapper = (posts) => posts.map(post => {
    const {
        id_post,
        thumbnail,
        title,
        text,
        authors,
        date
    } = post;

    return {
        "id_post": id_post,
        "thumbnail": thumbnail,
        "title": title,
        "text": text,
        "authors": authors,
        "date": date,
    }
});

export default postsGridMapper;