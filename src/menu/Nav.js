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
							<i className='fas fa-user' />
						</span>
						<div className='dropdown-menu dropdown-menu-right p-2'>
							<span className='dropdown-item dropdown-header text-md'>ข้อมูลผู้ใช้งาน</span>
							<div className='dropdown-divider' />
							<span className='dropdown-item'>
								<i className='fas fa-user mr-2' />
								ชื่อผู้ใช้ : <b>{'username'}</b>
							</span>
							<div className='dropdown-divider' />
							<span className='dropdown-item'>
								<i className='fas fa-flag mr-2' />
								รหัสสาขา : <b>{'department_code'}</b>
							</span>
							<div className='dropdown-divider' />
							<span className='dropdown-item'>
								<i className='fas fa-shield-alt mr-2' />
								ระดับการเข้าถึง : <b>{'user_level_name'}</b>
							</span>
							<div className='dropdown-divider' />
							<span className='dropdown-item'>
								<i className='fas fa-clipboard mr-2' />
								ชื่อ-สกุล :{" "}
								<b>
									{'first_name'} {'last_name'}
								</b>
							</span>
							<div className='dropdown-divider' />
							<span className='dropdown-item'>
								<i className='fas fa-id-badge mr-2' />
								บัตรประชาชน : <b>{'personal_id'}</b>
							</span>
						</div>
					</li>

					<li className='nav-item'>
						<span className='nav-link' role='button' data-bs-toggle='tooltip' data-bs-placement='left' title='ออกจากระบบ'>
							<i className='fas fa-sign-out-alt' />
						</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
