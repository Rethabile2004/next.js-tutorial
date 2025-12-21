'use client'
const error = (error:Error) => {
    console.log(error.message);
    
  return (
    <div>There was an error</div>
  )
}

export default error