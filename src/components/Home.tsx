import EventList from './EventList'
import Menu from './Menu'

const Home: React.FC = () => {
  return (
    <div>
      <Menu />
      <h1>Zaragoza IT events</h1>
      {<EventList />}
    </div>
  )
}

export default Home
