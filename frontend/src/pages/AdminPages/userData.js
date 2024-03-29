/*
    id: ObjectId,
    name: String,
    email: String, 
    phone: String,
    password: String, 
    account: String,
    address: String, 
    role: String, 
    status: Boolean, 
    date: String, // Ngay sinh, chi co customer co
    start_date: String // Ngay bat dau lam viec, chi co admin va technician co

*/
export default [
    {
        id: 0,
        name: "Phong Dương",
        email: "chung.vo@ngan.ac.vn",
        phone: "(302) 555-0107",
        password: "76c7503d ",
        account: "phongong",
        address: "7548 Phố Cát Nguyên Lam, Ấp Khuất Bắc, Huyện Bửu Thủy Hưng Yên",
        role: "customer",
        status: false,
        date: "26/11/1981",
        start_date: null
    },
    {
        id: 1,
        name: "Giàu Kiến",
        email: "ktra@hotmail.com",
        phone: "(093) 464 8803",
        password: "89f5a30b",
        account: "giaukiien",
        address: "42 Phố Hiền, Phường Vinh, Quận Ngụy Phúc Toàn Hà Nội",
        role: "customer",
        status: false,
        date: "19/09/1969",
        start_date: null
    },
    {
        id: 2,
        name: "Kỳ Huy",
        email: "ykhu@yahoo.com",
        phone: "(84)(711)065-2420",
        password: "6e399afb",
        account: "kyhuyuy",
        address: "3, Thôn Phương Nguyên, Phường 5, Huyện 55 Bến Tre",
        role: "customer",
        status: false,
        date: "30/04/1984",
        start_date: null
    },
    {
        id: 3,
        name: "Thế Hồ",
        email: "gia.thuan@yahoo.com",
        phone: "+84-60-659-2693",
        password: "1bc2beea",
        account: "thehho",
        address: "7 Phố Uông Nam Thuần, Phường 2, Quận Trinh Tài Cần Thơ",
        role: "customer",
        status: false,
        date: "23/06/1991",
        start_date: null
    },
    {
        id: 4,
        name: "Giang Tuấn Hiền",
        email: "hiengiang@gmail.com",
        phone: "0378464400",
        password: "1bc2beea",
        account: "admin",
        address: "KTX Khu A, ĐHQG TP HCM",
        role: "admin",
        status: false,
        date: "14/11/2002",
        start_date: "24/1/2020"
    },
    {
        id: 5,
        name: "Nguyen Van A",
        email: "van3a@gmail.com",
        phone: "0378456456",
        password: "1bc2b2sv",
        account: "tech1",
        address: "Biên Hòa, Đồng Nai",
        role: "technician",
        status: false,
        date: "14/11/2002",
        start_date: "14/5/2018"
    }
];