import "./payment.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCaretDown, faLifeRing, faCaretLeft, faShield, faArrowRightArrowLeft, faCreditCard, faDollarSign, faCalculator, faWallet, faQuestion, faBasketShopping, faBank } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Payment() {
    return (
        <div className="payment">
            <div className="page-link flex items-between justify-between w-full">
                <div className="flex items-center gap-2">
                    <Link className="flex items-center justify-end gap-4" href="#"><FontAwesomeIcon icon={faHouse}/>الرئيسية/</Link>
                    <Link className="flex items-center justify-end gap-4" href="#">اعدادات المتجر/</Link>
                    <Link className="flex items-center justify-end gap-4" href="#"> طرق الدفع</Link>
                </div>
                <div className="help ">
                    <button className="flex justify-between items-center gap-2"><FontAwesomeIcon icon={faLifeRing}/> مساعدة <FontAwesomeIcon icon={faCaretDown}/></button>
                </div>
            </div>

            <div className="verification flex justify-between items-center">
                <div className="flex justify-between items-center gap-8">
                    <div class="icon flex justify-center items-center">
                        <FontAwesomeIcon icon={faShield}/>
                    </div>
                    <div className="details">
                        <h4>توثيق المتجر (مكتمل)</h4>
                        <p>يمكنك الاستفادة الكاملة من امكانيات المنصة</p>
                        <p>فقط مالك المنصة يستطيع الدخول لتوثيق المتجر</p>
                    </div>
                </div>
                
                <div class="left-icon">
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </div>
            </div>


            <div className="electronic-payment">
                <div className="upper flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="logo flex justify-center items-center">
                            <img src="https://cdn.salla.network/images/logo/logo.svg" alt="logo"/>
                        </div>
                        <div className="details">
                            <h4>المدفوعات الالكترونيه</h4>
                            <p>فعّل المدفوعات الإلكترونية بسهولة، واستقبلها بأمان</p>
                        </div>
                    </div>
                    
                    <div class="left-button">
                        <button>تعطيل</button>
                    </div>  
                </div>

                <div className="electronic-item flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="icon flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                        </div>
                        <div className="details">
                            <h4>دورة التحويل</h4>
                            <p>تحويل المدفوعات الالكترونية اسبوعيا</p>
                        </div>
                    </div>
                    
                    <div class="left-icon">
                        <FontAwesomeIcon icon={faCaretLeft}/>
                    </div>
                </div>
                <hr/>
                <div className="electronic-item flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="icon flex justify-center items-center">
                            <FontAwesomeIcon icon={faCreditCard}/>
                        </div>
                        <div className="details">
                            <h4>وسائل الدفع المفعلة </h4>
                            <p>مدى، البطاقةالائتمانية، google pay، apple pay</p>
                        </div>
                    </div>
                    
                    <div class="left-icon">
                        <FontAwesomeIcon icon={faCaretLeft}/>
                    </div>
                </div>
                <hr/>
                <div className="electronic-item flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="icon flex justify-center items-center">
                            <FontAwesomeIcon icon={faShield}/>
                        </div>
                        <div className="details">
                            <h4>قيود الدفع </h4>
                            <p>خصص عمليات الدفع المتاحه وفق شروط محددة</p>
                        </div>
                    </div>
                    
                    <div class="left-icon">
                        <FontAwesomeIcon icon={faCaretLeft}/>
                    </div>
                </div>
                <hr/>
                <div className="electronic-item flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="icon flex justify-center items-center">
                            <FontAwesomeIcon icon={faDollarSign}/>
                        </div>
                        <div className="details">
                            <h4> الشراء السريع</h4>
                            <p>فعل شراء المنتجات بضغطة زر   </p>
                        </div>
                    </div>
                    
                    <div class="left-icon">
                        <FontAwesomeIcon icon={faCaretLeft}/>
                    </div>
                </div>
                <hr/>
                <div className="electronic-item flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <div class="icon flex justify-center items-center">
                            <FontAwesomeIcon icon={faCalculator}/>
                        </div>
                        <div className="details">
                            <h4>حاسبة الرسوم </h4>
                            <p>احسب رسوم العمليات المالية</p>
                        </div>
                    </div>
                    
                    <div class="left-icon">
                        <FontAwesomeIcon icon={faCaretLeft}/>
                    </div>
                </div>


                <div className="wallet">
                    <div className="title flex  items-center gap-2">
                        <FontAwesomeIcon icon={faWallet}/>
                        <h4>المحافظ الالكترونية</h4>
                    </div>
                    
                    <div class="item flex justify-between items-center">
                        <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/paypal.png" alt="paypal"/>
                        <button>تفعيل</button>
                    </div>  
                </div>

                <div className="buy">
                    <div className="title flex  items-center gap-2">
                        <FontAwesomeIcon icon={faBasketShopping}/>
                        <h4>اشتري الان وادفع لاحقا </h4>
                        <FontAwesomeIcon icon={faQuestion}/>
                    </div>
                    
                    <div class="item flex justify-between items-center">
                        <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/tabby_en.png" alt="paypal"/>
                        <button>تفعيل</button>
                    </div>  
                    <div class="item flex justify-between items-center">
                        <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/tamara.svg" alt="paypal"/>
                        <button>تفعيل</button>
                    </div> 
                    <div class="item flex justify-between items-center">
                        <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/mispay_installment.png" alt="paypal"/>
                        <button>تفعيل</button>
                    </div> 
                    <div class="item flex justify-between items-center">
                        <img src="https://cdn.assets.salla.network/prod/admin/cp/assets/images/madfu_installment.png" alt="paypal"/>
                        <button>تفعيل</button>
                    </div> 
                </div>

                <div className="accounts">
                        <div className="title flex justify-between  items-center gap-2">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faBank}/>
                                <h4>الحسابات البنكية</h4>
                            </div>
                            <button>
                                حساب جديد +
                            </button>
                            
                        </div>
                        <div class="item flex justify-between items-center">
                            <p>لا يوجد لديك أي حساب بنكي</p>
                        </div> 
                    </div>
            </div>
            
        </div>
    )
}