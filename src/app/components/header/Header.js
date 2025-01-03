import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircleExclamation, faGift, faLanguage, faMoon, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
export default function Header () {
    return (
        <header className="flex justify-between items-center w-full px-4">
            <div className="search flex items-center">
                <div className="search-input flex items-center">
                    <input type="text" placeholder="hello"/>
                    <FontAwesomeIcon icon={faCircleExclamation}/>
                </div>
                <select>
                    <option value="orders">الطلبات</option>
                    <option value="products">المنتجات</option>
                    <option value="users">العملاء</option>
                </select>
                <div className="icon flex items-center">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>   
            </div>
            <div className="header-left flex items-center gap-4">
                <button><FontAwesomeIcon icon={faLanguage}/></button>
                <button><FontAwesomeIcon icon={faGift}/></button>
                <button><FontAwesomeIcon icon={faMoon}/></button>
                <Link href="#">تحديثات المنصة</Link>
                <div className="user flex items-center gap-4">
                    <FontAwesomeIcon icon={faUser}/>
                    <a className="flex items-center gap-2" href="#">متجر الهدايا<FontAwesomeIcon icon={faCaretDown}/> </a>
                </div>
            </div>
        </header>
    )
}