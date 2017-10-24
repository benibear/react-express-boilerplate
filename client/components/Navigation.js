import React from 'react';

function Profile ({ isAuthed, user }) {
    return isAuthed
        ?   <div className="profile-container">
                <img className="profile-picture" alt="user profile" src={user.picture}/>
                <p className="profile-name">{user.firstName} {user.lastName}</p>
            </div>
        :   <noscript />
}

function Navigation ({ isAuthed, user }) {
    return (
        <div className="nav-container">
            <Profile isAuthed={isAuthed} user={user}/>
        </div>
    )
}

export default Navigation;