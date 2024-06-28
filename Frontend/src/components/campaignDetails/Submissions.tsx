const Submissions = () => {
    return ( 
        <main className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <p className="text-lg md:text-xl xl:text2xl font-medium">Creators Submissions</p>
            <section className="mt-10">
                {/* Don't touch the head */}
                <div className="grid gridDesign overflow-x-auto gap-5 text-center special border border-gray-400 text-base">
                    <div className="h-10"><p className="mt-2">Name</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">Email</p></div>
                    <div className="h-10"><p className="mt-2">Address</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">Link</p></div>
                    <div className="h-10"><p className="mt-2">Likes</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">Comments</p></div>
                    <div className="h-10"><p className="mt-2">Shares</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">Action</p></div>
                </div>
            {/* Map the inputs here, also I do think the name, email, and address should be in the way I did it as a sample, for security purposes, only the campaign owner should see it */}
                <div className="mt-2 grid gridDesign overflow-x-auto gap-5 text-center special border border-gray-400 text-base">
                    <div className="h-10"><p className="mt-2">Sample *****</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">Samp**@****.com</p></div>
                    <div className="h-10"><p className="mt-2">Sample **** Nigeria</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">sample.link</p></div>
                    <div className="h-10"><p className="mt-2">10k</p></div>
                    <div className="bg-gray-200 h-10"><p className="mt-2">4k</p></div>
                    <div className="h-10"><p className="mt-2">2k</p></div>
                    <div className="bg-gray-200 h-10"><button className="w-full px-5 h-full bg-bgDark text-white hover:bg-black duration-300">Disqualify</button></div>
                </div>
            </section>
        </main>
     );
}
 
export default Submissions;