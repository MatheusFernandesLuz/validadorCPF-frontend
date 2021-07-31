import {
  Container,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Paper,
  Button,
  IconButton,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { CPF } from "../interfaces/CPF";
import { findAllCPF, createCPF, deleteCPF } from "../services/CPFservice";
import { Flex } from "../components/Flex";

const Home: React.FC = () => {
  const [cpfs, setcpfs] = useState<CPF[]>([]);
  const [newcpf, setNewcpf] = useState<string>("");

  const update = async () => {
    const lista = await findAllCPF();
    setcpfs(lista);
  };

  const handleAddClick = async () => {
    try {
      await createCPF(newcpf);
      update();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleDeleteClick = async (cpf: string) => {
    await deleteCPF(cpf);
    setcpfs(cpfs.filter((c) => c.cpf !== cpf));
    update();
  };

  return (
    <Container>
      <Flex>
        <Typography style={{ marginTop: "20px" }} variant="h3">
          Lista CPF's fraudados
        </Typography>
      </Flex>

      <br />
      <br />

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <TextField
              fullWidth
              label="Novo CPF"
              placeholder="Ex: 563.474.708-29"
              variant="outlined"
              value={newcpf}
              onChange={(e) => setNewcpf(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ height: "56px" }}
              fullWidth
              onClick={handleAddClick}
            >
              Adicionar
            </Button>
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ height: "56px" }}
              fullWidth
              onClick={update}
            >
              Atualizar
            </Button>
          </Grid>
        </Grid>
      </form>

      <br />
      <br />

      <TableContainer component={Paper}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Número do CPF</TableCell>
              <TableCell>Cadastrado em</TableCell>
              <TableCell>Modificado em</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {cpfs.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.lastModified}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteClick(item.cpf)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export { Home };
