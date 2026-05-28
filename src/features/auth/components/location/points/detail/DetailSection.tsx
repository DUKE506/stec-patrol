const DetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-muted-foreground text-xs">{title}</span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

export default DetailSection
