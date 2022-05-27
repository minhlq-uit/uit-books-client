import "./AdminBookList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdMenuBook } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorsDeleted,
  deleteProduct,
  resetStateDelete,
} from "../../../../redux/features/product/productSlice";
import {
  getProductsAdmin,
  clearErrors,
} from "../../../../redux/features/product/productsAdminSlice";

const AdminBookList = () => {
  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // test
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.productsAdmin);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  useEffect(() => {
    dispatch(getProductsAdmin());
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    // if (deleteError) {
    //   alert(deleteError);
    //   dispatch(clearErrorsDeleted());
    // }

    // if (isDeleted) {
    //   alert("Book Deleted Successfully");
    //   dispatch(resetStateDelete());
    // }

    if (deleteError && isDeleted) {
      alert("Book Deleted Successfully");
      dispatch(resetStateDelete());
      dispatch(clearErrorsDeleted());
      dispatch(getProductsAdmin());
    } else if (deleteError != null) {
      alert(deleteError);
      dispatch(clearErrorsDeleted());
    }
  }, [dispatch, alert, error, deleteError, isDeleted]);
  // done
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin-book-edit/${params.getValue(params.id, "id")}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                // console.log(params.getValue(params.id, "id"));
                deleteProductHandler(params.getValue(params.id, "id"));
              }}
            >
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        stock: item.Stock,
        price: item.price,
        category: item.category,
        author: item.author,
        publisher: item.publisher,
        description: item.description,
        // img: item.images[0].url
        //   ? item.images[0].url
        //   : "https://res.cloudinary.com/uitbooks/image/upload/v1653576546/books/cnign5w5v4qlelbw9dhq.jpg",
        img: "https://res.cloudinary.com/uitbooks/image/upload/v1653576546/books/cnign5w5v4qlelbw9dhq.jpg",
      });
    });
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách các quyển sách
        <Link to="/admin-book-new" className="link">
          <MdMenuBook className="icon-book-new" />
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminBookList;
