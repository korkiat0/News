// src/components/NewsTable.js

const NewsTable = ({ onRowClick }) => {
  const data = [
    {
      NewsId: 4,
      NameNews: "asd",
      Detail: "asd",
      Status: 1,
      UpdatedDate: "2021-12-26T16:03:12",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 5,
      NameNews: "ddd",
      Detail:
        "สำนักงานคณะกรรมการส่งเสริมการลงทุน (สกท.) มีหนังสือที่ นร ๑๓๐๙/๑๒๔๑๖ \nลงวันที่ ๑๙ ตุลาคม ๒๕๖๔ เรื่อง ขอทราบความเห็นในกิจการซ่อมรถไฟ หรือชิ้นส่วนหรืออุปกรณ์สำหรับระบบราง เพื่อขอทราบความเห็น ขร. โครงการซ่อมบำรุงระบบจ่ายไฟฟ้าเหนือขบวนรถไฟฟ้าและสถานีจ่ายกระแสไฟฟ้าเป็นกิจการซ่อมบำรุงหนัก (OVERHAUL) และ/หรือการซ่อมแซม (REPAIR) เป็นกิจการใช้เทคโนโลยีชั้นสูง หรือไม่อย่างไร (เอกสารแนบ ๑) ",
      Status: 1,
      UpdatedDate: "2021-12-27T13:35:29",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 8,
      NameNews: "ประกาศ",
      Detail:
        "ทดสอบ 1....................................................................................................................................................................\nทดสอบ 2..................................................................................................................................................................\nทดสอบ 3..................................................................................................................................................................",
      Status: 1,
      UpdatedDate: "2021-12-27T14:42:39",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 13,
      NameNews: "ทดสอบ",
      Detail: "ทดสอบ123",
      Status: 1,
      UpdatedDate: "2022-01-05T09:32:48",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 16,
      NameNews: "ทดสอบกก",
      Detail: "กก",
      Status: 1,
      UpdatedDate: "2022-01-05T09:32:59",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 17,
      NameNews: "ข่าวใหม่",
      Detail: "ข่าวด่วนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนนน",
      Status: 1,
      UpdatedDate: "2022-01-26T09:36:41",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 18,
      NameNews: "ข่าว",
      Detail: "ใหม่",
      Status: 1,
      UpdatedDate: "2022-01-17T15:15:44",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 19,
      NameNews: "ติดตามข่าวทันเหตุการณ์",
      Detail: "1.เทส\r\n2.เทส\r\n3.เทส",
      Status: 1,
      UpdatedDate: "2022-01-18T15:19:42",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
    {
      NewsId: 20,
      NameNews: "แจ้งเรื่องการลงทะเบียนฉีดวัคซีน ",
      Detail:
        "แจ้งเรื่องการลงทะเบียนฉีดวัคซีน สามารถลงทะเบียนได้จากช่องทางไหนบ้าง\r\n- True move\r\n- DTAC\r\n- AIS",
      Status: 1,
      UpdatedDate: "2022-01-25T16:08:59",
      ButtonView: 1,
      ButtonEdit: 1,
      ButtonDelete: 1,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">ข่าวประชาสัมพันธ์</h2>{" "}
      <div className="flex justify-end mb-2">
        {" "}
        <button className="flex items-center bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">+</span> สร้างข่าว
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="w-1/12 p-2">ลำดับ</th>
            <th className="w-5/12 p-2">ชื่อเรื่อง</th>
            <th className="w-2/12 p-2">วันที่สร้าง</th>
            <th className="w-4/12 p-2">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((news, index) => (
            <tr
              key={news.NewsId}
              className="border-b cursor-pointer"
              onClick={() => onRowClick(news)}
            >
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2">{news.NameNews}</td>
              <td className="p-2 text-center">
                {new Date(news.UpdatedDate).toLocaleDateString()}
              </td>
              <td className="p-2 text-center">
                {news.ButtonView === 1 && (
                  <button className="mx-1 px-2 py-1 bg-cyan-400 text-white rounded">
                    View
                  </button>
                )}
                {news.ButtonEdit === 1 && (
                  <button className="mx-1 px-2 py-1 bg-yellow-500 text-white rounded">
                    แก้ไข
                  </button>
                )}
                {news.ButtonDelete === 1 && (
                  <button className="mx-1 px-2 py-1 bg-red-500 text-white rounded">
                    ลบ
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
    </div>
  );
};

export default NewsTable;
