import React from 'react'
import Charactersitem from './Charactersitem'
import Spinner from '../Spinner'

const charactersgreed = ({items,loading}) => {
  return loading ? (
 <Spinner />
  ) : (
  <section className='cards'>
      {items.map(item =>(
          <Charactersitem key={item.char_id} item={item}></Charactersitem>
          ))}
  </section>
    
  )
}

export default charactersgreed