import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export const AuthenticationLayout = ({ children }: any) => {

    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/'
    };
    return (
        <>

            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 d-flex flex-column mx-auto">
                                    {children}
                                </div>
                                <div className="col-md-6">
                                    <div className="position-absolute w-40 top-0 end-0 h-100 d-md-block d-none">
                                        <div className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 bg-cover ms-n8" style={{ backgroundImage: "url('/assets/img/image-sign-in.jpg')" }}>
                                            <div className="blur mt-12 p-4 text-center border border-white border-radius-md position-absolute fixed-bottom m-4">
                                                <h2 className="mt-3 text-dark font-weight-bold">Entre na nossa comunidade global de profissionais.</h2>
                                                <h6 className="text-dark text-sm mt-5">Copyright © 2024 Design System by Hiperbite.ao</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
