import logoimg from '../img/logo.png'

const Nav=()=>{
    return(
        <div className="nav">
            <nav>
                <ul className="logo">
                    <img src={logoimg} alt="Logo" />
                    Credo
                </ul>
                <ul className='minor_links'>
                    <li>Social Payment</li>
                    <li>Why Credo</li>
                    <li>Resources</li>
                    <li>Cleo Bot</li>
                </ul>
                <ul className='login_links'>
                    <li>Sign In</li>
                    <li className='styled'>Get Started</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav