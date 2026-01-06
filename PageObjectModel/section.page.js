class section{
    constructor(page){
        this.searchbox=page.locator('//input[@name="keyword"]')
        this.theLostsymbolImg=page.locator('//img[@src="img/books/LIT-20.jpg"]')
        this.LOLimg=page.locator('//img[@src="img/books/LIT-21.jpg"]')
        this.addToCartBtn=page.locator('//a[@id="buyLink"]')
        this.placeorderBtn=page.locator('//a[text()="Place Order"]')
        this.quantityDD=page.locator('//select[@id="quantity"]')
        this.CSBtn=page.locator('//a[text()="Continue Shopping"]')
        this.removeBTn1=page.locator('//a[@href="cart.php?remove=NEW-1"]')
        this.DSSBtn=page.locator('//a[text()="Do Some Shopping"]')
        this.homepagecartLink=page.locator('//a[text()=" Cart "]')

    }
}
export default section