import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PostList from "@/components/postlist/postlist";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PostData } from '@/types';
import { Link } from "react-router-dom";

export default function Home ({ posts = []}: PostData) {
    posts = posts.map((item) => {

        const lastSpace = item.body.lastIndexOf(' ', 300);
        const tinyText = item.body.substring(0, lastSpace) + "...";

        return { ...item, tinyText: tinyText, }
    });

    return (
        <>
            <Header />
            <main className="w-full flex flex-col mb-16">
                <div className="flex w-full mt-12 justify-center items-center">
                    {posts.slice(0, 1).map((post, index: React.Key) => {
                        return (
                            <Link to={"posts/" + post.titleurl} key={index} className="w-11/12 lg:w-3/4">
                                <Card className="w-full flex flex-col dark:shadow-primary/70 dark:shadow-lg" >
                                    <CardHeader className="w-full flex items-start">
                                        <CardTitle className="text-primary text-4xl">{post.title}</CardTitle>
                                        <p className="text-black/60 text-sm md:hidden">{post.created_at}</p>
                                    </CardHeader>
                                    <CardContent className="w-full flex flex-col items-center gap-y-10 gap-x-5 md:flex-row-reverse">
                                        <img src={post.image} width="300px" className="w-11/12 shadow-lg shadow-black/70 md:w-80 dark:shadow-primary/20 "/>
                                        <p className="sm:text-lg md:text-xl xl:text-2xl">{post.tinyText}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="text-black/60 text-sm hidden md:block">{post.created_at}</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
                <PostList posts={posts.slice(1, -1)}/>
            </main>
            <Footer />
        </>
    );
}