
const Box = ({ children, display, columns, gap, padding }) => {

  const style = `
    ${display}
    ${columns}
    ${gap}
    ${padding}
  `;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Box;
