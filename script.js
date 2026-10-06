const qs=[
["You receive an unexpected email saying your account will close in 10 minutes. Safest first step?",["Click the link","Reply with your password","Verify through a trusted channel","Forward it"],2],
["Which is a strong warning sign of a fake login page?",["Trusted bookmark","Suspicious look-alike domain","Official address typed manually","Normal workflow"],1],
["A person asks you to buy gift cards urgently for your manager. What should you do?",["Buy them","Verify using another trusted method","Send the codes","Share login details"],1],
["Which improves account security against phishing?",["Reuse passwords","Disable updates","Use MFA and unique strong passwords","Click unknown links"],2],
["What should you do with a suspicious link in an unsolicited message?",["Open it privately","Verify independently instead of clicking","Send it to a friend to test","Enter credentials"],1]
];
const box=document.getElementById("quizBox");
qs.forEach((x,i)=>{let d=document.createElement("div");d.className="question";d.innerHTML=`<h3>${i+1}. ${x[0]}</h3>`+x[1].map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("");box.appendChild(d)});
document.getElementById("submitQuiz").onclick=()=>{let score=0,answered=0;qs.forEach((x,i)=>{let s=document.querySelector(`input[name=q${i}]:checked`);if(s){answered++;if(+s.value===x[2])score++}});let r=document.getElementById("result");if(answered<qs.length){r.textContent=`Please answer all ${qs.length} questions.`;r.style.color="#ff8d8d"}else{let p=Math.round(score/qs.length*100);r.textContent=`Score: ${score}/${qs.length} (${p}%). ${p>=60?"Good awareness — keep verifying before you click.":"Review the warning signs and try again."}`;r.style.color=p>=60?"#63e6be":"#ff8d8d"}};