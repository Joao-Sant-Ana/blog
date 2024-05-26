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
}

//Seleciona todos os posts dentro do json
export interface PostData {
    posts: Post[];
}