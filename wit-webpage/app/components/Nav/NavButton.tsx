'use client'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className="bg-indigo-950 rounded-2xl py-2 h-min px-6 text-white font-extralight text-sm hover:bg-indigo-900">
            {label}
        </button>
    )
}

export default Button;