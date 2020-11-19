import React ,{useState} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import './Drawer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Drawer({open,setOpen}) {

  const [dloc , setDloc] = useState("Finland");
  const [dguest , setDguest] = useState(0);
  const [adults , setAdults] = useState(0);
  const [children , setChildren] = useState(0);
  return (
    <div className="drawer" >
        <React.Fragment key="drawer">
          <SwipeableDrawer
            anchor="top"
            open={open}
            onClose={setOpen}
            onOpen={setOpen}
          >
            <div className="search__wrapper">
              <div className="options">
                <form className="options__wrapper" >
                  <input  id="drawer__filter" className="drawer__loc"  type="text" placeholder="Enter Location" />
                  <input  id="drawer__filter" className="drawer__guest"  type="text" placeholder="Enter Guest" />
                  <Button className="btn__search">Search</Button>
                </form>
                <div className="suggestions__bar">
                  <div className="suggest__location">
                    <Button className="locs"><LocationOnIcon />Turku, Finland</Button>
                    <Button className="locs"><LocationOnIcon />Helsinki,Finland</Button>
                    <Button className="locs"><LocationOnIcon />Vaasa,Finland</Button>
                  </div>
                  <div className="add__guest">
                    <div className="adults__counter">

                    </div>
                    <div className="children__counter">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
