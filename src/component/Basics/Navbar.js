import React from 'react'

const Navbar = ({filterItem, MenuList}) => {
  return (
    <>  
        <nav className="navbar">
        <div className="btn-group">
            {
                MenuList.map((curElem)=>{
                    return (<button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>)  
                })
            }
            {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast </button>
            <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch </button>
            <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening </button>
            <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner </button> */}
            {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All </button> */}
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
