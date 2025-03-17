export default function InsightCard({ type, title, description, icon }) {
  const bgColors = {
    warning: "bg-yellow-50",
    danger: "bg-red-50",
    success: "bg-green-50",
    info: "bg-blue-50",
  }

  const iconColors = {
    warning: "text-yellow-500",
    danger: "text-red-500",
    success: "text-green-500",
    info: "text-blue-500",
  }

  return (
    <div className={`p-4 rounded-md mb-4 ${bgColors[type]}`}>
      <div className="flex items-start">
        <div className={`mr-3 ${iconColors[type]}`}>{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

