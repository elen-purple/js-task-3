// 1
const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);
// 2
const userEmail = "anna.havrylova.2011@gmail.com";
const isEmailHavingAt = userEmail.includes("@");
if (isEmailHavingAt === true) {
  console.log("This is an email");
} else {
  console.log("This isn't an email");
}
// 3
const wordMy = "My";
const wordName = "name";
const wordIs = "is";
const fullName = `${wordMy} ${wordName} ${wordIs}`;
console.log(`${fullName} Viktor`);
// 4
const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
