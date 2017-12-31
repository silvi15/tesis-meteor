import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const MenuProject = () => (
    <Nav>
        <div className="MenuProject"> 
        <div className="btn-group btn-group-justified" role="group" aria-label="Basic example">
            <NavLink to="/projectsworking" type="button" className="btn btn-secondary">
                <span className="fa fa-folder-open"></span>
             </NavLink>  

            <NavLink to="/projectsfinished" type="button" className="btn btn-secondary">
                <span className="fa fa-folder"></span>
            </NavLink>
        </div>
        </div>
        </Nav>
);        
export default MenuProject;