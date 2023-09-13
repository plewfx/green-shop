import { Link } from "react-router-dom"

const Article = ({ img, name, desc }) => {
  return (
    <div className="relative grid grid-cols-2 items-center justify-center px-30 h-[17.36vw] bg-grey-FB">
        <svg className="absolute bottom-0 left-0 w-[4.5vw]" width="65" height="116" viewBox="0 0 65 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-63" cy="136" r="127" stroke="#46A358" strokeWidth="2"/>
            <circle cx="-71" cy="128" r="127.5" stroke="#46A358"/>
        </svg>
        <div className="mb-[3vw] bg-image h-[100%] mix-blend-multiply" style={{backgroundImage: `url('${img}')`}}>

        </div>
        <div className="flex flex-col items-end gap-15">
            <div className="flex flex-col gap-10 text-right">
                <h4 className="font-black text-18 leading-125 uppercase">{name}</h4>
                <p className="leading-170">{desc}</p>
            </div>
            <Link className="flex items-center gap-[0.4vw] rounded-6 font-medium text-14 text-white px-[2vw] py-10 px bg-primary hover:bg-primaryHover">
                Find more
                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M12.8126 5.79419L1.56258 5.79419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.27485 1.27587C8.27485 1.27587 12.8123 3.72162 12.8123 5.79312C12.8123 7.86612 8.27485 10.3126 8.27485 10.3126" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default Article