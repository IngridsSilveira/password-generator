import { LuCopy } from "react-icons/lu";
interface ButtonProps {
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => any;
}

export const Button:React.FC<ButtonProps> = ({onClick}) => {
    return (
        <button
          className="absolute right-0 py-1.5 px-2 bg-blue-600 hover:bg-blue-700  rounded-r-md rounded-e-md text-white text-lg"
          onClick={onClick}
        >
          <LuCopy size={30}  />
        </button>
    )
}