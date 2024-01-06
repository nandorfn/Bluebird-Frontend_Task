import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import { Navbar } from '@/app/components/Navbar/Navbar'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Navbar />)
 
    const heading = screen.getByText('Home')
 
    expect(heading).toBeInTheDocument()
  })
})