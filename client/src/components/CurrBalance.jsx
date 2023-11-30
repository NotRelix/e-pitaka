import React, { useState } from 'react'
import view_hide from '../assets/View_hide.png'
import view from '../assets/view.png'

const CurrBalance = () => {
 const [isHidden, setIsHidden] = useState(false)
 const [imageSrc, setImageSrc] = useState(view)

 return (
   <>
     <div className="card container balance-container">
       <div className="row balance-header">
         <div className="col">
           <h3>CURRENT BALANCE:</h3>
         </div>
         <div className="col-1">
           <button className="hide-button" onClick={() => {
            setIsHidden(!isHidden)
            setImageSrc(prevSrc => prevSrc == view ? view_hide : view)
           }}>
             <img className="img_hide" src={imageSrc} alt="View Hide" />
           </button>
         </div>
       </div>
       <div className="row">
         <p className="balance-value">
           {isHidden ? '₱ 1,000,000.00' : '₱ ..........'}
         </p>
       </div>
     </div>
   </>
 )
}

export default CurrBalance