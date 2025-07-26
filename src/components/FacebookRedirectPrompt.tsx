import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ExternalLink } from 'lucide-react';

export const FacebookRedirectPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the app is opened in Facebook browser
    const isFacebookBrowser = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      return /FBAN|FBAV|Instagram|FB_IAB/i.test(userAgent);
    };

    // Check if user has already dismissed the prompt
    const hasPromptBeenDismissed = localStorage.getItem('fb-redirect-dismissed');

    if (isFacebookBrowser() && !hasPromptBeenDismissed) {
      setShowPrompt(true);
    }
  }, []);

  const handleRedirect = () => {
    const currentUrl = window.location.href;
    // Try to open in external browser
    window.open(currentUrl, '_blank');
    setShowPrompt(false);
    localStorage.setItem('fb-redirect-dismissed', 'true');
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('fb-redirect-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <AlertDialog open={showPrompt} onOpenChange={setShowPrompt}>
      <AlertDialogContent className="max-w-md mx-4">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            বাহ্যিক ব্রাউজারে খুলুন
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            সর্বোত্তম অভিজ্ঞতার জন্য HSCian অ্যাপটি Chrome বা অন্য কোনো ব্রাউজারে খুলুন। 
            Facebook অ্যাপের মধ্যে কিছু ফিচার সীমিত থাকতে পারে।
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-row gap-2">
          <AlertDialogCancel 
            onClick={handleDismiss}
            className="flex-1"
          >
            এখানেই থাকুন
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleRedirect}
            className="flex-1 gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            ব্রাউজারে খুলুন
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};