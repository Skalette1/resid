import { Link } from "react-router-dom"
import { clearClicker } from "./AppartPent"

const Message = ({ count, setCount }) => {
  let message;
  if(count === 0) {
    message = 'Если бы ты ты что то нажал(а), мы бы что нибудь подобрали'
  }
  else if(count === 1) {
    message = `Подобрали ${count} вариант недвижимости по вашим параметрам. Куда их прислать?` 
  }
  else if(count>1 && count<=4) {
    message = `Подобрали ${count} варианта недвижимости по вашим параметрам. Куда их прислать?` 
  }
  else {
    message = `Подобрали ${count} вариантов недвижимости по вашим параметрам. Куда их прислать?` 
  }
    return (
        <>
        <div className="message-all">
                    <Link to='/' id="toBack" onClick={() => setCount && clearClicker(setCount)}>Назад</Link>
            <h3 style={{color: '#fff'}}>{message}</h3>
            <div className="message-container">
                    <div className="message">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#26D044"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.066 13.9238C31.5279 11.3949 28.1525 10.0015 24.5563 10C17.1464 10 11.1156 16.0016 11.1127 23.3784C11.1118 25.7364 11.7307 28.038 12.9072 30.0671L11 37L18.1266 35.1395C20.0902 36.2054 22.301 36.7673 24.5509 36.768H24.5565C31.9656 36.768 37.9969 30.7657 38 23.3888C38.0013 19.8141 36.6041 16.4526 34.066 13.9238ZM24.5565 34.5085H24.5519C22.547 34.5077 20.5804 33.9716 18.8649 32.9584L18.4568 32.7175L14.2278 33.8215L15.3566 29.718L15.0909 29.297C13.9725 27.5267 13.3816 25.4803 13.3825 23.379C13.385 17.2478 18.3975 12.2597 24.561 12.2597C27.5453 12.2607 30.351 13.4188 32.4606 15.5209C34.5702 17.6229 35.7312 20.4168 35.73 23.3881C35.7275 29.5199 30.7151 34.5085 24.5565 34.5085ZM30.6854 26.1798C30.3495 26.0126 28.6982 25.2038 28.3902 25.0922C28.0824 24.9809 27.8584 24.925 27.6345 25.2597C27.4106 25.5944 26.7667 26.3473 26.5707 26.5705C26.3748 26.7935 26.1788 26.8215 25.843 26.654C25.507 26.4868 24.4248 26.1337 23.1417 24.9948C22.1431 24.1084 21.469 23.0137 21.2731 22.6789C21.0771 22.3442 21.2521 22.1633 21.4204 21.9966C21.5714 21.8468 21.7563 21.6061 21.9243 21.4109C22.0923 21.2158 22.1482 21.0762 22.2602 20.8531C22.3722 20.6301 22.3162 20.4348 22.2321 20.2676C22.1482 20.1001 21.4764 18.4546 21.1965 17.7852C20.9238 17.1335 20.6469 17.2217 20.4407 17.2114C20.245 17.2017 20.0209 17.1995 19.7968 17.1995C19.5729 17.1995 19.2091 17.2832 18.9011 17.6179C18.5933 17.9526 17.7255 18.7613 17.7255 20.4068C17.7255 22.0523 18.9291 23.6419 19.0971 23.8651C19.265 24.0881 21.4658 27.4648 24.8353 28.9129C25.6366 29.2574 26.2624 29.463 26.7503 29.6172C27.555 29.8717 28.2873 29.8356 28.866 29.7496C29.5114 29.6536 30.8533 28.9409 31.1332 28.16C31.4131 27.379 31.4131 26.7097 31.3292 26.5702C31.2452 26.431 31.0213 26.3473 30.6854 26.1798Z" fill="white"/></svg>

                      <div className="message-bottom">
                        <p>в Ватсап</p>
                        <input type="radio" />
                         </div>
                     </div>
                    <div className="message">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#28A8EA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7117 23.351C17.4212 19.9747 21.8878 17.7313 24.1307 16.6428C30.5143 13.5553 31.8562 13.0222 32.7189 13C32.9106 13 33.3323 13.0444 33.6199 13.311C33.8499 13.5331 33.9074 13.8219 33.9458 14.044C33.9841 14.2661 34.0225 14.7326 33.9841 15.088C33.6391 19.3083 32.1438 29.5483 31.377 34.2573C31.0511 36.2564 30.4185 36.9228 29.8051 36.9894C28.4632 37.1227 27.4471 35.9677 26.1628 34.9903C24.1307 33.4577 22.9997 32.5025 21.0252 30.9921C18.744 29.2595 20.22 28.3044 21.5236 26.7495C21.8687 26.3497 27.7539 20.1302 27.8689 19.5749C27.8881 19.5082 27.8881 19.2417 27.7539 19.1084C27.6197 18.9751 27.428 19.0196 27.2746 19.064C27.0637 19.1084 23.8432 21.5962 17.5746 26.5052C16.6544 27.2382 15.8301 27.5936 15.0825 27.5714C14.2582 27.5492 12.6862 27.0383 11.4977 26.594C10.0599 26.0609 8.90974 25.7722 9.00559 24.8392C9.0631 24.3506 9.6382 23.8619 10.7117 23.351Z" fill="white"/></svg>


                      <div className="message-bottom">
                        <p>в Телеграм</p>
                        <input type="radio" />
                         </div>
                     </div>
                    <div className="message">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#7360F2"/>
<g clip-path="url(#clip0_1125_2596)">
<path d="M34.8701 12.9339C34.1334 12.2647 31.1868 10.0603 24.5569 10.0209C24.5569 10.0209 16.7638 9.54855 12.9642 13.0914C10.8318 15.2565 10.0951 18.3663 10.0176 22.2634C9.94001 26.1606 9.82371 33.4431 16.7638 35.4507V38.4818C16.7638 38.4818 16.725 39.7021 17.5005 39.9383C18.4697 40.2532 19.0125 39.3085 19.9431 38.3244C20.4471 37.7732 21.145 36.9859 21.649 36.3561C26.3791 36.7498 30.0236 35.8444 30.4501 35.6869C31.4194 35.372 36.8087 34.6634 37.7004 27.3809C38.6309 19.8228 37.3127 15.0597 34.8701 12.9339ZM35.6843 26.7904C34.9476 32.892 30.5664 33.2856 29.7522 33.5218C29.4033 33.6399 26.224 34.4272 22.1918 34.191C22.1918 34.191 19.2064 37.852 18.2371 38.8361C18.082 38.9936 17.9269 39.0329 17.8106 39.0329C17.6555 38.9936 17.6168 38.7967 17.6168 38.5212C17.6168 38.1275 17.6555 33.4825 17.6555 33.4825C11.801 31.8291 12.15 25.6095 12.1888 22.3422C12.2663 19.0749 12.8479 16.4374 14.6314 14.6266C17.8494 11.6743 24.4793 12.1073 24.4793 12.1073C30.0624 12.1466 32.7376 13.8393 33.358 14.4298C35.3741 16.2406 36.4209 20.5314 35.6843 26.7904Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.649 19.7237C24.6601 19.5146 24.8361 19.3542 25.0421 19.3655C25.822 19.4083 26.4665 19.6476 26.9244 20.1307C27.3803 20.6116 27.6022 21.2822 27.6438 22.0863C27.6547 22.2955 27.4965 22.474 27.2904 22.485C27.0844 22.496 26.9086 22.3353 26.8978 22.1261C26.8619 21.4342 26.6767 20.9632 26.3861 20.6568C26.0977 20.3525 25.6565 20.1589 25.0018 20.1229C24.7958 20.1116 24.6378 19.9329 24.649 19.7237Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1455 17.6674C24.1618 17.4586 24.3417 17.3026 24.5474 17.3191C26.0937 17.4431 27.353 17.9856 28.2829 19.0156L28.2834 19.0162C29.1679 19.9997 29.6242 21.2784 29.5829 22.747C29.577 22.9564 29.405 23.1213 29.1988 23.1153C28.9926 23.1093 28.8302 22.9347 28.8361 22.7253C28.8723 21.4383 28.4757 20.3552 27.7319 19.5279C26.9558 18.6685 25.8888 18.1876 24.4886 18.0753C24.2829 18.0589 24.1293 17.8762 24.1455 17.6674Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4077 15.7684C23.4077 15.5589 23.575 15.3891 23.7813 15.3891C25.9669 15.3891 27.8067 16.1324 29.276 17.5828C30.7561 19.0438 31.5217 21.0379 31.5217 23.5235C31.5217 23.733 31.3545 23.9028 31.1481 23.9028C30.9418 23.9028 30.7746 23.733 30.7746 23.5235C30.7746 21.2065 30.0668 19.4214 28.7552 18.1267C27.4329 16.8215 25.7832 16.1476 23.7813 16.1476C23.575 16.1476 23.4077 15.9778 23.4077 15.7684Z" fill="white"/>
<path d="M25.0999 27.1839C25.0999 27.1839 25.6427 27.2232 25.9141 26.8689L26.4569 26.1604C26.7283 25.8061 27.3486 25.5699 28.0077 25.9242C28.3567 26.121 28.977 26.5147 29.3647 26.8296C29.7912 27.1445 30.6442 27.8531 30.6442 27.8531C31.0707 28.2074 31.1482 28.7191 30.8768 29.2702C30.6054 29.782 30.2177 30.2543 29.7137 30.6874C29.326 31.0416 28.9382 31.1991 28.5505 31.2778H28.3954C28.2404 31.2778 28.0465 31.2385 27.8914 31.1991C27.3098 31.0416 26.3406 30.6086 24.6734 29.7032C23.6265 29.1128 22.7348 28.4829 21.9981 27.8924C21.6104 27.5775 21.1839 27.2232 20.7962 26.7902L20.6411 26.6328C20.2147 26.1997 19.8657 25.8061 19.5555 25.4124C18.974 24.6645 18.3536 23.7591 17.7721 22.6963C16.8803 21.0429 16.4538 20.0588 16.2987 19.429C16.26 19.2715 16.2212 19.1141 16.2212 18.9172V18.7598C16.26 18.3661 16.4538 17.9725 16.8028 17.5788C17.2292 17.1064 17.6945 16.7128 18.1985 16.3979C18.7413 16.1223 19.2454 16.201 19.5943 16.6341C19.5943 16.6341 20.2922 17.5001 20.6024 17.9331C20.8738 18.3268 21.2615 18.9566 21.4941 19.3109C21.8431 19.9407 21.6104 20.6099 21.3003 20.8855L20.6024 21.4366C20.2534 21.7121 20.2922 22.2633 20.2922 22.2633C20.2922 22.2633 21.2615 26.1604 25.0999 27.1839Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1125_2596">
<rect width="28" height="30" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>

                      <div className="message-bottom">
                        <p>в Вайбер</p>
                        <input type="radio" />
                         </div>
                     </div>
                </div>
                <div className="num-cont">
                   <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required />
                   <Link to='/'><button onClick={() => clearClicker(setCount)}>Получить варианты в Телеграм</button></Link>
                </div>
            <div className="foot" style={{color: '#fff'}}>
                Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь <br /> c политикой конфиденциальности
            </div> 
          </div>
        </>
    )
}

export default Message