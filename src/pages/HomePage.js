import React, { useEffect, useState } from 'react';

import { Table, HitMapChart } from "../components";
import { Body, Container, Heading } from "../styledComponents/Globle";
import { Header, NavBar, MenuList, NavItem } from "../styledComponents/Header";
const Api_Url = `https://reqres.in/api/users`

const HomePage = () => {
    const [data, setData] = useState([])
    const [updatedData, setUpdatedData] = useState([])
    // get all user data
    const getUsers = async () => {
        try {
            const response = await fetch(Api_Url, { method: 'GET' })
            const res = await response.json();
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // delete user data
    const deleteUser = (user) => {
        setData(prevData => prevData.filter(u => u.id !== user))
        setUpdatedData(prevData => prevData.filter(u => u.id !== user))
    }

    // refresh user data
    const refreshData = (user) => {
        setData(prevData => prevData.map(obj => {
            if (obj.id === user.id) {
                return user;
            }
            return obj;
        }))
    }

    useEffect(() => {
        if (data.length === 0) {
            getUsers()
        }
    }, [data])

    return (
        <>
            <Body/>
            <Header>
                <Container>
                    <div className='d-flex'>
                        <Heading>Logo</Heading>
                        <NavBar>
                            <MenuList>
                                <NavItem href='#'>Home</NavItem>
                                <NavItem href='#'>List</NavItem>
                                <NavItem href='#'>Escalation</NavItem>
                                <NavItem href='#'>Settings</NavItem>
                                <NavItem href='#'>Account</NavItem>
                            </MenuList>
                        </NavBar>
                    </div>
                </Container>
            </Header>
            <Container mb={'100px'}>
                {
                    data.length !== 0 ?
                        <>
                            <HitMapChart userData={data} />
                            <Table userData={updatedData.length > 0 ? updatedData : data} refreshData={refreshData} updateState={setUpdatedData} removeUser={deleteUser} />
                        </>
                        : ""
                }
            </Container>
        </>
    )
}

export default HomePage