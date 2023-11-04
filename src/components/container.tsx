import { ReactNode } from "react";
import Header from "./header";

type ContainerProps = {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="container mx-auto min-h-screen">
      <Header />
      {children}
    </main>
  )
}

export default Container;