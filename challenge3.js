let TB = 1.70;
let BB = 90;

let BMI = BB/Math.pow(TB,2);

console.log(BMI);;
if(BMI < 18.5){
    console.log("Kekurangan Berat Badan");
}else if (BMI >= 18.5, BMI <= 24.9){
    console.log("Normal (Ideal)");
}else if (BMI >= 25.0, BMI <= 29.0){
    console.log("Kelebihan Berat Badan");
}else{
    console.log("Kegemukan (Obesitas)");
}