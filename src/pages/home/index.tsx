import About from "../../components/sections/about";
import Activities from "../../components/sections/activities";
import Contact from "../../components/sections/contact";
import Hero from "../../components/sections/hero";
import Video from "../../components/sections/video";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero /> 
            <About />
            <Activities />
            <Video />
            <Contact />
        </div>
     );
}
 
export default Home;