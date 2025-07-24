import Image from "next/image"
import Link from "next/link"

export default function PrivateNavBar() {


    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-200 px-10 gap-4 shadow-2xl mb-28">
            {/* LOGO */}
            <Link
                href="/events"
                className="flex items-center gap-1 hover:scale-150
                duration-500"
            >
                <Image
                    src="/assets/logo.svg"
                    width={60}
                    height={60}
                    alt="Let's talk"
                />

            </Link>
        </nav>
    )
}