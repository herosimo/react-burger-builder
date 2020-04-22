/**
 * The hamburge menu (3 horizontal line)
 * Pass to Toolbar.js
 */

import React from "react";

import classes from "./DrawerToggle.css";

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
