// Import Types
import { DropdownProps } from "../../types/default";

const Dropdown: React.FC<DropdownProps> = ({ id, label, required, otherClass, value, onChange, options }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onChange!(selectedValue as any);
    };

    return (
        <main>
            <div className='flex flex-col gap-y-1 text-xs md:text-sm xl:text-base'>
                <label className="cursor-pointer" htmlFor={id}>{label}</label>
                <select
                    required={required}
                    id={id}
                    className={`w-full px-2 xl:px-4 py-3 rounded-xl focus:border-accentColor border border-bgDark duration-300 focus:outline-none capitalize ${otherClass}`}
                    value={value}
                    onChange={handleChange}
                >
                    <option value="">Select an Option</option>
                    {options.map((option: any) => (
                        <option key={option.name} value={option.name}>{option.name}</option>
                    ))}
                </select>
            </div>
        </main>
    );
}

export default Dropdown;
