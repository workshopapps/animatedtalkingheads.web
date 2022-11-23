const MainCard = ({children}) => {
    return (
      <section className="h-fit rounded-md px-6 pt-6 p-t bg-[#f4f4f4] max-w-[1312px] relative bottom-[125px] mx-[10px] md:mx-[20px] lg:mx-auto rounded-br-none rounded-bl-none mb-[-125px]">
        {children}
      </section>
    );
}

export default MainCard