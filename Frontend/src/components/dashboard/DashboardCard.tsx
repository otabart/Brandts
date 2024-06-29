//Import Needed Cards
import { DashboardCardProps } from "../../types/default";


const DashboardCard = ({ icon, amount, color, text, otherClass }: DashboardCardProps) => {
    return (
        <main className={`border ${otherClass} p-2 md:p-4 xl:p-6 bg-white flex flex-col gap-y-5 rounded-2xl min-w-[16rem] text-xs md:text-sm xl:text-base`}>
            <div className="flex justify-between items-center">
                <p className="font-medium">{text}</p>
                {icon}
            </div>
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light ${color}`}>{amount}</p>
        </main>
    );
}

export default DashboardCard;