import React from 'react';
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import FolderIcon from '@material-ui/icons/Folder';
import CompanyIcon from '@material-ui/icons/locationcity';
import CategoryIcon from '@material-ui/icons/category';
import QuoteIcon from '@material-ui/icons/assignment';
import InventoryIcon from '@material-ui/icons/assignmentturnedin';

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

        <ListItem button component={Link} to="/category">
            <ListItemIcon>
                <CategoryIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Category" />
        </ListItem>

        <ListItem button component={Link} to="/company">
            <ListItemIcon>
                <CompanyIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Company" />
        </ListItem>

        <ListItem button component={Link} to="/product">
            <ListItemIcon>
                <FolderIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Product" />
        </ListItem>

        <ListItem button component={Link} to="/quote">
            <ListItemIcon>
                <QuoteIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Quote" />
        </ListItem>

        <ListItem button component={Link} to="/inventory">
            <ListItemIcon>
                <InventoryIcon style={style.icon} />
            </ListItemIcon>
            <ListItemText disableTypography  primary="Inventory" />
        </ListItem>

        <Divider/>


    </div>
);