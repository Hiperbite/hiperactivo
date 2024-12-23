import React from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';


export const UserBackOfficeLayout = ({ children }: any) => {

    const dispatch = useDispatch();


    const auth = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/'
    };

    return (
        <>

            <main className="main-content max-height-vh-100 h-100">
                <nav className="navbar bg-slate-900 navbar-expand-lg flex-wrap top-0 px-0 py-0">
                    <div className="container py-2">
                        <nav aria-label="breadcrumb">
                            <div className="d-flex align-items-center">
                                <span className="px-3 font-weight-bold text-lg text-white me-4">NzilApp</span>
                            </div>
                        </nav>
                        <ul className="navbar-nav d-none d-lg-flex">
                            <li className="nav-item px-3 py-3 border-radius-sm  d-flex align-items-center">
                                <a href="/pages/dashboard.html" className="nav-link text-white p-0">
                                    Sobre Nós
                                </a>
                            </li>
                            <li className="nav-item px-3 py-3 border-radius-sm  d-flex align-items-center">
                                <a href="/pages/tables.html" className="nav-link text-white p-0">
                                    Contactos
                                </a>
                            </li>

                        </ul>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <ul className="navbar-nav ms-md-auto  justify-content-end">
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="/pages/tables.html" className="nav-link text-white p-0" style={{ color: '#FFF' }}>
                                        Contactos
                                    </a>

                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-white p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line bg-white"></i>
                                            <i className="sidenav-toggler-line bg-white"></i>
                                            <i className="sidenav-toggler-line bg-white"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-white p-0">
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointers">
                                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        {/*<li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm  me-3 " alt="user image" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="/assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 " alt="logo spotify" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item d-flex align-items-center ps-2">
                                    <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                                        <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                            <div className="avatar avatar-sm position-relative">
                                                <img src="/assets/img/team-2.jpg" alt="profile_image" className="w-100 border-radius-md" />
                                            </div>
                                        </li>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="horizontal w-100 my-0 dark" />
                    <div className="container pb-3 pt-3">
                        <ul className="navbar-nav d-none d-lg-flex">
                            <li className="nav-item border-radius-sm px-3 py-3 me-2  d-flex align-items-center">
                                <a href="/" className="nav-link text-white p-0">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item border-radius-sm px-3 py-3 me-2  d-flex align-items-center">
                                <a href="/" className="nav-link text-white p-0">
                                    Perfil
                                </a>
                            </li>
                            <li className="nav-item border-radius-sm px-3 py-3 me-2  d-flex align-items-center">
                                <a href="/" className="nav-link text-white p-0">
                                    Calendario
                                </a>
                            </li>
                            <li className="nav-item border-radius-sm px-3 py-3 me-2  d-flex align-items-center">
                                <a href="/" className="nav-link text-white p-0">
                                    Configurações
                                </a>
                            </li>
                        </ul>
                        <div className="ms-md-auto p-0 d-flex align-items-center w-sm-20">
                            <div className="input-group border-dark">
                                <span className="input-group-text border-dark bg-dark text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="opacity-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </span>
                                <input type="text" className="form-control border-dark bg-dark" placeholder="Pesquisar" />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="pt-5 pb-6 bg-cover" style={{ backgroundImage: "url('/assets/img/header-blue-purple.jpg')" }}>

                </div>
                <div className="container my-3 py-3">
                    <div className='row'>
                        <div className='col-md-6'>
                        </div>
                        <div className="col-md-6 text-end">
                            {auth.user?.email} - {auth.user?.roles[0]}  |
                            <a href='#' onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                    {children}
                    <Outlet />
                    <footer className="footer pt-3  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-xs text-muted text-lg-start">
                                        Copyright
                                        © 2024
                                        NzilApp by
                                        <a href="https://hiperbite.ao" className="text-secondary" target="_blank">Hiperbite.ao</a>.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-xs text-muted" target="_blank">Sobre Nós</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-xs text-muted" target="_blank">Contactos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/blog" className="nav-link text-xs text-muted" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license" className="nav-link text-xs pe-0 text-muted" target="_blank">Licença</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    )
}
