export default function JobRoleSelector({ onSelect }) {
  const jobRoles = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Marketing",
  ];

  return (
    <div className="space-y-4 ">
      <span className="text-2xl md:text-3xl  text-red-800  ">
        Current Openings
      </span>
      <div></div>

      <div className="flex flex-wrap gap-2 ">
        {jobRoles.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => onSelect(role)}
            className="
            text-sm md:text-lg
              px-4 
              py-2 
              bg-gray-600 
              text-white 
              rounded-2xl 
              hover:bg-gray-700 
              transition 
              cursor-pointer
            "
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}
