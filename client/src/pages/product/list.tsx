import React from 'react'
import { useMany } from '@refinedev/core'
import { List, useDataGrid, DateField } from '@refinedev/mui'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

export const ProductList = () => {
  const { dataGridProps } = useDataGrid()

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: 'categories',
    ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  })

  const columns = React.useMemo<GridColDef<any>[]>(
    () => [
      {
        field: 'id',
        headerName: 'Id',
        type: 'number',
        minWidth: 50,
      },
      {
        field: 'title',
        headerName: 'Title',
        minWidth: 200,
      },
      {
        field: 'category',
        headerName: 'Category',
        valueGetter: ({ row }) => {
          const value = row?.category?.id

          return value
        },
        minWidth: 300,
        renderCell: function render({ value }) {
          return categoryIsLoading ? (
            <>Loading...</>
          ) : (
            categoryData?.data?.find((item) => item.id === value)?.title
          )
        },
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        minWidth: 250,
        renderCell: function render({ value }) {
          return <DateField value={value} />
        },
      },
    ],
    [categoryData?.data]
  )

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  )
}
