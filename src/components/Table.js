import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

import { DropdownMenu, DropdownButton, DropdownList, DropdownItem } from "../styledComponents/Dropdown";
import { ContainerTable, MyTable, Input, ImgUser } from "../styledComponents/Table";
import { Heading } from "../styledComponents/Globle";

const Table = ({ userData, refreshData, updateState, removeUser }) => {
    const [editable, setEditable] = useState()

    const updateMyData = (rowIndex, columnId, value) => {
        // table single cell data update
        const newUpdated = userData.map((row, index) => {
            if (index === rowIndex) {
                return { ...userData[rowIndex], [columnId]: value, }
            }
            return row
        })
        updateState(newUpdated)
    }

    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData,
    }) => {

        const [value, setValue] = React.useState(initialValue)
        const onChange = e => {
            setValue(e.target.value)
        }

        // onblur state update function  
        const onBlur = () => {
            updateMyData(index, id, value)
        }

        // If the initialValue is changed
        useEffect(() => {
            setValue(initialValue)
        }, [initialValue])

        if (editable !== index) {
            return <Input value={value} onChange={onChange} onBlur={onBlur} disabled />
        } else {
            return <Input value={value} onChange={onChange} onBlur={onBlur} />
        }
    }

    // Set our editable cell renderer as the default Cell renderer
    const defaultColumn = {
        Cell: EditableCell,
    }

    // Edit user data
    const editUser = (dataIndex) => {
        setEditable(dataIndex)
    }

    // update user data
    const updateUser = () => {
        setEditable(undefined)
    }

    const refreshUserData = (user) => {
        const newData = userData.filter(u => u.id === user)
        refreshData(newData[0])
    }

    // delete user data
    const deleteUser = (user) => {
        removeUser(user)
    }

    const tabelColumns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
            Cell: ({ row }) => <span>{row.values.id}</span>,
        },
        {
            Header: "Image",
            accessor: "avatar",
            Cell: ({ row }) => <ImgUser src={row.values.avatar} />,
        },
        {
            Header: "First Name",
            accessor: "first_name",
        },
        {
            Header: "First Name",
            accessor: "last_name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => (
                editable === row.index ?
                    <DropdownButton onClick={() => updateUser()}>Update</DropdownButton>
                    :
                    <DropdownMenu>
                        <DropdownButton>More</DropdownButton>
                        <DropdownList className='dropdown-list'>
                            <DropdownItem onClick={() => editUser(row.index)}>Edit</DropdownItem>
                            <DropdownItem onClick={() => deleteUser(row.values.id)}>Delete</DropdownItem>
                            <DropdownItem onClick={() => refreshUserData(row.values.id)}>Refresh Data</DropdownItem>
                        </DropdownList>
                    </DropdownMenu>),
        },
    ], [editable])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = useTable({
        columns: tabelColumns,
        data: userData,
        defaultColumn,
        updateMyData,
    })
    return (
        <>
            <Heading>User Lists</Heading>
            <ContainerTable>
                <MyTable {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroup, ind) => (
                                <>
                                    <tr {...headerGroup.getHeaderGroupProps()} key={ind}>
                                        {
                                            headerGroup.headers.map((column, i) => (
                                                <>
                                                    <th {...column.getHeaderProps()} key={i}>
                                                        {column.render('Header')}
                                                    </th>
                                                </>
                                            ))
                                        }
                                    </tr>
                                </>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row, ind) => {
                                prepareRow(row)
                                return (
                                    <>
                                        <tr {...row.getRowProps()} key={ind}>
                                            {
                                                row.cells.map((cell, i) => (
                                                    <>
                                                        <td {...cell.getCellProps()} key={i}>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    </>
                                                ))
                                            }
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </MyTable>
            </ContainerTable>
        </>
    )
}

export default Table