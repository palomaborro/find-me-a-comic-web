import "./Logo.css";
import logo from '../../assets/logo/logo.png';

export default function Logo() {
  return (
  <img src={logo} alt='logo' className="Logo" />
  )
}