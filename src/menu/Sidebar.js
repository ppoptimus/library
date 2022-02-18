import { Link } from "react-router-dom"

export default function SideBar() {
	return (
		<>
			<aside className='main-sidebar sidebar-dark-primary elevation-4 vh-100'>
				{/* Brand Logo */}
				<a href='/' className='brand-link'>
					<img src='dist/img/logo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{ opacity: ".8" }} />
					<span className='brand-text font-weight-bolder'>งานห้องสมุด</span>
				</a>
				{/* Sidebar */}
				<div className='sidebar'>
					<nav className='mt-2'>
						<ul className='nav nav-pills nav-sidebar flex-column text-lg' data-widget='treeview' role='menu' data-accordion='false'>
							<li className='nav-item my-1'>
								<Link to='/' className='nav-link'>
									<i className='nav-icon fas fa-home text-lg' />
									<p>หน้าหลัก</p>
								</Link>
							</li>
							<li className='nav-item my-1'>
								<Link to='#' className='nav-link'>
									<i className='nav-icon fas fa-file-alt text-lg' />
									<p>จัดการเนื้อหา</p>
								</Link>
							</li>
							<li className='nav-item my-1'>
								<Link to='#' className='nav-link'>
									<i className='nav-icon fas fa-comment text-lg' />
									<p>ข้อความจากผู้ใช้</p>
								</Link>
							</li>
							<li className='nav-item my-1'>
								<Link to='/UserManagement' className='nav-link'>
									<i className='nav-icon fas fa-user-alt text-lg' />
									<p>จัดการสมาชิก</p>
								</Link>
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
