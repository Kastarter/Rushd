import { useState } from 'react';

export const Dropdown = ( props ) => {

    return (

        <ul id="dropdown" style={{display:"none"}} className="dropdown">
          { props.children }
        </ul>
    )

}
