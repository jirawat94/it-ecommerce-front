import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      <main className="container  mx-auto px-4 ">
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
