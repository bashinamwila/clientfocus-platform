interface PageHeaderProps {
  title: string
  subtitle: string
  action?: React.ReactNode
}

const PageHeader = ({ title, subtitle, action }: PageHeaderProps) => (
  <div className="mb-8 flex items-start justify-between">
    <div>
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
    {action}
  </div>
)

export default PageHeader
