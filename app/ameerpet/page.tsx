// app/ameerpet/page.tsx
import BranchPage from "@/components/branch/BranchPage";
import { AMEERPET, branchMetadata } from "@/data/branches";

export const metadata = branchMetadata(AMEERPET);

export default function AmeerpetPage() {
  return <BranchPage branch={AMEERPET} />;
}