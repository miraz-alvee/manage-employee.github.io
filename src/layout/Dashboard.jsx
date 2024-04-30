import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Page content here */}
                <Home></Home>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-5">

                    <li>
                        <details>
                            <summary className='font-semibold'> Departments</summary>
                            <ul className="p-2">
                                <li><Link to={"department-table"} className='font-semibold'>Employee Table</Link></li>
                                <li><Link to={"department-form"} className='font-semibold'>Create form</Link></li>
                                <li><Link to={"department-form-update"} className='font-semibold'>Updated form</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className='font-semibold'>Employees Designatons</summary>
                            <ul className="p-2">
                                <li><Link to={"department-table"} className='font-semibold'>Employee Table</Link></li>
                                <li><Link to={"department-form"} className='font-semibold'>Create form</Link></li>
                                <li><Link to={"department-form-update"} className='font-semibold'>Updated form</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className='font-semibold'>Employees Timesheets</summary>
                            <ul className="p-2">
                                <li><Link to={"department-table"} className='font-semibold'>Employee Table</Link></li>
                                <li><Link to={"department-form"} className='font-semibold'>Create form</Link></li>
                                <li><Link to={"department-form-update"} className='font-semibold'>Updated form</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className='font-semibold'>Shit & Schedule</summary>
                            <ul className="p-2">
                                <li><Link to={"department-table"} className='font-semibold'>Employee Table</Link></li>
                                <li><Link to={"department-form"} className='font-semibold'>Create form</Link></li>
                                <li><Link to={"department-form-update"} className='font-semibold'>Updated form</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className='font-semibold'>Overtime</summary>
                            <ul className="p-2">
                                <li><Link to={"department-table"} className='font-semibold'>Employee Table</Link></li>
                                <li><Link to={"department-form"} className='font-semibold'>Create form</Link></li>
                                <li><Link to={"department-form-update"} className='font-semibold'>Updated form</Link></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Dashboard
