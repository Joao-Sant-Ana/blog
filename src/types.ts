//Tratamento para os Posts do Json
export interface Post {
    id: number;
    tittle: string;
    body: string;
    created_at: string;
    image_url: string;
}

//Seleciona todos os posts dentro do json
export interface PostData {
    posts: Post[];
}