import'./UserLogin.css'

const UserLogin = () => {
    return(
        <div className="form-main">
            <form className="form-container">
                <h1 className='form-container-title' >Log-in</h1>
                    <div className='form-group'>
                        <label className="email">Enter E-mail </label>
                        <input type={'email'} className='email-input' />
                    </div>
                    <div className='form-group'>
                        <label className="password" >Enter Password </label>
                        <input type={'password'} className='password-input' />
                    </div>
                    <div className='form-btn'>
                        <button>Login</button>
                    </div>
            </form>
        </div>
    )
}

export default UserLogin