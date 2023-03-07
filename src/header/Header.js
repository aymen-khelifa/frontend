import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from './logologo.png';
import Button from '@material-ui/core/Button';
import './Header.css';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  signup:{  marginTop: theme.spacing(-4.4), marginLeft: theme.spacing(19),fontSize: 12   ,
position:'absolute',color:'white',border:'1px',height:'36px',width:'100px',backgroundColor:'#20384D',
textAlign:'center',textTransform: 'none',
'&:hover': {
  backgroundColor: '#27379d',color: '#ffffff',borderColor:'black',
  border:'1px solid rgb(0, 0, 0)'
},
           display: 'none',fontStyle: 'normal',
            [theme.breakpoints.up('sm')]: {
           display: 'block',
},
},
  signin:{ textTransform: 'none',  marginLeft: theme.spacing(4),backgroundColor:'#0000',fontSize: 12,
  height:'35px',
           display: 'none',fontStyle: 'normal',color:'#03034a',textAlign:'center',
           border:'1px solid rgb(0, 0, 0)',width:'100px',
           '&:hover': {
            backgroundColor: '#e9eaec',color: '#010101',border:'1px solid rgb(0, 0, 0)'
          },
              [theme.breakpoints.up('sm')]: {
              display: 'block',
  },
  },
  title: {  textTransform: 'none',  marginLeft: theme.spacing(3),

    display: 'none',fontSize: 14,fontStyle: 'normal',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  uvct: {  textTransform: 'none',  marginLeft: theme.spacing(3),color:'#03034a',

    display: 'none',fontSize: 16,fontStyle: 'normal',fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '30px',borderColor:'black',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.04),
    },
    marginRight: theme.spacing(2),
    marginLeft: '100px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'primary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      borderRadius: theme.shape.borderRadius,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>

      </MenuItem>
      <MenuItem>

      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color=''>
        <Toolbar>
          <img src={logo} width={37} height={37}/>
          <Button className={classes.uvct} variant="h10" underline="none"  id="Uvct" href=""  noWrap >
            Uvct-Training
          </Button>
          <Button className={classes.title}  variant="h10" id="Catégorie" underline="none"  href="">
            Catégorie
          </Button>
          
          <div className={classes.search} id="rech">
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Recherche..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button  className={classes.title} id="Devenirinstructeur" underline="none" variant="h10" noWrap href='/FormAddFormateur' >
            Devenir instructeur
          </Button>
          <AddShoppingCartIcon className='panier'>
          </AddShoppingCartIcon>
          <div>
              <Button  className={classes.signin}   type="submit"  href='/Login'>
                Se connecter
              </Button>
              <Button  className={classes.signup} type="submit" href='/Registrer'>
                S'inscrire
              </Button>
          </div>
          <div>
    
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          
          <Select className="eng" indicator={<KeyboardArrowDown />}
                 sx={{ width: 80 }} placeholder='TND'>
                <Option Selected value="TND">TND</Option>
                <Option value="TND">Eng</Option>
            </Select>
            
            <Select className="eng" indicator={<KeyboardArrowDown />}
                 sx={{ width: 80 }} placeholder='Fr'>
                <Option Selected value="Fr">Fr</Option>
                <Option value="Eng">Eng</Option>
            </Select>
            

            
          </div>
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default Header;