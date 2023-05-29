type LateralBarProps = {
  text: String;
};

const LateralBar = ({ text }: LateralBarProps) => {
  return (
    <div id="lateral-bar-component">
      <div className="text">
        <p>{"<"}</p>
        <p>{text}</p>
        <p>{">"}</p>
      </div>
      {/* <div className="lateral-bar"></div> */}
    </div>
  );
};

export default LateralBar;