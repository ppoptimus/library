import React from "react"

export default function Nav() {
	return (
		<div>
			<nav className='main-header navbar navbar-expand navbar-white navbar-light text-lg'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<a className='nav-link' data-widget='pushmenu' href='#' role='button'>
							<i className='fas fa-bars' />
						</a>
					</li>
					
				</ul>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<span
							className='nav-link'
							data-widget='fullscreen'
							role='button'
							data-bs-toggle='tooltip'
							data-bs-placement='left'
							title='ขยายเต็มจอ'>
							<i className='fas fa-expand-arrows-alt' />
						</span>
					</li>

					<li className='nav-item dropdown'>
						<span
							className='nav-link'
							data-toggle='dropdown'
							role='button'
							data-bs-toggle='tooltip'
							data-bs-placement='left'
							title='ข้อมูลผู้ใช้งาน'>
							<i className='fas fa-cog' />
						</span>
					</li>

					<li className='nav-item'>
						<span
							className='nav-link'
							role='button'
							data-bs-toggle='tooltip'
							data-bs-placement='left'
							title='ออกจากระบบ'
							>
							<i className='fas fa-sign-out-alt' />
						</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
