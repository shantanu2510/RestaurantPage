import React from 'react'

const MenuCard = ({MenuData}) => {
    // console.log(MenuData);
   
  return (
    <>
    <section className="main-card--cointainer">
    {MenuData.map((curElem) => {
         const { id, name, category, image, description } = curElem;
        return(
            <>
                    <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">
                                {id}
                            </span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className='card-title'>{name}</h2>
                            <span className="card-description subtle">
                                {description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={image} alt="image" className='card-media' />
                        <span className="card-tag subtle">Order now</span>
                    </div>
                </div>
          </>
        )
    })}
    </section>
    </>
  )
}

export default MenuCard
