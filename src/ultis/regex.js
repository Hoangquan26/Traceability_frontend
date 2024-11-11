'use strict'
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


/*
Giải thích regex password:

(?=.*[A-Z]): Yêu cầu ít nhất một chữ cái in hoa (A-Z).
(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?~-])`: Yêu cầu ít nhất một ký tự đặc biệt (bạn có thể tùy chỉnh danh sách ký tự đặc biệt theo nhu cầu).
(?!.*\s): Không cho phép chứa khoảng trắng.
.{6,}: Đảm bảo mật khẩu có độ dài từ 6 ký tự trở lên.
*/
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-])(?!.*\s).{6,}$/;

/*
Giải thích regex:

^[a-zA-Z0-9\s]+$: Đảm bảo chuỗi chỉ chứa chữ cái (a-z, A-Z), chữ số (0-9), và khoảng trắng (\s), và có ít nhất một ký tự (không được 
bỏ trống).
*/

export {
    emailRegex,
    passwordRegex
}