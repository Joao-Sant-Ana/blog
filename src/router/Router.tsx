import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '@/screens';
import { useEffect, useState } from "react";
import { Post } from '@/types';

export default function Router () {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data: Post[]) => {
            setPosts(data);
        })
        .catch((error) => {
            console.error("Erro no fetch: " + error)
        })
    }, [])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home posts={posts}/>}/>
            </Routes>
        </BrowserRouter>
    );
}