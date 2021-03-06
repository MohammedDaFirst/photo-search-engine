import React from 'react'

const Photo = ({ urls: { regular },
  alt_description,
  likes,
  user: { name,
    portfolio_url,
    profile_image: { medium }
  }
}) => {
  return <article className="photo">
    <img src={regular} alt={alt_description} />
    <div className="photo-info">
      <h4>{name}</h4>
      <h4>{likes} likes</h4>

      <a href={portfolio_url} target="_blank" rel="noopener noreferrer" >
        <img src={medium} alt='' className='user-img' />
      </a>    </div>
  </article>
}

export default Photo
