import React from 'react'

const Vision = ({tabs}) => {
  return (
    <section className='main'>
      <h3>{tabs[1].title}</h3>
      <p>{tabs[1].info}</p>
    </section>
  )
}

export default Vision