//For the normal input field
export type InputProps = {
    type: string;
    placeholder?: string;
    name?: string;
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

//For the Custom Hero Section
export type CustomHeroSection = {
  imageUrl: string,
  imageUrl1?: string,
  heading: string,
  subHeading: string
}

//For the Dashboard Card
export type DashboardCardProps = {
  icon: React.ReactNode,
  amount: number | string,
  color: string,
  text: string
  otherClass: string;
}

//For the Accordion
export type AccordionItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  isOpen: null | string;
  toggle: () => void;
};