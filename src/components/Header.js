import React, {useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
const [activeState,setActiveState] = useState(false)

function openMenu(){
  setActiveState(true)

}

function closeMenu(){
  setActiveState(false)
}


  return (
    <Container>
        <a><img src="images/logo.svg" /></a>

        <Menu>
            <a href="#">Model s</a>
            <a href="#">Model 3</a>
            <a href="#">model X</a>
            <a href="#">model y</a>
        </Menu>

        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla accout</a>
          <CustomMenu 
            onClick={openMenu}
            show = {activeState}
          >
            
          </CustomMenu>
        </RightMenu>

        <BurgerNav
          style={{
            transform: activeState ? 'translateX(0)' : 'translateX(100%)'
          }}
        >
            
              
            <CloseWrapper>
              <CustomClose onClick={closeMenu}/>
            </CloseWrapper>

            <li><a href="#">Solar Roof</a></li>
            <li><a href="#">Solar Panels</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commrcial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Find US</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Account</a></li>
        </BurgerNav>
    </Container>
  );
}

export default Header;


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    z-index:1;
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    align-items: center;
    

    a{
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
      font-weight: 600;
    }
    
    @media(max-width:768px) {
      display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      text-transform: uppercase;
      margin-right:10px;
      flex-wrap: nowrap;
      font-weight: 600;
    } 
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    
`

const BurgerNav= styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width:300px;
    z-index:100;
    list-style: none;
    padding:20px;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease-in;

    li{
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0 , 0, .2);
      
      a {
        font-weight: 600;
      }
    }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`