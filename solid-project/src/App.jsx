import logo from './logo.svg';
import styles from './App.module.css';
import { CountingComponent } from './Counting'; 
import { ClickCount } from './ClickCount';


function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          this is my program in solid JS😻
          <CountingComponent />
          <ClickCount />
          
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
