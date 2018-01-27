'use strict'

const choo = require('choo')
const html = require('choo/html')

window.onload = start

function Home (state, emitter) {
  return html`
    <body>
      <section class='section'>
        <div class='container'>
          <div class='columns'>
            <div class='column is-narrow'>
              <!-- Top navigation -->
              <aside class="menu">
                <p class="menu-lavel">
                  Menu
                </p>
                <ul class="menu-list">
                  <li><a href="#">Armies</a></li>
                  <li><a href="#">Magic</a></li>
                  <li><a href="#">Character</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </aside>
            </div>
            <div class='column'>
              <div class="content">
                <h1 class="title">Game-yo</h1>
                <p class="subtitle">A game by friends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  `
}

function start () {
  let app = choo()
  app.route('/', Home)
  app.mount('body')
}
