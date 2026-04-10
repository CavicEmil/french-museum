import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Lock scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <header className="bg-white p-8 font-sans relative overflow-hidden">

            {/* BURGER */}
            <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex flex-col gap-1.5"
            >
                <span className="w-7 h-[2px] bg-black"></span>
                <span className="w-7 h-[2px] bg-black"></span>
                <span className="w-7 h-[2px] bg-black"></span>
            </button>

            {/* TITLE */}
            <h1
                className="mt-10 w-full text-center leading-[0.85] text-black"
                style={{
                    fontSize: "var(--font-size-header)",
                    fontWeight: "var(--font-weight-bold)"
                }}
            >
                kunsthalaarhus
            </h1>

            {/* DESCRIPTION (RIGHT SIDE) */}
            <p
                className="max-w-md ml-auto mt-20 mb-8 text-black"
                style={{
                    fontSize: "var(--font-size-body)",
                    fontWeight: "var(--font-weight-regular)"
                }}
            >
                Kunsthal Aarhus is an inclusive exhibition space that aims to
                communicate clearly, enthusiastically, and engagingly to a broad
                audience, sparking curiosity about contemporary art.
            </p>

            {/* SIDE DRAWER */}
            <div
                className={`fixed top-0 left-0 h-full w-[320px] bg-[#f2f2f2] z-50 text-black
                transform transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.18,1)]
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Soft blurred edge */}
                <div className="absolute right-0 top-0 h-full w-12 pointer-events-none
                                bg-gradient-to-r from-transparent to-black/20 blur-lg"></div>

                <div className="p-8 flex flex-col h-full">



                    {/* NAV */}
                    <nav className="flex flex-col gap-8"
                        style={{ fontSize: "var(--font-size-body)" }}
                    >
                        <a href="#">Lorem</a>
                        <a href="#">ipsum</a>
                        <a href="#">venenatis</a>
                        <a href="#">donec nunc</a>
                    </nav>

                    {/* FOOTER TEXT */}
                    <div
                        className="mt-auto"
                        style={{
                            fontSize: "var(--font-size-body)",
                            fontWeight: "var(--font-weight-regular)"
                        }}
                    >
                        Nu: Lukket
                    </div>
                </div>
            </div>

            {/* BACKDROP (click outside to close) */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/10 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}