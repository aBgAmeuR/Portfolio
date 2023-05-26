
type YearProjetsProps = {
  year: number;
};

const YearProjets = ({ year }: YearProjetsProps) => {
  return (
    <div className="YearProjets">
      <p>{year}</p>
      <div className="ligne">
      </div>
    </div>
  );
}

export default YearProjets;