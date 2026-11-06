function Bank() {
  return (
    <div>
      <h2>Bank management system</h2>
      <p>Account summary:</p>
      <p>2.Acc no:12345678</p>
      <p>3.Holder name:lohith</p>
      <h2>4.Transaction list:</h2>
      <p>5.Paid three thousand</p>
      <p>6.Paid five thousand</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Bank />
      
    </div>
  );
}

export default App;