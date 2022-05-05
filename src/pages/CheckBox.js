import React, {useReducer} from 'react';


export function CheckBox() {
    const [checked, toggle] = useReducer(
        checked =>!checked,
        false
    );
   
    return (
        <>
        <label htmlFor="checkbox">
           
            </label>
            <input 
            id="checkbox"
            type="checkbox"
           
            onChange={toggle}
            className="checkbox"
            />
            </>
    )
    }
    export default CheckBox;