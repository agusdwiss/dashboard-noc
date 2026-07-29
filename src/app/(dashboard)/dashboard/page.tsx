import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Online Device</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-4xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Offline Device</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-4xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alarm</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-4xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Server</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-4xl font-bold">0%</p>
        </CardContent>
      </Card>
    </div>
  );
}