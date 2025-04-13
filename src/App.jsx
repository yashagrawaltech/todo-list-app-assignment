import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    return (
        <>
            <div className="w-dvw h-dvh flex flex-col overflow-clip">
                <header className="w-full sticky top-0 left-0 z-50">
                    <Header />
                </header>
                <main className="px-2 flex items-center flex-col w-full h-full overflow-clip overflow-y-auto">
                    <TodoList />
                </main>
            </div>
        </>
    );
}

export default App;
