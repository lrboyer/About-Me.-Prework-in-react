function Header() {
    return (
        <header id="top" class="fixed w-full bg-blue-900 text-white md:flex md:justify-between">
            <a class="font-bold block px-8 py-4 hover:bg-blue-400" href="#top" > Lucas Boyer</a>
            <nav>
                <ul class="md:flex">
                    <li> 
                        <a class="block px-8 py-4 hover:bg-blue-400" href="#me">Me</a>
                    </li>
                    <li> 
                        <a class="block px-8 py-4 hover:bg-blue-400" href="#about" >About</a>
                    </li>
                    <li> 
                        <a class="block px-8 py-4 hover:bg-blue-400" href="#techSupport">Tech Support</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;