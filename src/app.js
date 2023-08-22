import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [userState, setUserState] = useState();

  const storagedUserRecord = localStorage.getItem("user");
  const storegedUser = storagedUserRecord ? JSON.parse(storagedUserRecord) : undefined;
  const user = userState || storegedUser;
  console.log({user});

  const onAuth = (user) => {
    setUserState(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  if (!user) {
    return <AuthPage onAuth={onAuth} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
