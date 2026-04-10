import facebookicon from '../assets/facebook.png'
import instagramicon from '../assets/instagram.png'
import vimeoicon from '../assets/vimeo.png'

export default function Footer() {
    return (
        <footer className="font-sans text-[var(--color-primary-grey)] text-[var(--font-size-body)] text-center py-8">
            <div className="flex justify-center items-center gap-25 mb-4">
                <p className="inline-block min-w-[18rem]">
                    <a
                        href="https://www.google.com/maps/place/Kunsthal+Aarhus/@56.1548103,10.2012496,596m/data=!3m1!1e3!4m15!1m8!3m7!1s0x464c3f9303aca517:0x8659d06ee1d5a883!2sJ.+M.+M%C3%B8rks+Gade+13,+8000+Aarhus!3b1!8m2!3d56.1548103!4d10.2012496!16s%2Fg%2F11c4tvckqz!3m5!1s0x464c3f93070c8ce9:0xa6bad2fac3349540!8m2!3d56.1551094!4d10.2020017!16s%2Fm%2F011c7b4n?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:font-bold transition-all duration-200 ease-in-out"
                    >
                        J.M. Mørks Gade 13, 8000 Aarhus C
                    </a>
                </p>
                <p>Subscribe to <a href="https://kunsthalaarhus.us2.list-manage.com/subscribe?u=4ef6c238b4dd6d2c52ca3a686&id=3fd18f4cd8" className="font-bold hover:font-extrabold transition-all duration-200 ease-in-out" target="_blank" rel="noreferrer">Newsletter</a></p>
                <div className="relative flex flex-col items-center">
                    <div className="flex justify-center gap-4 absolute -top-8 left-1/2 transform -translate-x-1/2">
                       <a
                         href="https://www.facebook.com/kunsthalaarhus1/?locale=da_DK"
                         target="_blank"
                         rel="noreferrer"
                         aria-label="Facebook"
                         >
                        <img src={facebookicon} alt="Facebook icon" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/kunsthalaarhus/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <img src={instagramicon} alt="Instagram icon" className="w-6 h-6" />
                        </a>
                        <a href="https://vimeo.com/user16006879" target="_blank" rel="noreferrer" aria-label="Vimeo">
                        <img src={vimeoicon} alt="Vimeo icon" className="w-6 h-6" />
                        </a>
                    </div>
                    <p>Follow us on social media</p>
                </div>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2026 - All rights reserved</p>
        </footer>
    )
}