import React, { useEffect, useState } from 'react';
import { MDBox } from './MDBox';
import { apiRequest } from '../../../utils/api';
import Pagination from '../../../components/Pagination';
import { PropertiesRegister } from './PropertiesRegister/PropertiesRegister';
import PropertiesRegisterModal from './PropertiesRegister/PropertiesRegisterModal';
import { Buttom } from '../../../components/Forms';

const Properties: React.FC = () => {
  const [property, setProperty] = useState<any>(null);

  const [properties, setProperties] = useState<any[]>()

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const lastPage = 3;

  useEffect(() => {
    apiRequest({
      endpoint: '/property',
      method: 'get',
      urlQueryParams: { page: currentPage, limit: 6 }
    }).then(({ data, total }) => {
      setTotal(total)
      setProperties(data)
    }).catch(err => console.error(err))
  }, [currentPage])
  return (
    <div className='col'>
      <div className='row'>
        <div className='col-md-9'>
          <h1>Meus Imoveis</h1>

        </div>
        <div className='col-md-3 text-end'>

          <Buttom type="button" value={"Registar"} onClick={() => setProperty({})} />
        </div>
      </div>
      <div className='row'>
        {properties?.map((property: any) => <MDBox property={property} />)}
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                maxLength={7}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className="col-md-3 text-end">
              <h5>{total}</h5>
            </div>
          </div>
        </div>
      </div>

      <PropertiesRegister property={property} setProperty={setProperty} />
    </div>
  );
};

export default Properties;