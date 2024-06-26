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
export type DropdownProps = {
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  otherClass?: string;
  options: object[];
}