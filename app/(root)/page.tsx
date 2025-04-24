// app/(root)/page.tsx - Server Component

import Dashboard from "@/components/Dashboard";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { getUsageSummary } from "@/lib/utils";

// Server-side fetch
const DashboardPage = async () => {
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);

  const usageSummary = getUsageSummary(totalSpace);

  return (
    <Dashboard files={files} usageSummary={usageSummary} totalSpace={totalSpace} />
  );
};

export default DashboardPage;