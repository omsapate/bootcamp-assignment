import React from 'react'

import Item from "./Lists"


function PageList({ items }) {
    let length = items.length;
    if(length > 0) {
      return (
        <ul className="ItemPage-items">
          {items.map(item =>
            <div key={item.id} className="ItemPage-item">
              <Item item={item}>

              </Item>
            </div>
          )}
        </ul>
      );
    } else {
      return (
        <ul className="ItemPage-items">
          <label>
          <h5>There are no flights available.</h5>
          </label>
        </ul>
      );
    }
}




export default PageList
