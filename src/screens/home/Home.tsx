import Header from "@/components/header/Header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PostData } from '@/types';

export default function Home ({ posts }: PostData) {

    return (
        <>
            <Header />
            <main className="w-screen mt-12">
                <div className="w-full">
                    {posts.slice(0, 1).map((post, index: React.Key) => {
                        return (
                            <Card key={index} className="md:w-full lg:w-3/4 flex items-start flex-col mx-auto bg-primary-foreground">
                                <CardHeader>
                                    <CardTitle className="text-primary font-bold text-5xl leading-3">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex w-full flex-row">
                                    <p className="lg:text-lg mt-6 leading-8 md:text-base break-words lg:pr-10">{post.body}</p>
                                    <img src={post.image_url} alt={post.image_alt} className="lg:w-1/2 lg:rounded-none md:w-72 md:h-72 md:rounded-full mx-auto shadow shadow-zinc-700"/>
                                </CardContent>
                                <CardFooter>
                                    <p>{post.created_at}</p>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </main>
        </>
    );
}