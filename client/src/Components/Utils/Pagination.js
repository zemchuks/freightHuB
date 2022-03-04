// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

// const Pagination = ( ) => {
//     const [activePage, setActivePage] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1)
//     const [recordsPerPage] = useState(20)

//     const shipments = useSelector(state => state.shipments)
//     const { shippings } = shipments

//     // Page numbers should be empty at first
//     const pageNumbers = []

//     // Get current records
//   const indexOfLastRecord = currentPage * recordsPerPage // should give the index of the last records
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage // should give the index of the first records
//   // Get current records
//   const currentRecords = shippings.slice(indexOfFirstRecord, indexOfLastRecord) // Slices out the number of records per page

//   // change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber)
//     const totalRecords = shipments.length
//     // loop through pagenumbers
//     for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
//         pageNumbers.push(i)
//     }
//     const handlePaginate = (index) => {
//         setActivePage(index);
//         paginate(index)
//     }
//     return (
        
//         <ul className='pagination center'>
//            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
//            {currentRecords.data}
//                {pageNumbers.map(number => (
//                    <li key={number} style={{ marginLeft: '5px'}}>
//                        <button className={` btn white black-text ${activePage === number && 'active blue lighten-2 hoverable'}`} onClick={() => handlePaginate(number)}>
//                          {number}
//                        </button>
//                    </li>
                   
//                ))}
               
//             <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>

            
//         </ul> 
//     )
// }

// export default Pagination

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const shipments = useSelector(state => state.shipments)
  const { shippings } = shipments
  console.log(shipments)

  const shipmentsPerPage = 20
  const pagesVisited = pageNumber * shipmentsPerPage

  const displayShipments = shippings.slice(pagesVisited, pagesVisited + shipmentsPerPage).map((ship, key) => {
      return (
          <div key={key}>
              {ship.data}
          </div>
          
      )
  }) 
  const changePage = ({ selected }) => {
      setPageNumber(selected)
  }

  const pageCount = Math.ceil(shippings.length / shipmentsPerPage)

    return (
        <div className='center'>
            {displayShipments}
            <ReactPaginate previousLabel={'Prev'} nextLabel={'Next'} pageCount={pageCount}
            onPageChange={changePage} containerClassName={'paginationBttns'}
            />
        </div>
    )
}

export default Pagination