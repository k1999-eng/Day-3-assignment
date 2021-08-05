function Display()
{
    let name = document.querySelector("#name").value;
    let city = document.querySelector("#city").value;
    document.querySelector("#dis").innerHTML=`<p>${name}<br/>${city}</p>`;
}