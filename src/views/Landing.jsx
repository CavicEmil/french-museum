import Hero from "../components/Hero"
export default function Landing() {
    return (
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 font-sans text-black md:px-10 lg:px-16 lg:py-10">
            <div className="pt-4 text-[length:var(--font-size-body)]">
                <Hero />
            </div>

            <div className="mt-auto flex flex-col items-center justify-center gap-6 pb-6 pt-20 text-center lg:pt-28">
                <div className="grid grid-cols-2 gap-x-20 gap-y-1 text-[clamp(2rem,3vw,2rem)] font-[var(--font-weight-accent)] italic leading-[1.05] text-black">
                    <p>Tirsdag 11-18</p>
                    <p>Fredag 11-18</p>
                    <p>Onsdag 11-18</p>
                    <p>Lørdag 11-18</p>
                    <p>Torsdag 11-20</p>
                    <p>Søndag 11-18</p>
                </div>
                <h2 className="text-[clamp(2rem,2.8vw,3rem)] font-[var(--font-weight-bold)] text-black">
                    Fri entré
                </h2>
            </div>
        </section>
    )
}