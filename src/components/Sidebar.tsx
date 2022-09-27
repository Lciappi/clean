import {Box, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {routes} from "../router/routes";
import Logo from '../assets/logo.png'
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <Box component={"aside"} className="sidebar">
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <Divider/>
      <List component="nav">
        {
          routes
            .filter(route => route.visible)
            .map(route => (
              <ListItemButton
                component={Link}
                to={route.path}
                key={route.path}
              >
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.label}/>
              </ListItemButton>
            ))
        }
        <Divider sx={{my: 1}}/>
      </List>
    </Box>
  )
}

export default Sidebar;