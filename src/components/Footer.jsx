import facebookicon from '../assets/facebook.png'
import instagramicon from '../assets/instagram.png'
import vimeoicon from '../assets/vimeo.png'

export default function Footer() {
    return (
        <footer className="font-sans text-[var(--color-primary-grey)] text-[var(--font-size-body)] text-center py-8">
            <div className="flex justify-center items-center gap-25 mb-4">
                <p>J.M. Mørks Gade 13, 8000 Aarhus C</p>
                <p>Subscribe to Newsletter</p>
                <div className="relative flex flex-col items-center">
                    <div className="flex justify-center gap-4 absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <img src={facebookicon} alt="Facebook icon" className="w-6 h-6" />
                        <img src={instagramicon} alt="Instagram icon" className="w-6 h-6" />
                        <img src={vimeoicon} alt="Vimeo icon" className="w-6 h-6" />
                    </div>
                    <p>Follow us on social media</p>
                </div>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2026 - All rights reserved</p>
        </footer>
    )
}