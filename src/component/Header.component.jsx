import React,{useEffect} from 'react'
import { connect } from 'react-redux';
 import { logout } from "../redux/Profile/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
   MenuGroup
} from "@chakra-ui/react"


function Header({ user,logout })
{
  let firstTwo
  let username

  if (user.profile) {
    let { profile: { firstname, lastname } } = user

    username = firstname
    
    firstTwo = user.profile && firstname.substring(0, 1) + lastname.substring(0, 1)

  }

  const signout = () =>
  {
     logout()
  }



   
    return (
        <div className="h-16 bg-white md:fixed   md:w-screen w-full  top-0 bottom-0   shadow-sm  flex items-center p-5">
        <h1 className=" font-black  text-3xl   font-nuito mr-auto md:pl-8 text-logo">Pursuit</h1>
        <div className="flex items-center">
          <p  className="rounded-full h-10 w-10 bg-indigo-100 text-lg flex items-center justify-center">{firstTwo}</p>
           <Menu arrowSize="20">
  <MenuButton >
  <p className="p-2 text-lg font-normal font-custom">{user.profile && username}</p>

  </MenuButton>
  <MenuList>
    <MenuGroup>
      <MenuItem className="focus:border-none" onClick={()=>signout()}>Logout</MenuItem>
     </MenuGroup> 
  </MenuList>
</Menu>
        </div>

       </div> 

    )
}


const mapStateToProps = ({ profile }) => ({
  user:profile
})

export default connect(mapStateToProps,{logout})(Header)
