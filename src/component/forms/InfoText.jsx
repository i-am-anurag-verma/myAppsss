import React from 'react'

const InfoText = () => {

        React.useEffect(() => {
          console.log('====mounted');
          return () => {
              console.log('====component unmounted')
          }
      }, [])  
  return (
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aliquid inventore qui, dolorum reprehenderit nesciunt odit eligendi maiores accusantium. Id, deleniti, accusamus reprehenderit quas distinctio, optio in nesciunt porro nostrum fuga itaque quidem obcaecati corporis ad? Eligendi ducimus numquam quasi voluptatum? Iusto beatae ex quasi assumenda aliquid alias quod ipsum repellendus officia, corporis earum.
        </p>
    </div>
  )
}

export default InfoText