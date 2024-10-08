import React from 'react'
import { Link } from 'react-router-dom'

const Adminleft = () => {
    return (
        <>
            <div className="col-md-3">
                <div className="mt-3">
                    <Link to={"/admin/dashboard/"}>
                        <button type="submit" className='btn btn-primary'>Product Management</button>
                    </Link>
                </div>
                <div className="mt-3">
                    <Link to={"/admin/usermngmnt/"}>
                        <button type="submit" className='btn btn-primary'>User Management</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Adminleft