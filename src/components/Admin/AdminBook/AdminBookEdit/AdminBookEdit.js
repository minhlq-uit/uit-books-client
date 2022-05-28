import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrorsDetails,
  getProductDetails,
} from "../../../../redux/features/product/productDetailsSlice";
import {
  clearErrorsDeleted,
  resetStateUpdated,
  updateProduct,
} from "../../../../redux/features/product/productSlice";
import "../AdminBookNew/AdminBookNew.scss";
// import { useState } from 'react'

function AdminBookEdit() {
  const { id } = useParams();
  // console.log(id);
  // set Property
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Thơ");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [Stock, setStock] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [oldImages, setOldImages] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const dispatch = useDispatch();
  const { error, product } = useSelector((state) => state.productDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);
  const navigate = useNavigate();
  // setdata

  useEffect(() => {
    if (product && product._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.Stock);
      setPageNumber(product.pageNumber);
      setOldImages(product.images);
      setAuthor(product.author);
      setPublisher(product.publisher);
    }
    if (error) {
      alert(error);
      dispatch(clearErrorsDetails());
    }

    if (updateError) {
      console.log(updateError);
      alert(updateError);
      dispatch(clearErrorsDeleted());
    }
    if (isUpdated) {
      alert("book Updated Successfully");
      navigate("/admin-book-list");
      dispatch(resetStateUpdated());
    }
  }, [dispatch, alert, error, isUpdated, id, product, updateError]);
  // handler
  const updateBookSubmitHandler = (e) => {
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
    console.log(id);
    const productData = {
      id: id,
      info: myForm,
    };
    dispatch(updateProduct(productData));
  };
  const updateBookImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

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
      <form className="form-container" onSubmit={updateBookSubmitHandler}>
        <div className="form-title-header">
          <h5 className="mb-4">Chỉnh sửa sách</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>
        <div className="form-group">
          <label className="form-group-label" htmlFor="book-name-add">
            Tên sách
          </label>
          <input
            type="text"
            className="form-control"
            id="book-name-add"
            placeholder={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <select
            className="form-control form-select"
            id="category-select-add"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Khoa học viễn tưởng</option>
            <option>Thơ</option>
            <option>Tâm lý học</option>
            <option>Kinh doanh vs kinh tế</option>
            <option>Tiểu thuyết lãng mạn</option>
            <option>Sách truyền cảm hứng</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="author-add">
            Tác giả
          </label>
          <input
            type="text"
            className="form-control"
            id="author-add"
            placeholder={author}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Nhà xuất bản
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder={publisher}
            value={publisher}
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
            onChange={updateBookImagesChange}
            multiple
          />
          <div id="createBookFormImage">
            {oldImages &&
              oldImages.map((image, index) => (
                <div className="img-wrapper">
                  <img key={index} src={image.url} alt="Old Book Preview" />
                </div>
              ))}
          </div>

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
            placeholder={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="Stock-add">
            Tồn kho
          </label>
          <input
            type="number"
            className="form-control"
            id="Stock-add"
            placeholder={Stock}
            value={Stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-group-label" htmlFor="publisher-add">
            Giá
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher-add"
            placeholder={price}
            value={price}
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
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder={description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-submit">
          Gửi
        </button>
        <button type="button" className="btn btn-reset">
          Khôi phục
        </button>
      </form>
    </div>
  );
}

export default AdminBookEdit;
