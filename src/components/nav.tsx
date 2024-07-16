
interface NavProps {
    title: string
}

const Nav: React.FC<NavProps> = (props) => {

    const { title } = props

    return (
        <nav className='nav'>
            <h1>{title}</h1>
        </nav>
    );
};
export default Nav;