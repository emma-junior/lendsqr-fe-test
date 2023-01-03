import { User } from '../../models/users'
import "./detailsHeader.scss"


interface Props {
  details: User|null
}
const DetailsHeader = ({details}:Props) => {
  return (
    <section className='details-header'>       
        <div className='profile'>
            <div className='img-wrapper'><img src={details?.profile.avatar} alt='profile-img' /></div>
            <div className='name-acc'>
                <p className='name'>{details?.profile.firstName}{" "}{details?.profile.lastName}</p>
                <p className='acc'>{details?.accountNumber}</p>
            </div>
            <div className='user-tier'>
                <div className='wrapper'>
                    <p>User's Tier</p>
                    <div className='rating'>
                        <img className="star" src="/assets/icons/star.svg" alt='' />
                        <img className="star" src="/assets/icons/empty-star.svg" alt='' />
                        <img className="star" src="/assets/icons/empty-star.svg" alt='' />
                    </div>
                </div>
            </div>
            <div className='account-balance'>
                <p className='balance'>₦{details?.accountBalance}</p>
                <p className='bank'>{details?.profile.bvn}/Providus Bank</p>
            </div>
        </div>
        <div className='profile-links'>
            <ul>
                <li className='active'>General Details</li>
                <li>Documents</li>
                <li>Bank Details</li>
                <li>Loans</li>
                <li>Saving</li>
                <li>App and System</li>
            </ul>
        </div>
    </section>
  )
}

export default DetailsHeader