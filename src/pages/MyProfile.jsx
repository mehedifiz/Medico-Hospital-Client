import { useContext, useState } from "react";
import { AppContext } from "../context/AppContex";

const MyProfile = () => {
  const { userData, setUserData, loadUserProfileData } = useContext(AppContext);
  console.log(userData)

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-6 text-sm mx-auto p-4">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={userData.image}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>

      {/* Name Section */}
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-full mt-4 p-2 border-b-2 border-gray-300"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-1 border-none my-4" />

      {/* Contact Information Section */}
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52 p-2 border-b-2 border-gray-300"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                className="bg-gray-100 max-w-full p-2 mt-2 border-b-2 border-gray-300"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                className="bg-gray-100 max-w-full p-2 mt-2 border-b-2 border-gray-300"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <hr className="bg-zinc-400 h-1 border-none my-4" />

      {/* Basic Information Section */}
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>

        <div>
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 max-w-52 p-2 border-b-2 border-gray-300"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="font-medium mt-2">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-full p-2 border-b-2 border-gray-300"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              type="date"
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Edit/Save Button */}
      <div className="mt-6 text-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
