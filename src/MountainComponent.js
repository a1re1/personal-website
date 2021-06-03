import React from "react";

//This is inspired by Alexand @Codepen https://codepen.io/Monaxxx/pen/bZJWLB
const mountainComponent = () => {
  return (
    <div className="Mountains">
      <div className="wrap">
        <div className="cloud-bg"></div>
        <div className="mountain-small">
          <svg className="peak" width="178" height="112">
            <polyline
              points="89,0 0,112 
                                    40,95 56,112 
                                    89,70 110,70
                                    125,90 145,70"
              fill="#81b1e4"
              strokeWidth="1"
              stroke="#81b1e4"
            />
          </svg>
        </div>
        <div className="hill hill-right"></div>
        <div className="hill hill-left"></div>
        <ul className="tree-list">
          <li className="tree tree-dark"></li>
          <li className="tree tree-dark"></li>
          <li className="tree tree-dark"></li>
          <li className="tree tree-dark"></li>
          <li className="tree tree-light"></li>
          <li className="tree tree-light"></li>
          <li className="tree tree-light"></li>
        </ul>
        <ul className="cloud-list">
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
          <li className="cloud cloud-small cloud-light"></li>
        </ul>
      </div>
    </div>
  );
};

export default mountainComponent;
