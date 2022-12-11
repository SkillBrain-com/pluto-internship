import {
  NoEncryption,
  ReportGmailerrorred,
  YoutubeSearchedForOutlined,
} from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

const columns: GridColDef = [
  { field: "id", headerName: "No.", width: 40 },
  {
    field: "img",
    headerName: "#Img",
    width: 150,
    editable: true,
    width: 60,
  },

  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 145.33,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 60,
  },
  { field: "takeAction", headerName: "TakeAction", width: 145.33 },
];

const rows = [
  {
    id: 1,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 2,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 3,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 4,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 5,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 6,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
  {
    id: 7,
    img: "Snow",
    fullName: "Jon",
    email: "alec@gmail.com",
    status: "Active",
    takeAction: "Take Action",
  },
];

const DataGridComponent = () => {
  return (
    <Box sx={{ height: 400, width: 713 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default DataGridComponent;
