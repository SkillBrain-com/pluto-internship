import { Box } from "@mui/material";
// import { green } from "@mui/material/colors";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { clsx } from "clsx";

const columns: GridColDef[] = [
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
    cellClassName: (params) => {
      console.log(params);
      return clsx({
        negative: params.value != "Active",
        positive: params.value == "Active",
      });
    },
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
    status: "Inactive",
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
    <Box
      sx={{
        height: 400,
        width: 713,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        sx={{
          "& .positive .MuiDataGrid-cellContent": {
            color: "green !important",
          },
          "& .negative .MuiDataGrid-cellContent": {
            color: "red !important",
          },
        }}
      />
    </Box>
  );
};

export default DataGridComponent;
