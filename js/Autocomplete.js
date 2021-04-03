let div = document.getElementById("divs");
div.innerHTML =
    `<ul id = "myUl">${countries.map(item => `<li>${item}</li>`).join('')}</ul>`;
var input = document.getElementById("myInp");
function sortCountry() {
    let li = document.getElementsByTagName("li");

    var filter = input.value.toUpperCase();
    console.log(li[0].innerHTML);


    for (let index = 0; index < li.length; index++) {
        let element = li[index].textContent.toUpperCase();
        let search = element.charAt(index);
        let fill = filter.charAt(index);
        
        if (element.startsWith(filter)) {
            li[index].style.display = "";
            let fLen = filter.length;
            let firstPart = li[index].textContent.substr(0, fLen);
            let secondPart = li[index].textContent.substr(fLen);
            let boldChar = `<strong>${firstPart}</strong>`;
            li[index].innerHTML = boldChar + secondPart;
        }
        else {
            li[index].style.display = "none";
        }
    }
}

input.addEventListener("keyup", sortCountry);

