'use client'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button 
            onClick={onClick} 
            className="font-montserrat bg-indigo-950 rounded-2xl py-2 h-min px-4 md:px-6 text-white font-extralight text-sm hover:bg-indigo-900 w-auto min-w-[100px] md:min-w-[140px] text-center"
        >
            {label}
        </button>
    );
}

export default Button;
