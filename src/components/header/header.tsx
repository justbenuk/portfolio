import Container from "../global/container";
import DarkMode from "./dark-mode";
import Profile from "./profile";
import Logo from "./logo";
import Navbar from "./navbar";
import ResonsiveMenu from "./responsive-menu";
export default function Header() {
  return (
    <header className="border-b">
      <Container className="flex flex-row justify-between items-center py-4 px-6 xl:px-0 gap-4">
        <Logo />
        <Navbar />
        <div className="flex gap-2 items-center">
          <DarkMode />
          <Profile />
          <ResonsiveMenu />
        </div>
      </Container>
    </header>
  );
}
