import React,{useState} from 'react';
import './Template.css';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less ':'Read More  '
  return (
    <div className="ReadMore">
    {readMore && extraContent}
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
      
    </div>
  );
}

export default ReadMore;