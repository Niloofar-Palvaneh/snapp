import Image from "next/image"

export default function Des() {

    const best = [
        {
            img: "/11.png",
            title: "آسان",
            des: "برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید."
        },
        {
            img: "/22.png",
            title: "سریع",
            des: "قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست."
        },
        {
            img: "/33.png",
            title: "به صرفه",
            des: "سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید."
        },
    ]

    return (
        <>
            <div className="mt-24 sm:mt-12">
                <div className="flex items-center justify-center w-full">
                    <Image
                        className="w-[70%] rounded sm:w-[90%]"
                        src={"/Food.jpg"} width={400} height={300} alt="..." />
                </div>
                <div className="mt-24 sm:mt-12 flex gap-8 sm:flex-col w-full sm:gap-0">
                    <Image
                        className="w-[50%] sm:w-[100%]"
                        src={"/super-app.jpg"} width={200} height={200} alt="..." />
                    <div className="w-[30%] flex flex-col gap-8 mt-4 sm:w-full sm:p-2">
                        <h2 className="font-bold text-2xl">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h2>
                        <p className="text-gray-500 text-sm leading-[28px]">
                            اسنپ، اولین تاکسی اینترنتی ایران،
                            بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا،
                            پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.
                        </p>
                    </div>
                </div>
                <div className="flex sm:flex-col items-start justify-center gap-12 -mt-[64px] sm:mt[64px]">
                    {
                        best.map(item => (
                            <div className="w-[20%] flex flex-col gap-4 sm:gap-2 sm:w-full mt-24 ">
                                <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center ">
                                    <Image src={item.img} width={150} height={150} alt=".." />
                                </div>
                                <div className="flex flex-col gap-2 sm:p-2 ">
                                    <h4 className="text-xl font-bold">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-[28px]">
                                        {item.des}
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