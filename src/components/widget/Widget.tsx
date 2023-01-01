import React from 'react'
import "./widget.scss"

interface Props {
  type: string,
  num: number,
  icon: string,
  icon_wrapper: string
}

const Widget = ({type, num, icon, icon_wrapper}:Props) => {
  return (
    <section className='widget'>
      <div className={icon_wrapper}>
          <img src={`assets/icons/${icon}.svg`} alt='icon' />
      </div>
      <p className='title'>{type}</p>
      <p className='figure'>{num.toLocaleString("en-US")}</p>
    </section>
  )
}

export default Widget