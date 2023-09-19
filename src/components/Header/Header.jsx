import "./Header.css"

import img from "./—Pngtree—simple coffee elemental design free_3597680.png"

const Header = () => {
  return (
    <div className="Header">
        <img src={img} alt="logo" />
        <h1>Cafetería</h1>
        <h2>Disfruta tus mejores momentos con un café. </h2>
    </div>
  )
}

export default Header