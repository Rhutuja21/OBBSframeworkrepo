import {test,expect} from "@playwright/test"
import fs from "fs"
//import '../tests/hooks.spec.js'
// import testdata from "C:/Users/rhutuja/Desktop/OBBS/testdata/e2e1.json"
let data=fs.readFileSync("C:/Users/rhutuja/Desktop/OBBS/testdata/e2e1.json")
let testdata=JSON.parse(data)
import home from "../PageObjectModel/home.page.js"
import signup from "../PageObjectModel/signup.page.js"
import login from "../PageObjectModel/login.page.js"
import section from "../PageObjectModel/section.page.js"
import imglink from "../PageObjectModel/imglink.page.js"
import askQuery from "../PageObjectModel/askquery.page.js"
import booklink from "../PageObjectModel/booklink.page.js"

test("end to end scenario 1",{tag:'@smoke'},async({page})=>{

    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        expect(dialog.message()).not.toBe("");
        await dialog.accept()
    })

    let url=testdata.url
    let username=testdata.username
    let password=testdata.password
    let search=testdata.search

    let homepage=new home(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let sectionpage=new section(page)
  

  //launch the url
  await page.goto(url)
  await homepage.signupButton.click()
  // click sign up button
  await signuppage.usernameTF.fill(username)
  // enter username in Tf
  await signuppage.passwordTf.fill(password)
  //enter password in Tf
  //click sign in 
  await signuppage.signupButton.click()
  //handle the alert

  //login in
  await homepage.loginButton.click()
  // enter the username tf
  await loginpage.usernameTF.fill(username)
  //enter the password tf
  await loginpage.passwordTf.fill(password)
  //click login
  await expect(loginpage.signupButton).toBeEnabled();
  await loginpage.signupButton.click()
  //handle the alert

  //go to search
  await sectionpage.searchbox.click()
  //serach dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  
  //click on first book
  await sectionpage.theLostsymbolImg.click()
  
  //the click add to cart button
  await sectionpage.addToCartBtn.click()
  //click place order button
  await sectionpage.placeorderBtn.click()
  //handle the alert

  await page.waitForTimeout(3000)

})

test("e2e sceanario 2 @smoke",async({page})=>{
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })

    let url=testdata.url
    let username=testdata.username
    let password=testdata.password
    let search=testdata.search

    let homepage=new home(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let sectionpage=new section(page)

  //launch the url
  await page.goto(url)
  await homepage.signupButton.click()
  // click sign up button
  await signuppage.usernameTF.fill(username)
  // enter username in Tf
  await signuppage.passwordTf.fill(password)
  //enter password in Tf
  //click sign in 
  await signuppage.signupButton.click()
  //handle the alert

  //login in
  await homepage.loginButton.click()
  // enter the username tf
  await loginpage.usernameTF.fill(username)
  //enter the password tf
  await loginpage.passwordTf.fill(password)
  //click login
  await loginpage.signupButton.click()
  //handle the alert

  //go to search
  await sectionpage.searchbox.click()
  //serach dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  
  //click on first book
  await sectionpage.theLostsymbolImg.click()
  //set quantity to 4
  await sectionpage.quantityDD.selectOption({value:"4"})
  await page.waitForTimeout(2000)

  
  //the click add to cart button
  await sectionpage.addToCartBtn.click()
  //click place order button
  await sectionpage.placeorderBtn.click()
  //handle the alert

  await page.waitForTimeout(3000)

})


test("e2e sceanario 3",async({page})=>{
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })

    let url=testdata.url
    let username=testdata.username
    let password=testdata.password
    let search=testdata.search

    let homepage=new home(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let sectionpage=new section(page)

  //launch the url
  await page.goto(url)
  await homepage.signupButton.click()
  // click sign up button
  await signuppage.usernameTF.fill(username)
  // enter username in Tf
  await signuppage.passwordTf.fill(password)
  //enter password in Tf
  //click sign in 
  await signuppage.signupButton.click()
  //handle the alert

  //login in
  await homepage.loginButton.click()
  // enter the username tf
  await loginpage.usernameTF.fill(username)
  //enter the password tf
  await loginpage.passwordTf.fill(password)
  //click login
  await loginpage.signupButton.click()
  //handle the alert

  //go to search
  await sectionpage.searchbox.click()
  //serach dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  
  //click on first book
  await sectionpage.theLostsymbolImg.click()
  //set quantity to 4
  await sectionpage.quantityDD.selectOption({value:"4"})
  await page.waitForTimeout(2000)

  
  //the click add to cart button
  await sectionpage.addToCartBtn.click()

  //click on continue shopping
  await sectionpage.CSBtn.click()
  //go to serach
  await sectionpage.searchbox.click()
  //search dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  //click on second book
  await sectionpage.LOLimg.click()
  //click on add to cart
  await sectionpage.addToCartBtn.click()
  await page.waitForTimeout(3000)

  //click place order button
  await sectionpage.placeorderBtn.click()
  //handle the alert

  await page.waitForTimeout(3000)

})

