
const ScollToSection = () => {

    

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <button className="text-blue-500 hover:text-blue-700" onClick={() => scrollToSection('section1')}>
              Section 1
            </button>
          </li>
          <li>
            <button className="text-blue-500 hover:text-blue-700" onClick={() => scrollToSection('section2')}>
              Section 2
            </button>
          </li>
          <li>
            <button className="text-blue-500 hover:text-blue-700" onClick={() => scrollToSection('section3')}>
              Section 3
            </button>
          </li>
        </ul>
      </nav>
        </div>
    )

}

export default ScollToSection;