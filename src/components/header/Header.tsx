import { HamburgerMenuIcon  } from "@radix-ui/react-icons";
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="w-full h-16">
            <div className="w-11/12 h-full flex items-center justify-between mx-auto lg:w-3/4">
                <Link to="/"><h1 className="text-2xl font-bold text-primary">Blog do João</h1></Link>
                <div className="flex flex-row gap-x-5">
                    <ModeToggle />
                    <div className="md:hidden">
                        <Dialog>
                            <DialogTrigger asChild><Button size={"icon"}><HamburgerMenuIcon /></Button></DialogTrigger>
                            <DialogContent className="flex flex-col w-3/5 h-2/4">
                                <DialogHeader>
                                    <DialogTitle className="mb-16">Menu</DialogTitle>
                                    <DialogDescription className="flex flex-col items-center">
                                        <Link to="/registrar"><Button variant="link" className="">Registre-se</Button></Link>
                                        <Link to="/login"><Button className="">Login</Button></Link>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Link to="/registrar" className="hidden md:block"><Button variant="link" >Registre-se</Button></Link>
                    <Link to="/login" className="hidden md:block"><Button >Login</Button></Link>
                </div>
            </div>
        </header>
    );
}