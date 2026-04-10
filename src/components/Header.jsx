import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <h1>Bonjour this is header</h1>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
                &#9776; {/* burger icon */}
            </button>
            {menuOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.7)",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Exhibitions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <button onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
                </div>
            )}
        </header>
    );
}