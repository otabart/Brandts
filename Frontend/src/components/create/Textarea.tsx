// Import Types
import { TextareaProps } from "../../types/default";

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  return (
    <main className="flex flex-col gap-y-1">
      <label htmlFor="description" className="cursor-pointer text-xs sm:text-sm xl:text-base">Enter Campaign Description</label>
      <textarea
        placeholder="Enter Your Campaign Description"
        name="description"
        id="description"
        className="rounded-xl resize-none h-28 w-full placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base bg-white px-2 xl:px-4 py-3 border border-bgDark duration-300 focus:border-accentColor focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </main>
  );
}

export default Textarea;