let students = [
  { name: "Teja", marks: [80, 85, 90] },
  { name: "Ravi", marks: [70, 75, 80] },
  { name: "Sita", marks: [60, 65, 70] }
];

let output = document.getElementById("output");

students.forEach(function(student)  {
  let total = 0;
  for(let i=0; i<student.marks.length;i++){
    total += student.marks[i];
  }
  let avg = total / student.marks.length;

  let p = document.createElement("p");
  p.textContent = student.name  + "--  Average:" + avg;

  output.appendChild(p);
});