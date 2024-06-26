//Import Types
import { DropdownProps } from "../../types/default";

const Dropdown = ({id, label, required, otherClass, options}: DropdownProps) => {
    return ( 
        <main>
            <div className='flex flex-col gap-y-1 text-xs md:text-sm xl:text-base'>
                <label className="cursor-pointer" htmlFor={id}>{label}</label>
                <select required={required} id={id} className={`w-full px-2 xl:px-4 py-3 rounded-xl focus:border-accentColor border border-bgDark duration-300 focus:outline-none capitalize ${otherClass}`}>
                    <option value="">Select an Option</option>
                    {options.map((option) => (
                       <option key={option.name} value={option.name}>{option.name}</option> 
                    ))}
                </select>
            </div>
        </main>
     );
}
 
export default Dropdown;