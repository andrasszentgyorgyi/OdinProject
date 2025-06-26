const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const refused = document.querySelector(".refused");
const admitted = document.querySelector(".admitted");
admitted.textContent = "admitted: ";
refused.textContent = "refused: ";
for(person of people){
    if(person.toLowerCase() === "phil" || person.toLowerCase() === "laura"){
        const para = document.createElement('p');
        para.textContent += (`${person}, `);
        refused.appendChild(para);
    } else {
        const para = document.createElement('p');
        para.textContent += (`${person}, `);
        admitted.appendChild(para);
    }
}