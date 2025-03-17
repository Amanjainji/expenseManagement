export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      {children}
    </div>
  )
}

