const name= document.getElementById ('name')
const password=document.getElementById ('password')
const form=document.getElementById ('form')
const errorElement=document.getElementById ('error')

form.addEventListener{"submit",(e)=>{
    let messages=[]
}
if (Name.value===''||Name.value==null){
    messages.push(Nameisrequired)
}
if(password.value.length <6){
    messages.push(passwordmustbelongerthan6characters)
}

if (messages.length >0){
    e.preventDefault()
    errorElement.innerText=messages.join(',')
}
}   