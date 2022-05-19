import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl ,author ,date } = this.props;
    return (
      <div>
        <div className="card"  >
          <img src={!imageurl?"https://cdn.cnn.com/cnnnext/dam/assets/220513191537-01-dalls-shooting-super-tease.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p> 
            <div className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></div>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark my-1 ">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
