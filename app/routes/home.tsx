import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

const locations = Array.from({ length: 20 }, (_, index) => ({
  name: `location ${index}`,
  type: "cafe",
  stars: 5,
  speedTest: 99,
}));

export function meta({}: Route.MetaArgs) {
  return [{ title: "Perch" }, { name: "description" }];
}

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 flex">
        <h1>Perch</h1>
        <Button>เช็คอิน</Button>
      </header>
      <main className="min-h-screen mx-auto w-1/2">
        อัพเดตล่าสุดอยู่บนสุด pagination by scroll
        {locations.map((location) => (
          <Card>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
              description
              <span>image</span>
              location.address like bangsue
              <span>type {location.type}</span>
              <span>stars {location.stars}</span>
              <span>speed test {location.speedTest}</span>
            </CardHeader>
          </Card>
        ))}
      </main>
    </>
  );
}
