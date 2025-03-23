import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="text-center">
          <h3 className="font-medium">{name}</h3>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${level}%` }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

