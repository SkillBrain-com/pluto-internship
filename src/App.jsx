import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Login from "./components/login/Login";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
