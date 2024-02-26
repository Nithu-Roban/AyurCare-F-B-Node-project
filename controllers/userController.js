
const User= require("../models/userModel")




// loading of register page
const loadSignup= async(req,res)=>{
    try {

        res.render("signup")
        
    } catch (error) {
        console.log(error.message)
        
    }
}

// verify register where user data is being save
const verifySignup= async(req,res)=>{
    try {

        const{mrdno,name,email,mno}=req.body
        const existingUser = await User.findOne({email: email})
        if(existingUser){
            return res.status(400).json({ message: "User with this email already exists." });
        }
        

        const userData = new User({
            mrd:mrdno,
            name:name,
            email:email,
            mobile:mno
        })

        const userdata= await userData.save()
        console.log(userdata) 
        res.redirect('/')
   
    } catch (error) {
        console.log(error.message)
        
    }
}

// otp page
const loadOtp= async(req,res)=>{
    try {
        
        res.render("otp")

    } catch (error) {

        console.log(error.message)
        
    }
}

// loading of login page
const loadLogin = async(req,res)=>{
    try{
       res.render('userLogin')
      // res.send("Hai")
    }
    catch{
        console.log("error")
    }
}

// verify login to check whether is a valid user or not
const verifyLogin = async(req,res)=>{
    try{
        const {mrdno, name, email} = req.body
        const isValidUser = await User.findOne({email:email,mrd:mrdno})
        if(isValidUser){
            console.log("Login Successful")
            res.redirect('/home')
        }
        else{
            console.log("Login Failed: User not found");
            res.redirect('/');
        }
    } catch(error){
        console.log(error.message)
    }

}

// load home page
const loadHome = async(req,res)=> {
    try{
        res.render("home")
    }catch(error){
        console.log(error.message)
    }
}

// load cart page 
const loadCart = async(req,res)=>{
    try{
        res.render('cart')
    }catch(error){
        console.log(error.message)
    }
}

// load payment page
const loadPayment = async(req,res)=>{
    try{
        res.render("payment")
    }catch(error){
        console.log(error.message)
    }
}


// order placed page load
const loadOrderPlaced = async(req,res)=>{
    try{
        res.render("orderPlaced")
    }catch(error){
        console.log(error.message)
    }
}





// exporting all methods written
module.exports={loadSignup,
                verifySignup,
                loadOtp,
                loadLogin,
                verifyLogin,
                loadHome,
                loadCart,
                loadPayment,
                loadOrderPlaced 
                }

