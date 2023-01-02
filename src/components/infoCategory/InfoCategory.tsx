import React from 'react'
import "./infoCategory.scss"

type category = {
  id:number,
  title:string,
  answer:string | undefined
}
interface Props {
  type:string
  gridnum:string
  detail: category[]
}
const InfoCategory = ({detail, type, gridnum}:Props) => {
    
  return (
    <section className='category-info'>
        <p>{type}</p>
        <div className={gridnum}>
            {detail?.map((info) => {
                return (
                    <div className='mapped-info' key={info.id}>
                        <p className='title'>{info.title}</p>
                        <p className='answer'>{info.answer}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default InfoCategory