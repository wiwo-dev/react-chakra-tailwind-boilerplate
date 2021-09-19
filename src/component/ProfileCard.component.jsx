import React from 'react'
import { connect } from 'react-redux';
import userImage from "../img/profile_img.jfif";

function ProfileCard({ user })
{ 

    const { profile } = user 
    
    const { firstname, lastname } = profile
    
    const firstTwo=firstname.substring(0,1)+lastname.substring(0,1)

    return (
             <div className="flex flex-col items-center bg-profile-bg bg-cover bg-center bg-no-repeat rounded-lg shadow-sm mx-auto h-80 max-w-xs ">

            <div className=" mt-5 relative">
            <p  className="rounded-full ring-white ring-4 mt-5 relative top-11 p-8 bg-purple-200 text-2xl font-semibold flex items-center justify-center">{firstTwo}</p>

                 </div>
                <div className="bg-white text-center flex-1 px-14 py-10 self-end h-1/2 w-full rounded-t-lg rounded-b-lg">
                    <h1 className="font-custom font-bold pt-2 leading-9 text-2xl">{` ${profile.firstname} ${profile.lastname}` }</h1>
                    <p className=" text-gray-500 pt-1">{profile.email}</p>
                </div>
            </div>
        
    )
}

const mapStateToProps = ({ profile }) => ({
    user:profile
})

export default connect(mapStateToProps,null)(ProfileCard)
