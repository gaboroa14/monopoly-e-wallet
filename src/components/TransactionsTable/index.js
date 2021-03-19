const TransactionsTable = ({ transactions }) => {
  return (
    <table className="table is-small" style={{
      marginLeft: "auto",
      marginRight: "auto",}}>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Envió</th>
          <th>Recibió</th>
          <th>Monto</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.map((value) => (
          <tr>
            <td>{value.type}</td>
            <td>{value.sender}</td>
            <td>{value.receiver}</td>
            <td>₩{value.amount}</td>
            <td>{value.hour}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
