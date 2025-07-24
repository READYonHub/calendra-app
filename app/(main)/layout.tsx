import PrivateNavBar from "@/components/PrivateNavBar"
import PublicNavBar from "@/components/PublicNavBar"
import { currentUser } from "@clerk/nextjs/server"

export default async function MainLayout({
    children }: {
        children: React.ReactNode
    }) {

    const user = await currentUser()

    return (
        <main className="relative">
            {/**Render Private Navbar if user exists, otherwise Public Navbar */}
            {user ? <PrivateNavBar /> : <PublicNavBar />}

            {/* Render the childre */}
            <section className="pt-36">
                {/* All the pages inside of it */}
                {children}
            </section>
        </main>
    )
}