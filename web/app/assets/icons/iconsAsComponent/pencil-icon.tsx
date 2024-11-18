const PencilIcon = ({ color }: { color: string }) => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M883.626667 300.373333c16.64-16.64 16.64-44.373333 0-60.16l-99.84-99.84c-15.786667-16.64-43.52-16.64-60.16 0l-78.506667 78.08 160 160M128 736V896h160L759.893333 423.68l-160-160L128 736z"
        fill={color}
      />
    </svg>
  );
};

export default PencilIcon;