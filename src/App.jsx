import React, { useEffect, useState } from 'react';
import './App.css';
import Swal from "sweetalert2";

function App() {



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isShaking, setIsShaking] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    triggerShake();
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Shake duration
  };


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const testimonials = [
    {
      image: '/assets/p1.jpeg',
      text: "This is the only thing that I didn't have to spend time to sort out. It's tidy all by itself.",
      name: 'Monica Geller',
      role: 'Head Chef',
    },
    {
      image: '/assets/p2.jpeg',
      text: 'I love how easy this product makes everything. It\'s like magic!',
      name: 'Rachel Green',
      role: 'Fashionista',
    },
    {
      image: '/assets/p3.jpeg',
      text: 'A must-have for anyone who wants to simplify their life.',
      name: 'Phoebe Buffay',
      role: 'Musician',
    },
    {
      image: '/assets/lady.jpeg',
      text: 'I can\'t believe how much time this saves me every day!',
      name: 'Chandler Bing',
      role: 'Statistical Analysis and Data configuration',
    },
  ];

  // State for current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous testimonial
  const goLeft = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to go to the next testimonial
  const goRight = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
 // Update testimonial and dots when the index changes
 const updateTestimonial = () => {
  const testimonial = testimonials[currentIndex];
  return (
    <>
      <div className="flex justify-center">
        <img
          alt="Profile picture"
          className="rounded-full border-4 border-red-600 w-24 h-24"
          src={testimonial.image}
        />
      </div>
      <p className="text-lg italic mb-4">{testimonial.text}</p>
      <h2 className="text-xl font-bold">{testimonial.name}</h2>
      <p className="text-sm text-gray-400">{testimonial.role}</p>
    </>
  );
};




// const posts = [
//   {
//     image: 'https://placehold.co/600x400',
//     date: 'Aug 16, 2020',
//     title: 'BEING ANONYMOUS: A BEGINNERS GUIDE',
//     description: 'Here are some basic ways to lay off the Radar'
//   },
//   {
//     image: 'https://placehold.co/600x400',
//     date: 'Aug 11, 2020',
//     title: 'CHECK WEATHER FROM TERMINAL USING WTTR.IN',
//     description: 'wttr.in is a console-oriented weather forecast service that supports various information representation methods like ANSI-sequences for console HTTP clients, HTML, or PNG.'
//   },
//   {
//     image: 'https://placehold.co/600x400',
//     date: 'Aug 7, 2020',
//     title: 'SCRAPING BILLBOARD AND IMDB USING PYTHON SELENIUM',
//     description: 'Here we will use Selenium to navigate between web pages, and try to scrape data from them.'
//   }
// ];


  

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [errors, setErrors] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const validateForm = (e) => {
  e.preventDefault();
  let validationErrors = {};

  // Simple validation
  if (!formData.name) validationErrors.name = "Name is required";
  if (!formData.email) validationErrors.email = "Email is required";
  if (!formData.message) validationErrors.message = "Message is required";

  setErrors(validationErrors);

  // If no errors, show the success alert
  if (Object.keys(validationErrors).length === 0) {
    Swal.fire({
      icon: "success",
      title: "Form Submitted Successfully!",
      text: "Thank you for contacting us. We will get back to you soon.",
      confirmButtonText: "Close",
      background: "#1f2937", // Dark background
      color: "#fff", // White text color
      confirmButtonColor: "#4CAF50", // Green button color
      iconColor: "#4CAF50", // Green icon color
    });
  }
};

// State to hold the view count
const [views, setViews] = useState(0);

