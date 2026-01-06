class login{
    constructor(page){
        this.usernameTF=page.locator('//input[@name="login_username"]')
        this.passwordTf=page.locator('//input[@name="login_password"]')
        this.signupButton=page.locator('//button[@name="submit" and @value="login"]')
        this.logoutBtn=page.locator('//a[@class="btn btn-lg" and .=" LogOut "]')
    }
}
export default login