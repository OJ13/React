import React, { cloneElement } from 'react'
//import Membro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i});
                })
            }
            {/* {
                React.Children.map(props.children, (el) =>{
                    return cloneElement(el, props);
                })
            } */}
            {/* { cloneElement(props.children, props) } */}
            {/* {props.children} */}
            {/* <Membro nome="Rocky" sobrenome={props.sobrenome}/> 
                <Membro nome="John" {...props}/> 
                <Membro nome="Apollo" sobrenome="Balboa"/>  */}
        </div>
    )
}