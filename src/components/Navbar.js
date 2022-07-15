import logo from '../images/airbnb-logo.svg';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Airbnb" className='logo'/>
    </nav>
  );
}
