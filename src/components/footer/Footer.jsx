import "./Footer.css";
import Logo from "../../assets/logo/logo.png";

export default function Footer() {
    return (
        <div className='Footer'>
            <img src={Logo} />
            <div className='Footer__info'>
                <a>About Find Me A Comic</a>
                <a>Help/FAQS</a>
                <a>Terms</a>
                <a>Privacy</a>
            </div>
            <div className='Footer__socials'>
                <a>Twitter</a>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>Discord</a>
            </div>
        </div>
    )
}