let students = [
    {
        name: "data",
        mothersName: "data",
        facebookAccount: "data.data",
        age: 20,
        groupLeader: "data popkhadze"
    },
    {
        name: "luka",
        mothersName: "luka",
        facebookAccount: "luka.luka",
        age: 22,
        groupLeader: "data fofxadze"
    }
];


document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let role = document.getElementById('role').value;


    document.getElementById('student-table').style.display = 'block';


    if (role === 'moderator') {
        document.getElementById('moderator-form').style.display = 'block';
    }


    loadStudents();
});

function loadStudents() {
    const tableBody = document.getElementById('student-list');
    tableBody.innerHTML = '';  

    students.forEach(student => {
        let row = "<tr>";  
        row += "<td>" + student.name + "</td>";  
        row += "<td>" + student.mothersName + "</td>"; 
        row += "<td>" + student.facebookAccount + "</td>"; 
        row += "<td>" + student.age + "</td>";  
        row += "<td>" + student.groupLeader + "</td>";  
        row += "</tr>";  
        tableBody.innerHTML += row;  
    });
}

document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();


    let student = {
        name: document.getElementById('name').value,
        mothersName: document.getElementById('mothersName').value,
        facebookAccount: document.getElementById('facebookAccount').value,
        age: document.getElementById('age').value,
        groupLeader: document.getElementById('groupLeader').value
    };


    students.push(student);
    loadStudents();
});
