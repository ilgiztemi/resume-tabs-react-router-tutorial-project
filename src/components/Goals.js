import React from 'react'

const Goals = ({tabs}) => {
  return (
    <section className='main'>
      <h3>{tabs[2].title}</h3>
      <p>{tabs[2].info}</p>
    </section>
  )
}

export default Goals