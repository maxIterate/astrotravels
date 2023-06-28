// import bgImg from '../assets/images/bg-1.jpg'
import Footer from "../components/Footer"

import MainBottom from "../components/HomePage/MainBottom";
import Navbar from "../components/Navbar";


function HomePage() {
    return (
        <div className="w-100 h-[100vh] bg-cover bg-no-repeat bg-bottom relative"
        style={{ backgroundImage: 'url(./src/assets/images/bg-2.jpg)' }}
        >
            <Navbar />
            <div className="flex h-[68vh] px-10 pt-20">
                <div className="w-2/3">
                    <p className="text-white text-2xl md:text-4xl lg:text-6xl font-bold pr-20">Discover the universe with Astrotravels</p>
                    <p className="text-white text-l md:text-xl lg:text-2xl pr-20 pt-10">Explore amazing destinations under the starry cloak. Immerse yourself in the celestial beauty as you unlock the secrets of the universe. AstroTravels takes you on unique stargazing experiences in magical destinations. Get ready for an unforgettable journey into infinity!</p>
                </div>
                <div
                className="
                bg-blue-400
                -skew-x-12
                w-1/3
                h-full
                absolute
                right-10
                top-0
                bg-cover bg-no-repeat bg-bottom
                z-0
                border-x-4
                "
                style={{ backgroundImage: 'url(./src/assets/images/carousel-demo.jpg)' }}
                >

                </div>
            </div>
            <div className="flex h-[20vh] relative justify-center items-center">
                <button type="submit"
                className="
                h-12
                w-12
                rounded-full
                bg-contain
                hover:drop-shadow-4xl
                hover:bg-cyan-600
                transition-colors
                "
                style={{ backgroundImage: 'url(./src/assets/images/show-more-arrow-white.png)' }}
                ></button>
            </div>
            <MainBottom />
            <Footer />
        </div>
    )
}

export default HomePage;