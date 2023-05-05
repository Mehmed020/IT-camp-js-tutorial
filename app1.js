broj=20
if(broj>=18){ 
    console.log("osoba je punoletna")
}else{
    console.log("osoba je maloletna")
}

ime = "Mehmed"
prezime ="Muratovic"
if(ime && prezime){
    console.log("korisnik je uneo ime i prezime")
}else{
    console.log("korisnik nije uneo ime i prezime")
}
broj=2
if(broj> 0){
    console.log("broj je pozitivan")
}else if(broj<0){
    console.log("broj je negativan")
}else{
    console.log("broj ne predstavlja nista od ponudjenog")
}

temperatura=2
if(temperatura<0){
    console.log("smrzavanje")
}else if (temperatura<=10){
    console.log("veoma hladno")
}else if (temperatura<=20){
    console.log("hladno")
}else if (temperatura<=30){
    console.log("normalna temperatura")
}else if (temperatura<=40){
    console.log("vruce")
}else{
    console.log("veoma vruce")
}

"..............."
godina=2023
if((godina%4===0 && godina%100!==0)||(godina%400===0)){
   console.log("godina je prestupna")
}else{
    console.log("godina nije prestupna")
}