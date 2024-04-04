import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const useInfo = useContext(AuthContext)
    console.log(useInfo)
    return (
        <section>

            <div>
                <h2>Home:{useInfo.name}</h2>
            </div>
        </section>
    );
};

export default Home;