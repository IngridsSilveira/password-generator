interface CheckboxProps {
  id: string;
  name: string;
  label: string;
}

export const InputCheckbox: React.FC<CheckboxProps> = ({id, name, label}) => {
  return (
    <div>
      <input type="checkbox" id={id} name={name} />
      <label>{label}</label>
    </div>
  );
};
