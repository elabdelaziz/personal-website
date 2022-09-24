const MainButton = ({ content }) => {
  return (
    <button
      className="uppercase font-[400] opacity-[0.8] border-[1px] border-[solid] border-[white] px-[10px] py-[5px] w-[fit-content]"
      type="button"
    >
      {content}
    </button>
  );
};
export default MainButton;
