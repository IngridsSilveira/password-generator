import { Button } from "../Button/Button"

interface InputProps {
    value: number | string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputShow: React.FC<InputProps> = ({value}) => {
    return (
        <div className="relative flex items-center justify-center mt-2">
        <input className="py-2 px-2 mr-3 w-72 border rounded" type="text" value={value} />
        <Button/>
      </div>
    )
}