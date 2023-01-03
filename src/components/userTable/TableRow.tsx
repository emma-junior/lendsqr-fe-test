import React, {useState} from 'react'
import { User } from '../../models/users';
import moment from 'moment'
import { Link } from "react-router-dom" 

interface Props {
  row:User
}

const TableRow = ({row}:Props) => {
     const [morePopup, setMorePopup] = useState<boolean>(false)
     const [status, setStatus] = useState<string>("pending")
  return (
    <tr key={row.id}>                        
        <td>{row.orgName}</td>
        <td>{row.userName}</td>
        <td>{row.email}</td>
        <td>{row.phoneNumber}</td>
        <td>{moment(row.createdAt).format("MMMM D, YYYY hh:mm A")}</td>
        <td ><p className={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</p></td>
        <td onClick={() => setMorePopup(!morePopup)}>
            <img onClick={() => setMorePopup(!morePopup)} className='more-icon' src='assets/icons/ic-more.svg' alt='' />
            {morePopup &&<ul>
                <Link className='popup-link' to ={`/users/${row.id}`}>
                    <li>
                        <img src='assets/icons/view.svg' alt='view' />
                        <p>View Details</p>
                    </li>
                </Link>
                <Link className='popup-link' to ="#">
                    <li onClick={() => setStatus("blacklisted")}>
                        <img src='assets/icons/delete-friend.svg' alt='view' />
                        <p>Blacklist User</p>
                    </li>
                </Link>
                <Link className='popup-link' to ="#">
                    <li onClick={() => setStatus("active")}>
                        <img src='assets/icons/activate-user.svg' alt='view' />
                        <p>Activate User</p>
                    </li>
                </Link>
            </ul>}
        </td>
    </tr>
  )
}

export default TableRow