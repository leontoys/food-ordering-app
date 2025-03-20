import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import {Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    Welcome to MernEats.com!
                </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4">
            <Button>
              Log In
            </Button>
          </SheetDescription>  
          </SheetContent>          
        </Sheet>
    )
}

export default MobileNav