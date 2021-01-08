var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateLength();
}

function calculateLength(){
    student.name = document.getElementById('name').value;

    var totalNameLength = 0;
    for(var i = 0;i < student.name.length;i++){
        totalNameLength += 1;
    }

    const output = "Total Length: " + totalNameLength;
    document.getElementById('output').innerText = output;
}

document.getElementById('name').addEventListener('mouseup', remove);

function remove(event){
    document.getElementById('output').innerText = "";
}