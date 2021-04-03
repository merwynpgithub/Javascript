async function fetchMyData() {
    const response = await 
    fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    // console.log(data);
    loadMyListedData(data);
}
fetchMyData();
function loadMyListedData(item) {
    let ul = document.getElementById("myUl");
    ul.innerHTML = `
    <ul>
        ${item.map((property) => 
            `<li>${property.title}</li>`).join("")}
    </ul>
    `;
}

