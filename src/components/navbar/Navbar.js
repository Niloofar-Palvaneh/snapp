import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [isShowMoblieMenu, setIsShowMoblieMenu] = useState(false)
    const showMobileMenuHandler = () => {
        setIsShowMoblieMenu(!isShowMoblieMenu)
    }

    const navItems = [
        {
            id: 1,
            name: "فرصت های شغلی"
        },
        {
            id: 2,
            name: "بلاگ"
        },
        {
            id: 3,
            name: "باشگاه رانندگان"
        },
        {
            id: 4,
            name: "ثبت نام راننده اسنپ"
        },
        {
            id: 5,
            name: "پنل سازمانی"
        },
        {
            id: 6,
            name: "درباره ما"
        },
        {
            id: 7,
            name: "تماس با ما"
        },
    ]

    return (
        <>
            <nav>
                <div>
                    <ul className="flex px-44 py-8 items-center gap-8 xl:px-24 md:px-2 sm:px-8 sm:justify-between ">
                        <div >
                            <div className="hidden sm:inline"
                                onClick={showMobileMenuHandler}
                            >
                                <button className="relative group">
                                    <div
                                        className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-green-500 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                                            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                                            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
                                            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div id="docs-sidebar" className={`
                            -translate-x-full  border border-r-4 
                             fixed top-0 left-0 bottom-0 z-[60] w-full bg-green-50
                              pt-7 pb-10 overflow-y-auto scrollbar-y ${isShowMoblieMenu ? "block left-[50%]" : "hidden"}`}>
                                <div className="px-6 flex flex-col gap-12">
                                    <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
                                    <div className="flex flex-col gap-4 text-gray-500">
                                        {
                                            navItems.map(item => (
                                                <Link href={"#"} >
                                                    {item.name}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Link href={"/"}>
                            <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
                        </Link>
                        {
                            navItems.map(item => (
                                <Link href={"#"} className="text-gray-500 hover:text-green-500 transition ease-in-out delay-150
                                                             sm:hidden">
                                    {item.name}
                                </Link>
                            ))
                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}