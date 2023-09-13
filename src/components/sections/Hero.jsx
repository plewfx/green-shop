import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="pt-12">
            <div className="container grid grid-cols-2 pt-68 pb-85 pl-43 bg-[linear-gradient(98deg,_rgba(245,245,245,0.50)_-23.46%,_rgba(245,245,245,0.50)_107.51%)]">
                <div className="flex flex-col items-start gap-55">
                    <div className="flex flex-col gap-9">
                        <span className="text-14 font-medium uppercase">Welcome to GreenShop</span>
                        <div className="flex flex-col gap-7">
                            <h1 className="text-[4.86vw] font-black uppercase leading-90">Let’s Make a Better <span className="text-primary">Planet</span></h1>
                            <p className="leading-170">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        </div>
                    </div>
                    <Link className="text-16 font-bold text-white px-25 py-9 rounded-6 bg-primary hover:bg-primaryHover">SHOP NOW</Link>
                </div>
                <div className="relative">
                    <div className="absolute -bottom-[7vw] left-[5vw] bg-image bg-[url('https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1695600000&Signature=AgL8JhtHjMlBtCADaH0N8Qnerasm1LHgLKmj9yF6YTdKWaA0fWS01nWAzqdEvhEfYAOsKXCM7KT0eeKnNPVd-oEK-Ld3c6DdeqTtbM6QDo5jcTHzdapjlVcXfAEDSkVdZj9qlWUBnx8N9NV-rIduargPeY0a~uIqT-bkamQON61alIz33M4gbEZb7lrBy7jsxWpiGHKLd5ON7KLpQLQou52gezEvvA71p66suLtuhfTpb0fESRpGrg511zD4jzy4UJkpYZE1UBAHI5Y1gARvuEN2l0vZ2ZM2yVmpyxF5eC7vyHGc3oPj2CYazu2ETW55qpTILOmxDlc~IyR8tHEoPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-[36vw] h-[36vw] "></div>
                    <div className="absolute -bottom-[4.5vw] left-[7vw] bg-image bg-[url('https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1695600000&Signature=AgL8JhtHjMlBtCADaH0N8Qnerasm1LHgLKmj9yF6YTdKWaA0fWS01nWAzqdEvhEfYAOsKXCM7KT0eeKnNPVd-oEK-Ld3c6DdeqTtbM6QDo5jcTHzdapjlVcXfAEDSkVdZj9qlWUBnx8N9NV-rIduargPeY0a~uIqT-bkamQON61alIz33M4gbEZb7lrBy7jsxWpiGHKLd5ON7KLpQLQou52gezEvvA71p66suLtuhfTpb0fESRpGrg511zD4jzy4UJkpYZE1UBAHI5Y1gARvuEN2l0vZ2ZM2yVmpyxF5eC7vyHGc3oPj2CYazu2ETW55qpTILOmxDlc~IyR8tHEoPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-[9.35vw] h-[9.35vw] "></div>
                    <svg className="absolute -bottom-[5vw]" xmlns="http://www.w3.org/2000/svg" width="40" height="8" viewBox="0 0 40 8" fill="none">
                        <circle cx="20" cy="4" r="4" fill="#46A358"/>
                        <circle cx="36" cy="4" r="4" fill="#46A358" fillOpacity="0.3"/>
                        <circle cx="4" cy="4" r="4" fill="#46A358" fillOpacity="0.3"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero