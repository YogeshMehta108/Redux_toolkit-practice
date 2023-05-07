import React from 'react'
import { useSelector } from 'react-redux'

function ProfilePage() {
    const userData = useSelector((state) => state.user.value)
    return (
        <div>
            <h1>ProfilePage</h1>
            <h4>Name:{userData.name}</h4>
            <h4>age:{userData.age}</h4>
            <h4>Mobile:{userData.mobile}</h4>
        </div>
    )
}

export default ProfilePage