import MainFooter from 'components/ui/organisme/MainFooter/MainFooter'
import MainHeader from 'components/ui/organisme/MainHeader/MainHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div>
			<MainHeader />
			<Outlet />
			<MainFooter />
		</div>
	)
}

export default MainLayout
