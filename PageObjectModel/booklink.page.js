class booklink{
    constructor(page){
        this.regionalbookLink=page.locator('//a[text()=" Regional Books "]')
        this.RB3lbook=page.locator('//img[@src="img/books/REG-3.jpg"]')

        this.childnteenlink=page.locator('//a[text()=" Children & Teens "]')
        this.CNT2book=page.locator('//img[@src="img/books/CHILD-1.jpg"]')

    }
}
export default booklink