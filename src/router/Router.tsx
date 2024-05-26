import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '@/screens';
import { useEffect, useState } from "react";
import { Comment, Post } from '@/types';
import Login from "@/screens/login/Login";
import Register from "@/screens/register/Register"
import PostPage from "@/screens/post/Post"

export default function Router () {
    const [posts, setPosts] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then((response) => response.json())
        .then((data) => {
            setComments(data)
        })
        .catch((error) => {
            console.log(error)
        })
    })

    //Posts
    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data: Post[]) => {
                    const correctdata = data.map((item) => {
                        const parts = item.image_url.split('/');
                        const imgid = parts[parts.length - 1];
                        const complete_url = `https://source.unsplash.com/${imgid}`
     
                        const lastspace = item.body.lastIndexOf(' ', 110);
                        const tinytext = item.body.substring(0, lastspace)  + '...';

                        const titleForUrl: string = item.title.replace(/\s+/g, '-'); 
                        
                        return { ...item, image: complete_url, tinytext: tinytext, titleurl: titleForUrl};
                    })
            setPosts(correctdata);
        })
        .catch((error) => {
            console.error("Erro no fetch: " + error)
        })
    }, [])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home posts={posts}/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="posts/:postId" element={<PostPage posts={posts} comments={comments}/>} />
            </Routes>
        </BrowserRouter>
    );
}