test.only("e2e sceanario 4",async({page})=>{
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })

    let url=testdata.url
    let username=testdata.username
    let password=testdata.password
    let search=testdata.search

    let homepage=new home(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let sectionpage=new section(page)

  //launch the url
  await page.goto(url)
  await homepage.signupButton.click()
  // click sign up button
  await signuppage.usernameTF.fill(username)
  // enter username in Tf
  await signuppage.passwordTf.fill(password)
  //enter password in Tf
  //click sign in 
  await signuppage.signupButton.click()
  //handle the alert

  //login in
  await homepage.loginButton.click()
  // enter the username tf
  await loginpage.usernameTF.fill(username)
  //enter the password tf
  await loginpage.passwordTf.fill(password)
  //click login
  await loginpage.signupButton.click()
  //handle the alert

  //go to search
  await sectionpage.searchbox.click()
  //serach dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  
  //click on first book
  await sectionpage.theLostsymbolImg.click()
  //set quantity to 4
  await sectionpage.quantityDD.selectOption({value:"4"})
  await page.waitForTimeout(2000)

  
  //the click add to cart button
  await sectionpage.addToCartBtn.click()

  //click on continue shopping
  await sectionpage.CSBtn.click()
  //go to serach
  await sectionpage.searchbox.click()
  //search dan brown
  await sectionpage.searchbox.fill(search)
  //click enter key
  await page.keyboard.press("Enter")
  //click on second book
  await sectionpage.LOLimg.click()
  //click on add to cart
  await sectionpage.addToCartBtn.click()
  await page.waitForTimeout(3000)

  //click on remove for the first book
  await sectionpage.removeBTn1.click()
  //handle the alert

  //click place order button
  await sectionpage.placeorderBtn.click()
  //handle the alert

  await page.waitForTimeout(3000)

})

test("e2e sceanario 5",async({page})=>{
  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)

//launch the url
await page.goto(url)
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await loginpage.signupButton.click()
//handle the alert

//go to search
await sectionpage.searchbox.click()
//serach dan brown
await sectionpage.searchbox.fill(search)
//click enter key
await page.keyboard.press("Enter")

//click on first book
await sectionpage.theLostsymbolImg.click()
//set quantity to 4
await sectionpage.quantityDD.selectOption({value:"4"})
await page.waitForTimeout(2000)


//the click add to cart button
await sectionpage.addToCartBtn.click()

//click on continue shopping
await sectionpage.CSBtn.click()
//go to serach
await sectionpage.searchbox.click()
//search dan brown
await sectionpage.searchbox.fill(search)
//click enter key
await page.keyboard.press("Enter")
//click on second book
await sectionpage.LOLimg.click()
//click on add to cart
await sectionpage.addToCartBtn.click()
await page.waitForTimeout(3000)

//click place order button
await sectionpage.placeorderBtn.click()
//handle the alert
//logout
await loginpage.logoutBtn.click()

//handle the alert


await page.waitForTimeout(3000)

})

test("end to end scenario 6",async({page})=>{

  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)
  let imglinkpage=new imglink(page)

//launch the url
await page.goto(url)
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await loginpage.signupButton.click()
//handle the alert

//go to search
await sectionpage.searchbox.click()
//serach dan brown
await sectionpage.searchbox.fill(search)
//click enter key
await page.keyboard.press("Enter")

//click on first book
await sectionpage.theLostsymbolImg.click()

//the click add to cart button
await sectionpage.addToCartBtn.click()
//click place order button
await sectionpage.placeorderBtn.click()
//handle the alert

//click on do some shopping link
await sectionpage.DSSBtn.click()
//click on Chetan Bhagat in popular authors
await imglinkpage.chetanbagatimg.click()
//select the 1st book 
await imglinkpage.CB1Bokk.click()
//click on add to cart
await sectionpage.addToCartBtn.click()
//click on place order
await sectionpage.placeorderBtn.click()
//handle the alert

await page.waitForTimeout(3000)

})
test("e2e sceanario 7",async({page})=>{
  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)
  let imglinkpage=new imglink(page)

//launch the url
await page.goto(url)
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await loginpage.signupButton.click()
//handle the alert

//go to search
await sectionpage.searchbox.click()
//serach dan brown
await sectionpage.searchbox.fill(search)
//click enter key
await page.keyboard.press("Enter")

//click on first book
await sectionpage.theLostsymbolImg.click()
//set quantity to 4
await sectionpage.quantityDD.selectOption({value:"4"})
await page.waitForTimeout(2000)


//the click add to cart button
await sectionpage.addToCartBtn.click()
//click on continue shopping link
await sectionpage.CSBtn.click()
//click on Chetan Bhagat in popular authors
await imglinkpage.chetanbagatimg.click()
//sort it by price low to high
await imglinkpage.sortDD.selectOption({value:"price"})
//select the 1st book 
await imglinkpage.CB1Bokk.click()
//click on add to cart
await sectionpage.addToCartBtn.click()
//click on place order
await sectionpage.placeorderBtn.click()
//handle the alert



await page.waitForTimeout(3000)

})

