import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Register () {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-full sm:w-4/5 md:w-1/4">
                    <CardHeader>
                        <CardTitle>REgistre-se</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-3">
                        <Label htmlFor="username">Nome de usuário: </Label>
                        <Input type="text" id="username" placeholder="Nome de usuario"/>
                        <Label htmlFor="email">Nome de usuário: </Label>
                        <Input type="email" id="email" placeholder="Email"/>
                        <Label htmlFor="password">Nome de usuário: </Label>
                        <Input type="password" id="password" placeholder="Senha"/>
                        <Button className="mt-4">Entrar</Button>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-y-4 max-w-full">
                        <Separator className="full"/>
                        <Button size={"icon"} className="bg-black"><GitHubLogoIcon /></Button>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    );
}