import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <img src="/images/logo_wit/logo_nuevo.png" alt="Logo" className="w-20 cursor-pointer" />
        </Link>
    );
};

export default Logo;
