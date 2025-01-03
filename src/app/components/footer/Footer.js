import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import "./footer.css"

export default function Footer() {
    return(
        <footer className="fixed bottom-0 w-full flex justify-center items-center gap-4">
            <p>عجبتك التجربه؟ انطلق بتجارتك اليوم مع سلة بسهولة وبدون أي عمولة!</p>
            <button>انشئ متجرك مجانا</button>
            <div className="message">
                <FontAwesomeIcon icon={faMessage}/>
            </div>
        </footer>
    )
}