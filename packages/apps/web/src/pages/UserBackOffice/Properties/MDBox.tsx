import React from 'react'
import Properties from '../../Common/Properties/Properties'
import moment from 'moment'
import { Link } from 'react-router-dom'
export const MDBox = ({ property }: any) => {
    return (
        <div className='col-md-6'>
            <div className="card" >
                <img src="https://cdn.prod.website-files.com/6417f2ffd039699811a0ce25/64252b6a3135f95fed66984a_blog-image-1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{property.code}</h5>
                    <Link to={'/my/properties/' + property.id} style={{ textDecoration: 'none' }}>       <h4 className="card-title">{property.title}</h4></Link>

                    <p className="card-text">{property.details}</p>
                    <hr />
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5>
                                <span className="badge text-bg-secondary">{property.type?.title}</span>
                                <span className="badge text-bg-secondary">{property.isActive}</span>
                            </h5>
                        </div>
                        <div className='col-md-6 text-end'>
                            {moment(property.createdAt).format('DD [de] MMMM [de] YYYY')}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
