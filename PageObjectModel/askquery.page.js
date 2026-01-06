class askQuery{
    constructor(page){
        this.askqueryBTn=page.locator('//button[@id="query_button"]')
        this.AQusernameTF=page.locator('//input[@name="sender"]')
        this.AQemailTF=page.locator('//input[@name="senderEmail"]')
        this.AQqueryTF=page.locator('//textarea[@name="message"]')
        this.sendqueryBTN=page.locator('//button[@name="submit"]')

    }
}
export default askQuery