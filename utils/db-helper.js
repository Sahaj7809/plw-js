/* import mysql from 'mysql2/promise';

export class DBUtil {
  constructor() {
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'test_user',
      password: 'test_pass',
      database: 'ecommerce_db',
    });
  }

  async disconnect() {
    if (this.connection) await this.connection.end();
  }

  async getUserByEmail(email) {
    const [rows] = await this.connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  async insertUser(user) {
    const [result] = await this.connection.execute(
      'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
      [user.name, user.email, user.role]
    );
    return result.insertId;
  }

  async deleteUserByEmail(email) {
    await this.connection.execute('DELETE FROM users WHERE email = ?', [email]);
  }
}
 */