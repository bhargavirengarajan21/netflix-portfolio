import React from "react";

const ProfileImage = ({ name, onClickHandle, dropdownOpen }) => {
  const nameParts = name?.trim().split(" ");
  const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
  const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase() || "";
  const initials = firstNameInitial + lastNameInitial;
  console.log("ProfileImage", initials);
  
  return (
    <button
        onClick={onClickHandle}
        className="profile"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 16,
        height: 16,
        backgroundColor: "brown",
        color: "#fff",
        fontSize: 16,
        borderRadius: "50%",
        fontWeight: 800,
        padding: 16,
        }}
    >
      {initials}
  </button>
  );
};

export default ProfileImage;
