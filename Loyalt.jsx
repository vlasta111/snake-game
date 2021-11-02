import React from 'react'
import './Game.css'
import { Link } from 'react-router-dom';
import {LiderBoardRoute} from "./route/routes";
const Loyalt = (props) => {
    return (
        <div>
            <Link className='liderboard' to={{pathname: LiderBoardRoute}}>
            LiderBoard
                            </Link>
            {props.children}
        </div>
    )
}

export default Loyalt