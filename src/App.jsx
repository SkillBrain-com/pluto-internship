import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import Login from "./components/login/Login";
import Tasks from "./pages/Tasks";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/test" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
