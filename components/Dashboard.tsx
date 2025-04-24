'use client'; 

import { useState } from "react";
import { Models } from "node-appwrite";
import ActionDropdown from "@/components/ActionDropdown";
import { Chart } from "@/components/Chart";
import { Separator } from "@/components/ui/separator";
import FormattedDateTime from "@/components/FormattedDateTime";
import UploadingThumbnail from "@/components/UploadingThumbnail";
import FilePreviewModal from "@/components/FilePreviewModal"; // Import modal
import { convertFileSize } from "@/lib/utils";

const Dashboard = ({ files, usageSummary, totalSpace }: { files: any, usageSummary: any, totalSpace: any }) => {
  const [selectedFile, setSelectedFile] = useState<Models.Document | null>(null);

  const handlePreview = (file: Models.Document) => {
    setSelectedFile(file); // Set selected file to show preview modal
  };

  return (
    <div className="dashboard-container">
      <section>
        <Chart used={totalSpace.used} />

        {/* Uploaded file type summaries */}
        <ul className="dashboard-summary-list">
          {usageSummary.map((summary: any) => (
            <div key={summary.title} className="dashboard-summary-card">
              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <img src={summary.icon} width={100} height={100} alt="uploaded image" className="summary-type-icon" />
                  <h4 className="summary-type-size">{convertFileSize(summary.size)}</h4>
                </div>
                <h5 className="summary-type-title">{summary.title}</h5>
                <Separator className="bg-white" />
                <FormattedDateTime date={summary.latestDate} className="text-center" />
              </div>
            </div>
          ))}
        </ul>
      </section>

      {/* Recent files uploaded */}
      <section className="dashboard-recent-files">
        <div className="recent-file-section">
          <h2 className="h3 xl:h2 text-light-100">Recent files uploaded</h2>
          {files.documents.length > 0 ? (
            <ul className="mt-5 flex flex-col gap-5">
              {files.documents.map((file: Models.Document) => (
                <li
                  key={file.$id}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handlePreview(file)} // Trigger file preview modal on click
                >
                  <UploadingThumbnail type={file.type} extension={file.extension} url={file.url} />
                  <div className="recent-file-details">
                    <div className="flex flex-col gap-1">
                      <p className="recent-file-name">{file.name}</p>
                      <FormattedDateTime date={file.$createdAt} className="caption" />
                    </div>
                    <ActionDropdown file={file} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-list">No files uploaded</p>
          )}
        </div>
      </section>

      {/* File Preview Modal */}
      {selectedFile && (
        <FilePreviewModal file={selectedFile} onClose={() => setSelectedFile(null)} />
      )}
    </div>
  );
};

export default Dashboard;
