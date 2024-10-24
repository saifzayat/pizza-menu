import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinach",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/Spinach.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Fungi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/Fungi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salmon",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/Salmon.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and buryat cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>House of Pizza</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            we have a 6 category of pizza in the restaurant we happy if you
            check them
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are not working now plz come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? `sold-out` : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const Hours = new Date().getHours();
  const HoursOpen = 10;
  const HoursClosed = 22;
  const IsOpen = Hours >= HoursOpen && Hours <= HoursClosed;
  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    });
  }, []);
  //console.log(IsOpen);
  //console.log(Hours);
  // if (Hours >= HoursOpen && Hours <= HoursClosed) alert("we're open");
  // else alert("we're 1closed");
  return (
    <footer className="footer">
      {IsOpen ? (
        <Order mix={HoursClosed} mix1={Hours} time={time} />
      ) : (
        <p>
          we are open between {HoursOpen}:00 and {HoursClosed}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we're open ");
}

function Order({ mix, mix1, time }) {
  return (
    <div className="order">
      <p>
        we have {mix - mix1}:00 Hours to closed and the time is {time}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react before 18
// React.render(<App />);
