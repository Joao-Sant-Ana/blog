import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Header () {
    return (
        <header className="flex items-center justify-between px-4 w-full h-16">
            <h1 className="text-2xl font-bold text-primary">Blog do João</h1>
            <div>
                <ModeToggle />
                <Button variant="link">Registre-se</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
}