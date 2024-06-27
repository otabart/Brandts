import CampaignCard from "./CampaignCard";


const Campaign = () => {
    return ( 
        <main className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base">
            <input type="search" name="search" id="search" placeholder="Enter the campaign name here..." className="w-full caret-accentColor px-5 py-3 border rounded-3xl border-bgDark bg-inherit focus:outline-none focus:border-accentColor"/>
            <section className="mt-10">
                <p className="text-base md:text-lg xl:text-xl font-semibold">Available Campaigns</p>

                <div className="mt-10">
                 <CampaignCard />   
                </div>
            </section>
        </main>
     );
}
 
export default Campaign;