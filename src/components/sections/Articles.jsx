import React from 'react'
import Article from '../Article'

const articles = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1695600000&Signature=h-sVcsdK3dER8GpI6q89nACEWVTpJjsjlCOTTT0ZW01BZOLG-Q~947cS7cQi8rpiTuMyQdNnTwUGLDfjOiwgcZRnw4vJqoMbP9GowDNlAIy5QITXnbUxUcHAga~-OTVe03xa~d0ykCD1zZnUJiw8Xu-LLxJTYAtf7W0aXOvWAEKiqSwk~TKzAh-b9kixJOAQre5e~CT965Cztshf-98cNEPtcEUFhHp3cq-SRSuqsijZxlLDj13lmJbhf9GKMlxgdjPxcH6rkSXnph78aQSMGSOrKyC8FBoqUmSJRxThj~S2x82~TaZlBQ13kTV0V2TCVORDmm3i~RLNYH4XJdMiTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: `Summer cactus
        & succulents`,
        desc: 'We are an online plant shop offering a wide range of cheap and trendy plants'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1695600000&Signature=ThdiMtUO3MqdbVzPb4NuZ492GQG25dKiTAOfkx9fcrrrS16GYz8inHyl4BC7oRO6aWy1YwwK3F-NJo5CjxtGzgpNqqwrbMUzraDNosw4CwjI9P6afKGuPMd7BapVcuMed~7~UFyh-Nu26fPeGeirPQHug0utEGrkNLZct4-o-WdT74pJqGEkfq7g82HoZs-bk-JCkhlN2YmAqMThZghSyQ9j6HpCDRUG4T0brPnayj9iQzq4DFwC3PONUXNKT0~RiJw4tybyK1~U26ednT2o2jVSojZVSytwaDyAJ3SmtxAbuXV9GfUBFwdtlt2RHNv7Ddzdf~ZYEjGGYINvPx-kCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: `Styling Trends
        & much more`,
        desc: 'We are an online plant shop offering a wide range of cheap and trendy plants'
    },
]

const Articles = () => {
  return (
    <section className='my-[7vw]'>
        <div className="container flex gap-26 items-center">
            {
                articles.map(article => {
                    return (
                        <Article
                            key={article.name}
                            img={article.img}
                            name={article.name}
                            desc={article.desc}
                        />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Articles