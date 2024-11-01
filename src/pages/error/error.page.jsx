'use strict'

export default function ErrorPage({error_message, error_code})  {
    return <div id="error-page">
    <h1>Oops!</h1>
    <p>Xin lỗi, đã có lỗi xảy ra!(Code: {error_code || 501})</p>
    <p>
      <i>{error_message || "Kiểm tra lại đường truyển hoặc báo cáo lại với quản trị viên"}</i>
    </p>
  </div>
}
