'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const DownloadButton = () => {
  const handleInstallClick = async () => {
    // Trigger download for MIT-BLR%Brochure%2025.pdf
    const link = document.createElement('a');
    link.href = '/MIT-BLR%Brochure%202025.pdf';
    link.download = 'MIT-BLR Brochure 2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Button
        onClick={handleInstallClick}
        variant="neutral"
        className="cursor-pointer uppercase"
      >
        Download Brochure
      </Button>
    </>
  );
};

export default DownloadButton;
