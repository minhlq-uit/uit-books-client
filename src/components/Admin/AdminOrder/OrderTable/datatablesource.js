export const userColumns = [
  { field: "id", headerName: "STT", width: 70 },
  {
    field: "barcode",
    headerName: "Mã đơn hàng",
    width: 180,
  },
  {
    field: "employeeName",
    headerName: "Tên người đặt",
    width: 300,
  },

  {
    field: "status",
    headerName: "Tình trạng",
    width: 200,
    renderCell: (params) => {
      let a;
      if (params.row.status === "canceled") {
        a = "Hủy đơn"
      } else if (params.row.status === "sold") {
        a = "Đã bán"
      } else if (params.row.status === "pending") {
        a = "Đang xử lý"
      } else if (params.row.status === "shipping") {
        a = "Đang vận chuyển"
      }

      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status}  */}
          {a}
        </div>

      );
    },
  },

  {
    field: "date",
    headerName: "Ngày đặt",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "canceled",
    date: "05/08/2022",
  },
  {
    id: 2,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "sold",
    date: "05/08/2022",
  },
  {
    id: 3,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "pending",
    date: "05/08/2022",
  },
  {
    id: 4,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "shipping",
    date: "05/08/2022",
  },
];
