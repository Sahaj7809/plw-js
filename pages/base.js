export class Base {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://www.amazon.in/');
  }

  async login(username, password) {
    //login functionality
  }
}
