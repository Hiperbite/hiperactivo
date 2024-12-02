import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiRequest } from '../../../../utils/api'

export const UserDetails = () => {

    const { id } = useParams()

    const [user, setUser] = useState<any>({})

    useEffect(() => {
        apiRequest({
            endpoint: '/users/' + id,
            method: 'get',
        }).then((data: any) => {
            setUser(data)
        }).catch(err => console.error(err))
    }, [])
    return (
        <div>
            <div className="pt-7 pb-6 bg-cover" style={{ backgroundImage: "url('/assets/img/header-orange-purple.jpg')", backgroundPosition: "bottom" }}></div>
            <div className="container">
                <div className="card card-body py-2 bg-transparent shadow-none">
                    <div className="row">
                        <div className="col-auto">
                            <div className="avatar avatar-2xl rounded-circle position-relative mt-n7 border border-gray-100 border-4">
                                <img src="/img/unknow.png" alt="profile_image" className="w-100" />
                            </div>
                        </div>
                        <div className="col-auto my-auto">
                            <div className="h-100">
                                <h3 className="mb-0 font-weight-bold">
                                    {user?.name}
                                </h3>
                                <p className="mb-0">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 text-sm-end">
                            <a href="javascript:;" className="btn btn-sm btn-white">Cancel</a>
                            <a href="javascript:;" className="btn btn-sm btn-dark">Save</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3 py-3">
                <div className="row">


                </div>
            </div>

        </div >
    )
}
