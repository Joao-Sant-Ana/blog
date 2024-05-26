//Tratamento para os Posts do Json
export interface Post {
    id: number;
    title: string;
    body: string;
    tinyText: string;
    created_at: string;
    image_url: string;
    image_alt: string;
    image: string;
    titleurl: string;
}

//Seleciona todos os posts dentro do json
export interface PostData {
    posts: Post[];
}

export interface Comment {
    id: number;
    username: string;
    email: string;
    comment: string;
    post_id: number;
    created_at: string;
    avatar: string;
}

export interface CommentData {
    comments: Comment[];
}