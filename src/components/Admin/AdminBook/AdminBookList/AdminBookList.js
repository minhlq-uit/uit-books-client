import "./AdminBookList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdMenuBook, MdOutlinePreview } from "react-icons/md";
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiDeleteBin2Fill } from "react-icons/ri";
import SearchIcon from '@mui/icons-material/Search';
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
import { toast } from "react-toastify";

const AdminBookList = () => {
  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // test

  const dispatch = useDispatch();
  // Modal comment previews
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  };


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
      toast.success('Xóa sách thành công! 🎊', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetStateDelete());
      dispatch(clearErrorsDeleted());
      dispatch(getProductsAdmin());
    } else if (deleteError != null) {
      toast.error('Thất bại! Vui lòng thử lại 😭', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearErrorsDeleted());
    }
  }, [dispatch, alert, error, deleteError, isDeleted]);
  // done
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
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
              className="reviewsButton"
              onClick={handleShow}
            >
              <MdOutlinePreview />
            </div>
            <div
              className="deleteButton"
              onClick={() => {
                // console.log(params.getValue(params.id, "id"));
                deleteProductHandler(params.getValue(params.id, "id"));
              }}
            >
              <MdDelete />
            </div>
            <div
              className="reviewsButton"
              onClick={handleShow}
            >
              <MdOutlinePreview />
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
        Stock: item.Stock,
        pageNumber: item.pageNumber,
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
      <div className="col-xl-6 col-lg-5 col-md-6">
        <form action="#" className="search-header">
          <div className="input-group w-100">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Tìm kiếm" 
            />
            <div className="input-group-append">
              <Button variant="dark">
                <SearchIcon />
              </Button>
            </div>
          </div>
        </form>
      </div>
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
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Danh Sách Bình Luận</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form className="form">
            <div className="book-comment-others">
              <div className="book-comment-user d-flex border-top">
                <div className="book-comment-avatar flex-shrink-0 fs-1">
                  <IoPersonCircleSharp />
                </div>
                <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                  <div className="book-comment-userinfo d-flex">
                    <div className="book-comment-name w-100 fw-bold">
                      {/* <p>{item.name}</p> */}
                      <p>Nguyễn Văn A</p>
                    </div>
                    <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                      {/* <p>{item.time}</p> */}
                      <p>28/05/2022</p>
                    </div>
                    <RiDeleteBin2Fill className="book-comment-delete-icon ms-5" />
                  </div>
                  <div className="book-comment-content">
                    {/* <p>{item.comment}</p> */}
                    <p>Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources. 1. Read and subscribe to The Official Bootstrap Blog. 2. Join the official Slack room. 3. Chat with fellow Bootstrappers in IRC.</p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBookList;
