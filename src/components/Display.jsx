
const Display = ({ children }) => {

  return (
    <>
      <div className="border border-neutral-700 w-96 h-20 rounded-2xl flex justify-end items-end px-2 hover:bg-neutral-700">{children}</div>
    </>
  );
}

export default Display;
