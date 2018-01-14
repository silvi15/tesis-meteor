import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const MenuProject = () => (
    <Nav>
        <div className="MenuProject">
            <div className="page-header clearfix">
                <h3 className="pull-left"><label>Home</label></h3> 
                <div className="btn-group btn-group-justified" role="group" aria-label="Basic example">
                    <NavLink to="/projectsworking" type="button" className="btn btn-secondary">
                    to do <span className="fa fa-folder-open"></span>
                    </NavLink>  
                    <NavLink to="/projectsfinished" type="button" className="btn btn-secondary">
                    Done <span className="fa fa-folder"></span>
                    </NavLink>
                </div>
            </div>
            </div>
    </Nav>
);        
export default MenuProject;