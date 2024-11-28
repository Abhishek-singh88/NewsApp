import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge text-bg-info">{source}</span>
            <p className="card-text">{discription}...</p>
            <p className='text-muted'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem



