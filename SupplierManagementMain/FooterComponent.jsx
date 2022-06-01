import { Component } from "react";

class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted">@ALL RIGHTS RESERVED.2021.</span>
            </footer>
            // <footer className = "bg-white">
            //     <div className="bg-light py-2">
            //         <div className="container text-center">
            //             <p className="text-muted mb-0 py-2">©{new Date().getFullYear()} Freshland Dairy All risghts reserved.</p>
            //         </div>
            //     </div>
            // </footer>
        )
    }
}
export default FooterComponent