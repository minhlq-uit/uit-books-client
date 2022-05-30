import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import "./BookItem.css";

export default function BookItem(props) {
  const ratingStars = () => {
    if (props.rating === 3) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 3.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
        </div>
      );
    } else {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
        </div>
      );
    }
  };
  return (
    <>
      <Link to={`/book/${props.id}`}>
        <li className="book-item">
          <div className="book-item-container">
            {/* <img className='book-item-img'
                    alt={props.title}
                    src={props.src}
                />
                <div className='book-item-info'>
                    <div className='book-item-name'>
                        <h5 className='book-item-title'>{props.title}</h5>
                        <h6 className='book-item-author'>{props.author}</h6>
                    </div>

                    <div className='book-item-rate-stock'>
                        {ratingStars()}
                        <span>Đã bán</span>
                        <p>{props.sold}</p>
                    </div>

                    <div className='book-item-prices'>
                        <p>{props.price}</p>
                    </div> */}
            <figure className="book-item-img-wrap">
              <a href="/">
                <img className="book-item-img" alt="sach-hay" src={props.img} />
              </a>
            </figure>
            <div className="book-item-info">
              <div className="book-item-name">
                <a href="/" className="book-item-title">
                  {props.title}
                </a>
                <h6 className="book-item-author">{props.author}</h6>
              </div>

              <div className="book-item-rate-stock">
                <div className="rating-container">
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStar className="star-unfilled" />
                  <BsIcons.BsStar className="star-unfilled" />
                </div>
                <div className="line"></div>
                <span className="sold">Đã bán {props.Sold}</span>
              </div>

              <div className="book-item-prices">
                <p>105.500 đ</p>
                <p>{props.price}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}
