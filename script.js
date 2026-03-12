:root {
    --primary: #ff3b3b; /* Electric Crimson */
    --bg-dark: #0a0a0a;
    --card-bg: #141414;
    --text-white: #ffffff;
    --text-gray: #b3b3b3;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

span { color: var(--primary); }

/* Navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 8%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
    font-family: 'Oswald', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-white);
    font-weight: 700;
    font-size: 0.9rem;
    transition: var(--transition);
}

.nav-links a:hover { color: var(--primary); }

/* Hero Section */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(10,10,10,1));
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
}

.hero h1 {
    font-family: 'Oswald', sans-serif;
    font-size: clamp(3rem, 10vw, 6rem);
    line-height: 1;
    margin: 10px 0;
}

.btn {
    padding: 15px 35px;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
    border-radius: 5px;
    margin: 10px;
    transition: var(--transition);
}

.primary-btn { background: var(--primary); color: white; }
.secondary-btn { border: 2px solid white; color: white; }

.primary-btn:hover { transform: scale(1.05); box-shadow: 0 0 20px var(--primary); }

/* Programs */
.programs { padding: 100px 8%; text-align: center; }

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 15px;
    transition: var(--transition);
    border: 1px solid transparent;
}

.card i { font-size: 3rem; color: var(--primary); margin-bottom: 20px; }

.card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    background: #1a1a1a;
}
