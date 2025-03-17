export default function StatCard({ title, value, subtitle, icon, trend }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-600 text-sm">{title}</h3>
          <div className="flex items-baseline mt-1">
            <div className="text-2xl font-bold">{value}</div>
            {trend && (
              <span className={`ml-2 text-sm ${trend.includes("+") ? "text-green-600" : "text-red-600"}`}>{trend}</span>
            )}
          </div>
          {subtitle && <div className="text-sm text-gray-500 mt-1">{subtitle}</div>}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </div>
  )
}

