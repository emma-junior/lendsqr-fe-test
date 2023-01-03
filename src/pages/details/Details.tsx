import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import InfoCategory from '../../components/infoCategory/InfoCategory';
import useFetch from '../../hooks/useFetch';
import {User} from "../../models/users"
import "./details.scss"
import { Link } from 'react-router-dom';


type resp =  User | null
const Details = () => {
  const { id } = useParams()
  const { data, isloading, isError } = useFetch(`${id}`);
  const [details, setDetails] = useState<resp>(data);

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);
  useEffect(() => {
  const details = JSON.parse(localStorage.getItem('dataKey')|| '{}');
  if (details) {
   setDetails(details);
  }
  }, [data]);

  //data needed for personal information section
  const personal = [
        {
            id:1,
            title: "FULL NAME",
            answer: `${details?.profile.firstName} ${details?.profile.lastName}`
        },
        {
            id:2,
            title: "PHONE NUMBER",
            answer: details?.phoneNumber
        },
        {
            id:3,
            title: "EMAIL ADDRESS",
            answer: details?.email
        },
        {
            id:4,
            title: "BVN",
            answer: details?.profile.bvn
        },
        {
            id:5,
            title: "GENDER",
            answer: details?.profile.gender
        },
        {
            id:6,
            title: "MARITAL STATUS",
            answer: "Single"
        },
        {
            id:7,
            title: "CHILDREN",
            answer: "None"
        },
        {
            id:8,
            title: "TYPE OF RESIDENCE",
            answer: "Parent's Apartment"
        },
    ]

    //Data needed for education and employment section
    const education = [
        {
            id:1,
            title: "LEVEL OF EDUCATION",
            answer: details?.education.level
        },
        {
            id:2,
            title: "EMPLOYMENT STATUS",
            answer: details?.education.employmentStatus
        },
        {
            id:3,
            title: "SECTOR OF EMPLOYMENT",
            answer: details?.education.sector
        },
        {
            id:4,
            title: "DURATION OF EMPLOYMENT",
            answer: details?.education.duration
        },
        {
            id:5,
            title: "OFFICE EMAIL",
            answer: details?.education.officeEmail
        },
        {
            id:6,
            title: "MONTHLY INCOME",
            answer: ` ₦${details?.education.monthlyIncome[0]}-₦${details?.education.monthlyIncome[1]}`
        },
        {
            id:7,
            title: "LOAN REPAYMENT",
            answer: details?.education.loanRepayment
        }
    ]
    //Data needed for Socials section
    const socials = [
        {
            id:1,
            title: "TWITTER",
            answer: details?.socials.twitter
        },
        {
            id:2,
            title: "FACEBOOK",
            answer: details?.socials.facebook
        },
        {
            id:3,
            title: "INSTAGRAM",
            answer: details?.socials.instagram
        }
    ]
    //Data needed for Socials section
    const guarantor = [
        {
            id:1,
            title: "FULLNAME",
            answer: `${details?.guarantor.firstName} ${details?.guarantor.lastName}`
        },
        {
            id:2,
            title: "PHONE NUMBER",
            answer: details?.guarantor.phoneNumber
        },
        {
            id:3,
            title: "EMAIL ADDRESS",
            answer:  `${details?.guarantor.firstName}@gmail.com`
        },
        {
            id:4,
            title: "RELATIONSHIP",
            answer:  "Sister"
        }
    ]

  return (
    <section className='details'>
      {isError && <div className='error'>{isError}</div>}
      {isloading && <div className='loader'>Loading...</div>}
      <Link className='back' to="/users">
          <img className='arrow' src='/assets/icons/back.svg' alt='arrow' />
          <p>Back to Users</p>
      </Link>
      <div className='top-section'>
        <p>User Details</p>
        <div className='btns'>
          <button className='blacklist'>BLACKLIST USER</button>
          <button className='activate'>ACTIVATE USER</button>
        </div>
      </div>
      <DetailsHeader details={details} />
      <div className='info-box'>
        <div><InfoCategory gridnum="five" type="Personal Information" detail={personal} /></div>
        <hr />
        <div className='category'><InfoCategory gridnum="four" type="Education and Employment" detail={education} /></div>
        <hr />
        <div className='category'><InfoCategory gridnum="five" type="Socials" detail={socials} /></div>
        <hr />
        <div className='category'><InfoCategory gridnum="five" type="Guarantor" detail={guarantor} /></div>
      </div>
    </section>
  )
}

export default Details