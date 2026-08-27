import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🛍️ Our Products</h1>
      <p>✨ Choose your favorite product ✨</p>

      <div className="cards">
        <Card
          emoji="💻"
          name="Laptop"
          price="50,000"
        />

        <Card
          emoji="📱"
          name="Mobile"
          price="20,000"
        />

        <Card
          emoji="🎧"
          name="Headphones"
          price="2,000"
        />
      </div>
    </div>
  );
}

export default App;