import Header from "@/components/header/Header";
import { PostData } from '@/types';

export default function Home ({ posts }: PostData) {
    console.log(posts)
    return (
        <>
            <Header />
            <main>

            </main>
        </>
    );
}