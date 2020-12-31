/**
 * Show each single navigatio item
 * Pass to NavigationItems
 */

import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.css";

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link} activeClassName={classes.active} exact>
            {props.children}
        </NavLink>
    </li>
);

export default NavigationItem;