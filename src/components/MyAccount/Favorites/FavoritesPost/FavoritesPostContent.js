import BookItem from "../../../Home/Books/BookItem";

function FavoritesPostContent() {
  const Books = [
    {
      title: "Cảm Ơn Người Lớn",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj",
      price: "111.500 đ",
    },
    {
      title: "Chuyện Kể Rằng Có Nàng Và Tôi",
      author: "Nhiều tác giả",
      img: "https://drive.google.com/uc?id=15eeAUNLISuTCIDK_YRiSQwCWglfJbHZW",
      price: "111.500 đ",
    },
  ];

  return (
    <div className="favorite-post" style={{ textAlign: "center" }}>
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

export default FavoritesPostContent;
