export default function AlertCard({ type, title, message, time, actions }) {
  const bgColors = {
    danger: "bg-red-50",
    warning: "bg-yellow-50",
    success: "bg-green-50",
    info: "bg-blue-50",
  }

  const iconColors = {
    danger: "text-red-500",
    warning: "text-yellow-500",
    success: "text-green-500",
    info: "text-blue-500",
  }

  return (
    <div className={`p-4 rounded-md mb-4 ${bgColors[type]}`}>
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm mt-1">{message}</p>
          <div className="flex mt-4 space-x-2">{actions}</div>
        </div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
    </div>
  )
}

