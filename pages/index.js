export default function IndexPage() {
	return (
    <div>
  
  <nav className="uk-navbar-container" uk-navbar="true">

        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#">Active</a></li>
            <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
</nav>

    </div>
	);
}
