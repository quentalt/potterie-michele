import { Suspense } from "react";
import CollectionContent from "@/components/collection-content";

export default function CollectionPage() {
    return (
        <div className="min-h-screen">
            <Suspense fallback={
                <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
                    <div className="mt-12 text-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-foreground border-r-transparent"></div>
                        <p className="mt-4 text-sm text-muted-foreground">Chargement...</p>
                    </div>
                </div>
            }>
                <CollectionContent />
            </Suspense>
        </div>
    );
}