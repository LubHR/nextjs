
const getAlllUsers = async ():Promise<any[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

    return response
}

const getALlPosts = async ():Promise<any[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

    return response
}

export {getAlllUsers, getALlPosts}