import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Header, ProductList } from "../Index";

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
