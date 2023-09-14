import { create } from "zustand";

export const usePlantsStore = create(set => ({
    plants: [
        {
            img: 'https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1695600000&Signature=mxNEPB~2xsnoECugZGs1HOcq3ydhKRMWjClf-ttNwEI6fL2JxhrTSEo3N96BWVQZEcuJ-FrhyQLrC9SfoanGzqorkK8A~ih1de068wy0kjgrfh9pZTtuOs2wqeb2T-82Q7gv-uk9WO9HFop5-jckCVkZzZFS1eH3IsQulAnAvVXOTe0qIBiQu0DoUg1MQKkuop302ravL9H30bpJX8lMnfsVvx3oR986kxUJ7yDJA6I80VQrN2wMschHBIHqAJ5rrfXa7fAJ0zQPDcriHRKzp8X4q~1nl-5aLT1RLj1BgjO6u7He~L1SEAHG90jnOo8jQHjF74N57kAbm7yI3lgTPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Barberton Daisy',
            price: 119,
            discount: 25,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1695600000&Signature=mwt5Gi1b8ZeNGHnZKGcHEQElzAJYK-zzZ9rqN943Kt~LRcvnTBfSxKTGpN-Vdd-zKd80Qh7lAdSLQ5Brs7kVHNrmv0m54YbETqbuK4Gq2zZhTs-4IBLpSAdSTJ19kxp1VgAI-p2azd4V5ErMSHt3Knm4ZsKhujn81O9Taih~mCrXicWwxNnFhZVilohVv2lowgjpvXarbqNYOU30t8LucF2D33ZaSQ-mjLHsvJ22MfnOab7lKT-bkP9Y1E2pUdMfi8zQzD4IpDndoGhNCJLE0PU4JdA3o12KRDpAv8de7P5DVjQBNfW41kRJTFWdAonQWUDYgXYDjk3IBvll4S05IQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Angel Wing Begonia',
            price: 169,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1695600000&Signature=ThdiMtUO3MqdbVzPb4NuZ492GQG25dKiTAOfkx9fcrrrS16GYz8inHyl4BC7oRO6aWy1YwwK3F-NJo5CjxtGzgpNqqwrbMUzraDNosw4CwjI9P6afKGuPMd7BapVcuMed~7~UFyh-Nu26fPeGeirPQHug0utEGrkNLZct4-o-WdT74pJqGEkfq7g82HoZs-bk-JCkhlN2YmAqMThZghSyQ9j6HpCDRUG4T0brPnayj9iQzq4DFwC3PONUXNKT0~RiJw4tybyK1~U26ednT2o2jVSojZVSytwaDyAJ3SmtxAbuXV9GfUBFwdtlt2RHNv7Ddzdf~ZYEjGGYINvPx-kCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'African Violet',
            price: 229,
            discount: 13,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1695600000&Signature=AgL8JhtHjMlBtCADaH0N8Qnerasm1LHgLKmj9yF6YTdKWaA0fWS01nWAzqdEvhEfYAOsKXCM7KT0eeKnNPVd-oEK-Ld3c6DdeqTtbM6QDo5jcTHzdapjlVcXfAEDSkVdZj9qlWUBnx8N9NV-rIduargPeY0a~uIqT-bkamQON61alIz33M4gbEZb7lrBy7jsxWpiGHKLd5ON7KLpQLQou52gezEvvA71p66suLtuhfTpb0fESRpGrg511zD4jzy4UJkpYZE1UBAHI5Y1gARvuEN2l0vZ2ZM2yVmpyxF5eC7vyHGc3oPj2CYazu2ETW55qpTILOmxDlc~IyR8tHEoPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Beach Spider Lily',
            price: 129,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1695600000&Signature=h-sVcsdK3dER8GpI6q89nACEWVTpJjsjlCOTTT0ZW01BZOLG-Q~947cS7cQi8rpiTuMyQdNnTwUGLDfjOiwgcZRnw4vJqoMbP9GowDNlAIy5QITXnbUxUcHAga~-OTVe03xa~d0ykCD1zZnUJiw8Xu-LLxJTYAtf7W0aXOvWAEKiqSwk~TKzAh-b9kixJOAQre5e~CT965Cztshf-98cNEPtcEUFhHp3cq-SRSuqsijZxlLDj13lmJbhf9GKMlxgdjPxcH6rkSXnph78aQSMGSOrKyC8FBoqUmSJRxThj~S2x82~TaZlBQ13kTV0V2TCVORDmm3i~RLNYH4XJdMiTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Blushing Bromeliad',
            price: 139,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1695600000&Signature=FlPqhHzRMf3Owy46iRb60k9DRtvtYL90dAQu27SBcII5zhT8F9MCWE1hjJLx8KTBXF798YyTpl1Aj1qX~X8AddwhFlFdAAJX-lPEVDjefb4~GBgJxm58voJTE0XWMA66oo9mnK5ktErjH462JFVI0pj0RE9135Xry8W8y7vCJAMHbqsua26Zu6O2yeW1g7IdYjZ8dic-HOksvHfdCeLAakGn3u914OZ8Ngo-FK0ydzlHrE4eAzfY12kg6-xKrQaEkE5QRp3H56UFtnHVYA9jzZnHagYHkG-uOeebHpXmCmhHseoBOvVGDQKRRVo5aQiFkoO7mh3rO2viUi1iecx8BQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Aluminum Plant',
            price: 179,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1695600000&Signature=EIJ1KId3Bk7aa6awoj0l1iTpnP~yngRIoQyQcg6OgQjQ46ry0Xz3sXikvibTaVIcr3aUuaFwD7jh-GZTamtB8zl9JSZAlT9m5H9oRVYLJbPpIUn4M6~WAxckdi8u~exrtASLJquDXEDiD8G78p7cJDszMrOZ2n~eSXKqNZqbeeAvXDoit7v50UHuMYuh66HFgwHZ~RHnPqN6ov9QUhURV6oF9EEAGtmk9ET-gDpl7gzdguyXJEDxUW6kTv8gMzzNlQ5HcNTnRHWFSH2lpgD1rRdKCo0Edz-8hjG4c8GR3gwtiTrCw3~fb97n~dqGC0hHfeg3-nzVCFB~0WVcyXMluQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: `Bird's Nest Fern`,
            price: 99,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1695600000&Signature=RQfn4Y8Nh2Dt3W1x5R5I6RGmjQIKFbnsa58nMvIHkaZl1Ju5Qxveb4JS0v1zOCvRAQXf7OLc0CsKUtRWSo~pM4d-sh40B3hSS2t4NQYcCnTQj8SaBMXY5SeUF0imMEJ4lIzCt3300yzxfDXD2afBltQIyV8~0TFTngpFj9VDGYxvRmf4iRCnm6FZ1M8jf4y3QMZXx-bUK8f--JbLBnG00QT8BCUyRqyNwM6fYVH4RBZ4vikkahbzXm6m4mjUx4s9NCs3z4nABcC0GDvKeXVS02HEvbbNCUx3Q4vx94y9-1RYoveKtAm7PttNiJYyiR8neH9xNS8PbHYNhGzsT74L6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Broadleaf Lady Palm',
            price: 59,
            discount: 99,
            isFavorite: false,
            addedToCart: false
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/5219/e659/b8a1d488abd136ce27f86ab3da3ceb37?Expires=1695600000&Signature=KN-DAFympL56FJh8Bjtd7lOEZNncVdBXeJ0i5SzYAZ3u8ys6GaZR5orgTQx6MjNisBNIVVeReZ4aukb--9e2h7IZInCSTC~bijng13zO4RtTF~wN7gq4Gov-COE-uPR4-nRVfx0PzzHKCiTt2DkuqfCWATLRZkZvqtAFMoYO4wAF1LB8hMzq1b3tWUGNeLKrVCVxWAUKwMP9NyEl9gH8qpeE9UJPbgG4h8wIKWN7QfDeGD5ivGaZVt81YzXwDm3q0nhM1xYuwi6zUYTOeRT7CgLg16mlEr746qCZ5b1lT2v3AGlAZWXinPuOXgD1YomK~~oXQeT-Is6ztJnj7v8Cww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Chinese Evergreen',
            price: 39,
            discount: 0,
            isFavorite: false,
            addedToCart: false
        },
    ],
    addToCart: (index) =>
    set((state) => {
      const updatedPlants = [...state.plants];
      updatedPlants[index].addedToCart = !updatedPlants[index].addedToCart;
      return { plants: updatedPlants };
    }),
    addToFavorites: (index) =>
    set((state) => {
      const updatedPlants = [...state.plants];
      updatedPlants[index].isFavorite = !updatedPlants[index].isFavorite;
      return { plants: updatedPlants };
    }),
}))

export const useBlogsStore = create(set => ({
    blogs: [
        {
            img: 'https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1695600000&Signature=brNz1Vvx6HlcHMYObN1zJPYIj1BGZIiWpalgDB~25V~XXN7d5kqZcqpRg9SaAiAyfctzHP~d1VY47kMoWUgU-7QttlkCiUa1-X2MD6vtd3r3m816X33IupQrwogVl0VAjv-V70Jir9c9hn72GHaHMBA~8LCw8mU-LUPFZJpBj-wSffm7bNEMczD18i-JKQBfWsOK0e9LrszL9LLp9WspTyT449X0kN2NMcql88sq7X~X0kpJ3f-98ZJT7RuxsD5m6NcHrxeZS9geY2II3sCb0up9iKy6C9wdiJeL1ZPYMturT9blwmuxvIwMhgNN7so0Ukww~iSIeeIdx6U-BzEqXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            date: 'September 12',
            readTime: 6,
            title: `Cactus & Succulent 
            Care Tips`,
            desc: 'Cacti are succulents are easy care plants for any home or patio. '
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1695600000&Signature=V4MQBUvZonEKuR3goc58tuFKEK1RQ48pbjhaPBHxdAQMQliJvAJZyndV87oTfm-baTf6STmCct0-ox~XlZ9KQ5MJLw7i5wRSljBf-jYVnapYzqagroG8u9ad7hY1T42r6ghc4HsMZ55bPSnJVnjr1Y55CrLs~uvEWCdzsO03RwEwm30BQZ6Q1e0vfP3x41TjDbeeVc4gOLQUQpD3~Y1jR2bpR~iKuNTXfeAHVNLta00QZyhoib4Pj43ESj5vpPdybvmuS4GNkm3SSuiJFFQIZ-P6W8Wn767sR0mEh-SKri9Ehvpl2-dka~FuEIUSzAnkebS40lEcsO9ag7QjZse7wQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            date: 'September 13',
            readTime: 2,
            title: `Top 10 Succulents for
            Your Home`,
            desc: 'Best in hanging baskets. Prefers medium to high light.'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1695600000&Signature=pxk99EarWXbFzQFIjEFIxFb~CtSPWrSPN1Q2xkLnFip-VFxzGt~o6fzemJMolONDFRxKyJeHfknGGo~O~MLMRAioHRKo3CDUrpOimtpXuHZiW8o0-TmsrSeuXH2S9GBBPk9VDPUijS~ZpbOC2qonFbcSVn9ZzmVneQRZJCZXnfScVe1rRoSNzGRhkaxr8I3WJWau-GDnYdmzBo-uoMS6QGVmqdihR1l8NXytMwskY5M050i1sAVCg8G3Y1WUABHo9gVCv3Ws0WhjKobzuPKmYJfc9XwvCJdoYpeV46c5Wf5SVXE9FVrlipRrvtuStaHKDxXaE1XEoB6JEYBiLtN~SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            date: 'September 14',
            readTime: 3,
            title: `Cacti & Succulent 
            Care Tips`,
            desc: 'Cacti and succulents thrive in containers and because most are..'
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1695600000&Signature=i2N6rIyNhLAcWG5ZP1W1sCdIQCTzhJw4JWF8Gi~iO0UB-YyeR4NJYRrF6egK~OwrVbJ-vIrrtbc86DJ9Rf3RtYe4x8sTKfSYbNchaTFzeFEQXWv5Kzm0twVVTA6oI~2uHctws1gSDHeUkJ~VAPcgGh0tNRxUaz~cy8klAk~3DGIOrPXC6ro2eA~KBuTup9L9bFlTcUPD~dMKEMKA8fOiv0bM~R9Xep~JfEjhDL7TGr3RanBwRJi1Ec6hizcOH7eoT7Vk-jFlkK1i1CecWgGrBEDkK0SGSwfTJG1kAJzWfCmAfUV02r3~JupSpQdhokXtB2v-1Srjkq6HSqCgP5P-eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            date: 'September 15',
            readTime: 2,
            title: `Best Houseplants 
            Room by Room`,
            desc: 'The benefits of houseplants are endless. In addition to..'
        },
    ]
}))

export const useScreenSizeStore = create((set) => ({
  screenSize: getCurrentDimension(),

  updateScreenSize: () => {
    set({ screenSize: getCurrentDimension() });
  },
}));

// Define the getCurrentDimension function
function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}