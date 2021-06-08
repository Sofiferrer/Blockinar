import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { infected } from '../../../../../api/infected'
import { COLUMNS } from './columns'

const BasicTable = () => {

    const [infectedPeople, setInfectedPeople] = useState();

    useEffect(() => {
        infected.getInfected().then((response) => {
            setInfectedPeople(response);
        })
    }, []);

    console.log(infectedPeople)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => infectedPeople, [infectedPeople])

    const tableInstance = useTable({
        columns,
        data,
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export { BasicTable }