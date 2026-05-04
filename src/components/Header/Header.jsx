import Navbar from "./Navbar";

const navLinks = [
    { id: 1, linkName: 'Portfolio', path: "/#portfolio"},
    { id: 2, linkName: 'About', path: "/#about"},
    { id: 3, linkName: 'Contacts', path: "/#contact"},
];

const Header = () => {
    return (
        <header>
            <Navbar links={navLinks} />
        </header>
    );
};

export default Header;