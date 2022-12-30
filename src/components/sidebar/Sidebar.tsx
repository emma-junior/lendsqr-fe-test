import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='switch-org'>
          <img src="assets/icons/briefcase.svg" alt="briefcase" />
          <span>Switch Organisation</span>
          <img src='assets/icons/arrowdown.svg' alt='arrow' />
        </div>
        <div className='dashboard'>
          <img src='assets/icons/home.svg' alt='home' />
          <span>Dashboard</span>
        </div>
        <ul>
          <p>CUSTOMERS</p>
          <li>
            <img src='assets/icons/users.svg' alt='users' />
            <span>Users</span>
          </li>
          <li>
            <img src='assets/icons/guarantor.svg' alt='user' />
            <span>Guarantors</span>
          </li>
          <li>
            <img src='assets/icons/loans.svg' alt='loan' />
            <span>Loans</span>
          </li>
          <li>
            <img src='assets/icons/handshake.svg' alt='handshake' />
            <span>Decision Models</span>
          </li>
          <li>
            <img src='assets/icons/piggy-bank.svg' alt='piggy-bank' />
            <span>Savings</span>
          </li>
          <li>
            <img src='assets/icons/loan-request.svg' alt='loan-request' />
            <span>Loan Requests</span>
          </li>
          <li>
            <img src='assets/icons/whitelist.svg' alt='whitelist' />
            <span>Whitelist</span>
          </li>
          <li>
            <img src='assets/icons/karma.svg' alt='karma' />
            <span>Karma</span>
          </li>
          <p>BUSINESSES</p>
          <li>
            <img src="assets/icons/briefcase.svg" alt="briefcase" />
            <span>Organization</span>
          </li>
          <li>
            <img src='assets/icons/loan-request.svg' alt='loan-request' />
            <span>Loan Products</span>
          </li>
          <li>
            <img src='assets/icons/np_bank.svg' alt='np_bank' />
            <span>Savings Products</span>
          </li>
          <li>
            <img src='assets/icons/coins-solid.svg' alt='coins-solid' />
            <span>Fees and Charges</span>
          </li>
          <li>
            <img src='assets/icons/transaction.svg' alt='transaction' />
            <span>Transactions</span>
          </li>
          <li>
            <img src='assets/icons/galaxy.svg' alt='galaxy' />
            <span>Services</span>
          </li>
          <li>
            <img src='assets/icons/user-cog.svg' alt='user-cog' />
            <span>Service Account</span>
          </li>
          <li>
            <img src='assets/icons/scroll.svg' alt='scroll' />
            <span>Settlements</span>
          </li>
          <li>
            <img src='assets/icons/chart-bar.svg' alt='chart-bar' />
            <span>Reports</span>
          </li>
          <p>SETTINGS</p>
          <li>
            <img src='assets/icons/sliders-h.svg' alt='sliders-h' />
            <span>Preferences</span>
          </li>
          <li>
            <img src='assets/icons/badge-percent.svg' alt='badge-percent' />
            <span>Fees and Pricing</span>
          </li>
          <li>
            <img src='assets/icons/clipboard-list.svg' alt='clipboard-list' />
            <span>Audit Logs</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar