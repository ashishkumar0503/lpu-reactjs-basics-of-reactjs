import "./greeting.css";

const Greeting = () => {
    const date = new Date(2023, 3, 10, 13);
    const hours = date.getHours();

    const heading = {
        color: "red",
    }
    let greeting = "";

    if (hours >= 0 && hours < 12){
        greeting = "Good Morning";
        heading.color = "blue";
    } else if(hours >= 12 && hours < 17) {
        greeting = "Good Afternoon";
        heading.color = "red";
    } else if(hours >= 17 && hours < 20) {
        greeting = "Good Evening";
        heading.color = "orange";
    } else if(hours >= 20 && hours < 24){
        greeting = "Good Night";
        heading.color = "black";
    }
    
  return (
    <div className="greetContainer">
        <div className="greetItems">
            <h1>Hello Sir, <span style={heading}>{greeting}</span></h1>
        </div>
    </div>
  )
}

export default Greeting