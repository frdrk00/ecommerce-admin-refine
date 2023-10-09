import React from 'react'
import { useNavigation, useTranslate, useUpdate } from '@refinedev/core'
import { NumberField, useDataGrid } from '@refinedev/mui'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloseOutlined from '@mui/icons-material/CloseOutlined'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import Place from '@mui/icons-material/Place'

export const RecentProducts: React.FC = () => {
  const { show } = useNavigation()
  const { mutate } = useUpdate()

  // @ts-ignore
  const { dataGridProps } = useDataGrid<IOrder>({
    resource: 'products',

    initialSorter: [
      {
        field: 'createdAt',
        order: 'desc',
      },
    ],
    initialPageSize: 4,
    syncWithLocation: false,
  })
  // @ts-ignore
  const columns = React.useMemo<GridColDef<IOrder>[]>(
    () => [
      {
        field: 'avatar',
        renderCell: function render({ row }) {
          return (
            <Avatar
              sx={{
                width: { xs: 72, xl: 102 },
                height: { xs: 72, xl: 102 },
              }}
              src={row?.photo}
            />
          )
        },
        align: 'center',
        flex: 1,
        minWidth: 100,
      },
      {
        field: 'summary',
        renderCell: function render({ row }) {
          return (
            <Stack
              spacing={1}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'center'}
            >
              <Typography sx={{ fontWeight: 800, whiteSpace: 'pre-wrap' }}>
                {row.title}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre-wrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                  minWidth: '100px',
                }}
              >
                {row.description}
              </Typography>
              <Button
                variant="text"
                onClick={() => show('products', row._id)}
                size="small"
                sx={{ width: 80 }}
              >
                <Typography
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                  }}
                >
                  #{row._id.slice(-5)}
                </Typography>
              </Button>
            </Stack>
          )
        },
        flex: 2,
        minWidth: 200,
      },
      {
        field: 'summary2',
        renderCell: function render({ row }) {
          return (
            <Stack
              direction="row"
              gap={0.5}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Place
                sx={{
                  fontSize: 18,
                  color: '#a0a5cc',
                  marginTop: 0.5,
                }}
              />
              <Typography
                fontSize={14}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                color="#808191"
              >
                {row.location}
              </Typography>
            </Stack>
          )
        },
        flex: 1,
        minWidth: 100,
      },
      {
        field: 'amount',
        renderCell: function render({ row }) {
          return (
            <NumberField
              options={{
                currency: 'USD',
                style: 'currency',
                notation: 'standard',
              }}
              sx={{ fontWeight: 800 }}
              value={row.price}
            />
          )
        },
        align: 'center',
        flex: 1,
        width: 80,
      },
    ],
    []
  )

  return (
    <DataGrid
      {...dataGridProps}
      columns={columns}
      loading={dataGridProps.rows.length === 0}
      getRowId={(row) => row._id}
      autoHeight
      columnHeaderHeight={0}
      rowHeight={200}
      disableRowSelectionOnClick
      sx={{
        paddingX: { xs: 3 },
        border: 'none',
      }}
    />
  )
}
