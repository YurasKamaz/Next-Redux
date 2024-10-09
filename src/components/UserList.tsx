import { fetchUsers } from '@/redux/slices/usersSlice';
import { RootState } from '@reduxjs/toolkit/query';
import Link from 'next/link';
import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserList : React.FC = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>{error}</h1>
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        <Link href={`/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default UserList;