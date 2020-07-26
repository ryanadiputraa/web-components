class ResponsiveHeader extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.links = this.getAttribute('links').split(',') || null;
    this.href = this.getAttribute('href').split(',') || null;
    
    this.innerHTML = `
    <div class="title">
      <h1>${this.title}</h1>
    </div>
    <div class="hamburger-menu">
      <div class="ham"></div>
      <div class="ham"></div>
      <div class="ham"></div>
    </div>
    <nav>
      <ul>
        <li><a href="${this.href[0]}">${this.links[0]}</a></li>
        <li><a href="${this.href[1]}">${this.links[1]}</a></li>
        <li><a href="${this.href[2]}">${this.links[2]}</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define("responsive-header", ResponsiveHeader);