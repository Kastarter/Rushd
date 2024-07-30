import { useState } from 'react';

export const Dropdown = ( props ) => {

    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {

        if ( display == 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }

    return (

        <div>

            <div>

                Hello World

            </div>

            <div style={{display:display}}>

                { props.children }

            </div>

        </div>

    )

}
