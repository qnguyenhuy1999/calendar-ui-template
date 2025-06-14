import { LoaderCircle } from "lucide-react";
import { Suspense as SuspenseReact } from "react";

export default function Suspense({ children }: { children: React.ReactNode }) {
  return (
    <SuspenseReact
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <LoaderCircle className="loading-spinner" />
        </div>
      }
    >
      {children}
    </SuspenseReact>
  );
}
