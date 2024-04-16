import FooterDesktopView from "./FooterDesktopView";
import FooterMobileView from "./FooterMobileView";


export default function Footer(){
    return(
        <div>
            {/* Desktop View */}
            <FooterDesktopView/>
            {/* Mobile  View  */}
            <FooterMobileView/>
        </div>
    )
}