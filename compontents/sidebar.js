import Image from "next/image";
import Link from "next/link"
import s from "./comp.module.css";


const Sidebar = ()=>{
  return (
      <aside className={s.sideBar}>
          <div className={s.question}>
            <Link href="/fatwa/ask">
              <h3>اطرح سؤالك</h3>
            </Link>
          </div>
          <div className={s.socialMedia}>
            <h3>تابعنا على</h3>
            <div className={s.socialMediaIcons}>
              <Link href={"https://www.instagram.com/"}>
                <Image src="/icons/instagram.png" width={30} height={30} />
              </Link>
              <Link href={"https://www.facebook.com/"}>
                <Image src="/icons/facebook.png" width={30} height={30} />
              </Link>
              <Link href={"https://web.whatsapp.com/"}>
                <Image src="/icons/whatsapp.png" width={30} height={30} />
              </Link>
              <Link href={"https://www.youtube.com/"}>
                <Image src="/icons/youtube.png" width={30} height={30} />
              </Link>
            </div>
          </div>
          <Link href="/fatwa">المزيد</Link>
        </aside>
  )
}

export default Sidebar