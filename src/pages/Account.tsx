import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  isAgency: string;
}

const Account: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [profilePic, setProfilePic] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
        localStorage.setItem("profilePic", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const storedPic = localStorage.getItem("profilePic");
    if (storedPic) {
      setProfilePic(storedPic);
    }
  }, []);

  if (!user) {
    return <p className="text-center mt-10">No user data found. Please login.</p>;
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-white py-10">
      <div className="w-full max-w-md border rounded-lg bg-gray-50 p-6 shadow">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4">
          Account Settings
        </h2>

        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src={
                profilePic ||
                "https://via.placeholder.com/80x80.png?text=User"
              }
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border"
            />
            <label className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-1 cursor-pointer">
              <Camera size={16} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="font-semibold">{user.fullName}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-700 text-sm leading-relaxed border-t pt-3">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
};

export default Account;
