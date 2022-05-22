import "./AdminCategoryList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const AdminCategoryList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      minWidth: 200,
      maxwidth: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin-category-edit" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách thể loại
        <Link to="/admin-category-new" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid grid-auto-columns grid-auto-rows"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminCategoryList;
