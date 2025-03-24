import { useState,useEffect } from "react";
import axios from "axios";
import { getCurrentUser } from "../auth";


const ManagePosts = () => {

    const [posts, setPosts] = useState([]);
    const user = getCurrentUser();
    console.log(user);

    const fetshData = async () => {
        try {
            const response = await axios.get('https://genova-gsaa.onrender.com/api/posts/');
            const userPosts = posts.filter(post => post.id === user.id);
            setPosts(userPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetshData()
    }
    , []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-4 pt-16">
        <h1>{posts}</h1>
        </div>
    );
}


export default ManagePosts;