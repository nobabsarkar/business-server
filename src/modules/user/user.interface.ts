export interface TUser {
  // id: string;
  email: string;
  password: string;
  mobileNumber: string;
  role: "admin" | "user";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}
