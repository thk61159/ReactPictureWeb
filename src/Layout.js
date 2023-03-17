import {Outlet, Link} from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer'

const Layout = () => {
  return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/ReactPictureWeb">首頁</Link>
					</li>
					<li>
						<Link to="/ReactPictureWeb/about">關於這個網站</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout