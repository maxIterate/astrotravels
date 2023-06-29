// import bgImg from '../assets/images/bg-1.jpg'
import Footer from "../components/Footer"

import MainBottom from "../components/HomePage/MainBottom";
import Navbar from "../components/Navbar";


function HomePage() {
    const mainTopTitle = "Discover the universe with Astrotravels"

    const mainTopText = "Explore amazing destinations under the starry cloak. Immerse yourself in the celestial beauty as you unlock the secrets of the universe. AstroTravels takes you on unique stargazing experiences in magical destinations. Get ready for an unforgettable journey into infinity!"



    return (
        <div className="w-100 h-[100vh] bg-cover bg-no-repeat bg-bottom relative"
        style={{ backgroundImage: 'url(./src/assets/images/bg-2.jpg)' }}
        >
            <Navbar />
            <div className="h-[68vh] 
            pt-20 
            flex flex-col sm:flex-row
            ">
                <div className="
                w-full md:w-2/3 max-h-min
                sm:pl-10
                px-10 sm:px-0
                pb-10 sm:pb-0
                ">
                    <p className="text-white text-2xl md:text-4xl lg:text-4xl font-bold 
                    pr-0 sm:pr-20 text-center sm:text-left
                    ">{mainTopTitle}</p>
                    <p className="text-white text-l md:text-xl lg:text-2xl 
                    pr-0 sm:pr-20 text-center sm:text-left
                    pt-10">{mainTopText}</p>
                </div>
                <div
                className="
                border-4 border-black rounded-none sm:rounded-l-full
                w-full sm:w-3/4
                h-full
                bg-black
                relative
                "
                >
                    <div
                    className="
                    z-0
                    w-full
                    h-full
                    rounded-l-full
                    bg-cover bg-no-repeat bg-bottom

                    hover:cursor-pointer hover:blur-sm
                    transition-all
                    "
                    style={{ backgroundImage: 'url(./src/assets/images/carousel-demo.jpg)' }}>
                        <p className="hover:blur-none bg-transparent z-20 
                        absolute top-2/4 left-2/4
                        hover:block hidden
                        ">Show more</p>
                    </div>
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