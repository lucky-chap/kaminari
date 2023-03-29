import React from "react"

import "./styles.scss"

export default function Ellipses() {
  return (
    <div className="">
      <div className="container__item landing-page-container">
        <div className="content__wrapper">
          <div className="ellipses-container">
            <h2 className="greeting">Hello</h2>
            <div className="ellipses ellipses__outer--thin">
              <div className="ellipses ellipses__orbit" />
            </div>
            <div className="ellipses ellipses__outer--thick" />
          </div>
          <span className="timeline__unit" />
          <span className="timeline__unit timeline__unit--active" />
          <span className="timeline__unit" />
        </div>
      </div>
    </div>
  )
}