test("e2e sceanario 8",async({page})=>{
  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search
  let queryusn=testdata.aqusn
  let querymail=testdata.aqmail
  let query=testdata.query

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)
  let askquerypage=new askQuery(page)
  

//launch the url
await page.goto(url)
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await loginpage.signupButton.click()
//handle the alert

//click on assk query
await askquerypage.askqueryBTn.click()
//fill your username
await askquerypage.AQusernameTF.fill(queryusn)
//fill your email
await askquerypage.AQemailTF.fill(querymail)
// fill your query 
await askquerypage.AQqueryTF.fill(query)
//click on send query
await askquerypage.sendqueryBTN.click()
//handle the alert


})

test("e2e sceanario 9",async({page})=>{
  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      expect(dialog.message()).not.toBe("");     
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)
  let bboklinkpage=new booklink(page)


//launch the url
await page.goto(url)
await expect(page).toHaveURL(url);
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await expect(loginpage.signupButton).toBeEnabled();
await loginpage.signupButton.click()
//handle the alert

//click on cart
await sectionpage.homepagecartLink.click()
//click on continue shopping
await sectionpage.DSSBtn.click()
//click on the link childerns an teen
await bboklinkpage.childnteenlink.click()
//click on bedtime stories book
await expect(bboklinkpage.CNT2book).toBeVisible();
await bboklinkpage.CNT2book.click()
//set quantity 2
await sectionpage.quantityDD.selectOption({value:"2"})
//click on add to cart
await sectionpage.addToCartBtn.click()
//click on placeorder
await sectionpage.placeorderBtn.click()
//handle the alert

//click on logout
await loginpage.logoutBtn.click()
//handle the alert
})

test("e2e sceanario 10",async({page})=>{
  page.on("dialog",async(dialog)=>{
      console.log(await dialog.message());
      await dialog.accept()
  })

  let url=testdata.url
  let username=testdata.username
  let password=testdata.password
  let search=testdata.search
  let queryusn=testdata.aqusn
  let querymail=testdata.aqmail
  let query=testdata.query

  let homepage=new home(page)
  let signuppage=new signup(page)
  let loginpage=new login(page)
  let sectionpage=new section(page)
  let askquerypage=new askQuery(page)
  let imglinkpage=new imglink(page)
  let bboklinkpage=new booklink(page)

//launch the url
await page.goto(url)
await homepage.signupButton.click()
// click sign up button
await signuppage.usernameTF.fill(username)
// enter username in Tf
await signuppage.passwordTf.fill(password)
//enter password in Tf
//click sign in 
await signuppage.signupButton.click()
//handle the alert

//login in
await homepage.loginButton.click()
// enter the username tf
await loginpage.usernameTF.fill(username)
//enter the password tf
await loginpage.passwordTf.fill(password)
//click login
await loginpage.signupButton.click()
//handle the alert

//click on popular author durjay dutta
await imglinkpage.durjayduttaimg.click()
//click on 2nd book
await imglinkpage.DD1book.click()
//click on add to cart
await sectionpage.addToCartBtn.click()
//click on continue shopping
await sectionpage.CSBtn.click()
//click on regional books link
await bboklinkpage.regionalbookLink.click()
//select the 3rd book
await bboklinkpage.RB3lbook.click()
//set the quantity to 3
await sectionpage.quantityDD.selectOption({value:"3"})
//click on add to cart
await sectionpage.addToCartBtn.click()
//click on place order
await sectionpage.placeorderBtn.click()
//handle the alert

//click on do some shopping
await sectionpage.DSSBtn.click()
//click on ask query
await askquerypage.askqueryBTn.click()
//fill username
await askquerypage.AQusernameTF.fill(queryusn)
//fill email
await askquerypage.AQemailTF.fill(querymail)
//fll the query
await askquerypage.AQqueryTF.fill(query)
//click on send query
await askquerypage.sendqueryBTN.click()
//handle the alert

//click on logout
await loginpage.logoutBtn.click()
//handle the alert

})


