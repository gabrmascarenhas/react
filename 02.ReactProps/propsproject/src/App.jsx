import Button from "./components/Button";
import { Input } from "./components/Input";

export default function ComponentName() {
  return (
    <>
    <h1>Funcionando</h1>
    <Button />
    <Button class='btn-default' />
    <Button class ='btn-warning' />
    <Button  class = 'btn-success' />
    <Button  class = 'btn-danger' />
    <hr />
    <Input
    required
    placeholder="Obrigatório" 
    />
    <button 
    type="submit"
    id="b1"
    name="b1"
    className="btn-success"
    >
      Login</button>
    </>
  );
}
