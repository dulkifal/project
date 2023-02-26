import Image from "next/image";
import Link from "next/link"
import s from "./comp.module.css";


const Sidebar = ()=>{
  return (
      <aside className={s.sideBar}>
          <div className={s.question}>
            <Link href="/fatwa/ask">
              <h3>إن لم وجدت ما في نفسك هنا، فليسرع بسؤال</h3>
            </Link>
          </div>
          <div className={s.question}>
            <Link href="https://t.me/dulkifal">
              {/* share telgram */}
             
              <h3>إن أردت نشر مقالتك اتصل بالمسؤول  في تلكرام </h3>
            </Link>
          </div>
          <div className={s.socialMedia}>
            <h3>تابعنا على</h3>
            <div className={s.socialMediaIcons}>
              <Link href={"https://www.instagram.com/dhiufiqdep/"}>
                <Image src="/icons/instagram.png" width={30} height={30} alt='instagram icon' />
              </Link>
              <Link href={"https://www.facebook.com/"}>
                <Image src="/icons/facebook.png" width={30} height={30} alt='facebook icon'/>
              </Link>
              <Link href={"https://wa.me/918089112587/"}>
                <Image src="/icons/whatsapp.png" width={30} height={30} alt='whatsapp icon' />
              </Link>
              <Link href={"https://www.youtube.com/channel/UCQNaejvitIOx1dAYhf83FWQ"}>
                <Image src="/icons/youtube.png" width={30} height={30} alt='youtube icon' />
              </Link>
            </div>
          </div>
          <Link href="/fatwa">المزيد</Link>
        </aside>
  )
}

export default Sidebar