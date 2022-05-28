import "./AdminBookNew.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  createProduct,
  resetState,
} from "../../../../redux/features/product/newProductSlice";
// import { toast } from "react-toastify"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminBookNew() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Thơ");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [Stock, setStock] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (success) {
  //     alert(success);
  //     console.log(123);
  //   } else {
  //     toast.error(error);
  //   }
  // }, [dispatch, loading, error, success]);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert("Book created successfully");
      setName("");
      setAuthor("");
      setCategory("");
      setPublisher("");
      setPrice(0);
      setDescription("");
      setImages([]);
      setImagesPreview([]);
      setStock(0);
      setPageNumber(0);
      dispatch(resetState());
    }
  }, [dispatch, error, success]);
  const notify = () => {
    console.log("call notify");
    toast.success("This is a test success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  const createBookSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("author", author);
    myForm.set("publisher", publisher);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    myForm.set("pageNumber", pageNumber);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };
  const createBookImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={createBookSubmitHandler}>
        <div className="form-title-header">
          <h5 className="mb-4">Thêm sách mới</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>
        <div className="form-group">
          <label className="form-group-label" htmlFor="book-name-add">
            Tên sách
          </label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="book-name-add"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <select
            value={category}
            className="form-control form-select"
            id="category-select-add"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Thơ</option>
            <option>Tâm lý học</option>
            <option>Kinh doanh vs kinh tế</option>
            <option>Khoa học viễn tưởng</option>
            <option>Tiểu thuyết lãng mạn</option>
            <option>Sách truyền cảm hứng</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="author-add">
            Tác giả
          </label>
          <input
            value={author}
            type="text"
            className="form-control"
            id="author-add"
            placeholder=""
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Nhà xuất bản
          </label>
          <input
            value={publisher}
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder=""
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="img-add">
            Hình ảnh
          </label>
          <input 
            type="file"
            className="form-control"
            id="img-add"
            placeholder="Choose file"
            name="avatar"
            accept="image/*"
            onChange={createBookImagesChange}
            multiple
          />

          <div id="createBookFormImage">
            {imagesPreview.map((image, index) => (
              <div className="img-wrapper">
                <img key={index} src={image} alt="Book Preview" />
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="pageNumber-add">
            Số trang
          </label>
          <input
            value={pageNumber}
            type="number"
            className="form-control"
            id="pageNumber-add"
            placeholder=""
            onChange={(e) => setPageNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="Stock-add">
            Tồn kho
          </label>
          <input
            value={Stock}
            type="number"
            className="form-control"
            id="Stock-add"
            placeholder=""
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Giá
          </label>
          <input
            value={price}
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder=""
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label
            className="form-group-label"
            htmlFor="exampleFormControlTextarea1"
          >
            Mô tả sách
          </label>
          <textarea
            value={description}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" class="btn btn-submit">
          Gửi
        </button>
        <button type="button" class="btn btn-reset" onClick={notify}>
          Khôi phục
        </button>
      </form>
    </div>
  );
}

export default AdminBookNew;
