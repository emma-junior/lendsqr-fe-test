import React, {useState} from 'react'
import "./tableSize.scss"


interface Props {
  pageSize:number
  setPageSize:React.Dispatch<React.SetStateAction<number>>
}
const TableSize = ({pageSize, setPageSize}:Props) => {
    const [pageSizeDropdown, setPageSizeDropdown] = useState<boolean>(false)
  return (
    <div className='table-size'>
        <p>Showing</p>
        <div onClick={() => setPageSizeDropdown(!pageSizeDropdown)} className='page-size'>
            <p>{pageSize}</p>
            <img className='arrow' src='/assets/icons/arrowdown.svg' alt='arrow' />
            {pageSizeDropdown && <ul>
                <li onClick={() => setPageSize(9)}>9</li>
                <li onClick={() => setPageSize(12)}>12</li>
            </ul>}
        </div>
        <p>out of 500</p>
    </div>
  )
}

export default TableSize