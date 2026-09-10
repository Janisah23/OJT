import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm text-gray-500">
            PRODUCT CATALOG
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Shop Products
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Browse our product catalog and find what you need.
          </p>
        </div>

        <div className="mb-8 flex gap-3">
          <Input
            placeholder="Search products..."
            className="max-w-md"
          />

          <Button>
            Search
          </Button>
        </div>

        <Card className="max-w-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Sample Product</CardTitle>
              <Badge>Available</Badge>
            </div>

            <CardDescription>
              A sample product card for our catalog.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="mb-4 text-2xl font-bold">
              $49.99
            </p>

            <Button className="w-full">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default App;