import React from 'react';
import { AppBar,Toolbar,useScrollTrigger } from '@mui/material';

function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  

function Header(props){
return(
    <ElevationScroll>
    <AppBar position="fixed">
        <Toolbar>
            K Development
        </Toolbar>
    </AppBar>
    </ElevationScroll>
)
}
export default Header;