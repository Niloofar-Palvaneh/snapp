import Image from "next/image"

export default function Needs() {
    const needsData = [
        {
            title: "تاکسی اینترنتی",
            des: "امکان درخواست انلاین خودرو با اسنپ",
            img: "/need/taxi.svg"
        },
        {
            title: "پیک موتوری",
            des: "حمل و نقل با اسنپ",
            img: "/need/bike.svg"
        },
        {
            title: "درخواست وانت",
            des: "حمل و نقل با اسنپ",
            img: "/need/pickup.svg"
        },
        {
            title:"سفارش آنلاین غذا",
            des: "سفارش نان و شیرینی",
            img: "/need/food.svg"
        },
        {
            title: "سوپر مارکت آنلاین",
            des: "تهیه اقلام روزانه با اسنپ",
            img: "/need/spdiscount.png"
        },
        {
            title: "اسنپ اکسپرس",
            des: "تحویل در کمتر از 30 دقیقه",
            img: "/need/spdiscount (1).png"
        },
        {
            title:"بلیت پرواز داخلی",
            des: "گردشگری با اسنپ",
            img: "/need/fdom-t.png"
        },
        {
            title: "بلیت پرواز خارجی",
            des: "گردشگری با اسنپ",
            img: "/need/intflight.svg"
        },
        {
            title: "بیمه",
            des: "خرید آنلاین بیمه",
            img: "/need/insdiscount.png"
        },
        {
            title:"رزرو هتل",
            des: "گردشگری با اسنپ",
            img: "/need/hotel.svg"
        },
        {
            title: "رزرو اقامتگاه",
            des: "گردشگری با اسنپ",
            img: "/need/hotel (1).svg"
        },
        {
            title: "پزشک و مشاور",
            des: "درمان با اسنپ",
            img: "/need/doctor.svg"
        },
    ]

    return (
        <>

            <div className="bg-gray-100 flex flex-col items-center justify-center pt-8 mt-12 w-full">
                <h2 className="p-12 text-3xl font-bold">
                    یک اپلیکیشن برای تمام نیازها
                </h2>
                <div className=" grid grid-cols-3 place-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {
                    needsData.map(need => (
                        <div className="bg-white w-[350px] flex items-start gap-2  p-4 rounded-xl">
                            <Image src={need.img} width={60} height={60} alt="..." />
                            <div className="">
                                <h4>
                                    {need.title}
                                </h4>
                                <p>
                                    {need.des}
                                </p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}