let btn=document.getElementById("BTNN");
let person=document.getElementById("Quotemaster");
let quote=document.getElementById("Quote");

const quotes = [
	{quote:"Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday.",person:"Wilma Rudolph"},
	{quote:"Wilma Rudolph", person:"Ernest Hemingway"},
	{quote:"Nothing in this world can take the place of persistence. Talent will not: nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not: the world is full of educated derelicts. Persistence and determination alone are omnipotent.",person:"Calvin Coolidge"},
	{quote:"For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",person:"Nelson Mandela"},
	{quote:"It always seems impossible until it's done.", person:"Nelson Mandela"},
	{quote:"When something is important enough, you do it even if the odds are not in your favor.", person:"Elon Musk"},
	{quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",person:"Thomas A. Edison"},
	{quote:"Life is 10% what happens to you and 90% how you react to it.", person:"Charles R. Swindoll"},
	{quote:"Good, better, best. Never let it rest. 'Til your good is better and your better is best.", person:"St. Jerome"}
	]
btn.addEventListener('click',function(){
	let random= Math.floor(Math.random()*quotes.length);
	Quote.innerText = quotes[random].quote;
	Quotemaster.innerText = quotes[random].person;
	
})