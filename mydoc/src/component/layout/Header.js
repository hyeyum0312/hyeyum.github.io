import React ,{useState, useEffect} from "react";

function Header(props) {
    let [제목,제목변경] = useState('나는헤더');

    useEffect(() => {

    }, []);

    function changTitle(value) {
        제목변경(value.name);
    }
    return (
        <>
            <header className="header">
                <div className="headerInner">
                    <div className="navMenu"></div>
                    <div className="headerLogo"></div>
                    <div onClick={changTitle}>{제목}</div>
                </div>

            </header>
        </>
    )
}
export default Header