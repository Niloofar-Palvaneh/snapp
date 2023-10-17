import Image from "next/image"

export default function LoginDes() {

    const mainItems = [
        {
            title: " درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
            des: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
            img: "/main1.png"
        },
        {
            title: "ساعت کاری دلخواه",
            des: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
            img: "/main2.png"
        },
        {
            title: "مزایا و خدمات باشگاه رانندگان",
            des: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
            img: "/main3.png"
        },
        {
            title: "کار‌فیکس",
            des: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
            img: "/main4.png"
        }
    ]

    return (
        <>
            <div className="bg-gray-100 w-full items-center justify-center mt-12 pt-8 pb-12">
                <div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-xl font-bold ">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h2>
                        <p className="text-gray-500 text-sm">
                            بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید
                        </p>
                        <button className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 text-md rounded-xl mt-2">
                            ثبت نام رانندگان
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-12">
                        <video
                            className="w-[60%] sm:w-full"
                            src="/video.mp4" poster="/poster.webp" controls={true}>
                        </video>
                    </div>
                    <div className="flex items-center justify-center mt-24 ">
                        <div className="grid grid-cols-2 gap-8 place-items-center w-[63%] sm:grid-cols-1 sm:w-[90%] md:grid-cols-1 md:w-[95%] xl:w-[99%]">
                            {
                                mainItems.map(item => (
                                    <div className="bg-white p-4 rounded-xl w-[420px] h-[150px] sm:w-full sm:h-auto ">
                                        <div className="flex items-center ">
                                            <Image src={item.img} width={95} height={90} alt="..." />
                                            <div>
                                                <h5 className="font-bold mb-4">{item.title}</h5>
                                                <p className="text-sm text-gray-500">{item.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}