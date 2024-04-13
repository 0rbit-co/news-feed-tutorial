import { Footer, LinksBox, Nav, NewsDisplay } from "./Components";

const App = () => {
  return (
    <main
      className="bg-[#ffffff] flex flex-col sm:gap-[39px] gap-[24px] items-center justify-center
    font-[Regular] md:pt-[60px] pt-[120px] px-6 text-center"
    >
      <Nav />
      {/* Heading */}
      <h1 className="text-[#000000] md:text-[27px] text-[21px] font-[ExtraBold]">
        Get Latest News with <span className="text-[#F49F38]">0rbit</span> on{" "}
        <span className="text-[#F49F38]">AO</span>
      </h1>
      <NewsDisplay />
      <LinksBox />
      <Footer />
    </main>
  );
};

export default App;

const news = [
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
  {
    heading: "This is my News heading lorem ip...",
    para: "This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv This is my News text lorem ipsum dolor sit amet qwer tyuiop asdfhjbfv rvjbrv...",
  },
];
