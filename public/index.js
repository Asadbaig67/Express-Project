let CityValue = document.getElementById('exampleFormControlInput1');

let btn = document.getElementById('Result');

let fetchdata = async () => {
    let City = CityValue.value
    console.log(City);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=79b2688c87d828dd3199ad184a8b5e8c`;
    // fetch(url).then(res => res.json()).then(data => console.log(data))
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


}


btn.addEventListener('click', fetchdata)
