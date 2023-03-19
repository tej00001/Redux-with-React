import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Authentication";
import UserProfile from "./Components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
