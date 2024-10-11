import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";

const Header = () => {
    return ( 
        <SignedIn>
            <div className="w-full h-full flex justify-around items-center bg-[#494854] rounded-b-xl">   
                    <Link href="/send" className="text-3xl rounded-b-xl  w-[50%] h-full flex justify-center items-center">Send</Link>
                    
                    <Link href="/regulations" className="text-3xl rounded-b-xl  w-[50%] h-full flex justify-center items-center">Regulations</Link>
            </div>
        </SignedIn>
     );
}
 
export default Header;