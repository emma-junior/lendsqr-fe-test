import React from 'react'
import "./filterForm.scss"

const FilterForm = () => {
  return (
    <section className='form'>
        <div className='single-form'>            
            <label className="">Organization</label>
            <select className='select' name="organization" id="organization">
                <option value="">Select</option>
                <option value="lendsqr">Lendsqr</option>
                <option value="lendstar">Lendstar</option>
            </select>
        </div>
        <div className='single-form'>            
            <label className="">Username</label>
            <input placeholder='User' className="" />
        </div>
        <div className='single-form'>            
            <label className="">Email</label>
            <input type="email" placeholder='Email' className=""  />
        </div>
        <div className='single-form'>            
            <label className="">Date</label>
            <input type="date" placeholder='Date' className=""  />
        </div>
        <div className='single-form'>            
            <label className="">Phone Number</label>
            <input placeholder='Phone Number' className=""  />
        </div>
        <div className='single-form'>            
            <label className="">Status</label>
            <select className='select' name="status" id="status">
                <option value="">Select</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="blacklisted">Blacklisted</option>
            </select>
        </div>
        <div className='form-btns'>
            <button className='reset-btn'>Reset</button>
            <button className='filter-btn'>Filter</button>
        </div>
    </section>
  )
}

export default FilterForm