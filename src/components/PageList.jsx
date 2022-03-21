import React from 'react'

import Item from "./ListFlight"


function PageList({ items,isreturn, returnList}) {

    let length = items?.length;
    
      if(length > 0) {
        if(isreturn ===true){
          return (
            <div className='returnPageClass'  style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
              <div className='onewayDiv' style={{boxSizing: "border-box", overflowY : "scroll", maxHeight: "70%", backgroundColor:"rgb(245,245,245)",
                border: "1px solid grey"}}>
                  
                  <ul className="ItemPage-items" >
                      {items.map(item =>
                        <div key={item.id} className="ItemPage-item">
                            <Item item={item}>

                            </Item>
              
                        </div>
                      )}
        
        
                  </ul>

              </div>

              <div className='returnDiv' style={{boxSizing: "border-box", overflowY : "scroll" , maxHeight: "70%", backgroundColor:"rgb(245,245,245)",
                  border: "1px solid grey"}}>

                      <ul className="ItemPage-items" >
                                {returnList.map(item =>
                                  <div key={item.id} className="ItemPage-item">
                                      <Item item={item}>

                                      </Item>
              
                                  </div>
                                  )}
        
        
                      </ul>

              </div>

            </div>
          );
        }

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
    
    } 
    else {
      return (
        <ul className="ItemPage-items">
          <label>
          <h5>Search for flight.</h5>
          </label>
        </ul>
      );
    }
}




export default PageList
