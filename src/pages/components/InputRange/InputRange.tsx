interface InputProps {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const InputRange: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Number of characters: <span>{value}</span>
      </label>
      <input
        type="range"
        value={value}
        min={8}
        max={16}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
