let projects = []

function getData(event) {
    event.preventDefault()

    let title = document.getElementById('name').value
    let startDate = document.getElementById('start').value
    let endDate = document.getElementById('end').value
    let description = document.getElementById('description').value
    let check1 = document.getElementById('nodejs').checked
    let check2 = document.getElementById('php').checked
    let check3 = document.getElementById('java').checked
    let check4 = document.getElementById('laravel').checked
    let image = document.getElementById('image_att').files

    let icon1 = (check1 == true) ? '<i class="fa-brands fa-node"></i>' : '';
    let icon2 = (check2 == true) ? '<i class="fa-brands fa-php"></i>' : '';
    let icon3 = (check3 == true) ? '<i class="fa-brands fa-java"></i>' : '';
    let icon4 = (check4 == true) ? '<i class="fa-brands fa-laravel"></i>' : '';

    //let start = new Date(startDate)
    //let end = new Date(endDate)


    // document.getElementById("alert").style.backgroundColor = "rgb(255, 0, 0)";
    // document.getElementById("alert").style.color = "rgb(255, 255, 255)";

    //Pengkondisian, jika diisi dan jika tidak diisi untuk Form
    if (title == "") {
        document.getElementById("alert").innerHTML = "Project Name cannot be empty";
    } else if (startDate == "") {
        document.getElementById("alert").innerHTML = "Start Date cannot be empty";
    } else if (endDate == "") {
        document.getElementById("alert").innerHTML = "End Date cannot be empty";
    } else if (description == "") {
        document.getElementById("alert").innerHTML = "Description cannot be empty";
    } else if (icon1 == false && icon2 == false && icon3 == false && icon4 == false) {
        document.getElementById("alert").innerHTML = "Technology cannot be empty";
    } else if (image.length == 0) {
        document.getElementById("alert").innerHTML = "Image cannot be empty";
    } else {
        image = URL.createObjectURL(image[0]);

        //let duration = (end - start) / (1000 * 3600 * 24);
        //Penampungan data untuk icon Technology
        let icon = [
            icon1,
            icon2,
            icon3,
            icon4
        ]

        let iconFil = icon.filter(elem => elem[1]).reverse()
        console.log(iconFil)
            // menampung data form
        let dataBlog = {
            image,
            title,
            description,
            iconFil,
            startDate,
            endDate,

        }
        projects.push(dataBlog)
        showProject()

    }
}
//statement/pemanggilan data yang sudah dikelolah
function showProject() {
    document.getElementById("content-project").innerHTML = ''
    for (let i = 0; i <= projects.length; i++) {

        if (projects[i].iconFil[0] == undefined) {
            projects[i].iconFil[0] = ""
        }
        if (projects[i].iconFil[1] == undefined) {
            projects[i].iconFil[1] = ""
        }
        if (projects[i].iconFil[2] == undefined) {
            projects[i].iconFil[2] = ""
        }
        if (projects[i].iconFil[3] == undefined) {
            projects[i].iconFil[3] = ""
        }
        if (projects[i].iconFil[4] == undefined) {
            projects[i].iconFil[4] = ""
        }


        document.getElementById("content-project").innerHTML += `
            <div class="card-project">
                <div class="img-container">
                    <img src="${projects[i].image}" alt="" width="250" style="border-radius:5px">
                </div>
                <div>
                    <h3 style="margin: 10px 0px 5px 0px; color: black;">${projects[i].title}</h3>
                    <p style=" margin-bottom: 10px; color: gray;">Duration : ${duration(projects[i].startDate, projects[i].endDate)}</p>
                </div>
                <p style="color: black;">${projects[i].description}</p>
                <div class="tec">
                <div class="tec-in">${projects[i].iconFil[0]}</div>
                <div class="tec-in">${projects[i].iconFil[1]}</div>
                <div class="tec-in">${projects[i].iconFil[2]}</div>
                <div class="tec-in">${projects[i].iconFil[3]}</div>
                </div>
                    <div style="display: flex; justify-content: space-between; margin-top:10px; column-gap: 10px">
                        <button class="btn-primary" style="cursor :pointer;">Edit</button>
                        <button class="btn-danger"  style="cursor :pointer;">Delete</button>
                    </div>
                </div>
           </div>`

    }
}
//statement duration timeout
function duration(startDate, endDate) {
    let deadline = new Date(endDate) - new Date(startDate)

    let day = Math.floor(deadline / (1000 * 60 * 60 * 24))
    let month = Math.floor(deadline / (1000 * 60 * 60 * 24 * 30))
    let week = Math.floor(deadline / (1000 * 60 * 60 * 24 * 7))

    if (month > 0) {
        return `${month} Month`
    } else if (week > 0) {
        return `${week} Week`
    } else {
        return `${day} Day`
    }

}