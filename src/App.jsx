import TodosScreen from "./pages/TodosScreen";
import { TodosContextProvider } from "./state/todosContext";

import './App.css'

function App() {
  return (
    <TodosContextProvider>
      <TodosScreen />
    </TodosContextProvider>
  );
}

export default App
