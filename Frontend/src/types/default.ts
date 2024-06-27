//For the normal input field
export type InputProps = {
    type: string;
    placeholder?: string;
    label?: string;
    id?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    title?: string;
    widthClass?: string;
    required?: boolean;
    otherClass?: string;
}

//For the Dropdown
type Option = {
  name: string;
};

export type DropdownProps = {
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Corrected type for select
  required?: boolean;
  otherClass?: string;
  options: Option[];
};

//For the text area
export type TextareaProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; 
}