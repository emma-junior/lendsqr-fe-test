import React,{useState, useMemo} from 'react'
import useFetch from '../../hooks/useFetch';
import "./userTable.scss"
import { User } from '../../models/users';
import Pagination from '../pagination/Pagination';
import TableRow from './TableRow';
import FilterForm from './filterForm/FilterForm';
import TableSize from '../tableSize/TableSize';

type resp =  User[] | null
const UserTable = () => {
    const { data, isloading, isError } = useFetch("");

    const [pageSize, setPageSize] = useState<number>(9)
    // const [pageSizeDropdown, setPageSizeDropdown] = useState<boolean>(false)
    const [filterForm, setFilterForm] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);

    const headers:string[] = ["ORGANIZATION", "USERNAME", "EMAIL", "PHONE NUMBER", "DATE JOINED", "STATUS"]

    const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return (data as resp)?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data, pageSize]);
  return (
    <>
        <table >
            <thead>
                <tr>
                    {headers.map((row, index) => {
                        return (
                            <td key={index}>
                                {row}
                                <img onClick={() => setFilterForm(!filterForm)} className='filter-icon' src='/assets/icons/filter-table.svg' alt='' />
                            </td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {filterForm && <span className='filter-form'><FilterForm /></span>}
                {isError && <div className='error'>{isError}</div>}
                {isloading && <div className='loader'>Loading...</div>}
                {currentData?.map((row) =>  <TableRow key={row.id} row={row} />)}               
            </tbody>
        </table>

        {/* page size and pagination */}
        <section className='pagesize_pagination'>
            {/* <div className='table-size'>
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
            </div> */}
            <TableSize pageSize={pageSize} setPageSize={setPageSize} />
            <div>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={(data as resp)?.length || 500}
                    pageSize={pageSize}
                    siblingCount = {1}
                    onPageChange={(page) => setCurrentPage(page)}
                 />
            </div>
        </section>
    </>
  )
}

export default UserTable