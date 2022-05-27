import BookItem from "../../../Home/Books/BookItem";
import "../FavoritesBook/FavoritesBookContent.scss";
function FavoritesBook() {
  const Books = [
    {
      title: "Ra Bờ Suối Ngắm Hoa Kèn Hồng",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1evMkN-8Yzk2FL51iREJZXawvg1-CpMVc",
      price: "100.500 đ",
    },
    {
      title: "Làm Bạn Với Bầu Trời",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1f81BHRFLAE1yEddPLdRUJO3jXJ2_SQPS",
      price: "150.500 đ",
    },
    {
      title: "Chúc Một Ngày Tốt Lành",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy",
      price: "90.500 đ",
    },
    {
      title: "Ngày Xưa Có Một Chuyện Tình",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K",
      price: "111.500 đ",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      {Books.map((item, index) => {
        return (
          <BookItem
            key={index}
            title={item.title}
            author={item.author}
            img={item.img}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default FavoritesBook;
