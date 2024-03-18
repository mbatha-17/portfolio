const name= document.getElementById ('name')
const email=document.getElementById ('email')
const form=document.getElementById ('form')
const errorElement=document.getElementById ('error')

form.addEventListener('submit'),(e)=>{
    let messages=[]
}
if (Name.value===''||Name.value==null){
    messages.push(Nameisrequired)
}

if (messages.length >0){
    e.preventDefault()
    errorElement.innerText=messages.join(',')
}