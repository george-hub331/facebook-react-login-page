const Form = ({addF}) => {
    const qp = (e) => {
        e.preventDefault()
    }
    return (
        <form action="#" method="multipart/form-data" onSubmit={qp} className="mainf">
            <div className="sec1">
            <div>
                <input type="text" name="maiph" placeholder="Email Address Or Phone Number" className="maiph"/>
            </div>
            <div>
                <input type="password" name="pass" className="pass" placeholder="Password"/>
            </div>
            <div>
                <input type="submit" value="Log In" className="button"/>
            </div>
            </div>
            {addF ? (
                <div className="sec2">
                <div>
                    <a href="http://">Forgotten Password?</a>
                </div>
                <div>
                    <button className="new">Create New Account</button>
                </div>
            </div>) : (<div></div>)}
        </form>
    );
}

export default Form;