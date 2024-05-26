import { PostData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";

export default function PostList ({ posts = []}: PostData) {
    posts = posts.map((item) => {
        const lastSpace = item.body.lastIndexOf(' ', 110);
        const tinyText = item.body.substring(0, lastSpace) + "...";

        return {...item, tinyText: tinyText}
    })

    return (
            <div className="w-11/12 grid grid-cols-1 lg:w-3/4 lg:grid-cols-2 mx-auto mt-12 gap-10">
                {posts.map((item, index) => {
                    return (
                        <Link to={"posts/" + item.titleurl} key={index}>
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-primary">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="w-full flex flex-col gap-x-5 gap-y-5 items-center justify-center sm:flex-row sm:items-start">
                                    <div className="w-1/4 min-w-40 lg:min-w-32 xl:min-w-40">
                                        <img src={item.image} className="w-40 mx-auto shadow-lg md:w-96"/>
                                    </div>
                                    <p>{item.tinyText}</p>             
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
    );
}