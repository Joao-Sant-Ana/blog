import { useParams } from 'react-router-dom';
import { CommentData, PostData } from '@/types';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PostPage ({ posts = [], comments = []}: PostData & CommentData) {

    //Get the URL id: "post/id"
    const { postId } = useParams();
    //Search for the post with the same id of the URL
    const post = posts.find(post => post.titleurl === postId);

    //Check if the post exists
    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <Header />
            <main className='w-full flex flex-col h-[calc(100vh-8rem)] '>
                <div className='w-full flex flex-col justify-start items-center '>
                    <h1 className='text-4xl font-bold'>{post.title}</h1>
                    <h2 className='text-md text-foreground/80'>{post.created_at}</h2>
                </div>
                <div className='flex flex-rol w-3/4 mx-auto gap-10'>
                    <div className='w-full mx-auto max-w-96'>
                        <img src={post.image} className='w-full'/>
                    </div>
                    <div>
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-24'>
                    {comments.map((item) => {
                        if(item.id === post.id) {
                            return(
                                <div className='w-3/4 flex gap-2 items-center justify-start'>
                                    <Avatar>
                                        <AvatarImage src={item.avatar}/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div>
                                            <h1 className="font-bold">{item.username + " | " + item.email}</h1>
                                        </div>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}
