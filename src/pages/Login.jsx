function Login() {
  return (
    <section className="login-page">
      <div className="page-heading">
        <p className="eyebrow">Admin access</p>
        <h1>Sign in to manage your nursery</h1>
        <p className="description">
          Use a temporary login to preview the admin experience. This form is a placeholder — add authentication later.
        </p>
      </div>

      <form className="login-form">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>

        <button type="button">Continue to admin</button>
      </form>
    </section>
  )
}

export default Login
