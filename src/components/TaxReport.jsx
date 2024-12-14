import { Container, Typography } from "@mui/material";

const TaxReport = ({ taxData }) => {
  return (
    <Container>
      <Typography style={{ margin: "30px" }} variant="h5">Relatório: </Typography>
      <Typography variant="body1">Nome: {taxData.name}</Typography>
      <Typography variant="body1">Idade: {taxData.age} anos</Typography>
      <Typography variant="body1">
        Renda:{" "}
        {parseFloat(taxData.income).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography variant="body1">
        Taxa a Pagar:{" "}
        {parseFloat(taxData.tax).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
    </Container>
  );
};

export default TaxReport;
