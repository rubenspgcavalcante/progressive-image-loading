import React from "react";

export default ({ children, thumb, title, text, technique }) =>
  <div className="card">
    <div className="card-image">
      {children}
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={thumb} alt="Placeholder image" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>

      <div className="content">
        {text}
      </div>
    </div>
  </div>