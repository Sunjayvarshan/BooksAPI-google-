import React from 'react' 
import './gallery.css' 

const Gallery = ({items}) => { 
    let defaultImage ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2FhkpoU8UOudx3wcmGfYQgFizL9AnAiZnw&usqp=CAU' 
    return (
        <div className='gallary'> 
          {items.map((item,index)=>{ 
            let {title,imageLinks,infoLink}=item.volumeInfo; 
            console.log(imageLinks) 
            return( 
                <div key={index} className='Gallary_items'> 
                 <div className='card'>
                   <a href={infoLink} key={index} target='_blank' rel="noreferrer"> 
                   <img src={imageLinks !== undefined ? imageLinks.thumbnail : defaultImage} alt={title} className='Gallary_image'/> 
                   </a> 
                   <p>{title}</p>
                 </div>
            </div> ) })}
         </div> ) } 
             
             
export default Gallery