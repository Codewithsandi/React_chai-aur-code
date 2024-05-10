import Card from "./components/Card"

function App() {

  return (
    <>
      <h1 className="text-5xl font-bold my-5 ml-5">Chai aur Code | Sandipan</h1>
      <div className="flex gap-5">
        <Card userName="Sandipan" btnText="Contact"/>
        <Card userName="Rahul"/>
        <Card userName="Rajesh"/>
      </div>
    </>
  )
}

export default App
