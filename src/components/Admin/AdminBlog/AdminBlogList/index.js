import "./BlogList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./BlogData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdNoteAdd } from "react-icons/md";



const BlogList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Hành động",
            width: 120,
            minWidth: 100,
            maxwidth: 180,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="editButton"><BiEdit /></div>
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
                Danh sách bài blog
                <Link to="/users/new" className="link">
                    <MdNoteAdd className="addBlog" />
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

export default BlogList;
