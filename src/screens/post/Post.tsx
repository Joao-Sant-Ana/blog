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
            <main className='w-full flex-1 flex flex-col mb-20 '>
                <div className="flex flex-col w-11/12 mx-auto lg:w-3/4">
                    <div className='w-full flex flex-col justify-start items-center text-center'>
                        <h1 className='text-2xl font-bold'>{post.title}</h1>
                        <h2 className='text-md text-foreground/80'>{post.created_at}</h2>
                    </div>
                    <div className='flex flex-col w-full mx-auto gap-y-10 gap-x-5 md:flex-row md:mt-10'>
                        <div className='w-full mx-auto max-w-80'>
                            <img src="https://via.placeholder.com/300x300" className='w-4/5 mx-auto'/>
                        </div>
                        <p className='w-full'>{post.body}</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-10 items-center justify-center mt-24'>
                    {comments.filter(comment => comment.post_id == post.id).map((item, index) => {
                            return(
                                <div key={index} className='w-11/12 flex gap-2 items-start justify-start md:w-3/4 md:items-center'>
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
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