// Update the view count and store it in localStorage
useEffect(() => {
  // Get the current view count from localStorage
  let storedViews = localStorage.getItem("views");
  storedViews = storedViews ? parseInt(storedViews) : 0;

  // Increment the view count
  storedViews++;

  // Set the updated view count to state and localStorage
  setViews(storedViews);
  localStorage.setItem("views", storedViews);
}, []);

  return (
    <>



      <div id='home' className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left Section */}
      <div className="bg-indigo-600 md:w-1/2 flex flex-col items-center justify-center p-8 relative group">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 absolute top-8 left-8 md:left-16 lg:left-16 hover:text-black transition-all duration-300 ease-in-out ">
          حماد
        </h1>

        {/* Profile Image with Hover Effect */}
        <img
          alt="Portrait"
          className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover z-10 mb-8 md:mb-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
          src="/assets/m img.jpg"
        />

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-8 absolute bottom-8 left-8 md:left-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {/* Default icons for small screens */}
          <div className="block md:hidden space-x-4">
            <a className="text-white text-3xl" href="https://www.linkedin.com/in/hammadbyte">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="text-white text-3xl" href="https://github.com/hammadbyte">
              <i className="fab fa-github"></i>
            </a>
            <a className="text-white text-3xl" href="https://x.com/hammadbyte">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Interactive icons for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a className="text-white text-3xl hover:text-black transform transition-transform duration-300" href="https://www.linkedin.com/in/hammadbyte">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="text-white text-3xl hover:text-black transform transition-transform duration-300" href="https://github.com/hammadbyte">
              <i className="fab fa-github"></i>
            </a>
            <a className="text-white text-3xl hover:text-black transform transition-transform duration-300" href="https://x.com/hammadbyte">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 relative">
        {/* Toggle Button for Menu */}
        <div className="flex justify-end mb-4 absolute top-8 right-8">
          <button
            onClick={toggleMenu}
            className={`text-white text-2xl transform transition-all duration-300 ${isShaking ? 'animate-shake' : ''}`}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Slide-in Menu (Initially Hidden) */}
        <div
          className={`fixed inset-0 bg-indigo-600 bg-opacity-90 z-20 transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-end p-8">
            <button onClick={toggleMenu} className="text-white text-2xl transform hover:scale-110 transition-all duration-300">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#home" onClick={toggleMenu} className="text-white text-3xl hover:text-black">Home</a>
            <a href="#about" onClick={toggleMenu} className="text-white text-3xl hover:text-black">About</a>
            <a href="#portfolio" onClick={toggleMenu} className="text-white text-3xl hover:text-black">Portfolio</a>
            <a href="#contacts" onClick={toggleMenu} className="text-white text-3xl hover:text-black">Contact</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 md:mt-0">
          <h2 className="text-xl font-light">MERN Stack Developer</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Muhammad Hammad</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Hi, I'm a MERN Stack Developer with a passion for building web applications that truly connect with users. I craft seamless experiences from front-end to back-end, focusing on clean, efficient, and intuitive code.
          </p>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              className="bg-transparent text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
              href="/assets/hammadcv.pdf"
            >
              Download CV
            </a>
            <a
              className="bg-indigo-600 text-white px-6 py-3 rounded-full border-2 border-indigo-600 hover:bg-transparent hover:text-indigo-600 transition"
              href="#contacts"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>


      <div id='about' className="bg-black text-white">
  <div className="container mx-auto px-4 py-16">
    <div className="flex items-center mb-8">
      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
      <div className="flex-1 border-t-4 border-indigo-600"></div>
    </div>

    <div className="flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-white-500 mb-4">Who I am</h1>
        <p className="text-gray-400 mb-4">
          Hello! I'm <strong>Muhammad Hammad</strong>, a passionate MERN stack developer based in Karachi, Pakistan.
        </p>
        <p className="text-gray-400 mb-6">
          I'm dedicated to building user-centric, scalable web applications. With a solid foundation in JavaScript, React, Node.js, and MongoDB, I specialize in creating full-stack solutions. Currently, I’m expanding my skills in Cloud Computing, DevOps, and exploring new trends in the web development ecosystem.
        </p>

        <div className="text-gray-400 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Key Skills:</h2>
          <ul className="list-disc pl-5">
            <li>Full-Stack Development (MERN)</li>
            <li>Cloud Technologies & DevOps</li>
            <li>Responsive Web Design & User Experience</li>
            <li>Version Control (Git & GitHub)</li>
            <li>API Design & Integration</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white mb-2">Get in Touch:</h2>
          <p className="text-gray-400 mb-2">📧 Email: <a href="mailto:hammadnizam65@gmail.com" className="text-indigo-600">hammadnizam65@gmail.com</a></p>
          <p className="text-gray-400 mb-2">🌍 Location: Karachi, Pakistan</p>
          <p className="text-gray-400 mb-2">💼 GitHub: <a href="https://github.com/hammadbyte" target="_blank" className="text-indigo-600">github.com/ Hammad Byte</a></p>
          <p className="text-gray-400 mb-6">🔗 LinkedIn: <a href="https://www.linkedin.com/in/hammadbyte" target="_blank" className="text-indigo-600">linkedin.com/ hammadbyte</a></p>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          alt="Illustration of a person walking with a bag and thinking about design"
          className="w-3/4 md:w-full rounded-lg shadow-lg"
          src="/assets/myimg.jpg"
        />
      </div>
    </div>
  </div>
</div>






      <div className="bg-black text-white">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center">
          {/* Education Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white-500 mb-8">Education</h1>
            <div className="space-y-6">
              {/* Higher Secondary Education */}
              <div className="bg-indigo-600 p-6 rounded-lg flex items-center">
                <div className="text-4xl text-white mr-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-300">2011 - 2023</p>
                  <h2 className="text-xl font-semibold">Federal Board of Secondary Education Islamabad</h2>
                  <p className="text-gray-300">TCF School</p>
                </div>
              </div>
              {/* Bachelor of Technology */}
              <div className="bg-indigo-600 p-6 rounded-lg flex items-center">
                <div className="text-4xl text-white mr-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-300">2024 - Present</p>
                  <h2 className="text-xl font-semibold">College</h2>
                  <p className="text-gray-300">Nabi Bagh ZM inter Science College</p>
                </div>
              </div>
              {/* Master of Technology */}
              <div className="bg-indigo-600 p-6 rounded-lg flex items-center">
                <div className="text-4xl text-white mr-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-300">2023 - 2025</p>
                  <h2 className="text-xl font-semibold">Web and Mobile App Development</h2>
                  <p className="text-gray-300">(SMIT)- Saylani mass IT Training </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              alt="Illustration of a study desk with a chair, books, a lamp, and a backpack"
              className="w-1/2"
              src="/assets/bookimg.jpeg"
            />
          </div>
        </div>
      </div>



      <div className="bg-black text-white">
        {/* Skills Section */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold text-white-500">Skills</h2>
          <div className="flex justify-center mt-10 space-x-16">
            {/* First Skill */}
            
            <div className="flex flex-col items-center">
              <img
                alt="first logo"
                className="w-64 h-64"
                src="https://camo.githubusercontent.com/db8294d3c8d15e648ad614e481241225e574cc3d3c43b3a4b9e6c3dc105e8ea1/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c74732c676974"
              />
            </div>
            {/* Second Skill */}
            <div className="flex flex-col items-center">
              <img
                alt="second logo"
                className="w-64 h-64"
                src="https://camo.githubusercontent.com/fb2ed6fcaa88da6bcb2f9429c526dc39be7fe9646553c5b9f234dafd151de3d6/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d72656163742c6d75692c7461696c77696e642c6e6578746a732c6e6f64656a73"
              />
            </div>
            {/* Third Skill */}
            <div className="flex flex-col items-center">
              <img
                alt="third logo"
                className="w-64 h-64"
                src="https://camo.githubusercontent.com/f1fdfc93e98647cb222b3727fdedf74cbd66e990e4a91f223095e75c0a656f0b/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d657870726573732c6d6f6e676f64622c6772617068716c2c706f737467726573716c2c6e6573746a73"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="fixed bottom-0 right-10 py-10">
          <h2 className="text-4xl font-bold text-white-600">Experience</h2>
        </section> */}
      </div>






      <div className="bg-black text-white">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Half for Images */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <img
                alt="Me With Laptop"
                className="mb-4 w-48 h-48 object-cover"
                src="/assets/me with laptop.jpg"
              />
              <div className="flex items-center space-x-4">
                <img
                  alt="Laptop on desk"
                  className="w-24 h-24 object-cover"
                  src="/assets/laptop.jpg"
                />
                <img
                  alt="Drink on desk"
                  className="w-24 h-24 object-cover"
                  src="/assets/mm.jpg"
                />
              </div>
            </div>

            {/* Right Half for Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h1 className="text-4xl font-bold text-white-500 mb-8">Experience</h1>
              <div className="space-y-4">
                {/* Job 1 */}
                <div className="bg-indigo-600 p-4 rounded-lg flex items-center">
                  <i className="fas fa-briefcase text-2xl text-orange-500 mr-4"></i>
                  <div>
                    <p className="text-sm text-gray-300">2024-2025</p>
                    <p className="text-lg font-semibold">Frontend Developer</p>
                    <p className="text-sm text-gray-300">Digi Tech Advertisers</p>
                  </div>
                </div>

                {/* Job 2 */}
                {/* <div className="bg-indigo-600 p-4 rounded-lg flex items-center">
                  <i className="fas fa-briefcase text-2xl text-orange-500 mr-4"></i>
                  <div>
                    <p className="text-sm text-gray-300">2019-2023</p>
                    <p className="text-lg font-semibold">Backend Developer</p>
                    <p className="text-sm text-gray-300">Vehement Capital Partners</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-to-top Button */}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={handleScrollToTop}
            className="bg-white text-gray-900 p-2 rounded-full shadow-lg"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </div>



      <div id='portfolio' className="bg-black text-white py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white-500">Projects</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <article className="bg-indigo-600 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
          <img
            src="/assets/employwebimg.jpeg"
            alt="Employee Management App Illustration"
            className="mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-4">Employee Management</h2>
          <button
            className="bg-white text-indigo-600 p-2 rounded-full"
            aria-label="Play Employee Management project"
          >
            <i className="fas fa-play"></i>
          </button>
        </article>

        {/* Project 2 */}
        <article className="bg-indigo-600 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
          <img
            src="/assets/trainimg.jpeg"
            alt="Railway Tracking App Illustration"
            className="mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-4">Railway Tracking</h2>
          <button
            className="bg-white text-indigo-600 p-2 rounded-full"
            aria-label="Play Railway Tracking project"
          >
            <i className="fas fa-play"></i>
          </button>
        </article>

        {/* Project 3 */}
        <article className="bg-indigo-600 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
          <img
            src="/assets/weatherimg.jpeg"
            alt="Weather App Illustration"
            className="mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-4">Weather App</h2>
          <button
            className="bg-white text-indigo-600 p-2 rounded-full"
            aria-label="Play Weather App project"
          >
            <i className="fas fa-play"></i>
          </button>
        </article>
      </section>
    </div>



    <div className="bg-black text-white">
  <section className="text-center py-16">
    <h1 className="text-4xl font-bold text-white-500">Services</h1>
    <p className="text-lg mt-4">These are some of the services I offer. Reach out to me if I can help you with any!</p>
    <div className="flex flex-wrap justify-center mt-8 gap-4">
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fas fa-code text-3xl mb-4"></i>
        <p className="text-xs font-semibold">HTML 5</p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-css3-alt text-3xl mb-4"></i>
        <p className="text-xs font-semibold">CSS 3</p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-js-square text-3xl mb-4"></i>
        <p className="text-xs font-semibold">JavaScript </p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-react text-3xl mb-4"></i>
        <p className="text-xs font-semibold">React </p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-node text-3xl mb-4"></i>
        <p className="text-xs font-semibold">Node.js</p>
      </div>

      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-android text-3xl mb-4"></i>
        <p className="text-xs font-semibold">Android </p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-apple text-3xl mb-4"></i>
        <p className="text-xs font-semibold">Apple </p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fas fa-mobile-alt text-3xl mb-4"></i>
        <p className="text-xs font-semibold">Mobile </p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-app-store text-3xl mb-4"></i>
        <p className="text-xs font-semibold">App Store</p>
      </div>
      <div className="bg-indigo-600 p-2 rounded-lg text-center w-20 sm:w-24 md:w-28 hover:scale-105 transform transition duration-300">
      <i className="fab fa-google-play text-3xl mb-4"></i>
        <p className="text-xs font-semibold">Google Play</p>
      </div>
    </div>
  </section>
</div>






      <div className="bg-indigo-600 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-white mb-8">Testimonials</h1>

        {/* Testimonial Wrapper */}
        <div className="relative flex flex-col items-center justify-center space-y-6">

          {/* Left Arrow Button */}
          <button
            onClick={goLeft}
            className="absolute left-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all"
          >
            <i className="fas fa-arrow-left text-2xl"></i>
          </button>

          {/* Testimonial Card */}
          <div className="bg-black text-white rounded-full p-8 flex flex-col items-center space-y-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-xl">
            {updateTestimonial()}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={goRight}
            className="absolute right-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all"
          >
            <i className="fas fa-arrow-right text-2xl"></i>
          </button>
        </div>

        {/* Dots for carousel indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>



    {/* <div className="bg-black text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-500 mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-indigo-600 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img alt={post.title} className="w-full h-48 object-cover" src={post.image} />
              <div className="p-4 bg-indigo-600">
                <p className="text-sm mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-black text-white py-2 px-6 rounded-full flex items-center transform transition duration-300 hover:bg-indigo-600 hover:scale-105">
            View All
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div> */}



{/* BLOG */}



    <div className="bg-black text-white">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-1/2">
            <h1 id='contacts' className="text-4xl font-bold mb-8 text-white-500">Contacts</h1>
            <form className="space-y-6" onSubmit={validateForm}>
              <div>
                <label className="block text-indigo-500 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-indigo-500 bg-black text-white rounded"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-indigo-500 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-indigo-500 bg-black text-white rounded"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-indigo-500 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-indigo-500 bg-black text-white rounded"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-transparent text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
              >
                Send
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-envelope text-indigo-500 mr-4"></i>
                <span>hammadnizam65@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-indigo-500 mr-4"></i>
                <span>+923032928719</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-indigo-500 mr-4"></i>
                <span>DHA Phase - 1, Karachi, Pakistan - 634</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-8">
              <a className="text-indigo-500" href="https://x.com/hammadbyte">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-indigo-500" href="https://github.com/hammadbyte">
                <i className="fab fa-github"></i>
              </a>
              <a className="text-indigo-500" href="https://www.linkedin.com/in/hammadbyte">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-medium"></i>
              </a>
              <a className="text-indigo-500" href="https://www.youtube.com/@HammadByte">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-dribbble"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-behance"></i>
              </a>
              <a className="text-indigo-500" href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
            <div className="flex justify-end mt-8">
              <img
                alt="Decorative image with icons of communication methods"
                className="w-24 h-24"
                src="/assets/contact img.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-black min-h-screen">
      {/* Floating counter fixed to bottom-left corner */}
      <div
        className="fixed bottom-4 left-4 text-xs font-bold text-white bg-black px-3 py-2 rounded-md shadow-lg opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out"
        id="viewCounter"
        style={{
          opacity: views > 0 ? 1 : 0,
          transform: views > 0 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="text-indigo-500">{views}</span> Views
      </div>
    </div>



    </>







  );
}

export default App;
