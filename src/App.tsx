import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import SearchPokemonName from "./pages/SearchPokemonName.tsx";

function App() {
    return (<>
    
        <div>
            <h1>Hello React Router</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPokemonName />} />
                </Routes>
            </BrowserRouter>

        </div>
        </>
    );

}

export default App
