import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import { Card } from "@material-ui/core";

const Layout = ({children}) => {
    return (  
        <div className="content">
        <Navbar />
        <Main />
        {children}       
        <Footer />    
        </div>

    );
}
 
export default Layout;