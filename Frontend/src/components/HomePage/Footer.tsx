import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <main className="background py-5 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10 border-t border-bgDark flex justify-between">
            <div className="flex flex-wrap gap-2 md:gap-3 xl:gap-5">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/create" className="text-white">Create Campaign</Link>
                <Link to="/view" className="text-white">View Campiagns</Link>  
            </div>
            <p>All right reserved &copy; Brandts 2024</p>
        </main>
     );
}
 
export default Footer;