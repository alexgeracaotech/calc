
const Button = ({ backgroundColor, type, hover, setValue }) => {

  const style = `
    button
    ${backgroundColor}
    ${hover}
  `;

  const calc = 9*9;
  console.log(calc)

  function execute() {

    if (type === 'AC') {
      setValue('0');
      return;
    }

    if (type === '=') {
      setValue(values => {
        return String(eval(values));
      });

      return;
    }

    setValue(values => {
      if (values === '0') {
        return type;
      }

      return values + type;
    });
  }


  return (
    <>
      <button
        className={style}
        onClick={execute}
      >{type}</button>
    </>
  );
}

export default Button;
