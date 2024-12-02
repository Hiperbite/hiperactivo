import React, { useEffect, useState } from 'react'
import { apiRequest } from '../../../../utils/api'
import moment from 'moment'
import { UserCreate } from '../UserCreate/UserCreate'
import { Link } from 'react-router-dom'

export const UserList = () => {

    const [users, setUsers] = useState<any[]>()

    const [data, setData] = useState<any>()
    const [currentPage, setCurrentPage] = useState(1);
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);
    useEffect(() => {
        apiRequest({
            endpoint: '/users',
            method: 'get',
            urlQueryParams: { page: currentPage, limit: 6 }
        }).then(({ data, ...meta }) => {
            setUsers(data)
            setData(meta)
        }).catch(err => console.error(err))
    }, [currentPage])

    return (
        <>
            <div className='row'>
                <div className="col-12">
                    <div className="card card-background card-background-after-none align-items-start mt-4 mb-5">
                        <div className="full-background" style={{ backgroundImage: "url('../assets/img/header-blue-purple.jpg')" }}></div>
                        <div className="card-body text-start p-4 w-100">
                            <h3 className="text-white mb-2">Utilizadores 🔥</h3>
                            <p className="mb-4 font-weight-semibold">
                                Check all the advantages and choose the best.
                            </p>
                            <button type="button" className="btn btn-outline-white btn-blur btn-icon d-flex align-items-center mb-0">
                                <span className="btn-inner--icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="d-block me-2">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.61036 4.52196C6.34186 4.34296 5.99664 4.32627 5.71212 4.47854C5.42761 4.63081 5.25 4.92731 5.25 5.25V8.75C5.25 9.0727 5.42761 9.36924 5.71212 9.52149C5.99664 9.67374 6.34186 9.65703 6.61036 9.47809L9.23536 7.72809C9.47879 7.56577 9.625 7.2926 9.625 7C9.625 6.70744 9.47879 6.43424 9.23536 6.27196L6.61036 4.52196Z" />
                                    </svg>
                                </span>
                                <span className="btn-inner--text">Watch more</span>
                            </button>
                            <img src="/assets/img/3d-cube.png" alt="3d-cube" className="position-absolute top-0 end-1 w-25 max-width-200 mt-n6 d-sm-block d-none" />
                        </div>
                    </div>
                </div>
            </div >
            <div className="row">
                <div className="col-12">
                    <div className="card border shadow-xs mb-4">
                        <div className="card-header border-bottom pb-0">
                            <div className="d-sm-flex align-items-center">
                                <div>
                                    <h6 className="font-weight-semibold text-lg mb-0">Utilizadores ja registados</h6>
                                    <p className="text-sm">See information about all members</p>
                                </div>
                                <div className="ms-auto d-flex">
                                    <button type="button" className="btn btn-sm btn-white me-2">
                                        Ver todos
                                    </button>
                                    <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center me-2" onClick={() => setShowUserCreateModal(true)}>
                                        <span className="btn-inner--icon">
                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                                            </svg>
                                        </span>
                                        <span className="btn-inner--text">Registar novo</span>

                                    </button>
                                    <UserCreate show={showUserCreateModal} setShow={setShowUserCreateModal} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 py-0">
                            <div className="border-bottom py-3 px-3 d-sm-flex align-items-center">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable1" autoComplete="off" checked />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable1">Todos</label>
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable2" autoComplete="off" />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable2">Membros</label>
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable3" autoComplete="off" />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable3">Gestores</label>
                                </div>
                                <div className="input-group w-sm-25 ms-auto">
                                    <span className="input-group-text text-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Pesquiser" />
                                </div>
                            </div>
                            <div className="table-responsive p-0">

                                <table className="table align-items-center mb-0">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7">Todos</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Function</th>
                                            <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                                            <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Employed</th>
                                            <th className="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((user) =>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                        <div className="d-flex align-items-center">
                                                            <img src="/img/unknow.png" className="avatar avatar-sm rounded-circle me-2" alt="user1" />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center ms-1">
                                                            <h6 className="mb-0 text-sm font-weight-semibold">{user.name}</h6>
                                                            <p className="text-sm text-secondary mb-0">{user.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm text-dark font-weight-semibold mb-0">{user.role}</p>
                                                    <p className="text-sm text-secondary mb-0">_</p>
                                                </td>
                                                <td className="align-middle text-center text-sm">
                                                    <span className="badge badge-sm border border-success text-success bg-success">Activo</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-secondary text-sm font-weight-normal">{moment(user.createdAt).format('DD/MM/YYYY')}</span>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to={"/admin/users/" + user?.id} className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                        <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                            </tr>)}
                                        {/* <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/team-3.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user2" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center ms-1">
                                                        <h6 className="mb-0 text-sm font-weight-semibold">Alexa Liras</h6>
                                                        <p className="text-sm text-secondary mb-0">alexa@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                                                <p className="text-sm text-secondary mb-0">Developer</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-sm font-weight-normal">11/01/19</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                    <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/team-1.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user3" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center ms-1">
                                                        <h6 className="mb-0 text-sm font-weight-semibold">Laurent Perrier</h6>
                                                        <p className="text-sm text-secondary mb-0">laurent@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm text-dark font-weight-semibold mb-0">Executive</p>
                                                <p className="text-sm text-secondary mb-0">Projects</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-sm font-weight-normal">19/09/17</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                    <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/marie.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user4" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center ms-1">
                                                        <h6 className="mb-0 text-sm font-weight-semibold">Michael Levi</h6>
                                                        <p className="text-sm text-secondary mb-0">michael@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                                                <p className="text-sm text-secondary mb-0">Developer</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-sm font-weight-normal">24/12/08</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                    <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/team-5.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user5" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center ms-1">
                                                        <h6 className="mb-0 text-sm font-weight-semibold">Richard Gran</h6>
                                                        <p className="text-sm text-secondary mb-0">richard@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                                                <p className="text-sm text-secondary mb-0">Executive</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-sm font-weight-normal">04/10/21</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                    <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/img/team-6.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user6" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center ms-1">
                                                        <h6 className="mb-0 text-sm font-weight-semibold">Miriam Eric</h6>
                                                        <p className="text-sm text-secondary mb-0">miriam@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-sm text-dark font-weight-semibold mb-0">Programtor</p>
                                                <p className="text-sm text-secondary mb-0">Developer</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-sm font-weight-normal">14/09/20</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                                    <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>*/}
                                    </tbody>
                                </table>
                            </div>
                            <div className="border-top py-3 px-3 d-flex align-items-center">
                                <p className="font-weight-semibold mb-0 text-dark text-sm">Pagina {data?.page} de {Math.ceil(data?.total / data?.pageSize)} - {data?.total} registos</p>
                                <div className="ms-auto">
                                    <button className="btn btn-sm btn-white mb-0" onClick={() => data?.page > 1 && setCurrentPage(data?.page - 1)}>Anterior</button>
                                    <button className="btn btn-sm btn-white mb-0" onClick={() => data?.page < Math.ceil(data?.total / data?.pageSize) && setCurrentPage(data?.page + 1)}>Proximo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
