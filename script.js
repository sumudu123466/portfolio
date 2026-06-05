// smooth scroll example
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    closeHeader();
  });
});

function toggleHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  header.classList.toggle('header-open');
}

function closeHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  header.classList.remove('header-open');
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const budget = document.getElementById('contact-budget').value.trim();
    const country = document.getElementById('contact-country').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const phoneValid = /^\+?[0-9\s-]{7,20}$/.test(phone);
    if (!phoneValid) {
      alert('Please enter a valid mobile number.');
      return;
    }

    const subject = encodeURIComponent(`New message from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBudget: ${budget}\nCountry: ${country}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:muvindu2110@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });
}

// ai btn

const portfolio = {

name:"Sumudu Hasinika",

about:`
👨‍💻 I'm Sumudu Hasinika.

Software Engineer passionate about
Web Development, AI Integration,
Java Applications and Modern Technologies.
`,

skills:`
⚡ Skills

• Java
• JavaScript
• React
• Node.js
• PHP
• MySQL
• PostgreSQL
• Bootstrap
• HTML/CSS
• GitHub
• AI Integration
`,

projects:`
🚀 Projects

• Religious Places Platform

• Temple Management System

• AI Robot Assistant

• Travel Website

• Hotel Management Website
`,

education:`
🎓 Education

Graduate Diploma in Software Engineering

Advanced Studies in Software Engineering
`,

contact:`
📧 sumuduhasinika431@gmail.com

📱 0786037551
`,

github:`
🐙 https://github.com/sumudu123466
`,

linkedin:`
💼 https://www.linkedin.com/in/sumudu-hasinika-2907663bb
`
};

function toggleChat(){

const chat=document.getElementById("chat");

chat.style.display=
chat.style.display==="flex"
? "none"
: "flex";

}

function handleEnter(e){

if(e.key==="Enter"){
sendMessage();
}

}

function quickAsk(text){

document.getElementById("userInput").value=text;

sendMessage();

}

function sendMessage(){

const input=document.getElementById("userInput");

const text=input.value.trim();

if(text==="") return;

addMessage(text,"user");

input.value="";

showTyping();

setTimeout(()=>{

removeTyping();

addMessage(
getReply(text.toLowerCase()),
"bot"
);

saveChat();

},800);

}

function addMessage(text,type){

const box=document.getElementById("messages");

const div=document.createElement("div");

div.className=type;

div.innerHTML=text;

box.appendChild(div);

box.scrollTop=box.scrollHeight;

}

function showTyping(){

const box=document.getElementById("messages");

const div=document.createElement("div");

div.className="typing";
div.id="typing";
div.innerHTML="Sumudu AI is typing...";

box.appendChild(div);

}

function removeTyping(){

const t=document.getElementById("typing");

if(t) t.remove();

}

function getReply(msg){

if(msg.includes("about")) return portfolio.about;

if(msg.includes("skill")) return portfolio.skills;

if(msg.includes("project")) return portfolio.projects;

if(msg.includes("education")) return portfolio.education;

if(
msg.includes("contact") ||
msg.includes("email") ||
msg.includes("phone")
){
return portfolio.contact;
}

if(msg.includes("github")){
return portfolio.github;
}

if(msg.includes("linkedin")){
return portfolio.linkedin;
}

return `
🤖 I can help with:

• About Me
• Skills
• Projects
• Education
• Contact
• GitHub
• LinkedIn
`;
}

function saveChat(){

localStorage.setItem(
"sumudu-chat",
document.getElementById("messages").innerHTML
);

}

window.onload=()=>{

const saved=
localStorage.getItem("sumudu-chat");

if(saved){

document.getElementById("messages").innerHTML=saved;

}

};