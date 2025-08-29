import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Profile Cards</h1>
      <div className="profiles-container">
        <ProfileCard
          name="Rahul"
          bio="Full-stack developer passionate about React and modern web technologies."
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
        />
        <ProfileCard
          name="Priya"
          bio="UI/UX designer with 5+ years of experience in creating beautiful user experiences."
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
        />
      </div>
    </div>
  );
}

export default App;