import "./sidebar.css"

const SideBar = () => {
  return (
    <div className="h-screen w-48 bg-blue-500">
      <h1 className="sb-header">Finance</h1>
      <ul className="ul-list">
        <li><a href="" className="sb-list">Dashboard</a></li>
        <li><a href="" className="sb-list">About</a></li>
        <li><a href="" className="sb-list">contact</a></li>
        <li><a href="" className="sb-list">Premium</a></li>
      </ul>
    </div>
  );
}

export default SideBar