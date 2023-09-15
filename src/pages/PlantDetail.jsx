import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { usePlantsStore } from "../useStore"
import { useState } from "react"
import Plant from "../components/Plant"

const PlantDetail = () => {
    const params = useParams()
    const plants = usePlantsStore((state) => state.plants)
    const addToFavorites = usePlantsStore((state) => state.addToFavorites)
    
    const currPlant = plants.filter((plant) => plant.name.toLowerCase().replace(/\s/g, '-') == params.id)
    const { images, name, price, discount, isFavorite, addedToCart, reviews } = currPlant[0]
    const [bigPlantImg, setBigPlantImg] = useState(currPlant[0].images[0])
    const currentPrice = price - (price * (discount / 100))
    const [size, setSize] = useState(0)
    const [count, setCount] = useState(1)
    const sizes = ['S', 'L', 'M', 'XL']

    return (
        <>
            <section className="mt-36">
                <div className="container">
                    <div className="flex gap-4 mb-43 text-15 cursor-pointer">
                        <Link to='/green-shop/' className="font-bold">Home</Link>
                        /
                        <Link to='..' relative="path">Shop</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-x-50 mb-93">
                        <div className="flex gap-30">
                            <div className="flex flex-col justify-between">
                                {
                                    images.map((image, index) => {
                                        return (
                                            <div onClick={() => setBigPlantImg(image)} key={index} className="bg-grey-FB cursor-pointer">
                                                <div className={"bg-image w-100 h-[7vw] mix-blend-multiply border-1 border-" + ((bigPlantImg === image) ? 'primary' : 'transparent')} style={{backgroundImage: `url('${image}')`}}>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="bg-grey-FB w-[100%] flex items-center justify-center">
                                <div className='bg-image w-[28.05vw] h-[100%] mix-blend-multiply' style={{backgroundImage: `url(${bigPlantImg})`}}></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-25">
                            <div className="flex flex-col gap-15">
                                <div className="flex flex-col gap-20 pb-13 border-b-[0.02vw] border-[rgba(70,163,88,0.50)]">
                                    <h3 className="text-28 font-bold leading-50">{name}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-10">
                                            <span className='font-bold text-22 text-primary'>${currentPrice.toFixed(2)}</span>
                                            {
                                                currentPrice === price || <span className='text-22 text-grey-A5 line-through'>${price}.00</span>
                                            }
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <div className="flex items-center gap-4">
                                                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08444 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z" fill="#FFAC0C"/>
                                                </svg>
                                                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08444 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z" fill="#FFAC0C"/>
                                                </svg>
                                                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08444 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z" fill="#FFAC0C"/>
                                                </svg>
                                                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08444 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z" fill="#FFAC0C"/>
                                                </svg>
                                                <svg className="w-[1vw]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <path d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08444 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z" fill="#C4C4C4"/>
                                                </svg>
                                            </div>
                                            <span className="text-15">19 Customer Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <h4 className="text-15 font-medium">Short Description:</h4>
                                    <p className="text-14 leading-170">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-26">
                                <div className="flex flex-col gap-10">
                                    <h4 className="font-bold text-15">Size:</h4>
                                    <div className="flex gap-10">
                                        {
                                            sizes.map((s, i) => {
                                                return (
                                                    <button onClick={() => setSize(prev => prev = i)} key={i} className={`flex items-center justify-center w-[1.94vw] h-[1.94vw] rounded-circle border-[0.1vw] text-18 font-bold text-14 ${size === i ? 'text-primary border-primary' : 'text-grey-72 border-grey-EA'}`}>{s}</button>
                                                )
                                            }) 
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center gap-26">
                                    <div className="flex items-center gap-20 h-[100%]">
                                        <button onClick={() => setCount(prev => --prev)} className="bg-primary hover:bg-primaryHover h-[100%] w-[2.3vw] text-white rounded-circle disabled:opacity-50" disabled={count === 1}>-</button>
                                        <span className="text-20 leading-50">{count}</span>
                                        <button onClick={() => setCount(prev => ++prev)} className="bg-primary hover:bg-primaryHover h-[100%] w-[2.3vw] text-white rounded-circle disabled:opacity-50" disabled={count === 10}>+</button>
                                    </div>
                                    <div className="flex gap-10 items-center h-[2.77vw]">
                                        <button className="flex items-center justify-center text-white text-14 font-bold bg-primary hover:bg-primaryHover w-[9vw] h-[100%] uppercase rounded-6">Buy NOW</button>
                                        <button className="flex items-center justify-center text-primary text-14 font-bold bg-white border-1 border-primary hover:border-primaryHover w-[9vw] h-[100%] hover:text-primaryHover uppercase rounded-6">{addedToCart ? 'in cart' : 'Add to cart'}</button>
                                        <button onClick={() => addToFavorites(params.id)} className="flex items-center justify-center bg-white border-1 border-primary hover:border-primaryHover w-[2.7vw] h-[100%] rounded-6">
                                            <svg className="w-[1.4vw]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                {
                                                    addToFavorites ?
                                                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#46A358"/> :
                                                    <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" fill="#46A358"/>
                                                }
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-18">
                                    <div className="flex flex-col gap-10">
                                        <p className="text-15 text-grey-A5">SKU: <span className="text-grey-72">1995751877966</span></p>
                                        <p className="text-15 text-grey-A5">Categories: <span className="text-grey-72">Potter Plants</span></p>
                                        <p className="text-15 text-grey-A5">Tags: <span className="text-grey-72">Home, Garden, Plants</span></p>
                                    </div>
                                    <div className="flex items-center gap-16">
                                        <p className="font-medium text-15">Share this products:</p>
                                        <div className="flex items-center gap-20">
                                            <svg className="h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                                                <path d="M1.875 5H0V7.5H1.875V15H5V7.5H7.25L7.5 5H5V3.9375C5 3.375 5.125 3.125 5.6875 3.125H7.5V0H5.125C2.875 0 1.875 1 1.875 2.875V5Z" fill="#3D3D3D"/>
                                            </svg>
                                            <svg className="h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                                                <path d="M4.71737 12.1908C10.378 12.1908 13.4736 7.50111 13.4736 3.4346C13.4736 3.30135 13.4709 3.1688 13.4647 3.03675C14.0656 2.60239 14.588 2.06021 15 1.44331C14.4486 1.6883 13.8552 1.85327 13.2327 1.92765C13.868 1.54669 14.356 0.94378 14.5861 0.225197C13.9914 0.577835 13.3329 0.834082 12.632 0.972271C12.0702 0.374134 11.2704 0 10.3855 0C8.68578 0 7.30747 1.37831 7.30747 3.07718C7.30747 3.31876 7.3346 3.55351 7.38715 3.77887C4.82962 3.65041 2.56162 2.42565 1.04392 0.563675C0.779318 1.01833 0.626969 1.54686 0.626969 2.11037C0.626969 3.17801 1.17034 4.12059 1.99658 4.67216C1.49176 4.65663 1.01748 4.51776 0.602743 4.2871C0.602061 4.2999 0.602061 4.31286 0.602061 4.32634C0.602061 5.81691 1.66305 7.06129 3.07104 7.3433C2.81257 7.41376 2.54063 7.45163 2.25982 7.45163C2.06158 7.45163 1.86879 7.43184 1.6813 7.39619C2.07301 8.61873 3.20923 9.5086 4.55632 9.53368C3.50284 10.3592 2.17588 10.8511 0.734108 10.8511C0.48588 10.8511 0.240893 10.8369 0 10.8084C1.36193 11.6812 2.97908 12.1908 4.71737 12.1908Z" fill="#3D3D3D"/>
                                            </svg>
                                            <svg className="h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M3.125 1.5625C3.125 2.4375 2.4375 3.125 1.5625 3.125C0.6875 3.125 0 2.4375 0 1.5625C0 0.6875 0.6875 0 1.5625 0C2.4375 0 3.125 0.6875 3.125 1.5625ZM3.125 4.375H0V14.375H3.125V4.375ZM8.125 4.375H5V14.375H8.125V9.125C8.125 6.1875 11.875 5.9375 11.875 9.125V14.375H15V8.0625C15 3.125 9.4375 3.3125 8.125 5.75V4.375Z" fill="#3D3D3D"/>
                                            </svg>
                                            <svg className="h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 1.09091C6.30168 1.09091 3.98846 1.2365 2.51951 1.34356C2.03167 1.37911 1.65385 1.76529 1.65385 2.23696V2.76996L7.53304 5.85802C7.82344 6.01056 8.17656 6.01056 8.46697 5.85802L14.3462 2.76996V2.23696C14.3462 1.76529 13.9683 1.37911 13.4805 1.34356C12.0115 1.2365 9.69833 1.09091 8 1.09091ZM14.3462 4.01792L9.02732 6.81165C8.38843 7.14723 7.61157 7.14723 6.97268 6.81165L1.65385 4.01792V9.76304C1.65385 10.2347 2.03167 10.6209 2.51951 10.6564C3.98846 10.7635 6.30168 10.9091 8 10.9091C9.69833 10.9091 12.0115 10.7635 13.4805 10.6564C13.9683 10.6209 14.3462 10.2347 14.3462 9.76304V4.01792ZM2.43083 0.255877C3.90066 0.148756 6.25301 0 8 0C9.74699 0 12.0993 0.148756 13.5692 0.255877C14.6676 0.335933 15.5 1.20441 15.5 2.23696V9.76304C15.5 10.7956 14.6676 11.6641 13.5692 11.7441C12.0993 11.8512 9.747 12 8 12C6.25301 12 3.90066 11.8512 2.43083 11.7441C1.33237 11.6641 0.5 10.7956 0.5 9.76304V2.23696C0.5 1.20441 1.33237 0.335933 2.43083 0.255877Z" fill="#3D3D3D"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-92 mb-[8.8vw]">
                <div className="container flex flex-col gap-18">
                    <nav className="border-[rgba(70,163,88,0.50)] border-b-[0.02vw] pb-12">
                        <ul className="flex gap-30">
                            <li>
                                <NavLink className='navlink text-17 pb-12' style={({isActive}) => isActive ? {fontWeight: '700', borderBottom: '0.2vw solid #46A358', color: '#46A358'} : null} end to='.'>Product Description</NavLink>
                            </li>
                            <li>
                                <NavLink to='reviews' className='navlink text-17 pb-12' style={({isActive}) => isActive ? {fontWeight: '700', borderBottom: '0.2vw solid #46A358', color: '#46A358'} : null}>Reviews ({reviews})</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </section>
            <section className="mb-118">
                <div className="container flex flex-col gap-40">
                    <div className="flex pb-12 border-b-1 border-[rgba(70,163,88,0.50)]">
                        <h4 className="font-bold text-17 text-primary">Releted Products</h4>
                    </div>
                    <div className="flex gap-30 overflow-y-scroll">
                        {
                            plants.map((plant, index) => {
                                return (
                                    <Plant
                                        key={index}
                                        index={index}
                                        plant={plant}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlantDetail