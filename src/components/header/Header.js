import Image from "next/image"

export default function Header() {
    const downloadLinks = [
        {
            id:1,
            link:"#",
            src:"/head-1.png"
        },
        {
            id:2,
            link:"#",
            src:"/head-2.png"
        },
        {
            id:3,
            link:"#",
            src:"/head-3.png"
        },
        {
            id:4,
            link:"#",
            src:"/head-4.png"
        },
        {
            id:5,
            link:"#",
            src:"/head-5.svg"
        },
    ]

    return (
        <>
            <div className="flex w-full">
                <div className="bg-green-500 text-white pl-32 pr-44 pt-12 flex flex-col gap-8 pb-4 sm:p-4">
                    <h1
                        className="text-4xl font-bold leading-snug"
                    >تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!</h1>
                    <p>
                        از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.
                    </p>
                    <div className="flex items-center gap-4 sm:justify-center">
                        <div className="border-b-2  border-gray-100 flex items-center p-2">
                            <input type="text" className="border-none outline-none bg-inherit " />
                            <div className="w-[10px] h-[10px] bg-gray-200 rounded-full"></div>
                        </div>
                        <button className="bg-white text-green-500 px-4 py-2 rounded">
                            ارسال لینک
                        </button>
                    </div>
                    <button className="border border-white rounded-md px-4 py-4 w-max hover:opacity-90 transition-all sm:w-full sm:bg-white sm:text-black">
                        ورود به وب اپلیکیشن اسنپ
                    </button>
                </div>
                <Image
                    className="w-full -scale-x-100 sm:hidden"
                    src={"/man.jpg"} width={500} height={500} alt="man" />
            </div>
            <div className="flex items-center justify-center gap-8 mt-24 md:grid md:grid-cols-2 md:mt-8 place-items-center">
                {
                    downloadLinks.map(link=>(
                        <Image src={link.src} width={200} height={200}/>
                    ))
                }
            </div>
        </>
    )
}