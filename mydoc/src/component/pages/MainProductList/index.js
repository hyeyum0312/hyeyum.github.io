import React from "react";

function MainProductList() {
    return (
        <div className="mainProductListWrap">
            <div className="mainProductListBox">
                <div className="mainProductListBoxTitle">상품리스트</div>
                <input className="mainProductListBoxInput" placeholder={'검색어를 입력해주세요'}/>
                <button className="mainProductListBoxBtn" type="button">+ 새상품 등록</button>
            </div>
            <ul className="mainProductListBox is_main">
                <MainProductItem></MainProductItem>
                <MainProductItem></MainProductItem>
            </ul>
        </div>
    )
}

function MainProductItem() {
    return (
        <li className="mainProductItem">
            <div className="mainProductItemInner">
                <div className="mainProductItemThumbnail"></div>
                <div className="mainProductItemInfo">
                    <div className="mainProductItemInfoTxt">63225</div>
                    <div className="mainProductItemInfoTxt">나인 스퀘어 앵클 삭스부츠</div>
                </div>
            </div>
            <div className="mainProductItemInner is_mall" style={{display:'none'}}>
                <ul className="mainProductItemMallList">
                    <li className="mainProductItemMallItem"></li>
                    <li className="mainProductItemMallItem"></li>
                    <li className="mainProductItemMallItem"></li>
                    <li className="mainProductItemMallItem"></li>
                </ul>
            </div>
        </li>
    )

}
export default MainProductList