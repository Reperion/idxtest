import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Header = () => (
  <header className="bg-gray-800 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-white text-2xl font-bold">Your Logo</div>
      <nav>
        <ul className="flex space-x-6">
          <li className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg">
            <Link to="/" className="text-gray-300 hover:text-white focus:outline-none">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg">
            <Link to="/about" className="text-gray-300 hover:text-white focus:outline-none">
              About
            </Link>
          </li>
          <li className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg">
            <Link to="/services" className="text-gray-300 hover:text-white focus:outline-none">
              Services
            </Link>
          </li>
          <li className="px-4 py-2 rounded-md transition duration-300 bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg">
            <Link to="/contact" className="text-gray-300 hover:text-white focus:outline-none">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Content = () => (
  <div className="container mx-auto py-12">
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Section 1</h2>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, 
        nunc nisi tincidunt enim, eget luctus ligula diam ut arcu. 
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">Section 2</h2>
      <p className="text-gray-300">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </section>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 py-4">
    <div className="container mx-auto text-center">
      <p className="text-gray-500 text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://github.com/your-username" className="text-gray-400 hover:text-white mr-4">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://twitter.com/your-username" className="text-gray-400 hover:text-white mr-4">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/your-username" className="text-gray-400 hover:text-white">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
