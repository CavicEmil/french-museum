import Hero from '../components/Hero';

export default function Landing() {
    return (
        <>
            <div>
                <h1 className="landing-title">
                    kunsthalaarhus
                </h1>
                <p>Kunsthal Aarhus is an inclusive exhibition space that aims to communicate clearly, enthusiastically, and engagingly to a broad audience, sparking curiosity about contemporary art. </p>
                <Hero />
            </div>

            <div>
                <p>Tirsdag 11-18</p>
                <p>Onsdag 11-18</p>
                <p>Torsdag 11-20</p>
                <p>Fredag 11-18</p>
                <p>Lørdag 11-18</p>
                <p>Søndag 11-18</p>
                <h2>Fri entré</h2>
            </div>
        </>
    )
}