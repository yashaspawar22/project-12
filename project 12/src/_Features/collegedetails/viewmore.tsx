import React, { useState, useEffect } from 'react';

const ViewMore = ({ college, onUpdateCollege }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...college });

  useEffect(() => {
    setFormData({ ...college });
  }, [college]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleAdminChange = (index, value) => {
    const newAdmins = [...formData.admins];
    newAdmins[index] = value;
    setFormData((prev) => ({
      ...prev,
      admins: newAdmins,
    }));
  };

  const addAdmin = () => {
    setFormData((prev) => ({
      ...prev,
      admins: [...prev.admins, ''],
    }));
  };

  const removeAdmin = (index) => {
    const newAdmins = formData.admins.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      admins: newAdmins,
    }));
  };

  const handleSave = () => {
    if (onUpdateCollege) {
      onUpdateCollege(formData);
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...college });
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="p-6 bg-white shadow-md rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">College Details</h2>
          <div className="flex space-x-4">
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="text-green-600 hover:underline font-medium"
              >
                Edit
              </button>
            )}
            {editing && (
              <>
                <button
                  onClick={handleSave}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-600 hover:underline font-medium"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">College ID</p>
            {editing ? (
              <input
                type="text"
                name="college_id"
                value={formData.college_id}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            ) : (
              <p className="text-lg font-medium">{college.college_id}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">College Name</p>
            {editing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            ) : (
              <p className="text-lg font-medium">{college.name}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">Contact Details</p>
            {editing ? (
              <>
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) =>
                    handleNestedChange('contact', 'email', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded p-2 mb-2"
                />
                <input
                  type="text"
                  value={formData.contact.phone}
                  onChange={(e) =>
                    handleNestedChange('contact', 'phone', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded p-2"
                />
              </>
            ) : (
              <>
                <p className="text-lg font-medium">{college.contact.email}</p>
                <p className="text-gray-600">{college.contact.phone}</p>
              </>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">Admins</p>
            {editing ? (
              <>
                {formData.admins.map((admin, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={admin}
                      onChange={(e) => handleAdminChange(index, e.target.value)}
                      className="flex-grow border border-gray-300 rounded p-2"
                    />
                    <button
                      onClick={() => removeAdmin(index)}
                      className="ml-2 text-red-600 font-bold"
                      type="button"
                    >
                      &times;
                    </button>
                  </div>
                ))}
                <button
                  onClick={addAdmin}
                  className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  type="button"
                >
                  Add Admin
                </button>
              </>
            ) : (
              <ul className="list-disc list-inside text-lg font-medium">
                {college.admins.map((admin, index) => (
                  <li key={index}>{admin}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Subscription Details</p>
            {editing ? (
              <>
                <input
                  type="text"
                  value={formData.subscription.plan}
                  onChange={(e) =>
                    handleNestedChange('subscription', 'plan', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded p-2 mb-2"
                />
                <input
                  type="text"
                  value={formData.subscription.status}
                  onChange={(e) =>
                    handleNestedChange('subscription', 'status', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded p-2 mb-2"
                />
                <input
                  type="date"
                  value={formData.subscription.expiry}
                  onChange={(e) =>
                    handleNestedChange('subscription', 'expiry', e.target.value)
                  }
                  className="w-full border border-gray-300 rounded p-2"
                />
              </>
            ) : (
              <>
                <p className="text-lg font-medium">Plan: {college.subscription.plan}</p>
                <p className="text-gray-600">Status: {college.subscription.status}</p>
                <p className="text-gray-600">Expires on: {college.subscription.expiry}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
