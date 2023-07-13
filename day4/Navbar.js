// import React, { useState } from "react";
// import {AppBar, Toolbar, Typography,Tabs,Tab,Box} from '@mui/material/';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
// import { Link } from 'react-router-dom';

//    const Header =()=> {
//         const [Count, setCount] = useState();
//         return (
//             <body>
//                 <div>
//                     <Box className="nav">
//                         <React.Fragment>
//                             <AppBar sx={{ background: '#000000' }}>
//                                 <Toolbar>
//                                     <Typography sx={{ paddingleft: '10%' }}>
//                                         <KitchenOutlinedIcon fontsize="large"></KitchenOutlinedIcon>
//                                     </Typography>
//                                     <Tabs sx={{ margin: 'auto'}} indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'>
//                                        <Link className="link" to='/land'> 
//                                     <Tab textColor="white" label="CAR SERVICE BOOKING" />
//                                     </Link>
//                                     <Link className="link" to='/recipe'>
//                                         <Tab  label="MY BOOKING" />
//                                         </Link>
//                                         <Link to="/RescheduleForm" className="link">
//                                         <Tab label="RESCDULING OR CANCELLATION" />
//                                         </Link>
//                                         <Link to="/CustomerSupportForm" className="link">
//                                         <Tab label="CUSTOMER SUPPORT" />
//                                         </Link>
//                                     </Tabs>
//                                     <Link className="link">
//                                     <NotificationsNoneIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='white'></NotificationsNoneIcon>
//                                     </Link>
//                                     <Link className="link">
//                                     <PersonOutlineIcon fontsize="large" indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'></PersonOutlineIcon>
//                                     </Link>
//                                     </Toolbar>
//                             </AppBar>
//                         </React.Fragment>
//                     </Box>
//                 </div>
//             </body>
//         );
//     }
// export default Header;
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Tabs,
//   Tab,
//   Box,
//   Menu,
//   MenuItem,
//   IconButton,
// } from "@mui/material/";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [count, setCount] = useState(null);
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//   };

//   return (
//     <AppBar sx={{ background: "#000000" }}>
//       <Toolbar>
//         <Typography sx={{ paddingleft: "10%" }}>
//           <IconButton
//             color="inherit"
//             onClick={handleMenuOpen}
//             edge="start"
//             sx={{ mr: 2 }}
//           >
//             <KitchenOutlinedIcon fontSize="large" />
//           </IconButton>
//           <Menu
//             anchorEl={menuAnchorEl}
//             open={Boolean(menuAnchorEl)}
//             onClose={handleMenuClose}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             getContentAnchorEl={null}
//           >
//             <MenuItem onClick={handleMenuClose}>
//               <Link to="/about-us" className="link">
//                 About Us
//               </Link>
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose}>
//               <Link to="/clients-review" className="link">
//                 Clients Review
//               </Link>
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose}>
//               <Link to="/branches" className="link">
//                 Branches
//               </Link>
//             </MenuItem>
//           </Menu>
//         </Typography>
//         <Tabs
//           sx={{ margin: "auto" }}
//           indicatorColor="primary"
//           value={count}
//           onChange={(e, count) => setCount(count)}
//           textColor="inherit"
//         >
//           <Link className="link" to="/land">
//             <Tab textColor="white" label="CAR SERVICE BOOKING" />
//           </Link>
//           <Link className="link" to="/recipe">
//             <Tab label="MY BOOKING" />
//           </Link>
//           <Link to="/RescheduleForm" className="link">
//             <Tab label="RESCDULING OR CANCELLATION" />
//           </Link>
//           <Link to="/CustomerSupportForm" className="link">
//             <Tab label="CUSTOMER SUPPORT" />
//           </Link>
//         </Tabs>
//         <Link className="link">
//           <NotificationsNoneIcon
//             fontsize="large"
//             indicatorColor="primary"
//             value={count}
//             onChange={(e, count) => setCount(count)}
//             textColor="inherit"
//           />
//         </Link>
//         <Link className="link">
//           <PersonOutlineIcon
//             fontsize="large"
//             indicatorColor="primary"
//             value={count}
//             onChange={(e, count) => setCount(count)}
//             textColor="inherit"
//           />
//         </Link>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material/";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar sx={{ background: "#000000" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          edge="start"
          sx={{ mr: 2 }}
        >
          <KitchenOutlinedIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/AboutUs" className="link_nav">
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/clients-review" className="link_nav">
              Clients Review
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/branches" className="link_nav">
              Branches
            </Link>
          </MenuItem>
        </Menu>
        <Tabs
          sx={{ margin: "auto" }}
          indicatorColor="primary"
          value={count}
          onChange={(e, count) => setCount(count)}
          textColor="black"
        >
          <Link className="link" to="/land">
            <Tab textColor="white" label="CAR SERVICE BOOKING" />
          </Link>
          <Link className="link" to="/recipe">
            <Tab label="MY BOOKING" />
          </Link>
          <Link to="/RescheduleForm" className="link">
            <Tab label="RESCDULING OR CANCELLATION" />
          </Link>
          <Link to="/CustomerSupportForm" className="link">
            <Tab label="CUSTOMER SUPPORT" />
          </Link>
        </Tabs>
        <Link className="link">
          <NotificationsNoneIcon
            fontsize="large"
            indicatorColor="black"
            value={count}
            onChange={(e, count) => setCount(count)}
            textColor="black"
          />
        </Link>
        <Link className="link">
          <PersonOutlineIcon
            fontsize="large"
            indicatorColor="black"
            value={count}
            onChange={(e, count) => setCount(count)}
            textColor="black"
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
