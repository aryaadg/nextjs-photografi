import Link from 'next/link'
export default function Navbar({...pageProps}) {
console.log(pageProps)   
    return (

<nav className="uk-navbar-container uk-padding-small uk-margin" uk-navbar="true">
        <div className="uk-navbar-left">
            
            <a className="uk-navbar-item uk-logo" href="" > <img src="logonav.png" width="130px" height="130px"/></a>
   
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                
                <li className={`${pageProps.halaman == 'home' ? 'uk-active' : ''}`}> 
                
                <Link href="/">
                <a>Home</a>
                </Link>

                </li>

                <li className={`${pageProps.halaman == 'project' ? 'uk-active' : ''}`} >
                    <a href="#">Projects</a>
                    <div className="uk-navbar-dropdown ">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="#">Web Builder</a></li>
                            <li><a href="#">App Builder</a></li>
                           
                            <li className={`${pageProps.halaman == 'project' ? 'uk-active' : ''}`}>

                            <Link href="/projek">
                            <a>Photografi</a>
                            </Link>

                            </li>
                            <li><a href="#">Anything U Want</a></li>
                        </ul>
                    </div>
                </li>
                
                <li>
                   
                <Link href="https://linktr.ee/aryaadg">
                <a>Contact</a>
                </Link>
                    
                </li>


                <li className={`${pageProps.halaman == 'About' ? 'uk-active' : ''}`}>

                <Link href="/about">
                <a>About</a>
                </Link>
                   
                   
                    </li>


                </ul>
            
        </div>
    </nav>



    );
    }