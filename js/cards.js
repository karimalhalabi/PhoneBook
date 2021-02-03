// console.log (data)
const LOGOS = "logos/";
const SITETITLE = data.organization.Name;
const SITELOGO = LOGOS + data.organization.logo;
const DEPARTMENTS = data.organization.departments;
const LOGO = document.getElementById("organizationLogo").src = SITELOGO;
const ORGANIZATION = document.getElementById("organizationTitle").innerText = SITETITLE;
for (let i = 0; i < DEPARTMENTS.length; i++) {
    for (let j = 0; j < DEPARTMENTS[i].divisions.length; j++) {
        const art = document.createElement('article')
        art.classList.add("card");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-college-header");
        const avatar = document.createElement("span");
        avatar.classList.add("college-avatar");
        const department = document.createElement("h3");
        department.classList.add("department");
        department.append(DEPARTMENTS[i].divisions[j].name);
        const dLogo = document.createElement("img");
        dLogo.src = LOGOS + DEPARTMENTS[i].logo;
        avatar.appendChild(department);
        avatar.append(dLogo);
        cardHeader.classList.add("card-college-header");
        cardHeader.appendChild(avatar);
        collegeName = document.createElement('div')
        collegeName.classList.add("college-name");
        collegeName.append(DEPARTMENTS[i].name);
        cardHeader.appendChild(collegeName);
        document.getElementById('card-list').appendChild(art);
        console.log(DEPARTMENTS[i].name);
        console.log(DEPARTMENTS[i].divisions[j].name);
        table = document.createElement("table");
        thead = document.createElement("thead");
        th1 = document.createElement("th");
        th1.append("الرقم الفرعي");
        thead.appendChild(th1);
        th2 = document.createElement("th");
        th2.append("رقم الهاتف");
        thead.appendChild(th2);
        th3 = document.createElement("th");
        th3.append("الإسم");
        thead.appendChild(th3);
        table.appendChild(thead);
        tbody = document.createElement("tbody");
        for (let k = 0; k < DEPARTMENTS[i].divisions[j].phones.length; k++) {
            const row = document.createElement("tr");
            const cell1 = document.createElement("td");
            cell1.append(DEPARTMENTS[i].divisions[j].phones[k].extension);
            row.appendChild(cell1)
            const cell2 = document.createElement("td");
            cell2.append(DEPARTMENTS[i].divisions[j].phones[k].phone);
            row.appendChild(cell2)
            const cell3 = document.createElement("td");
            cell3.append(DEPARTMENTS[i].divisions[j].phones[k].name);
            row.appendChild(cell3);
            tbody.appendChild(row);
            table.appendChild(tbody);

        }
        art.appendChild(cardHeader);
        art.appendChild(table);
    }
}