import Header from "@/components/header/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PostData } from '@/types';

export default function Home ({ posts }: PostData) {
    posts = posts.map((item) => {
        const lastSpace = item.body.lastIndexOf(' ', 500);
        const tinyText = item.body.substring(0, lastSpace) + "...";

        return {...item, tinyText: tinyText}
    });

    return (
        <>
            <Header />
            <main className="w-screen flex flex-col ">
                <div className="flex w-full mt-12 justify-center items-center">
                    {posts.slice(0, 1).map((post, index: React.Key) => {
                        return (
                            <Card key={index} className="w-11/12 flex flex-col lg:w-3/4" >
                                <CardHeader className="w-full flex items-start">
                                    <CardTitle className="text-primary text-4xl">{post.title}</CardTitle>
                                    <p className="text-black/60 text-sm md:hidden">{post.created_at}</p>
                                </CardHeader>
                                <CardContent className="w-full flex flex-col items-center gap-y-10 gap-x-5 md:flex-row-reverse">
                                    <img src={post.image_url} alt={post.image_alt} width="300px" className="rounded-full md:1/3"/>
                                    <p >{post.tinyText}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-black/60 text-sm hidden md:block">{post.created_at}</p>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </main>
        </>
    );
}