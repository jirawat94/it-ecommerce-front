import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      <main className="container 2xl mx-auto">
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
