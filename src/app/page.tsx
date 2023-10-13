import Image from 'next/image'
import Header from './components/Header'
import CardList from './components/Card/CardList'

export default function Home() {
  return (
    <div className='p-3'>
      <CardList />
    </div>
  )
}
