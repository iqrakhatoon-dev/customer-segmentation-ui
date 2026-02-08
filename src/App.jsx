import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prime customers who have access to bank credit and are satisfied with the current product.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prime customers who have access to bank credit but are not satisfied with the current service.',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Customers from near-prime and sub-prime segments with limited access to credit.',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Young digital-first users who actively use apps but lack personalized banking solutions.',
      tag: 'Emerging'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661549839875-27c32b2fa2ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'High-value customers with strong financial history seeking premium digital experiences.',
      tag: 'High Value'
    }
  ]

  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
