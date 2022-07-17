import './UserSignUp.css'


const UserSignUp = () => {
    return(
        <div>
            <form class="form-container">
                        <h3 class="title">Registration Info</h3>
                        <div className='form-control'>
                        <div class="form-group">
                            <input type={'text'} className="form-control" placeholder="First Name"/>
                        </div>
                        <div class="form-group">
                            <input type={'text'} className="form-control" placeholder="Last Name" />
                        </div>
                        <div class="form-group">
                            <select class="form-control">
                                <option value="none" selected="">Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type={'email'} className="form-control" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type={'text'} className="form-control" placeholder="Phone"/>
                        </div>
                        <button type={'button'} class="btn btn-default">Submit</button>
                        </div>
                    </form>
        </div>
    )
}


export default UserSignUp