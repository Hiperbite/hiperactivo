import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export const ManagerBackOfficeLayout = ({ children }: any) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const auth = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/'
    };

    const handleGoBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/'); // Fallback route
        }
    };

    const isCurrentMenu = (key: string) => location?.pathname?.indexOf(key) > -1 ? 'active' : '';
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand d-flex align-items-center m-0" href=" https://demos.creative-tim.com/corporate-ui-dashboard/pages/dashboard.html " target="_blank">
                        <span className="font-weight-bold text-lg">NzilApp</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse px-4  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={"nav-link " + isCurrentMenu('/dashboard')} to={"/admin/dashboard"}>
                                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                                    <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>dashboard</title>
                                        <g id="dashboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="template" transform="translate(12.000000, 12.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <path className="color-foreground" d="M0,1.71428571 C0,0.76752 0.76752,0 1.71428571,0 L22.2857143,0 C23.2325143,0 24,0.76752 24,1.71428571 L24,5.14285714 C24,6.08962286 23.2325143,6.85714286 22.2857143,6.85714286 L1.71428571,6.85714286 C0.76752,6.85714286 0,6.08962286 0,5.14285714 L0,1.71428571 Z" id="Path"></path>
                                                <path className="color-background" d="M0,12 C0,11.0532171 0.76752,10.2857143 1.71428571,10.2857143 L12,10.2857143 C12.9468,10.2857143 13.7142857,11.0532171 13.7142857,12 L13.7142857,22.2857143 C13.7142857,23.2325143 12.9468,24 12,24 L1.71428571,24 C0.76752,24 0,23.2325143 0,22.2857143 L0,12 Z" id="Path"></path>
                                                <path className="color-background" d="M18.8571429,10.2857143 C17.9103429,10.2857143 17.1428571,11.0532171 17.1428571,12 L17.1428571,22.2857143 C17.1428571,23.2325143 17.9103429,24 18.8571429,24 L22.2857143,24 C23.2325143,24 24,23.2325143 24,22.2857143 L24,12 C24,11.0532171 23.2325143,10.2857143 22.2857143,10.2857143 L18.8571429,10.2857143 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link  " +  isCurrentMenu('/users')} to={"/admin/users"}>
                                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                                    <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>Utilizadores</title>
                                        <g id="table" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="view-grid" transform="translate(12.000000, 12.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <path className="color-foreground" d="M3.42857143,0 C1.53502286,0 0,1.53502286 0,3.42857143 L0,6.85714286 C0,8.75069143 1.53502286,10.2857143 3.42857143,10.2857143 L6.85714286,10.2857143 C8.75069143,10.2857143 10.2857143,8.75069143 10.2857143,6.85714286 L10.2857143,3.42857143 C10.2857143,1.53502286 8.75069143,0 6.85714286,0 L3.42857143,0 Z" id="Path"></path>
                                                <path className="color-background" d="M3.42857143,13.7142857 C1.53502286,13.7142857 0,15.2492571 0,17.1428571 L0,20.5714286 C0,22.4650286 1.53502286,24 3.42857143,24 L6.85714286,24 C8.75069143,24 10.2857143,22.4650286 10.2857143,20.5714286 L10.2857143,17.1428571 C10.2857143,15.2492571 8.75069143,13.7142857 6.85714286,13.7142857 L3.42857143,13.7142857 Z" id="Path"></path>
                                                <path className="color-background" d="M13.7142857,3.42857143 C13.7142857,1.53502286 15.2492571,0 17.1428571,0 L20.5714286,0 C22.4650286,0 24,1.53502286 24,3.42857143 L24,6.85714286 C24,8.75069143 22.4650286,10.2857143 20.5714286,10.2857143 L17.1428571,10.2857143 C15.2492571,10.2857143 13.7142857,8.75069143 13.7142857,6.85714286 L13.7142857,3.42857143 Z" id="Path"></path>
                                                <path className="color-foreground" d="M13.7142857,17.1428571 C13.7142857,15.2492571 15.2492571,13.7142857 17.1428571,13.7142857 L20.5714286,13.7142857 C22.4650286,13.7142857 24,15.2492571 24,17.1428571 L24,20.5714286 C24,22.4650286 22.4650286,24 20.5714286,24 L17.1428571,24 C15.2492571,24 13.7142857,22.4650286 13.7142857,20.5714286 L13.7142857,17.1428571 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Utilizadores</span>
                            </Link>
                        </li>
                        {/*
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/wallet.html">
                                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                                    <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>wallet</title>
                                        <g id="wallet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="credit-card" transform="translate(12.000000, 15.000000)" fill="#FFFFFF">
                                                <path className="color-background" d="M3,0 C1.343145,0 0,1.343145 0,3 L0,4.5 L24,4.5 L24,3 C24,1.343145 22.6569,0 21,0 L3,0 Z" id="Path" fill-rule="nonzero"></path>
                                                <path className="color-foreground" d="M24,7.5 L0,7.5 L0,15 C0,16.6569 1.343145,18 3,18 L21,18 C22.6569,18 24,16.6569 24,15 L24,7.5 Z M3,13.5 C3,12.67155 3.67158,12 4.5,12 L6,12 C6.82842,12 7.5,12.67155 7.5,13.5 C7.5,14.32845 6.82842,15 6,15 L4.5,15 C3.67158,15 3,14.32845 3,13.5 Z M10.5,12 C9.67158,12 9,12.67155 9,13.5 C9,14.32845 9.67158,15 10.5,15 L12,15 C12.82845,15 13.5,14.32845 13.5,13.5 C13.5,12.67155 12.82845,12 12,12 L10.5,12 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">Wallet</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  " href="../pages/rtl.html">
                                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                                    <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>rtl</title>
                                        <g id="rtl" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="menu-alt-3" transform="translate(12.000000, 14.000000)" fill="#FFFFFF">
                                                <path className="color-foreground" d="M0,1.71428571 C0,0.76752 0.76752,0 1.71428571,0 L22.2857143,0 C23.2325143,0 24,0.76752 24,1.71428571 C24,2.66105143 23.2325143,3.42857143 22.2857143,3.42857143 L1.71428571,3.42857143 C0.76752,3.42857143 0,2.66105143 0,1.71428571 Z" id="Path"></path>
                                                <path className="color-background" d="M0,10.2857143 C0,9.33894857 0.76752,8.57142857 1.71428571,8.57142857 L22.2857143,8.57142857 C23.2325143,8.57142857 24,9.33894857 24,10.2857143 C24,11.2325143 23.2325143,12 22.2857143,12 L1.71428571,12 C0.76752,12 0,11.2325143 0,10.2857143 Z" id="Path"></path>
                                                <path className="color-background" d="M10.2857143,18.8571429 C10.2857143,17.9103429 11.0532343,17.1428571 12,17.1428571 L22.2857143,17.1428571 C23.2325143,17.1428571 24,17.9103429 24,18.8571429 C24,19.8039429 23.2325143,20.5714286 22.2857143,20.5714286 L12,20.5714286 C11.0532343,20.5714286 10.2857143,19.8039429 10.2857143,18.8571429 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="nav-link-text ms-1">RTL</span>
                            </a>
                        </li>
                        <li className="nav-item mt-2">
                            <div className="d-flex align-items-center nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="ms-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor" >
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="font-weight-normal text-md ms-2">Account Pages</span>
                            </div>
                        </li>
                        <li className="nav-item border-start my-0 pt-2">
                            <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/profile.html">
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item border-start my-0 pt-2">
                            <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-in.html">
                                <span className="nav-link-text ms-1">Sign In</span>
                            </a>
                        </li>
                        <li className="nav-item border-start my-0 pt-2">
                            <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-up.html">
                                <span className="nav-link-text ms-1">Sign Up</span>
                            </a>
                        </li>*/}
                    </ul>
                </div>
            </aside>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

                <nav className="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
                    <div className="container-fluid py-1 px-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;" onClick={handleGoBack}>{"<"}</a></li>
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Dashboard</a></li>
                            </ol>

                            <h6 className="font-weight-bold mb-0">Dashboard</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body bg-white  border-end-0 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control ps-0" placeholder="Pesquisar" />
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0">
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointers">
                                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        {/* <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                                                            <i className="fa fa-clock opacity-6 me-1"></i>
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
                                                        <img src="../assets/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New report</span> by Google
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                                                            <i className="fa fa-clock opacity-6 me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
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
                                                        <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                                                            <i className="fa fa-clock opacity-6 me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>*/}
                                    </ul>
                                </li>
                                <li className="nav-item ps-2 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0">
                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid py-4 px-5">
                    <div className='row'>
                        <div className='col-md-6'>
                        </div>
                        <div className="col-md-6 text-end">
                            {auth.user?.email} - {auth.user?.roles[0]}  |
                            <a href='#' onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                    <div className="row">

                        {children}

                        <Outlet />
                    </div>
                </div>


            </main>


        </>
    )
}
