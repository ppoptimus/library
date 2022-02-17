import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function SideBar() {
	return (
		<>
			<aside className='main-sidebar sidebar-dark-primary elevation-4 vh-100'>
				{/* Brand Logo */}
				<a href='/' className='brand-link'>
					<img
						src='dist/img/logo.png'
						alt='AdminLTE Logo'
						className='brand-image img-circle elevation-3'
						style={{ opacity: ".8" }}
					/>
					<span className='brand-text font-weight-light'>LIBRARY</span>
				</a>
				{/* Sidebar */}
				<div className='sidebar'>
					<nav className='mt-2'>
						<ul className='nav nav-pills nav-sidebar flex-column text-lg' data-widget='treeview' role='menu' data-accordion='false'>			
							<li className='nav-item my-1'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-home text-lg' />
									<p>
										หน้าหลัก
									</p>
								</a>
							</li>
							<li className='nav-item my-1'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-file-alt text-lg' />
									<p>
										จัดการเนื้อหา
									</p>
								</a>
							</li>
							<li className='nav-item my-1'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-comment text-lg' />
									<p>
										ข้อความจากผู้ใช้
									</p>
								</a>
								
							</li>
							<li className='nav-item my-1'>
								<a href='#' className='nav-link'>
									<i className='nav-icon fas fa-user-alt text-lg' />
									<p>
										จัดการสมาชิก
									</p>
								</a>
							</li>

						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</>
	)
}
