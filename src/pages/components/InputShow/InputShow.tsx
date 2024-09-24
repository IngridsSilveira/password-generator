import { Button } from "../Button/Button"

interface InputProps {
    value: number | string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputShow: React.FC<InputProps> = ({value}) => {
    return (
        <div className="">
        <input className="border p-2 rounded mr-3" type="text" value={value} />
        <Button/>
      </div>
    )
}