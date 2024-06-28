import React from 'react';
import { ArrowDown3 } from 'iconsax-react';

// Import Needed Types
import { AccordionItemProps } from '../../types/default';

const Accordion: React.FC<AccordionItemProps> = ({ content, isOpen, toggle }) => {
  return (
    <section className="my-4">
      <main
        onClick={toggle}
        className={`cursor-pointer rounded-xl text-xs md:text-sm xl:text-base flex items-center justify-between border border-bgDark border-opacity-50 p-2 sm:p-3 md:p-5 xl:p-7 ${
          isOpen === content.id && 'border-accentColor'
        }`}
      >
        <p className="font-medium">{content.name}</p>
        <div className="flex items-center gap-x-5">
          <p>Click for details</p>
          <ArrowDown3
            size="24"
            variant="Bulk"
            className={`text-primaryBlue ${
              isOpen === content.id && 'text-accentColor rotate-180 duration-300'
            }`}
          />
        </div>
      </main>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen === content.id ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div
          className={`flex flex-col gap-y-3 p-4 rounded-br-xl rounded-bl-xl border border-bgDark border-opacity-50 ${
            isOpen === content.id && 'border-accentColor'
          }`}
        >
          <div className="flex justify-between">
            <p>Submissions</p>
            <p className="font-semibold">{content.submissions}</p>
          </div>
          <div className="flex justify-between">
            <p>Likes</p>
            <p className="font-semibold">{content.likes}</p>
          </div>
          <div className="flex justify-between">
            <p>Comments</p>
            <p className="font-semibold">{content.comments}</p>
          </div>
          <div className="flex justify-between">
            <p>Shares</p>
            <p className="font-semibold">{content.shares}</p>
          </div>
          <div className="flex justify-between">
            <p>Traffic Generated</p>
            <p className="font-semibold">{content.traffic}</p>
          </div>
          <div className="flex justify-between">
            <p>Budget Spent</p>
            <p className="font-semibold">{content.budgetSpent}</p>
          </div>
          <div className="flex justify-between">
            <p>Engagement Rate</p>
            <p className="font-semibold">{content.engagementRate}</p>
          </div>
          <p
            className={`my-4 uppercase font-semibold ${
              content.status === 'active' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {content.status}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
