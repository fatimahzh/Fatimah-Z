import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me{' '}
      <a href="https://instagram.com/houmadi012/">@houmadi012</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Created by{' '}
          <a href="https://aminah.io">Aminah-io</a>.
        </span>
      </div>
    </footer>
  </div>
)
