
import Banner from "../../components/Header/Banner";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div className="my-16">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;