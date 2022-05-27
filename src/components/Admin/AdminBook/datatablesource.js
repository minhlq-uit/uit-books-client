export const userColumns = [
  {
    field: "id",
    headerName: "STT",
    width: 70,
  },
  {
    field: "img",
    headerName: "Hình ảnh",
    // width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {/* {params.row.username} */}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Tên sách",
    width: 180,
  },

  {
    field: "category",
    headerName: "Thể loại",
    width: 120,
  },
  {
    field: "author",
    headerName: "Tác giả",
    // width: 160,
  },
  {
    field: "publisher",
    headerName: "NXB",
    // width: 160,
  },
  {
    field: "description",
    headerName: "Mô tả",
    width: 250,
  },
  {
    field: "price",
    headerName: "Giá",
    // width: 160,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    img: "https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy",
    bookName: "Milk and honey",
    category: "Thơ",
    author: "Rupi Kaur",
    publisher: "Simon & Schuster",
    description:
      "Tập thơ và văn xuôi về sự sống còn. Về trải nghiệm bạo lực, lạm dụng, tình yêu, mất mát và nữ tính.",
    price: "150.000đ",
  },

  {
    id: 2,
    img: "https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K",
    bookName: "Psychology Money",
    category: "Tâm lý học",
    author: "Morgan Housel",
    publisher: "Harriman",
    description:
      "Đầu tư tiền bạc, tài chính cá nhân và các quyết định kinh doanh - thường được dạy như một lĩnh vực dựa trên toán học.",
    price: "504.000đ",
  },

  {
    id: 3,
    img: "https://drive.google.com/uc?id=1SNwfEQMgarJBqvFH2ECYpEIxPGdGR1FG",
    bookName: "Company of One",
    category: "Kinh doanh & kinh tế",
    author: "Paul Javis",
    publisher: "Houghton",
    description:
      "Company of One là một cách tiếp cận mới mẻ, tập trung vào việc duy trì quy mô nhỏ và tránh tăng trưởng, cho mọi quy mô kinh doanh.",
    price: "450.000đ",
  },

  {
    id: 4,
    img: "https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj",
    bookName: "Mere Christianity",
    category: "Thơ",
    author: "Lewis",
    publisher: "HarperCollins",
    description:
      "Cuốn sách tập hợp các chương trình phát thanh huyền thoại của CS Lewis trong những năm chiến tranh.",
    price: "373.000đ",
  },
];
