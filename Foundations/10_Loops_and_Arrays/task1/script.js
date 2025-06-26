const output = document.querySelector('.output');
output.textContent = "";
for(let i = 10; i>=0; i--){
    const para = document.createElement('p');
    para.textContent = i;
    output.appendChild(para);
}