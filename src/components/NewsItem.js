import React from 'react'

const NewsItem = (props) => {

    let {title, description, imgurl, newsurl, author, date, source} = props;
    return (
        
        <div className="card " >
          <span className="badge badge-dark position-absolute top-0 translate-middle bg-dark badge rounded-pill" style={{left:'90%' , zIndex:'1'}}>{source}</span>
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">By {author} at {date} </p>
                <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
    )
  
}

export default NewsItem