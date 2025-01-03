"use client";
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faChevronRight, faCrown, faHouse, faShirt, faSort, faUsers, faBars, faChartPie, faQuestion, faVolumeHigh, faLocationDot, faGlobe, faBriefcase, faChalkboardUser, faStore, faGear, faWallet} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
export default function SideBar() {
    const [isMenuOpen, setIsMenuOpen]= useState(false)
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="side-bar flex flex-col gap-4 top-0 right-0 text-right w-full ">
            <div className="flex items-center justify-between h-[50px] self-start">
                {/* Hamburger menu for mobile */}
                <button className="hamburger-icon" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                </button>
                <img className="w-20 m-4 " src="https://cdn.salla.network/images/logo/logo-light-wide.svg" alt="logo"/>
            </div>
            <div className={`sidbar-responsive absolute  ${isMenuOpen ? "block" : ""}`}>
            <div className="comp-logo flex justify-center relative">
                <img className="rounded-full w-16 h-16" src="https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg" alt="company"/>
                <div className="rounded-full flex items-center gap-1 absolute">
                    <FontAwesomeIcon icon={faCrown}/>
                    <span>سبيشل</span>
                </div>
            </div>
            <h3 className="text-center">متجر الهدايا</h3>
            <div className="visit-link flex justify-center items-center m-auto">
                <div className="flex items-center"><FontAwesomeIcon icon={faShareNodes}/></div>
                <a className="flex justify-center items-center gap-1" href="#"><FontAwesomeIcon icon={faChevronRight}/>زيارة المتجر</a>
            </div>

            
            <div className={`links flex flex-col gap-2 `}>
                <Link className="flex items-center justify-end gap-4" href="#">الرئيسية<FontAwesomeIcon icon={faHouse}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">المنتجات<FontAwesomeIcon icon={faShirt}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">الطلبات<FontAwesomeIcon icon={faSort}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">العملاء<FontAwesomeIcon icon={faUsers}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">التقارير<FontAwesomeIcon icon={faChartPie}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">الاسئلة والتقييمات<FontAwesomeIcon icon={faQuestion}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">الصفحات التعريفية<FontAwesomeIcon icon={faFileLines}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">الادوات التسويقية<FontAwesomeIcon icon={faVolumeHigh}/></Link>
                <h4>قنوات البيع</h4>
                <Link className="flex items-center justify-end gap-4" href="#">محلي<FontAwesomeIcon icon={faLocationDot}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">سلة بوينت<FontAwesomeIcon icon={faGlobe}/></Link>
                <h4>ادوات مساندة</h4>
                <Link className="flex items-center justify-end gap-4" href="#">خدمات التاجر<FontAwesomeIcon icon={faBriefcase}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">المؤثرين<FontAwesomeIcon icon={faChalkboardUser}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">اعلانات سويبلي<FontAwesomeIcon icon={faVolumeHigh}/></Link>
                <h4>الاعدادات </h4>
                <Link className="flex items-center justify-end gap-4" href="#">باقة المتجر<FontAwesomeIcon icon={faStore}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">اعدادات المتجر<FontAwesomeIcon icon={faGear}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">المحفظه والفواتير<FontAwesomeIcon icon={faWallet}/></Link>
                <h4>متجر التطبيقات</h4>
                <Link className="flex items-center justify-end gap-4" href="#">التطبيقات المثبته<FontAwesomeIcon icon={faAppStore}/></Link>
                <Link className="flex items-center justify-end gap-4" href="#">زيارة متجر التطبيقات<FontAwesomeIcon icon={faGooglePlay}/></Link>
                <h4>تطبيق التاجر</h4>
                <div className="flex justify-center items-center">

                </div>
                </div>
            </div>
        </div>
    )
}