import { useEffect, useState } from "react";

import { Navbar } from "./navbar";
import logo from '../assets/img/SILVERETTE-LOGO-1.svg';

export const Header = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
    }, []);

    let headerClass = scroll ? 'header header-visible' : 'header'

    return (
        <header className={headerClass}>
            <img src={logo} style={{ width: '168px' }} />
            <Navbar />
            <button className='btn-main'>BUY NOW</button>
        </header>
    )
}