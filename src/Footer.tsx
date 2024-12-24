import { Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <div>
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 CyndieMedia, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><Facebook color="gray" size={20} /></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><Twitter color="gray" size={20} /></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><Instagram color="gray" size={20} /></a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer