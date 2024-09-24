interface ButtonProps {
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => any;
}

export const Button:React.FC<ButtonProps> = ({onClick}) => {
    return (
        <button
          className="bg-red-600 hover:bg-red-700 mt-3 py-1 px-2 rounded text-white text-lg"
          // onClick={onClick}
        >
          Copy
        </button>
    )
}