class signup{
    constructor(page){
        this.usernameTF=page.locator('//input[@name="register_username"]')
        this.passwordTf=page.locator('//input[@name="register_password"]')
        this.signupButton=page.locator('//button[@name="submit" and @value="register"]')
    }

    

}

export default signup