let form=document.querySelector("form");
let input=document.querySelector("input");
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let img=document.querySelector("img");
let p=document.querySelector("p");
let card=document.querySelector(".card");


        const GetWeatherinfo = async(e)=>
    {
        e.preventDefault();
        try {
            const  response=
            await fetch
            (`https://api.weatherapi.com/v1/current.json?key=2ab6349ddde74a7e86980207242302&q=${input.value}&aqi=yes
            `);
            const data= await response.json();
    
            card.className="card p-5 rounded-0 shadow-lg ";
            console.log(data)
                h3.innerText=data.current.temp_c + "°C";
                h2.innerText=data.location.name ;
                p.innerText=data.current.condition.text;
            img.setAttribute("src",data.current.condition.icon);
        } catch (error) {
            window.alert("Please Enter a valid City name")
            card.className="card p-5 rounded-0 shadow-lg d-none "
        }
        form.reset()
    };

form.addEventListener("submit", GetWeatherinfo);
