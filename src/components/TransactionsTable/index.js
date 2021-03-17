const TransactionsTable = ({ transactions }) => {
  return (
    <table className="table is-small">
      <thead>
        <tr>
          <th>Nro</th>
          <th>Envió</th>
          <th>Recibió</th>
          <th>Monto</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.map((value) => (
          <tr>
            <td>{value.index}</td>
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
