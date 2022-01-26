import React ,{useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
function Header(props) {
    let [제목,제목변경] = useState('나는헤더');
    let [hamburger, setHamburger] = useState(false);
    let history = useHistory();

    useEffect(() => {

    }, []);

    function changTitle(value) {
        제목변경(value.name);
    }
    function navContainer() {
        setHamburger(!hamburger)
        let bodyContainer = document.getElementsByClassName('.bodyContainer');
        console.log('bodyContainer',bodyContainer)
        // bodyContainer.style.backgroundColor = 'black'
    }
    return (
        <>
            <header className="header">
                <div className="headerInner">
                    <div className={`navMenu${hamburger ? " is_hamburger" : ''}`} onClick={navContainer}></div>
                    <div className="headerLogo"></div>
                    <div onClick={changTitle}>{제목}</div>
                </div>
            </header>

            {
                hamburger &&
                <>
                    <div className="navMenuWrap">
                        <div className="navMenuMain">
                            <ul className="navMenuMainList">
                                <li className="navMenuMainItem is_top">
                                    <div className="navMenuMainItemTxt">kris@mncnext.co.kr</div>
                                    <button type="button" className="navMenuMainItemLogout"></button>
                                </li>
                                <li className="navMenuMainItem">
                                    <div className="navMenuMainItemTxt" onClick={()=>{history.push('/'); setHamburger(!hamburger);}}>메인으로</div>
                                </li>
                                <li className="navMenuMainItem">
                                    <div className="navMenuMainItemTxt" onClick={()=>{history.push('/MainProductList'); setHamburger(!hamburger);}}>상품리스트</div>
                                </li>
                            </ul>
                        </div>
                        <div className="navMenuCompany">
                            <ul className="navMenuCompanyList">
                                <li className="navMenuCompanyItem is_name">(주)엠앤씨넥스트</li>
                                <li className="navMenuCompanyItem">주소 : 서울특별시 마포구 와우산로 48, 3층</li>
                                <li className="navMenuCompanyItem">대표 : 박민규</li>
                                <li className="navMenuCompanyItem">사업자등록번호 : 352-88-01951</li>
                                <li className="navMenuCompanyItem">통신판매 : 제2021-서울마포-0150호</li>
                                <li className="navMenuCompanyItem">이메일 : help@mcnext.co.kr</li>
                                <li className="navMenuCompanyItem is_terms">
                                    <div className="navMenuCompanyItemTerms">이용약관 &nbsp; | &nbsp;</div>
                                    <div className="navMenuCompanyItemTerms">개인정보처리방침</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Header