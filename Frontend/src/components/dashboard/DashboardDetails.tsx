import { useState } from "react";

//Import Needed Components
import Accordion from "./Accordion";

const DashboardDetails: React.FC<any> = ({ dashboard }) => {

    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleOpen = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    }


    return (
        <main className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <p className="text-lg md:text-xl xl:text2xl font-medium">Your Campaign Details</p>
            <section className="mt-10">
                {dashboard.map((detail: any) => (
                    <Accordion key={detail.id} content={detail} isOpen={openIndex} toggle={() => toggleOpen(detail.id)} />
                ))}

            </section>
        </main>
    );
}

export default DashboardDetails;


