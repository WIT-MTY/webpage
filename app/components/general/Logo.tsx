import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <img src="/images/Logo.png" alt="Logo" className="w-20 cursor-pointer" />
        </Link>
    );
};

export default Logo;
