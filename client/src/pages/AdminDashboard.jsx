import '../styles/AdminDashboard.css'

function AdminDashboard() {
    return (
        <div className="card page-container">
            <div className="card-header line-color">
                <h3>ADMIN DASHBOARD</h3>
            </div>
            <div className="card-body">
                <div className="search-container">
                    <label htmlFor="username">Search Username:</label>
                    <input type="text" id="username" className='search-box' />
                </div>
                <h3>USERS</h3>
                <hr className="line-below-amount" />
                <ul className='user-list'>
                    <li className='user'>
                        <div className='left-side'>
                            <h4>USERNAME</h4>
                            <h5>FULL NAME</h5>
                        </div>
                        <div className='right-side'>
                            <input type="text" placeholder='Amount' className='amount-input'/>
                            <div className='admin-buttons'>
                                <button className='admin-add'>ADD</button>
                                <button className='admin-subtract'>SUBTRACT</button>
                            </div>
                        </div>
                    </li>
                    <hr className="line-below-amount" />
                    <li className='user'>
                        <div className='left-side'>
                            <h4>USERNAME</h4>
                            <h5>FULL NAME</h5>
                        </div>
                        <div className='right-side'>
                            <input type="text" placeholder='Amount' className='amount-input'/>
                            <div className='admin-buttons'>
                                <button className='admin-add'>ADD</button>
                                <button className='admin-subtract'>SUBTRACT</button>
                            </div>
                        </div>
                    </li>
                    <hr className="line-below-amount" />
                    <li className='user'>
                        <div className='left-side'>
                            <h4>USERNAME</h4>
                            <h5>FULL NAME</h5>
                        </div>
                        <div className='right-side'>
                            <input type="text" placeholder='Amount' className='amount-input'/>
                            <div className='admin-buttons'>
                                <button className='admin-add'>ADD</button>
                                <button className='admin-subtract'>SUBTRACT</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminDashboard
