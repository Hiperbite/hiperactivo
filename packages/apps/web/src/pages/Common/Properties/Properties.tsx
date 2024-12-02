// types



import Header from './components/Header';
import SearchFilter from './components/SearchFilter/SearchFilter';
import BestPropertyDeals from '../Home/components/BestPropertyDeals';
import BestPropertyList from '../Home/components/BestPropertyList';

export default function Properties() {
  return (<>
    <Header />
    <SearchComponent />
    <BestPropertyDeals />
    <BestPropertyList />
  </>)
}


const SearchComponent = () => {
  return (<>
    <div className="properties-section">
      <div className="home-banner-tab-wrap property-page">
        <SearchFilter />
      </div>
    </div>
  </>)
}