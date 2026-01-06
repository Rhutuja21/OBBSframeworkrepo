class imglink{
    constructor(page){
        this.chetanbagatimg=page.locator('//img[@src="img/popular-author/1.jpg"]')
        this.CB1Bokk=page.locator('//img[@src="img/books/LIT-1.jpg"]')
        this.sortDD=page.locator('//select[@name="sort"]')

        this.durjayduttaimg=page.locator('//img[@src="img/popular-author/0.jpg"]')
        this.DD1book=page.locator('//img[@src="img/books/LIT-14.jpg"]')
    }
}

export default imglink