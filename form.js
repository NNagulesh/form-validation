// const form=document.querySelector('#form')
const bt=document.querySelector('button')
const username=document.querySelector('#username')
const dob=document.querySelector('#dob')
const rollno=document.querySelector('#rollno')
const mark12th=document.querySelector('#marks')
const cutoff=document.querySelector('#cut')
const depart=document.querySelector('#dept')
const phone=document.querySelector('#phone')
const emailid=document.querySelector('#email')
const pin=document.querySelector('#password')
const cpin=document.querySelector('#cpassword')


bt.addEventListener('click',async(e)=>{

   
    
    if(!validateInputs())
    {
      
        e.preventDefault();
    }else{
      
        let form = new FormData()
        form.append("name",username.value)
        form.append("dob",dob.value)
        form.append("rollno",rollno.value)
        form.append("marks",mark12th.value)
        form.append("cutoff",cutoff.value)
        form.append("department",depart.value)
        form.append("phone",phone.value)
        form.append("email",emailid.value)
        form.append("password",cpin.value)
      
        let data = await fetch("https://script.google.com/macros/s/AKfycbzKatiBosmWv9b7pHucW8B3KIObzB3r8Sxj5zIVKAWo5fQfB4N5K-3ZpefltxBcCNku7w/exec",{method:"POST",body:form})
       

    } 

})
function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = emailid.value.trim();
    const passwordVal = pin.value.trim();
    const dateOfBirth=dob.value.trim();
    const roll = rollno.value.trim();
    const cpasswordVal = cpin.value.trim();
    const cutoffVal= cutoff.value.trim();
    const deptVal = depart.value.trim();
    const phoneNo= phone.value.trim();
    const mark = mark12th.value.trim();

    let success = true;

    if(usernameVal===''){
        success=false;
        setError(username,'Name of the student is required')

    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(emailid,'Email is required')
    
    }
    else{
        setSuccess(emailid)
    }

    if(dateOfBirth===''){
        success = false;
        setError(dob,'Date of birth is required')
    }
    else{
        setSuccess(dob)
    }

    if(roll===''){
        success = false;
        setError(rollno,'Roll number is required')
    }
    else{
        setSuccess(rollno)
    }


    if(mark===''){
        success = false;
        setError(mark12th,'Marks are required')
    }
    else{
        setSuccess(mark12th)
    }

    
    if(deptVal===''){
        success = false;
        setError(depart,'Department is required')
    }
    else{
        setSuccess(depart)
    }


    if(cutoffVal===''){
        success = false;
        setError(cutoff,'Email is required')
    }
    else{
        setSuccess(cutoff)
    }
   
    if(phoneNo===''){
        success = false;
        setError(phone,'Phone number is required')
    }
    else{
        setSuccess(phone)
    }

    if(passwordVal === ''){
        success= false;
        setError(pin,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(pin,'Password must be atleast 8 characters long')
    }
    else if(!validateEmail(passwordVal)){
        success = false;
        setError(pin,'use capital,small letter,special character,number to make pin strong')
    }
    else{
        setSuccess(pin)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpin,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpin,'Password does not match')
    }
    else{
        setSuccess(cpin)
    }

    return success;

}

//element - password, msg- pwd is reqd

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (passwordVal) => {
    return String(passwordVal)
      .toLowerCase()
      .toUpperCase()
     
      .match(
        /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
        // /^ [A-Za-z]\[!@#%&()_-=\/.,><:"';] $/
      );
  };