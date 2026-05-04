import Navbar from "./Navbar";

const navLinks = [
    { id: 1, linkName: 'Portfolio'},
    { id: 2, linkName: 'About'},
    { id: 3, linkName: 'Contacts'},
];

const Header = () => {
    return (
        <header>
            <Navbar links={navLinks} />
        </header>
    );
};

export default Header;