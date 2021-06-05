import Link from 'next/link'
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`

      .header {
        --offset: 0rem;
        position: fixed;
        top: var(--offset);
        left: var(--offset);
        right: var(--offset);
        width: calc(100% - var(--offset) * 2);
        display: flex;
        justify-content: space-between;
        padding-left: min(5vmin, env(safe-area-inset-left));
        padding-right: min(5vmin, env(safe-area-inset-right));
        z-index: 2;
      }
        nav {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        header {

        }
      `}</style>
    </header>
  )
}

export default Header
