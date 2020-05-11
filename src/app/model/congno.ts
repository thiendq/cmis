export interface Info {
   MA_DVIQLY: string;
   THANG: string;
   NAM: string;
}

export interface PeriodicElement {
   TEN_KHANG: string;
   MA_KHANG: string;
   SO_TIEN: string;
   THANG: string;
   SO_DTHOAI: string;
   NGAY_TTOAN: string;
}

export interface SmsLoi {
   MA_KHANG: string;
   TEN_KHANG: string; 
   MA_SOGCS: string;  
   SO_DTHOAI: string;
   EMAIL: string;
}

export interface Sms {
   SO_DTHOAI: string;
   NOI_DUNG: string;
}

export interface User {
   MA_DVIQLY: string;
   MA_SOGCS: string;
   TEN_SOGCS: string;
}

export interface Sogcs {
   MA_DVIQLY: string;
   MA_SOGCS: string;
   TEN_SOGCS: string;
   SO_KY: string;
   LOAI_SOGCS: string;
   NGAY_GHI: string;
   NGAY_THIEN: string;
}

export interface Client {
   MA_DVIQLY: string;
   MA_SOGCS: string;
   TEN_SOGCS: string;
}

export class testservices {
   position: number;
   name: string;
   weight: number;
   symbol: string;
}

export class khachhang {
   ID_TT_MATUSINH: number;
   KIEU_MA: string;
   MA_DVIQLY: string;
   MA_TIEN_TO: string;
   MA_TU_SINH: number;
   TRANG_THAI: number;
}

export class dsnotiendien {
   ma_khang: string;
   ten_khang: string;
   email: string;
   dthoai: number;
}

// Thong tin tra cuu khach hang
export class thongtinkhachhang {

}

// Thong tin khach hang no tien dien
export class thongtinno {
   MA_DVIQLY: string;
   MA_KHANG: string;
   TEN_KHANG: string;
   DCHI_KHANG: string;
   NAM: number;
   THANG: number;
   KY: number;
   TIEN_NO: number;
   THUE_NO: number;
   TONG_NO: number
   MA_SOGCS: string;
   MA_KVUC: string;
   STT: string;
   SOLAN_GUI: number;
   NGAY_PHANH: Date;
}

// cau hinh de gui tin nhan
export class thamsoguitinnhan {
   User: string;
   Password: string;
   CPCode: number;
   RequestID: number;
   UserID: number;
   ReceiverID: number;
   CommandCode: string;
   Content: string;
   ContentType: number;
}

// Danh sach gui tin nhan
export class dsguitinnhan {
   User: string;
   Password: string;
   CPCode: number;
   RequestID: number;
   UserID: number;
   ReceiverID: number;
   CommandCode: string;
   Content: string;
   ContentType: number;
}

// Danh sach phan hoi thong tin gui tin nhan - OK or FAIL
export class dsnhantinnhan {

}