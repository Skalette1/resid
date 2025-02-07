// MainTest.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Test1 from "./AppartPent";
import Planirovka from "./Planirovka";
import Area from "./Area";
import Message from "./Message";
import { useState } from "react";

const MainTest = () => {
    const [count, setCount] = useState(0);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/test" element={<Test1 count={count} setCount={setCount} />} />
                <Route path="/planirovka" element={<Planirovka count={count} setCount={setCount} />} />
                <Route path="/area" element={<Area count={count} setCount={setCount} />} />
                <Route path="/message" element={<Message count={count} setCount={setCount}/>} />
            </Routes>
        </Router>
    );
};

export default MainTest;