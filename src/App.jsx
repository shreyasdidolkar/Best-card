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
          price={50000}
        />

        <Card
          emoji="📱"
          name="Mobile"
          price={20000}
        />

        <Card
          emoji="🎧"
          name="Headphones"
          price={2000}
        />
      </div>
    </div>
  );
}

export default App;