
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                     <h1 className="text-center p-5 text-5xl">Register Page</h1>
            <form className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <label className=" text-blue-500 underline">
                  <Link to="/login">
                    Login
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default RegisterPage;