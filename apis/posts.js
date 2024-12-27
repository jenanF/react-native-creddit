import instance from ".";


export const getAllPosts = async () => {
    const response = await instance.get('https://api-creddit.eapi.joincoded.com/posts');
    console.log(response.data);
    console.log('hellooooooooooooo')
    return response.data;

}


async function getPostById(id) {
    const response = await instance.get("https://api-creddit.eapi.joincoded.com/posts/", id);
    console.log(response.data);
    return response.data;
}

const createAPost = async (data) => {

    const response = await instance.post("https://api-creddit.eapi.joincoded.com/posts", data);
    console.log(response.data);
    return response.data;

}


const deletePost = async (id) => {

    const response = await instance.delete("https://api-creddit.eapi.joincoded.com/posts/", id);
    console.log(response.data)
    return response.data;

}


const addAComment = async (id, data) => {
    const response = await instance.post(`https://api-creddit.eapi.joincoded.com/posts/${id}/comments`, data);
    console.log(response.data);
    return response.data;

}

const deleteComment = async (id) => {

    const response = await instance.delete("https://api-creddit.eapi.joincoded.com/posts/comments/", id);
    console.log(response.data)
    return response.data;

}


export { getPostById, createAPost, deletePost, addAComment, deleteComment }
