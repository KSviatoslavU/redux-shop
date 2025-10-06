import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Header, ProductList } from "../index";

function App() {
  return (
    <>
      <MantineProvider>
        <Header />
        <main>
          <ProductList />
        </main>
      </MantineProvider>
    </>
  );
}

export default App;
