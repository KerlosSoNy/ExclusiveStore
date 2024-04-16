import DesktopViewNav from "./DesktopView";
import MobileViewNav from "./MobileView";


export default function NavBar(){
    return(
        <div>
            {/* Desktop & Tablet View */}
            <DesktopViewNav/>
            {/* Mobile  View */}
            <MobileViewNav/>
        </div>
    )
}