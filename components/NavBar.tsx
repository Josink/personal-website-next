export default function NavBar() {
    const links = ["Home", "About", "Experience", "Contact Me"];
    return (
        <nav className = "nav-wrapper">
            <ul className = "nav">
                {links.map((link) => (
                    <li key = {link} className = "nav-link">
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    );
}