import Slider from '@mui/material/Slider';
import React, { useState } from 'react';

const Category = ({ name, count }) => {
    const [ selected, setSelected ] = useState(false)
    return (
        <button onClick={() => setSelected(prev => !prev)} className={"flex items-center justify-between " + (selected ? 'text-primary' : null)}>
            <span className={"text-15 " + (selected ? 'font-bold' : null)}>{name}</span>
            <span className={"text-15 " + (selected ? 'font-bold' : null)}>({count})</span>
        </button>
    )
}

const categories = [
    {
        name: 'House Plants',
        count: 33,
    },
    {
        name: 'Potter Plants',
        count: 12,
    },
    {
        name: 'Smalls Plants',
        count: 65,
    },
    {
        name: 'Big Plants',
        count: 33,
    },
    {
        name: 'Succulents',
        count: 23,
    },
    {
        name: 'Trerrariums',
        count: 33,
    },
    {
        name: 'Gardening',
        count: 3,
    },
    {
        name: 'Accessories',
        count: 18,
    },
]

function valuetext(value) {
  return `$${value}`;
}

const Plants = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <section className='mt-[3.2vw]'>
            <div className="container grid grid-cols-[25fr_75fr]">
                <div className="flex flex-col bg-grey-FB">
                    <div className="flex flex-col gap-36 pl-18 pr-24">
                        <div className="flex flex-col gap-15 pt-14">
                            <h5 className='text-18 font-bold'>Categories</h5>
                            <div className="flex flex-col gap-20 pl-12">
                                {
                                    categories.map(category => {
                                        return (
                                            <Category
                                                key={category.name}
                                                name={category.name}
                                                count={category.count}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-20">
                            <h5 className='text-18 font-bold'>Price Range</h5>
                            <div className="flex flex-col items-start gap-15 pl-12">
                                <Slider
                                    className='w-[15vw]'
                                    getAriaLabel={() => ''}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    color='primary'
                                    size='medium'
                                />
                                <label className='text-15 font-bold'>Price: <span className='text-primary'>${value[0]} - ${value[1]}</span></label>
                                <button className='bg-primary hover:bg-primaryHover py-8 px-25 text-16 font-bold rounded-6 leading-125 text-white'>Filter</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-15 pt-14 pb-19">
                            <h5 className='text-18 font-bold'>Size</h5>
                            <div className="flex flex-col gap-20 pl-12">
                                {
                                    [
                                        {
                                            name: 'Small',
                                            count: 119,
                                        },
                                        {
                                            name: 'Medium',
                                            count: 86,
                                        },
                                        {
                                            name: 'Large',
                                            count: 78,
                                        },
                                    ].map(size => {
                                        const [ selected, setSelected ] = useState(false)

                                        return (
                                            <button key={size.name} onClick={() => setSelected(prev => !prev)} className={"flex items-center justify-between " + (selected ? 'text-primary' : null)}>
                                                <span className={"text-15 " + (selected ? 'font-bold' : null)}>{size.name}</span>
                                                <span className={"text-15 " + (selected ? 'font-bold' : null)}>({size.count})</span>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center bg-[linear-gradient(180deg,_rgba(70,163,88,0.10)_0%,_rgba(70,163,88,0.03)_100%)] overflow-hidden">
                        <h2 className='font-hanging text-65 text-primary text-center'>Super Sale</h2>
                        <p className='text-23 leading-70 font-bold'>UP TO 75% OFF</p>
                        <div className="bg-image bg-[url('https://s3-alpha-sig.figma.com/img/5e3c/6700/3f4b62655ec5dd62c1a46641197d5bbf?Expires=1695600000&Signature=nhw0uBv1LS1wpXzWSV0j1craO9NXNmBC5wImtmNE1KzwmaVpJFy0Nxp6SKJCaVHaumWwuRriZb0xKzqklmOAFeAaB~gLkstigpNMrlXB2RRygSyZF~pz~kWFeP998ByZ4MPifW6GRcVIpg0HGGTkxYqopy1yF9NY6YlKBuUdiqARiUlPGUf8tVPDvMeSZkMQmAcCmJ1QQ4QH00aRYa6dliJThuDpqBMi9qBKWTaDI0fJK5SuxaVyIa~VjKqByemLpb0S9wWfEpZ8zt98IpJUVLGZSK0YuwsPplgHtXwVIGim6FwQdmiheYkzUKk7UjoBRuMIsvaUxCNwYWofe2kDsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] h-[25.69vw] w-[21.52vw] mix-blend-multiply"></div>
                        <div className="absolute top-[7.3vw] left-[2.6vw] w-[1vw] h-[1vw] rounded-circle bg-[linear-gradient(145deg,_rgba(70,163,88,0.30)_-46.09%,_rgba(70,163,88,000)_103.28%)]"></div>
                        <div className="absolute bottom-[7.3vw] left-[1.2vw] w-[1.52vw] h-[1.52vw] rounded-6 border-2 border-primary opacity-20"></div>
                        <div className="absolute bottom-[5.3vw] right-[1.2vw] w-[3.125vw] h-[3.125vw] rounded-circle bg-[linear-gradient(145deg,_rgba(70,163,88,0.30)_-46.09%,_rgba(70,163,88,000)_103.28%)]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plants