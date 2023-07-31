import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import TableHead from '@mui/material/TableHead';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
// import { removeProducts } from '../store/productsSlice';

const rows = [

{
  id: 'name',
  align: 'left',
  disablePadding: true,
  label: '',
  // sort: true,
},
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Name',
    sort: true,
  },
  {
    id: 'Description',
    align: 'left',
    disablePadding: false,
    label: 'Description',
    sort: true,
  },
  
  {
    id: 'Action',
    align: 'left',
    disablePadding: false,
    label: 'Action',
    sort: true,
  },
//   {
//     id: 'active',
//     align: 'right',
//     disablePadding: false,
//     label: 'Active',
//     sort: true,
//   },
];

function TenantTableHead(props) {
//   const { selectedProductIds } = props;
//   const numSelected = selectedProductIds.length;

//   const [selectedProductsMenu, setSelectedProductsMenu] = useState(null);

  const dispatch = useDispatch();

//   const createSortHandler = (property) => (event) => {
//     props.onRequestSort(event, property);
//   };

//   function openSelectedProductsMenu(event) {
//     setSelectedProductsMenu(event.currentTarget);
//   }

//   function closeSelectedProductsMenu() {
//     setSelectedProductsMenu(null);
//   }

  return (
    <TableHead>
      <TableRow className="">
      
        {rows.map((row,index) => {
          return (
            <TableCell
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              className="p-4 md:p-16"
              key={index}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
            //   sortDirection={props.order.id === row.id ? props.order.direction : false}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placement={row.align === 'right' ? 'bottom-start' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    // active={props.order.id === row.id}
                    // direction={props.order.direction}
                    // onClick={createSortHandler(row.id)}
                    className="font-semibold"
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default TenantTableHead;
