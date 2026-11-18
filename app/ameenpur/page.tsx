// app/ameenpur/page.tsx
import BranchPage from "@/components/branch/BranchPage";
import { AMEENPUR, branchMetadata } from "@/data/branches";

export const metadata = branchMetadata(AMEENPUR);

export default function AmeenpurPage() {
  return <BranchPage branch={AMEENPUR} />;
}