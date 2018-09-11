import React from 'react';
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import CompanyIcon from '@material-ui/icons/locationcity';
import CategoryIcon from '@material-ui/icons/category';

const style = {
    menu:{
        background: '#313131',
},
    icon:{
        color: 'white'
    }
}

export const DrawerNavigation = (
    <div style={style.menu}>

        <ListItem button component={Link} to="/#">
            <ListItemIcon>
                <CategoryIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Cat1" />
        </ListItem>

        <ListItem button component={Link} to="/#">
            <ListItemIcon>
                <CompanyIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Cat2" />
        </ListItem>

        <Divider/>


    </div>
);