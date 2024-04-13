const Nav = () => {
  return (
    <nav className="w-[96%] px-[12px] py-[15px] flex flex-row justify-between absolute top-0">
      <a target="_blank" href="https://0rbit.co/">
        <img src="/logo.svg" className="md:h-[75px] md:w-[75px]" />
      </a>
      <div className="flex flex-row items-center justify-center gap-6">
        <a
          target="_blank"
          href="https://discord.gg/JVSjqaKJgV"
          className="hover:opacity-75"
        >
          <img
            src="/disc.svg"
            className=" w-[24px] h-[24px]
    md:w-[36px] md:h-[36px]
  md:hover:w-[33px] md:hover:h-[33px]"
          />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/0rbitco"
          className="hover:opacity-75"
        >
          <img
            src="/x.svg"
            className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] md:hover:w-[33px] md:hover:h-[33px]"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/0rbit-co"
          className="hover:opacity-75"
        >
          <img
            src="/github.svg"
            className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] md:hover:w-[33px] md:hover:h-[33px]"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
