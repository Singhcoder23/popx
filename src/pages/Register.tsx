import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account created successfully!");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-gray-50 shadow rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone number*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9999999999"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="marry@doe.com"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Are you an Agency?*</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>

        {/* Extra navigation option */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
