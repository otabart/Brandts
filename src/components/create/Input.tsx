//Import Types
import { InputProps } from "../../types/default";

const Input = ({
  type,
  placeholder,
  label,
  id,
  value,
  onChange,
  pattern,
  title,
  widthClass = 'w-full',
  otherClass,
  required,
}: InputProps) => {
  return (
    <main className="flex flex-col gap-y-1">
      <label className="cursor-pointer text-xs sm:text-sm xl:text-base" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        className={`w-full placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base bg-inherit px-2 xl:px-4 py-3 border border-bgDark duration-300 focus:border-accentColor focus:outline-none ${widthClass} ${otherClass}`}
        required={required}
      />
    </main>
  );
};


export default Input;
