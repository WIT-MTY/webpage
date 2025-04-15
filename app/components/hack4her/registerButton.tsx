'use client'

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    const handlePage = () => {
        window.open('https://tec.rs/registrohack4her', '_blank');
    };

    return (
        <button 
            onClick={handlePage} 
            className="font-montserrat bg-indigo-950 hover:bg-indigo-900 text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[180px] text-center"
        >
            {label}
        </button>
    );
}

export default Button;
