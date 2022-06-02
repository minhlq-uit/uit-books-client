import BookItem from "../../../Home/Books/BookItem";
import "../FavoritesBook/FavoritesBookContent.scss";
import { useSelector } from "react-redux";

const FavoritesBook = () => {
  let { favouriteItems } = useSelector((state) => state.favourite);
  console.log(favouriteItems);

  return (
    <div style={{ textAlign: "center" }}>
      {favouriteItems.map((item, index) => {
        return (
          <BookItem
            key={index}
            title={item.title}
            author={item.author}
            img={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default FavoritesBook;
