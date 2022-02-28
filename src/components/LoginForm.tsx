import React from 'react'
import '../Style/Form.css'
function LoginForm() {
  return (
    <div className='LoginForm'>

      <form className='form'>
      <h2 className='form-title'>
        Đăng Nhập
      </h2>
        <div>
          <div>
            <label className='username'>Tên đăng nhập</label><br/>
            <input className='input' placeholder='Nhập Username'></input><br/>
          </div>
          <br/>
          <div>
            <label className='password'>Mật Khẩu</label><br/>
            <input className='input' type={'Password'} placeholder='Nhập mật khẩu'></input><br/>
          </div>
          </div>
          <div>
            <p className='forgot-password' >Quên mật khẩu?</p>
          </div>

          <div ><br/>
            <button className='login-button'>
              Đăng nhập
            </button>
          </div>
      </form>
    </div>
  )
}

export default LoginForm