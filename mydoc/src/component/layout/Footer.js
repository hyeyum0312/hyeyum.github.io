import React from "react";
function Header(props) {
    return (
        <>
            <footer className="footer">
                <div className="footerInner">
                    <div className="footerInnerFlex">
                        <div className="footerInnerItem is_menu"></div>
                        <div className="footerInnerItem is_home"></div>
                        <div className="footerInnerItem is_my"></div>
                    </div>
                    <div className="footerInnerItem is_bar"></div>
                </div>
            </footer>
        </>
    )
}
export default Header