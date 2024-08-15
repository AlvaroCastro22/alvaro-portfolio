const Footer = ({handleDownload}:{handleDownload:()=>void}) => {
    return(<footer className=" bg-black-200  shadow  w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center text-white">© 2024 <a href="https://flowbite.com/" className="hover:underline">Alvaro Castro™</a>. Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://www.linkedin.com/in/alvaro-castro-ramos-517404269/" className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/AlvaroCastro22" className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">Github</a>
            </li>
            <li>
                <a href="#" onClick={handleDownload} className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">Descargar CV</a>
            </li>
            <li>
                <a href="#" className="hover:underline text-white hover:text-primary-400">alvarocastroramos28@gmail.com</a>
            </li>
        </ul>
        </div>
    </footer>)

}

export default Footer