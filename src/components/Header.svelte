<script>
    function handleAboutClick(event) {
      event.preventDefault();
      // Optionally, you can perform any custom logic here
      // without navigating to a different page
    }
  </script>
  
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about" on:click={handleAboutClick}>About</a></li>
        <li><a href="/contact" on:click={handleAboutClick}>Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <style>
    header {
      height: 15px;
      background-color: var(--first-color);
      padding: 30px;
      display: flex;
      justify-content: center; /* Center the content horizontally */
      align-items: center; /* Center the content vertically */
    }
  
    nav ul {
      list-style-type: none;
      padding: 0;
      text-align: center;
      margin: 0; /* Remove the default margin */
    }
  
    nav ul li {
      display: inline-block;
      margin-right: 120px;
    }
  
    nav ul li a {
      text-decoration: none;
      color: #333;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
      font-size: 20px;
    }
  </style>
  
  