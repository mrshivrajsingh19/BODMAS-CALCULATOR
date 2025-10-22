let A=document.querySelector(".result")
let B=document.querySelectorAll(".numbers")
let C=document.querySelector(".rub")
let equal=document.querySelector(".c")
let x=document.querySelector(".x")
let AAA=A.innerText.split("")


B.forEach(all=>{
all.onclick=()=>{
   let z= A.innerText
A.innerText=z+all.innerText
AAA=A.innerText.split("")

if(AAA.length>14)
{
    A.innerText=""
for(let l=0;l<14;l++)
{
A.innerText=A.innerText+AAA[l]
}
}



}
})


equal.onclick=()=>{
// A.innerText=""
}
x.onclick=()=>{
let AA=A.innerText.split("")  
A.innerText=""
for(let l=0;l<AA.length-1;l++)    
{
A.innerText=A.innerText+AA[l]
}
}

C.onclick=()=>{
    A.innerText=""
}




equal.onclick=()=>{
AAA=A.innerText.split("")

let one=""
let AAAA=[""]
let j=0;
let indice=0
let pre=-1;
let symbol=""

for(let i=0;i<AAA.length;i++)
{
if(AAA[i]=="/" || AAA[i]=="*" || AAA[i]=="+" || AAA[i]=="-")
{
indice =i;
symbol=AAA[i]

for(let k=pre+1;k<indice;k++)
{
one=one+AAA[k]
}   
pre=indice;


console.log(one)
AAAA[j]=one
console.log(j)
j=j+1
AAAA[j]=symbol
j=j+1
one=""
}
}


for(let i=indice+1;i<AAA.length;i++)
{
one=one+AAA[i]
}
AAAA[j]=one


console.log(AAAA)






while(AAAA.length>1)
{
for(let i=0;i<AAAA.length;i=i+2)    
{
AAAA[i]=Number(AAAA[i])
}

console.log(AAAA)
for(let i=0;i<AAAA.length;i++)
{
if(AAAA[i]=="/")
{
AAAA[i-1]=AAAA[i-1]/AAAA[i+1]
AAAA.splice(i,2)
}
}
console.log(AAAA)

for(let i=0;i<AAAA.length;i++)
{
if(AAAA[i]=="*")
{
AAAA[i-1]=AAAA[i-1]*AAAA[i+1]
AAAA.splice(i,2)
}
}
console.log(AAAA)

for(let i=0;i<AAAA.length;i++)
{
if(AAAA[i]=="-")
{
AAAA[i-1]=AAAA[i-1]-AAAA[i+1]
AAAA.splice(i,2)
}
}
console.log(AAAA)

for(let i=0;i<AAAA.length;i++)
{
if(AAAA[i]=="+")
{
AAAA[i-1]=AAAA[i-1]+AAAA[i+1]
AAAA.splice(i,2)
}
}

console.log(AAAA)
}
// AAA[0]=AAA[0]+AAA[2]









A.innerText=AAAA[0]

let AAAAA=A.innerText.split("")


console.log(AAAAA.length)
if(AAAAA.length>14)
{
    A.innerText=""
for(let i=0;i<12;i++)
{
A.innerText=A.innerText+AAAAA[i]
}
A.innerText=A.innerText+"++"
}

}