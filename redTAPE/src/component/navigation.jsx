const Navigation = () => {
  return (
    <nav className="container">
      <div className="Logo">
        <img src="/Images/brand_logo.png" alt="Logo" />
      </div>
      <ul>
        <li><a href="#">MENU</a></li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <button>LOGIN</button>
    </nav>
  );
}

export default Navigation;
