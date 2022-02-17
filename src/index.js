import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//--import component--//
import Nav from "./menu/Nav"
import SideBar from "./menu/Sidebar"
import UserManagement from "./UserManagement"
import Home from "./Home"

ReactDOM.render(
	<div className='wrapper'>
		<BrowserRouter>
			<Nav />
			<SideBar />
			<div className='content-wrapper p-3 mt-5'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/UserManagement' element={<UserManagement />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	</div>,
	document.getElementById("root"),
)
