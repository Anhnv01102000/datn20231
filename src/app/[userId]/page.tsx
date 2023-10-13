"use client"
import React from 'react'
import CardList from '../components/Card/CardList'
import UserInfo from '../components/UserInfo'

const Profile = ({ params }: { params: { userId: string } }) => {
    return (
        <div>
            <UserInfo />
            <CardList />
        </div>
    )
}

export default Profile