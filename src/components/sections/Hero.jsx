import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="mt-12 sm:mt-[0vw]">
            <div className="container grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 pt-68 sm:pt-[8vw] pb-85 sm:pb-[10vw] pl-43 sm:pr-[3vw] bg-[linear-gradient(98deg,_rgba(245,245,245,0.50)_-23.46%,_rgba(245,245,245,0.50)_107.51%)] sm:gap-93">
                <div className="flex flex-col items-start gap-55">
                    <div className="flex flex-col gap-9 sm:gap-20">
                        <span className="text-14 sm:text-[2vw] font-medium uppercase">Welcome to GreenShop</span>
                        <div className="flex flex-col gap-7 sm:gap-15">
                            <h1 className="text-[4.86vw] sm:text-[10vw] font-black uppercase leading-90">Let’s Make a Better <span className="text-primary">Planet</span></h1>
                            <p className="leading-170">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        </div>
                    </div>
                    <Link className="text-16 sm:text-[2.3vw] font-bold text-white px-25 sm:px-[3.4vw] py-9 sm:py-[1.8vw] rounded-6 sm:rounded-15 bg-primary hover:bg-primaryHover">SHOP NOW</Link>
                </div>
                <div className="relative">
                    <div className="absolute -bottom-[7vw] left-[5vw] sm:left-[10vw] bg-image bg-[url('https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1695600000&Signature=AgL8JhtHjMlBtCADaH0N8Qnerasm1LHgLKmj9yF6YTdKWaA0fWS01nWAzqdEvhEfYAOsKXCM7KT0eeKnNPVd-oEK-Ld3c6DdeqTtbM6QDo5jcTHzdapjlVcXfAEDSkVdZj9qlWUBnx8N9NV-rIduargPeY0a~uIqT-bkamQON61alIz33M4gbEZb7lrBy7jsxWpiGHKLd5ON7KLpQLQou52gezEvvA71p66suLtuhfTpb0fESRpGrg511zD4jzy4UJkpYZE1UBAHI5Y1gARvuEN2l0vZ2ZM2yVmpyxF5eC7vyHGc3oPj2CYazu2ETW55qpTILOmxDlc~IyR8tHEoPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-[36vw] h-[36vw] sm:w-[72vw] sm:h-[72vw]"></div>
                    <div className="absolute -bottom-[4.5vw] sm:-bottom-[2vw] left-[7vw] sm:left-[12vw] bg-image bg-[url('https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1695600000&Signature=AgL8JhtHjMlBtCADaH0N8Qnerasm1LHgLKmj9yF6YTdKWaA0fWS01nWAzqdEvhEfYAOsKXCM7KT0eeKnNPVd-oEK-Ld3c6DdeqTtbM6QDo5jcTHzdapjlVcXfAEDSkVdZj9qlWUBnx8N9NV-rIduargPeY0a~uIqT-bkamQON61alIz33M4gbEZb7lrBy7jsxWpiGHKLd5ON7KLpQLQou52gezEvvA71p66suLtuhfTpb0fESRpGrg511zD4jzy4UJkpYZE1UBAHI5Y1gARvuEN2l0vZ2ZM2yVmpyxF5eC7vyHGc3oPj2CYazu2ETW55qpTILOmxDlc~IyR8tHEoPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] w-[9.35vw] h-[9.35vw] sm:w-[18vw] sm:h-[18vw]"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero