class home{
    constructor(page){
        this.signupButton=page.getByRole("button",{name:"Sign Up"})
        this.loginButton=page.getByRole("button",{name:"Login"})
    }
}

export default home