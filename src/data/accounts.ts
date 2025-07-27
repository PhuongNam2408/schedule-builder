// Danh sách tài khoản được phép truy cập
export interface Account {
  username: string;
  password: string;
  displayName: string;
  joinDate: string;
}

export const accounts: Account[] = [
  {
    username: "phuongnam",
    password: "04052025",
    displayName: "Phương Nam",
    joinDate: "28/07/2025"
  },
  {
    username: "thuphuong",
    password: "04052025",
    displayName: "Thu Phương",
    joinDate: "28/07/2025"
  }
];
