interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCheckbox: React.FC<CheckboxProps> = ({ id, name, label, checked, onChange }) => {
  return (
    <div className="p-1 flex flex-1 items-center">
      <input
        type="checkbox"
        checked={checked}
        id={id}
        name={name}
        className="h-4 w-4 cursor-pointer transition-all shadow hover:shadow-md appearance-auto bg-white text-black"
        onChange={onChange}
      />

      <label className="ms-2">{label}</label>
    </div>
  );
};
