
import ThemeToggle from "./ThemeToggle";

const navInfo = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },

    {
        id: 2,
        name: 'About',
        url: '/'
    },
    {
        id: 3,
        name: 'Contact',
        url: '/'
    },

]

export default function Navbar() {
    return (
        <header className="between">
            <h1>Logo</h1>
            <nav className="between" >
                <ul className="between gap-5">
                    {
                        navInfo.map((item) => <li key={item.id}>{item.name}</li>)
                    }
                </ul>
                <ThemeToggle />
            </nav>

        </header>
    )
}
