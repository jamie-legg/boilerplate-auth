import Head from 'next/head'
import Header from './header'

const Layout = (props) => (
  <>
    <Head>
      <title>Magic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <div className="test">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
    Test, I would love to see a pretty significantly sized div right over the background around here.
      </div>
</div>
      <div className="container">{props.children}</div>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html {
        height: 100%;
      }
      body {
        display: grid;
        place-content: center;
        grid-template-areas: "body";
        overflow: hidden;
        height: 100%;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
    
        body::before,
        body::after {
          --size: 150vmax;
          --duration: 15s;
          content: "";
          grid-area: body;
          width: var(--size);
          height: var(--size);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
    
        body::before {
          animation-name: rotate;
          animation-duration: var(--duration);
          background: linear-gradient(to left, var(--palette));
        }
    
        body::after {
          animation-name: rotate, fade;
          animation-duration: calc(var(--duration) / 2), var(--duration);
          background: linear-gradient(to right, var(--palette));
        }
    
        @keyframes rotate {
          to {
            transform: rotate(1turn);
          }
        }
    
        @keyframes fade {
          50% {
            opacity: 0;
          }
        }
    
    /* Gradients generated at https://learnui.design/tools/gradient-generator.html */
    body {
      --rotate: 0deg;
      --palette: #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060,
        #ffb56b;
    }
    
    [data-color="1"] {
      --rotate: 90deg;
      --palette: #004466, #006080, #007e90, #009b97, #29b794, #74d18b, #b7e881,
        #fffb80;
    }
    
    [data-color="2"] {
      --rotate: 180deg;
      --palette: #f3ff17, #ffde00, #ffb900, #ff8f39, #ff6062, #ff298b, #ff00b5, #ff1fdd;
    }
    
    [data-color="3"] {
      --rotate: 270deg;
      --palette: #054ce6, #0072ff, #008fff, #00a5ff, #00b8e4, #00c9bb, #00d890, #36e367;
    }

    .userControls {
      --offset: 0.5rem;
      position: fixed;
      top: var(--offset);
      left: var(--offset);
      right: var(--offset);
      width: calc(100% - var(--offset) * 2);
      display: flex;
      justify-content: space-between;
      padding-left: min(5vmin, env(safe-area-inset-left));
      padding-right: min(5vmin, env(safe-area-inset-right));
      z-index: 1;
    }
    
    /* Controls */
    .controls {
      --offset: 0.5rem;
      position: fixed;
      top: var(--offset);
      left: var(--offset);
      right: var(--offset);
      width: calc(100% - var(--offset) * 2);
      display: flex;
      justify-content: space-between;
      padding-left: min(5vmin, env(safe-area-inset-left));
      padding-right: min(5vmin, env(safe-area-inset-right));
      z-index: 1;
    }
    
    button {
      display: flex;
      align-items: center;
      font-family: system-ui;
      font-size: inherit;
      padding: 1rem;
      color: white;
      fill: currentcolor;
      background-color: transparent;
      border: none;
      cursor: pointer;
      touch-action: manipulation;
    }
    
    button:active {
      transform: translateY(1px);
    }
    
    .btn-colors [data-icon] {
      width: 1.4em;
      transform: rotate(var(--rotate));
    }
    
    .btn-fullscreen [data-icon] {
      width: 1.2em;
    }
    
    [data-icon="close"] {
      display: none;
    }
    
    .is-fullscreen [data-icon="open"] {
      display: none;
    }
    
    .is-fullscreen [data-icon="close"] {
      display: block;
    }
    `}</style>
  </>
)

export default Layout
