var a="agedg"
var b="b"

console.log(a,b)

const n=Number(56.77)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(1/0)

var awww=null
var qwe
console.log(awww)
console.log(qwe)





var t=50
var v=60

const r=t -= v
console.log(r)


console.log(Math.E)
console.log(Math.PI)

var z=4.578
console.log(Math.floor(z))
console.log(Math.ceil(z))
console.log(Math.abs(z))
console.log(Math.round(z))
console.log("==========")


console.log(Math.max(59.7,59.8,59.9))
console.log(Math.min(354,4567,56858,69,809))
console.log(Math.pow(2,4))
console.log(Math.sqrt(64))


console.log(Math.floor(Math.random()*200 +1))








let datt=new Date()

console.log(datt.toDateString())
console.log(datt.toLocaleDateString())
console.log(datt.toTimeString())
console.log(datt.toLocaleString())
console.log(datt.getFullYear())

let nmbr=25
let nmbr2=65

if(nmbr%2===0){
    console.log('even number')
}
else(nmbr%2===1)
{
    console.log("odd nmbr")
}




let time=new Date()

let today=time.getDay()

switch (today) {
    case 0:
        console.log("today is sunday")
        break
    case 1:
        console.log("today is monday")
        break
    case 2:
        console.log("today is tuesday")
        break
    case 3:
        console.log("today is wednesday")
        break
    case 4:
        console.log("today is thusday")
        break
    case 5:
        console.log("today is friday")
        break
    case 6:
        console.log("today is saturday")
        break
    default:
        console.log("not valid")
}