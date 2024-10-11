import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
    return ( 
        <SignedIn>
            <div className="w-[80%] h-[13vh] flex justify-around items-center bg-[#494854] rounded-b-xl">   
                    <Link href="/blogs" className="text-3xl">Blogs</Link>
                    <Link href="/create" className="text-3xl">Create</Link>
                    <UserButton/>
            </div>
        </SignedIn>
     );
}
 
export default Header;