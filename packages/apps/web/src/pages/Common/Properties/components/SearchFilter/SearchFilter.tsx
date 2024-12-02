import React from 'react'
import SearchFilterForm from './SearchFilterForm'

export default function SearchFilter() {



  return (
    <>

      <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100"
        className="home-banner-tab w-tabs">
          <SearchFilterForm/>
      </div>
    </>
  )
}
