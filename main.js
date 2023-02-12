function getImagePreview(event){
    var image = URL.createObjectURL(event.target.files[0]);
    var imageDiv = document.getElementById('preview');
    var newImage = document.createElement('img');
    imageDiv.innerHTML = "";
    newImage.src = image;
    imageDiv.appendChild(newImage);
}

function saveEmployee(){
    empname = ename.value;
    emplyid = empid.value;
    empaddr = empadd.value;
    empadhr = empproof.value;


    if(emplyid in localStorage){
        alert("Employee already exsits");
    } else {

        employee = {
           "employe_name" : empname,
           "employe_id" : emplyid,
           "employe_address" : empaddr,
           "employee_proof" : empadhr
        }

        
        // store data in localStorage
        
        // convert js object into json
        
        localStorage.setItem(emplyid,JSON.stringify(employee));
        alert("Employee details added successfully");
    }
}

function showEmployee(){
    window.location = 'showpage.html';   
}

function displayData(){
    emid = s1.value;

    if(emid in localStorage){
            // convert json object to js object
        emp = JSON.parse(localStorage.getItem(emid))
        console.log(emp);

        show.innerHTML =`
        <td> <strong>${emp.employe_id}</strong></td>
        <td><strong>${emp.employe_name}</strong></td>
        <td><strong>${emp.employe_address}</strong></td>
        <td><strong>${emp.employee_proof}</strong></td>
        <td><button type="submit" class="btn btn-primary">Download</button></td>
        `
    } else {
        alert("employee not present in db");
        result.innerHTML = ""
    }


}


function logOut(){
    window.location = "index.html";
}



