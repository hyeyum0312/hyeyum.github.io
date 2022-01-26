import React, {useContext, useEffect, useState} from 'react';
function MainProductList() {
    let [shopInfo, setShopInfo] = useState();
    // 부분교체
    // const shopInfoCopy = {...shopInfo};
    // shopInfoCopy.name = "test"
    // setShopInfo(shopInfoCopy);

    // 전체교체
    // const shopInfoNew = {name: "test", value: 100};
    // setShopInfo(shopInfoNew);

    let [dashboardData, setDashboardData] = useState({
        shopName:'다래샵',
        memberShip:'BUSINESS',
        creditCount:'100',
        serviceName:'상품등록',
        usage:'100'
    });
    return (
        <div className="dashboardContainer">
            <ul className="dashboardList">
                <li className="dashboardItem">
                    <div className="dashboardItemWrap">
                        <div className="dashboardItemInner" style={{paddingBottom:'16px', borderBottom:'1px solid #DCDCDD'}}>
                            <div className="dashboardItemInnerDetail">
                                <div className="dashboardItemInnerShopIcon"></div>
                            </div>
                            <div className="dashboardItemInnerDetail">
                                <div className="dashboardItemInnerDetailShop">{dashboardData.shopName}</div>
                                <div className="dashboardItemInnerDetailWrap">
                                    <div className="dashboardItemInnerDetailMember">
                                        <span className="dashboardItemInnerDetailMemberIcon"></span>
                                        <span className="dashboardItemInnerDetailMemberType" style={{marginRight:'15px'}}>{dashboardData.memberShip}</span>
                                    </div>
                                    <div className="dashboardItemInnerDetailMember">
                                        <span className="dashboardItemInnerDetailMemberIcon is_credit"></span>
                                        <span className="dashboardItemInnerDetailMemberType">{dashboardData.creditCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboardItemInner">
                            <ul className="dashboardItemInnerStatusList">
                                <DashboardStatus statusListDesc={dashboardData.serviceName} statusListDescData={dashboardData.usage}></DashboardStatus>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dashboardItem">
                    <div className="dashboardItemNotice">
                        <div className="dashboardItemNoticeTitle">
                            <span className="dashboardItemNoticeTitleTxt">공지사항</span>
                            <span className="dashboardItemNoticeTitleTxt is_sub">전체보기</span>
                        </div>
                        <ul className="dashboardItemNoticeList">
                            <DashboardNotice></DashboardNotice>
                        </ul>
                    </div>
                </li>
                <li className="dashboardItem">
                    <div className="dashboardItemInner">
                        <div className="dashboardItemRegister"></div>
                        <div className="dashboardItemManual"></div>
                    </div>
                </li>
                <li className="dashboardItem">
                    <div className="dashboardItemNotice">
                        <div className="dashboardItemNoticeTitle">
                            <span className="dashboardItemNoticeTitleTxt">자주뭍는질문</span>
                            <span className="dashboardItemNoticeTitleTxt is_sub">전체보기</span>
                        </div>
                        <ul className="dashboardItemNoticeList">
                            <DashboardQnA></DashboardQnA>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

function DashboardStatus(prop){
    return (
        <li className="dashboardItemInnerStatusItem">
            <div className="statusListDesc">{prop.statusListDesc}</div>
            <div className="statusListDescData">{prop.statusListDescData}</div>
        </li>
    )
}
function DashboardNotice(){
    return (
        <li className="dashboardItemNoticeItem">
            <span className="dashboardItemNoticeItemTxt">오픈베타 종료! 1월 5일 멤버십 서비스... </span>
            <span className="dashboardItemNoticeItemTxt is_sub">12-09</span>
        </li>
    )
}
function DashboardQnA(){
    return (
        <li className="dashboardItemNoticeItem">
            <span className="dashboardItemNoticeItemTxt">쿠팡에 등록한 대표이미지가 다르게 등록이 되었...</span>
            <span className="dashboardItemNoticeItemTxt is_sub">12-09</span>
        </li>
    )
}
export default MainProductList