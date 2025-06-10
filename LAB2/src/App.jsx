import Header from './Header'
import Footer from './Footer'
const App=()=>{
  return (
    <div style={{textAlign:'center'}}>
      <Header title="React Props Demo"/>
      <main>
        <h2>Welcome to React Props Example!!!!</h2>
        <p>This demonstrates passing of props from parent to child component.</p>
      </main>
      <Footer copyright="©️2025.Built with ❤️"/>
    </div>
  )
}
export default App;

