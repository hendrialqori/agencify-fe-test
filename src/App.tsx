import NavigationBar from "./modules/home/navigation-bar"
import Banner from "./modules/home/banner"

// App as home page
export default function App() {
  return (
    <main className="font-poppins pb-10">
      <NavigationBar />
      <Banner />
    </main>
  )
}